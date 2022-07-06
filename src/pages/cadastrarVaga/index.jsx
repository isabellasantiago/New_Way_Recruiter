import React, { useContext } from 'react';

import { Body } from './style';

import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent'
import { Steps } from './sections/steps';
import JobVacancieContext from '../../services/contexts/registerJobVacancie';
import { FormVaga } from './sections/dadosVaga/form/formVaga';
import { FormFiltragem } from './sections/filtragemCandidato/form/formFiltragem';



export function CadastroVaga(){
    const { jobVacancie } = useContext(JobVacancieContext)
    const { step }  = jobVacancie;

    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps />
                {step === 1 ?
                <FormVaga id="dadosVaga" /> :
                <FormFiltragem id="filtragemCandidos" />
                }
        </Body>
    )
}