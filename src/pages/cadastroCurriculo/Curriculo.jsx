import React, {useState} from 'react';
import styled from 'styled-components';
import { DadosPessoaisSection } from './sections/dadosPessoais/DadosPessoais';
import { InfoAcademicas } from './sections/infoAcademicas/InfoAcademicas';
import {HeaderComponent} from '../../components/HeaderComponent/HeaderComponent';
import Button from '../../components/Button/Button';
import { Idiomas } from './sections/idiomas/Idiomas';
import { SkillsInput } from './sections/Skills';
import {ProfessionalExpierence} from './sections/professionalExperience/index';
import { DadosContratacao } from './sections/contratacao';


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
    const [dadosPessoais, setDadosPessoais] = useState({})
    const [infoAcademicas, setInfoAcademicas] = useState();
    const [dadosContratacao, setDadosContratacao] = useState();
    const [idiomas, setIdiomas] = useState();
    const [professionalExperience, setProfessionalExperience] = useState();

    const addDados = (dados) => {
        setDadosPessoais(dados)
        console.log(dadosPessoais)
    }

    
    return(
    <Cv>
    <HeaderComponent candidato={true}/>
    <div id="cabecalho">
        <h1>Cadastre seus dados</h1>
        <p>Lembre-se de sempre manter seu currículo atualizado!</p>
        <Button id="cancelar">Cancelar</Button>
    </div>
    <DadosPessoaisSection onSave={addDados}/>
    <InfoAcademicas />
    <Idiomas />
    <SkillsInput />
    <ProfessionalExpierence />
    <DadosContratacao />
    </Cv>
    );
}