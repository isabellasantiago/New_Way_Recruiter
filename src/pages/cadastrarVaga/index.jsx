import React, { useContext, useState } from 'react';

import { Body } from './style';

import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent'
import { Steps } from './sections/steps';
import { DadosVaga } from './sections/dadosVaga/index'
import { FiltragemCandidatos } from './sections/filtragemCandidato'
import JobVacancieContext from '../../services/contexts/registerJobVacancie';



export function CadastroVaga(){
    const { jobVacancie } = useContext(JobVacancieContext)
    const { step }  = jobVacancie;

    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps />
            <form >
                {step === 1 ?
                <DadosVaga id="dadosVaga" /> :
                <FiltragemCandidatos id="filtragemCandidos" />
                }
            </form>
        </Body>
    )
}