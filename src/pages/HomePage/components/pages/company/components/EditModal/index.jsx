import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import * as S from './style';
import * as yup from 'yup';
import Api from '../../../../../../../services/mainApi';
import SubmitButton from '../../../../../../../components/SubmitButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { URL } from '../../../../../../../shared/regex/url';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../../../services/contexts/auth';
import { notify } from '../../../../../../../shared/functions/notify/notify';



let schema = yup.object().shape({
    corporateName: yup.string().required('campo obrigatório'),
    cover: yup.string().url('insira um link válido').matches(URL, 'insira um link válido'),
    photo: yup.string().url('insira um link válido').matches(URL, 'insira um link válido'),
    imageURL: yup.string().url('insira um link válido').matches(URL, 'insira um link válido').required('campo obrigatório'),
    linkedinURL: yup.string().url('insira um link válido').matches(URL, 'insira um link válido').required('campo obrigatório'),
    mission: yup.string().max(178, 'max. 177 caracteres'),
    values: yup.string().max(178, 'max. 177 caracteres'),
    vision: yup.string().max(178, 'max. 177 caracteres'),
    aboutCompany: yup.string().max(450, 'max. 450 caracteres'),
    address: yup.string().required('campo obrigatório')
})


export const EditModal = ({
    company,
    open,
    setOpen,
    successMessage,
    setReload,
}) => {
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();
    const { authenticated, user, logout } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    

    if(!authenticated || !user || !token) {
        navigate('/login')
    }

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            corporateName: company?.corporateName,
            cover: company?.cover,
            photo: company?.photo,
            imageURL: company?.imageURL,
            values: company?.values,
            mission: company?.mission,
            vision: company?.vision,
            aboutCompany: company?.aboutCompany,
            linkedinURL: company?.linkedinURL,
            address: company?.address,
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        try{
            const response = await Api.put(`/company/${company?.id}`, {
                ...data,
            }, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.status === 201 || response.status === 200) {
                notify(successMessage || 'Perfil atualizado com sucesso', 'success');
                navigate('/home');
                setReload(true);
                setOpen(false);
            };
        }catch(err){
            const message = err.message.split(' ')
            if(message[message.length - 1] === '401') {
                notify('Desculpe, ocorreu um erro, precisamos que você logue novamente.', 'error');
                logout();
                return;
            } 
            if(err) notify(`${err.message}`, 'error');
        }
    }

    const handleClose = () => setOpen(false);



    const removeAccount = async () => {
        try{
            const response = await Api.delete(`/company/${company?.id}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.status === 200){
                navigate('/home');
                setOpen(false);
                setOpenModal(false);
            }
        }catch(err){
            console.log(err)
            if(err) notify(`${err.message}`, 'error');
        }

    }


    const secondModal = (
        <S.Section height="200px" width="330px">
            <S.Title bold>Tem certeza que deseja excluir a sua conta?</S.Title>
            <S.YesNoBtn onClick={() => removeAccount()}>Sim</S.YesNoBtn>
            <S.YesNoBtn onClick={() => setOpenModal(false)}>Não</S.YesNoBtn>
        </S.Section>
    )

    const form = (
        <>
        <S.Section>
            <S.Limit><S.Title>Editar perfil</S.Title></S.Limit>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.FormContainer>
                    <S.Content>
                        <S.InputContainer>
                            <S.Label>Nome da empresa</S.Label>
                            <S.Input
                                {...register('corporateName')}
                            />
                            <span>{errors?.corporateName?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Linkedin</S.Label>
                            <S.Input
                                {...register('linkedinURL')}
                            />
                            <span>{errors?.linkedinURL?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Imagem da capa</S.Label>
                            <S.Input
                                {...register('cover')}
                            />
                            <span>{errors?.cover?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Sobre a empresa</S.Label>
                            <S.TextArea
                                {...register('aboutCompany')}
                                maxLength="450"
                            />
                            <span>{errors?.aboutCompany?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Visão</S.Label>
                            <S.TextArea
                                {...register('vision')}
                                maxLength="177"
                            />
                            <span>{errors?.vision?.message}</span>
                        </S.InputContainer>
                    </S.Content>
                    <S.Content>
                        <S.InputContainer>
                            <S.Label>Imagem do perfil</S.Label>
                            <S.Input
                                {...register('imageURL')}
                            />
                            <span>{errors?.imageURL?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Endereço</S.Label>
                            <S.Input
                                {...register('address')}
                            />
                            <span>{errors?.address?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Imagem de representação</S.Label>
                            <S.Input
                                {...register('photo')}
                            />
                            <span>{errors?.photo?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Missão</S.Label>
                            <S.TextArea
                                {...register('mission')}
                                maxLength="177"
                            />
                            <span>{errors?.mission?.message}</span>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.Label>Valores</S.Label>
                            <S.TextArea
                                {...register('values')}
                                maxLength="177"

                            />
                            <span>{errors?.values?.message}</span>
                        </S.InputContainer>
                    </S.Content>
                </S.FormContainer>
                    <SubmitButton type="submit" value="Salvar"/>
            </S.Form>
            <S.Limit>
                <S.RemoveAccount onClick={() => setOpenModal(true)}>Excluir conta</S.RemoveAccount>
            </S.Limit>
        </S.Section>
        {openModal && (
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby='simple-modal-description'
            >
                {secondModal}
            </Modal>
        )

        }
        </>

    )

    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby='simple-modal-description'
            >
                {form}
            </Modal>
            {

            }
        </>
    )
}