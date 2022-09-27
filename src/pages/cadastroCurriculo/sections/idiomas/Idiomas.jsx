import React from 'react';
import Dados from '../../components/dados/Dados';
import {Form} from './Form/Form';




export function Idiomas({useForm}){
    return (
        <Dados>
         <h1>Idiomas</h1>
         <Form useForm={useForm}/>
        </Dados>
    )
}