import React, {useContext} from 'react';
import {StepButton,  StepSection} from './style'
import Seta from '../../../../assets/images/seta.svg'
import JobVacancieContext from '../../../../services/contexts/registerJobVacancie';



export function Steps(props){
    const { jobVacancie, setJobVacancie } = useContext(JobVacancieContext);
    const { step } = jobVacancie

    return(
        <StepSection>
            <StepButton step={step === 1 ? true : false} onClick={() => 
               setJobVacancie({...jobVacancie, step: 1}) } >Dados</StepButton>
            <img src={Seta} alt="linhas em formato de seta que separam os passos de cadastro da vaga" height="44px"/>
            <StepButton step={step === 2 ? true : false} onClick={() => {
                 setJobVacancie({...jobVacancie, step: 2})
                }}>Filtragem de candidatos</StepButton>
        </StepSection>
    )

}