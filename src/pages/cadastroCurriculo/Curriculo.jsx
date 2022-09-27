import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { DadosPessoaisSection } from './sections/dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './sections/infoAcademicas/InfoAcademicas';
import {HeaderComponent} from '../../components/HeaderComponent/HeaderComponent';
import Button from '../../components/Button/Button';
import { Idiomas } from './sections/idiomas/Idiomas';
import {ProfessionalExpierence} from './sections/professionalExperience/index';
import { DadosContratacao } from './sections/contratacao';

import {ReactComponent as OnlineCV } from '../../assets/images/onlineCV.svg'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getCandidateById, getResume } from '../../shared/functions/candidate';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../validation/validation';


const Cv = styled.form`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    #cabecalho{
        margin-top: 20px;

        display: flex;
        flex-flow: column nowrap;

        text-align: center;
        gap: 16px;
        align-items: center;
        justify-content: center;
    

        h1{
            font-weight: 500;
        }
    }

    #row {
        width: 100%;
        position: relative;
        padding: 20px;
    }
`;

export function Curriculo(){
    const { id } = useParams();
    const [candidate, setCandidate] = useState();
    const [resume, setResume] = useState({
        personalData: {
          id: '',
          candidateID: '',
          imageURL: '' ,
          linkedinURL: '',
          naturalness: '',
          city: '',
          state: '',
          phone: '',
          field: '',
          contractType: '',
          level: '',
          role: '',
        },
        academicsInfo: [{
            instituitionName: '',
            courseName: '',
            academicFormation: '',
            academicFormationStatus: '',
            graduationEndDate: '',
            graduationStartDate: '',
        }],
        languagesInfo: [
            {
                languageName: '',
                languageLevel: 0
            }
        ],
        previousJobsInfo: [{
            previousCompanyName: '',
            role: '',
            level: 0,
            fromDate: '',
            toDate: '',
            jobDescription: '',
        }]
    });

    useLayoutEffect(() => {
        const getCandidate = async () => {
            const { data } = await getCandidateById(id);
            setCandidate(data);
            return;
        }
        getCandidate();
    }, [id]);

    useLayoutEffect(() => {
        const getCv = async () => {
            const { data: cv } = await getResume(id);
            setResume(cv);
            return;
        }
        getCv();
    }, [id]);


    const { register, formState: errors, handleSubmit, control, watch } = useForm({
        defaultValues: resume,
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('data', data)
    }

    return(
    <Cv onSubmit={handleSubmit(onSubmit)}>
    <HeaderComponent candidato={true}/>
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
            errors
        }}
    />
    <div id="row">
    <Button type="submit">Finalizar cadastro</Button>
    <OnlineCV style={
        {
            maxWidth:"250px",
            maxHeight:"250px",
            position: "absolute",
            right: 60,
        }
    }/>
    </div>
    </Cv>
    );
}