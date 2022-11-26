import React, { useContext, useState } from 'react';
import Api from '../../services/mainApi';
import { useQuery } from 'react-query';
import { Cv, ButtonNext } from './style';
import { DadosPessoaisSection } from './sections/dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './sections/infoAcademicas/InfoAcademicas';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { Idiomas } from './sections/idiomas/Idiomas';
import { ProfessionalExpierence } from './sections/professionalExperience/index';
import { DadosContratacao } from './sections/contratacao';
import { ReactComponent as OnlineCV } from '../../assets/images/onlineCV.svg'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCandidateById, getResume } from '../../shared/functions/candidate';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation/validation';
import { AuthContext } from '../../services/contexts/auth';
import { notify } from '../../shared/functions/notify/notify';
import {  formatDate, textConvert } from '../../shared/functions/convert';

const INITIAL_DATA = {
    candidateID: 0,
    id: 0,
    personalData: {
        imageURL: '',
        linkedinURL: '',
        naturalness: '',
        birthDate: '',
        city: 'São Paulo',
        state: 'SP',
        phone: '',
        field: '',
        contractType: 0,
        level: 0,
        role: '',
    },
    academicsInfo: [{
        id: 0,
        candidateID: 0,
        instituitionName: '',
        courseName: '',
        academicFormation: '',
        academicFormationStatus: '',
        graduationEndDate: null,
        graduationStartDate: '',
    }],
    languagesInfo: [{
        id: 0,
        candidateID: 0,
        languageName: '',
        languageLevel: 0
    }],
    previousJobsInfo: [{
        id: 0,
        candidateID: 0,
        previousCompanyName: '',
        role: '',
        level: 0,
        fromDate: '',
        toDate: null,
        jobDescription: '',
    }],
}

export function Curriculo() {
    const navigate = useNavigate();
    const { authenticated, user, logout } = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const { status, data: resume, isLoading } = useQuery('resume', async () => {
        const { data: cv } = await getResume(user?.id);
        return cv;
    })

    const { data: candidate, isLoading: LoadingCandidate } = useQuery('candidate', async () => {
        const { data } = await getCandidateById(user?.id);
        return data;
    })

    const defaultValues = () => {
        if (resume) {
            const { personalData, academicsInfo, languagesInfo, previousJobsInfo } = resume;
            const birthDate = formatDate(personalData?.birthDate);
            const response = {
                id: resume?.id,
                candidateId: resume?.candidateID,
                personalData: {
                    id: personalData?.id,
                    candidateID: personalData?.candidateID,
                    imageURL: personalData?.imageURL,
                    linkedinURL: personalData?.linkedinURL,
                    naturalness: personalData?.naturalness,
                    birthDate,
                    state: personalData?.state,
                    city: personalData?.city,
                    phone: personalData?.phone,
                    field: personalData?.field,
                    contractType: textConvert(personalData?.contractType),
                    level: textConvert(personalData?.level),
                    role: personalData?.role,
                },
                academicsInfo: academicsInfo?.map((info) => ({
                    ...info,
                    academicFormation: textConvert(info?.academicFormation),
                    academicFormationStatus: textConvert(info?.academicFormationStatus),
                    graduationStartDate: formatDate(info?.graduationStartDate)
                })),
                languagesInfo: languagesInfo?.map((info) => ({
                    ...info,
                    languageLevel: textConvert(info?.languageLevel)
                })),
                previousJobsInfo: previousJobsInfo?.map((info) => ({
                    ...info,
                    level: textConvert(info?.level),
                    fromDate: formatDate(info?.fromDate),
                    toDate: formatDate(info?.toDate)
                }))
            }

            return response;
        }

        return INITIAL_DATA;
    }

    const { register, formState: { errors }, handleSubmit, control, watch, getValues, setValue } = useForm({
        mode: 'onBlur',
        defaultValues: defaultValues(),
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const { personalData, academicsInfo, languagesInfo, previousJobsInfo } = data;
            const birthDate = new Date(personalData.birthDate);

            if (!resume.id || resume.id === '') {
                const response = await Api.post(`/cv/${candidate?.id}`, {
                    imageURL: personalData.imageURL,
                    linkedinURL: personalData.linkedinURL,
                    naturalness: personalData.naturalness,
                    birthDate,
                    city: personalData.city,
                    state: personalData.state,
                    field: personalData.field,
                    contractType: Number(personalData.contractType),
                    level: Number(personalData.level),
                    role: personalData.role,
                    academics: academicsInfo,
                    languages: languagesInfo,
                    previousJobs: previousJobsInfo,
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 200 || response.status === 201) {
                    notify('Curriculo atualizado com sucesso', 'success');
                    navigate(`/candidate/profile/${candidate?.id}`)
                }
            }
        } catch (err) {
            const message = err.message.split(' ')
            if (message[message.length - 1] === '401') {
                notify('Desculpe, ocorreu um erro, precisamos que você logue novamente.', 'error');
                logout();
                return;
            }
            notify(`${err.message}`, 'error');
        }
    }

    if (isLoading || LoadingCandidate ) {
        return <h2>Carregando...</h2>
    }

    if (!authenticated) {
        navigate('/home');
    }

    return (
        <Cv onSubmit={handleSubmit(onSubmit)}>
            <HeaderComponent candidate={true} />
            <div id="cabecalho">
                <h1>Cadastre seus dados</h1>
                <p>Lembre-se de sempre manter seu currículo atualizado!</p>
            </div>
            <DadosPessoaisSection
                useForm={{
                    register,
                    errors,
                    watch
                }}
                personalData={resume?.personalData}
            />
            <InfoAcademicas
                useForm={{
                    register,
                    errors,
                    control,
                    watch,
                    getValues,
                    setValue
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
                personalData={resume?.personalData}
            />
            <div id="row">
                <ButtonNext type="submit" value="Finalizar Cadastro" />
                <OnlineCV style={
                    {
                        maxWidth: "250px",
                        maxHeight: "250px",
                        position: "absolute",
                        right: 0,
                        bottom: -100,
                    }
                } />
            </div>
        </Cv>
    );
}