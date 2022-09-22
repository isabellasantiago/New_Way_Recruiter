import React from 'react';
import styled from 'styled-components';
import { DadosPessoaisSection } from './sections/dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './sections/infoAcademicas/InfoAcademicas';
import {HeaderComponent} from '../../components/HeaderComponent/HeaderComponent';
import Button from '../../components/Button/Button';
import { Idiomas } from './sections/idiomas/Idiomas';
import {ProfessionalExpierence} from './sections/professionalExperience/index';
import { DadosContratacao } from './sections/contratacao';

import {ReactComponent as OnlineCV } from '../../assets/images/onlineCV.svg'


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
    <HeaderComponent candidato={true}/>
    <div id="cabecalho">
        <h1>Cadastre seus dados</h1>
        <p>Lembre-se de sempre manter seu currículo atualizado!</p>
        <Button id="cancelar">Cancelar</Button>
    </div>
    <DadosPessoaisSection/>
    <InfoAcademicas />
    <Idiomas />
    <ProfessionalExpierence />
    <DadosContratacao />
    <Button>Finalizar cadastro</Button>
    <OnlineCV style={
        {
            maxWidth:"250px",
            maxHeight:"250px",
            position: 'absolute',
            bottom: 0,
        }
    }/>
    </Cv>
    );
}