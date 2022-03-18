import React, {useState} from 'react';
import styled from 'styled-components'
import Seta from '../../../../assets/images/seta.svg'

const StepSection = styled.div`
    box-sizing: border-box;
    
    width: 430px;
    height: 45px;
    border-radius: 15px;

    background: #7BD2F4;
    color: #000;

    padding: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        background:none;
        border: none;
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        font-size: 17px;
        line-height: 34px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000;
        
        &:active {
            font-weight: 600;
        }
    }

`;

export function Steps(props){
    const { steps } = props;

    return(
        <StepSection>
            <button onClick={() => {
                steps(1)}} >Dados</button>
            <img src={Seta} alt="linhas em formato de seta que separam os passos de cadastro da vaga" height="44px"/>
            <button onClick={() => {
                steps(2)
                }}>Filtragem de candidatos</button>
        </StepSection>
    )

}