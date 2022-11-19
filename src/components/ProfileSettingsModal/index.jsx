import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from "react-query";
import { notify } from '../../shared/functions/notify/notify.js';
import Api from '../../services/mainApi';
import * as S from './style';
import { ModalBase } from "../Modal";
import { AuthContext } from '../../services/contexts/auth.js';
import { getCandidateById } from '../../shared/functions/candidate';
import { schema } from '../../validation/profile-settings';
import { yupResolver } from '@hookform/resolvers/yup';


export function ProfileSettings ({open, handleClose, candidateID, setReload = () => {}}) {
    const token = localStorage.getItem('token');
    
    const { logout } = useContext(AuthContext);

    const { data: candidate } = useQuery('candidate', async () => {
        const { data } = await getCandidateById(candidateID)

        return data;
    });    

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: candidate?.name,
            lastName: candidate?.lastName,
            phone: candidate?.phone
        },
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async (data) => {
        try{
            const response = await Api.put(`/candidate/${candidateID}`, {
                data
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if(response.status === 200 || response.status === 201) {
                notify('atualizado', 'success');
                handleClose()
                setReload(true);
            };

            return response;
            
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

    const inputs = [
        { title: 'Nome *', id: 'name' },
        { title: 'Sobrenome *',  id: 'lastName'},
        { title: 'Número de telefone', id: 'phone'}
    ]

    const handleClick = async () => {
        try{
        const response = await Api.delete(`/candidate/${candidateID}`, {
            headers: {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        });
        if(response.status === 200) {
            notify('conta excluída', 'success');
            handleClose();
            logout();
        }
        }catch(err){

        }
    }

    const btns = [
        {content: 'Salvar', deleteMode: false, type: 'submit', onClick: () => {}},
        {content: 'Excluir conta', deleteMode: true, type: 'button', onClick: handleClick }
    ]

    const settings = (
            <S.Main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <S.Rows>
                    {inputs.map(({title, id}) => (
                    <S.InputContainer>
                        <S.Label>
                        {title}
                        </S.Label>
                        <S.Input {...register(`${id}`)}/>
                        <span>{errors?.[id]?.message}</span>
                    </S.InputContainer>))}
                </S.Rows>
                <S.Rows>
                    {btns.map(({content, deleteMode, type, onClick}) => (
                        <S.Btn type={type} deleteMode={deleteMode} onClick={onClick} >{content}</S.Btn>
                    ))}
                </S.Rows>
            </form>
            </S.Main>
    )
    return(
        <ModalBase
            open={open}
            handleClose={handleClose}
            width="300px"
            height="320px"
            bgColor="#f6f6f6"
        >
            {settings}
        </ModalBase>
    )
}