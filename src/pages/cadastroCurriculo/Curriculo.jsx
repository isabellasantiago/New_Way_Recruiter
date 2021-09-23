import React from 'react';
import styled from 'styled-components';

import { DadosPessoais } from './dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './infoAcademicas/InfoAcademicas';
import {HeaderCandidato} from '../../components/HeaderCandidato/HeaderCandidato'

const Cv = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
`;

export function Curriculo(){
    
    return(
    <Cv>
    <HeaderCandidato/>
    <div id="cabecalho">
        <h1>Cadastre seus dados</h1>
        <p>Lembre-se de sempre manter seu currículo atualizado!</p>
        <button id="cancelar">Cancelar</button>
    </div>
    <DadosPessoais/>
    <InfoAcademicas />
    </Cv>
    );
}