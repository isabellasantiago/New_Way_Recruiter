import React, {useContext} from 'react';
import {StepButton,  StepSection} from './style'
import Seta from '../../../../assets/images/seta.svg'
import JobVacancieContext from '../../../../services/contexts/registerJobVacancie';
import { useNavigate } from 'react-router-dom';



export function Steps(){
    const { jobVacancie, setValues } = useContext(JobVacancieContext);
    const navigate = useNavigate();

    const onClickMenu = (step) => {
        if(step === 1) {
            navigate('/company/register/job-vacancie/step1')
        }
        if(step === 2){
            navigate('/company/register/job-vacancie/step2')
        }
        if(step === 3){
            navigate('/company/register/job-vacancie/result')
        }
    }

    return(
        <StepSection>
            <StepButton step={jobVacancie.step === 1 ? true : false} onClick={() => {
                setValues({step: 1})
                onClickMenu(1)
            }} >Dados</StepButton>
            <img src={Seta} alt="linhas em formato de seta que separam os passos de cadastro da vaga" height="44px"/>
            <StepButton step={jobVacancie.step === 2 ? true : false} onClick={() => {
                setValues({step: 2})
                onClickMenu(2)
            }}>Filtragem de candidatos</StepButton>
            <img src={Seta} alt="linhas em formato de seta que separam os passos de cadastro da vaga" height="44px"/>
            <StepButton step={jobVacancie.step === 3 ? true : false} onClick={() => {
                setValues({step: 3})
                onClickMenu(3)
            }}> Resultado</StepButton>
        </StepSection>
    )

}