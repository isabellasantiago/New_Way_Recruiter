import React from 'react';
import Modal from '@material-ui/core/Modal';
import Api from '../../services/mainApi';
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../validation/schemaVaga';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../services/contexts/auth';
import { Section, Form, InputWrapper, WrapperVaga, ButtonNext, InputDiv, InputText } from './style';


const notify = (message, type) => {
    type === 'success' ? toast.success(message, {
        duration: 3500}) : toast.error(message, {
            duration: 3500})
}

const JobVacancieModal = ({
    open,
    setOpen,
    data,
    update,
    successMessage, 
}) => {

    const navigate = useNavigate();
    const {authenticated, user } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    

    if(!authenticated || !user || !token) {
        navigate('/login')
    }

    const defaultFormValues = () => {
        if(data){
            return {
                title: data.title,
                salary: data.salary,
                about: data.about,
                level: data.level,
                cityAndState: data.cityAndState,
                contractType: data.contractType
            }
        }

        return {
            title: '',
            salary: 0,
            about: '',
            level: 1,
            cityAndState: 'remoto',
            contractType: 1,
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: defaultFormValues(),
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const handleClose = () => setOpen(false);

    const onSubmit = async (data) => {
        try{
            const response = await Api.post('/jobVacancie', {
                ...data,
                companyID: user.id,
            }, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.status === 201) {
                notify(successMessage || 'vaga cadastrada!', 'success');
                setOpen(false);
            };
        }catch(err){
            if(err) notify(`${err.message}`, 'error');
        }
    }

    const form = (
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputDiv>
                        <label> Title </label>
                        <InputText
                            name="title"
                            type="text"
                            placeholder='Ex: Designer UX'
                            {...register('title')}
                        />
                        <span>{errors?.title?.message}</span>
                    </InputDiv>
                    <InputWrapper>
                        <p id="cifrao">R$</p>
                        <InputDiv>
                            <label> Salário</label>
                            <InputText
                                name='salary'
                                placeholder="3000"
                                {...register('salary')}
                                style={{ maxWidth: '100px' }} />
                            <span>{errors?.salary?.message}</span>
                        </InputDiv>
                        <InputDiv>
                        <label htmlFor="contrato">Tipo do contrato*</label>
                        <select
                            style={{ maxWidth: '130px' }}
                            name="contractType"
                            {...register('contractType')}>
                            <option value={1}>PJ</option>
                            <option value={2}>CLT</option>
                            <option value={3}>CLT ou PJ</option>
                            <option value={4}>OUTROS</option>
                        </select>
                        <span>{errors?.contractType?.message}</span>
                    </InputDiv>
                    </InputWrapper>
                    

                    <InputDiv>
                        <label htmlFor="sobreVaga">Sobre a vaga</label>
                        <textarea
                            name="about"
                            cols="400"
                            row="50"
                            placeholder="Escreva aqui detalhes sobre a vaga"
                            {...register('about')} />
                        <span>{errors?.about?.message}</span>
                    </InputDiv>
                    <WrapperVaga>
                        <InputDiv>
                            <label>Local *</label>
                            <InputText
                                name="cityAndState"

                                style={{ maxWidth: '240px' }}
                                placeholder="São Paulo, São Paulo"
                                {...register('cityAndState')} />
                            <span>{errors.cityAndState?.message}</span>
                        </InputDiv>
                        <InputDiv>
                            <label htmlFor="nivel">Nível</label>
                            <select

                                name="level"
                                {...register('level')}>
                                <option value={1}>ESTÁGIO</option>
                                <option value={2}>JR</option>
                                <option value={3}>PL</option>
                                <option value={4}>SR</option>
                            </select>
                            <span>{errors?.level?.message}</span>
                        </InputDiv>
                    </WrapperVaga>
                    <ButtonNext type="submit" value="Cadastrar Vaga" />
            </Form>
        </Section>
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

export default JobVacancieModal;