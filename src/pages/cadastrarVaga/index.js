import React, { useState } from 'react';
import styled from 'styled-components'
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent'
import { Steps } from './sections/steps';
import { DadosVaga } from './sections/dadosVaga/index'
import { FiltragemCandidatos } from './sections/filtragemCandidato'


const Body = styled.body`
    box-sizing: border-box;
    
    width: 100%;
    height: 100vh;

    background: #fff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 50px;
`;


export function CadastroVaga(){
    const [step, setStep] = useState(1)
    const [filtragemForm, setFiltragemForm ] = useState()
    const [vagaForm, setVagaForm] = useState()

    const wichStep = (dado) => {
        if(dado === 2) setStep(2)
        if(dado === 1) setStep(1)
        console.log(dado)
    }

    const addFiltragem = (data) => {
        console.log(data)
        setFiltragemForm(...filtragemForm || [], data)
    }

    const addVaga = (data) => {
        console.log(data)
        setVagaForm(...vagaForm || [], data)
    }

    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps steps={wichStep} />
            {step === 1 ? <DadosVaga id="dadosVaga" vagaValue={addVaga}/> : <FiltragemCandidatos id="filtragemCandidos" filtragemValue={addFiltragem}/>}
        </Body>
    )
}