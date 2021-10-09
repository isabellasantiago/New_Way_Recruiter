import React from 'react';
import styled from 'styled-components';

import { DadosPessoaisSection } from './dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './infoAcademicas/InfoAcademicas';
import {HeaderCandidato} from '../../components/HeaderCandidato/HeaderCandidato';
import Button from '../../components/Button/Button';
import { Idiomas } from './idiomas/Idiomas';
import { SkillsInput } from './Skills';


const Cv = styled.div`
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
`;

export function Curriculo(){
    
    return(
    <Cv>
    <HeaderCandidato/>
    <div id="cabecalho">
        <h1>Cadastre seus dados</h1>
        <p>Lembre-se de sempre manter seu currículo atualizado!</p>
        <Button id="cancelar">Cancelar</Button>
    </div>
    <DadosPessoaisSection/>
    <InfoAcademicas />
    <Idiomas />
    <SkillsInput />
    </Cv>
    );
}