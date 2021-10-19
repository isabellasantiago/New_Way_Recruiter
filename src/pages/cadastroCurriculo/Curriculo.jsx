import React from 'react';
import styled from 'styled-components';

import { DadosPessoaisSection } from './dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './infoAcademicas/InfoAcademicas';
import {HeaderCandidato} from '../../components/HeaderCandidato/HeaderCandidato';
import Button from '../../components/Button/Button';

import './curriculo.scss';
import { Idiomas } from './idiomas/Idiomas';

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
        <Button id="cancelar">Cancelar</Button>
    </div>
    <DadosPessoaisSection/>
    <InfoAcademicas />
    <Idiomas />
    </Cv>
    );
}