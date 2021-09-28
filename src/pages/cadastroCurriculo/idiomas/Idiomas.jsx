import React, {useState} from 'react';
import Dados from '../dados/Dados';
import {ListaIdiomas} from './ListaIdiomas';
import {Form} from './ListaIdiomas';

import './idioma.scss';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';



export function Idiomas(){
    // const {register, handleSubmit} = useForm({
    //     resolver: yupResolver(schema)
    // });
    const [idiomas, setIdiomas] = useState([]);
    const addIdioma = (idioma, nivel) => {
        setIdiomas([...idiomas, idioma, nivel])
    }


    return (
        <Dados>
         <h1>Idiomas</h1>
         <Form onSave={addIdioma}/>
         <ListaIdiomas  idiomas={idiomas}/>
        </Dados>
    )
}