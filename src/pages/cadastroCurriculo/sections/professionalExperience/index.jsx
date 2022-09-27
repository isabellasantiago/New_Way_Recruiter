import React from 'react';
import Dados from '../../components/dados/Dados';
import {ProfessionalExpierenceForm} from './form/Form';

export function ProfessionalExpierence({useForm}){
    return(
        <Dados>
            <h1>Experiência profissional</h1>
            <ProfessionalExpierenceForm useForm={useForm}/>
        </Dados>
    )
}