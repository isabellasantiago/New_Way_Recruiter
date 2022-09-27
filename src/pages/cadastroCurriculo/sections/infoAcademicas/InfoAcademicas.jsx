import React from 'react';
import Dados from '../../components/dados/Dados';
import { FormInfoAcad }from './Form/FormInfoAcad';




export function InfoAcademicas({useForm}){
    return(
    <Dados id="info-academicas">
        <h1>Informações acadêmicas</h1>
        <FormInfoAcad useForm={useForm}/>
    </Dados>
    )
}