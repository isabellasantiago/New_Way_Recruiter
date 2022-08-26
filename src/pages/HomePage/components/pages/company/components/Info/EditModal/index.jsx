import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import * as S from './style';
import Button from '../../../../../../../../components/Button/Button';
import * as yup from 'yup';
import Api from '../../../../../../../../services/mainApi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { URL } from '../../../../../../../../shared/regex/url';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../../../../services/contexts/auth';
import { notify } from '../../../../../../../../shared/functions/notify/notify';


let schema = yup.object().shape({
    corporateName: yup.string().required('campo obrigatório'),
    cover: yup.string().matches(URL, 'insira um link válido'),
    photo: yup.string().matches(URL, 'insira um link válido'),
    imageURL: yup.string().matches(URL, 'insira um link válido').required('campo obrigatório'),
    linkedinURL: yup.string().matches(URL, 'insira um link válido').required('campo obrigatório'),
    mission: yup.string(),
    values: yup.string(),
    vision: yup.string(),
    aboutCompany: yup.string(),
    address: yup.string().required('campo obrigatório')
})


export const EditModal = ({
    company,
    open,
    setOpen,
    successMessage,
}) => {
    const navigate = useNavigate();
    const { authenticated, user } = useContext(AuthContext);
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
        console.log('data', data)
        try{
            const response = await Api.put(`/company/${company?.id}`, {
                ...data,
            }, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.status === 201) {
                notify(successMessage || 'Perfil atualizado com sucesso', 'success');
                setOpen(false);
            };
        }catch(err){
            if(err) notify(`${err.message}`, 'error');
        }
    }

    const handleClose = () => setOpen(false);

    const form = (
        <S.Section>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Title>Editar perfil</S.Title>
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
                        />
                        <span>{errors?.aboutCompany?.message}</span>
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.Label>Visão</S.Label>
                        <S.TextArea 
                            {...register('vision')}
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
                        />
                        <span>{errors?.mission?.message}</span>
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.Label>Valores</S.Label>
                        <S.TextArea 
                            {...register('values')}
                        />
                        <span>{errors?.values?.message}</span>
                    </S.InputContainer>
                </S.Content>
                <Button type="submit">Salvar</Button>
            </S.Form>
        </S.Section>

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
        </>
    )
}