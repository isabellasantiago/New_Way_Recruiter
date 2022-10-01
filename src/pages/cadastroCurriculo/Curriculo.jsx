import React, { useContext, useLayoutEffect, useState } from 'react';
import { Cv, ButtonNext } from './style';
import { DadosPessoaisSection } from './sections/dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './sections/infoAcademicas/InfoAcademicas';
import {HeaderComponent} from '../../components/HeaderComponent/HeaderComponent';
import Button from '../../components/Button/Button';
import { Idiomas } from './sections/idiomas/Idiomas';
import {ProfessionalExpierence} from './sections/professionalExperience/index';
import { DadosContratacao } from './sections/contratacao';

import {ReactComponent as OnlineCV } from '../../assets/images/onlineCV.svg'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCandidateById, getResume } from '../../shared/functions/candidate';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation/validation';
import Api from '../../services/mainApi';
import { AuthContext } from '../../services/contexts/auth';
import { notify } from '../../shared/functions/notify/notify';


export function Curriculo(){
    const navigate = useNavigate();
    const [candidate, setCandidate] = useState();
    const [resume, setResume] = useState({
        candidateID: '',
        id: '',
        personalData: {
          imageURL: '' ,
          linkedinURL: '',
          naturalness: '',
          city: '',
          state: '',
          phone: '',
          field: '',
          contractType: 0,
          level: 0,
          role: '',
        },
        academicsInfo: [{
            instituitionName: '',
            courseName: '',
            academicFormation: '',
            academicFormationStatus: '',
            graduationEndDate: null,
            graduationStartDate: '',
        }],
        languagesInfo: [{
            languageName: '',
            languageLevel: 0
        }],
        previousJobsInfo: [{
            previousCompanyName: '',
            role: '',
            level: 0,
            fromDate: '',
            toDate: null,
            jobDescription: '',
        }],
        
    });
    const { authenticated, user, logout } = useContext(AuthContext);
    const token = localStorage.getItem('token');

    useLayoutEffect(() => {
        const getCandidate = async () => {
            const { data } = await getCandidateById(user?.id);
            setCandidate(data);
            return;
        }
        getCandidate();
    }, [user?.id]);

    useLayoutEffect(() => {
        const getCv = async () => {
            const { data: cv } = await getResume(user?.id);
            setResume(cv);
            return;
        }
        getCv();
    }, [user?.id]);


    const { register, formState: { errors } , handleSubmit, control, watch } = useForm({
        mode: 'onBlur',
        defaultValues: resume,
        resolver: yupResolver(schema),
    });

    console.log('errors', errors)

    const onSubmit = async (data) => {
        console.log('data', candidate?.id);
        try{
            const { personalData, academicsInfo, languagesInfo, previousJobsInfo } = data;
            const cv = {
                candidateID: candidate?.id,
                imageURL: personalData.imageURL,
                linkedinURL: personalData.linkedinURL,
                naturalness: personalData.naturalness,
                city: personalData.city,
                state: personalData.state,
                phone: personalData.phone,
                field: personalData.field,
                contractType: personalData.contractType,
                level: personalData.level,
                role: personalData.role,
                academics: academicsInfo,
                languages: languagesInfo,
                previousJobs: previousJobsInfo,
            }
    
            if(!resume.id || resume.id === ''){
                const response = await Api.post(`/cv`, {
                    cv,
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                if(response.status === 200 || response.status === 201){
                    notify('Curriculo atualizado com sucesso', 'success');
                    navigate(`/profile/${candidate?.id}`)
                }
    
                return response;
            }
        }catch(err){
            const message = err.message.split(' ')
            if(message[message.length - 1] === '401') {
                notify('Desculpe, ocorreu um erro, precisamos que você logue novamente.', 'error');
                logout();
                return;
            }
            notify(`${err.message}`, 'error');
        }
    }

    if(candidate?.id !== user?.id|| !authenticated || !user){
        navigate('/home');
    }

    return(
    <Cv onSubmit={handleSubmit(onSubmit)}>
        <HeaderComponent candidate={true}/>
        <div id="cabecalho">
            <h1>Cadastre seus dados</h1>
            <p>Lembre-se de sempre manter seu currículo atualizado!</p>
            <Button id="cancelar">Cancelar</Button>
        </div>
        <DadosPessoaisSection
            useForm={{
                register,
                errors,
                watch
            }}
        />
        <InfoAcademicas
            useForm={{
                register,
                errors,
                control,
                watch
            }}
        />
        <Idiomas
            useForm={{
                register,
                errors,
                control,
            }}
        />
        <ProfessionalExpierence
            useForm={{
                register,
                errors,
                control
            }}
        />
        <DadosContratacao
            useForm={{
                register,
                errors,
                watch
            }}
        />
        <div id="row">
        <ButtonNext type="submit" value="Finalizar Cadastro"/>
        <OnlineCV style={
            {
                maxWidth:"250px",
                maxHeight:"250px",
                position: "absolute",
                right: 0,
                bottom: -100,
            }
        }/>
        </div>
    </Cv>
    );
}