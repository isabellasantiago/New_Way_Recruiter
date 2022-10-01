import React, { useState } from 'react';
import { CandidatePage } from '../../../../../components/CandidatePage';
import * as S from './style'
import { ProfilePic } from '../../../../../components/ProfilePic';
import { useNavigate } from 'react-router-dom';

const jobVacancies = [
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Agile Master',
        cityAndState: 'Remoto',
        salary: 8000,
        level: 'PL',
        id: 1,
    },
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Desenvolvedor Web',
        cityAndState: 'Remoto',
        salary: 4000,
        level: 'JR',
        id: 2,
    },
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Product Owner SR',
        cityAndState: 'Remoto',
        salary: 12000,
        level: 'SR',
        id: 3,
    },
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Agile Especialist',
        cityAndState: 'Remoto',
        salary: 10000,
        level: 'SR',
        id: 4,
    },
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Product Owner',
        cityAndState: 'Remoto',
        salary: 12000,
        level: 'SR',
        id: 5,
    },
    {
        imageURL: 'https://s3.amazonaws.com/gupy5/production/companies/477/career/512/images/2022-03-07_18-28_logo.png',
        corporateName: 'RankMyApp',
        title: 'Desenvolvedor Flutter',
        cityAndState: 'Remoto',
        salary: 2500,
        level: 'Estágio',
        id: 6,
    },

]

export const CandidateHomePage = () => {
    const [jobVacancieList, setJobVacancieList] = useState(jobVacancies);
    const [show, setShow] = useState(true);


    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/job-vacancie/profile/${id}`)
    }

    return(
        <>
            <CandidatePage>
                <S.Content>
                    <S.Title>Selecionamos as vagas que mais combinam com seu objetivo!</S.Title>
                    <S.List show={show}>
                    {
                        jobVacancieList.length ? (
                            jobVacancieList.map((jobVacancie) => {
                                if(jobVacancieList.length < 4) {
                                    setShow(false);
                                }
                                return (
                                    <S.Card>
                                        <ProfilePic 
                                            size="100px"
                                            link={jobVacancie?.imageURL}
                                            border="none"
                                        />
                                        <S.CompanyName>
                                            {jobVacancie?.corporateName}
                                        </S.CompanyName>
                                        <S.JVContainer>
                                            <h1>{jobVacancie?.title}</h1>
                                            <span>{jobVacancie?.level}</span>
                                            <span>{jobVacancie?.cityAndState}</span>
                                            <span>{jobVacancie?.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                        </S.JVContainer>
                                        <S.SeeMoreLink onClick={() => handleClick(jobVacancie?.id)}>
                                            Ver mais
                                        </S.SeeMoreLink>
                                    </S.Card>
                                )
                            })
                        ) : (<p>Nenhuma vaga foi encontrada, volte mais tarde!</p>)
                    }
                    </S.List>
                </S.Content>
            </CandidatePage>
        </>
    )
}