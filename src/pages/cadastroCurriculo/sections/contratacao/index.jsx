import React from 'react';
import Dados from '../../components/dados/Dados';
import { FormContratacao } from './Form';

export function DadosContratacao(){

    return(
        <Dados>
            <h1>Dados para contratação</h1>
        <FormContratacao />
        </Dados>
    )
}