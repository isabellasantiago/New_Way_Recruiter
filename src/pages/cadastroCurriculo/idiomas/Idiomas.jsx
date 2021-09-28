import React, {useState} from 'react';
import Dados from '../dados/Dados';
import {ListaIdiomas} from './ListaIdiomas/ListaIdiomas';
import {Form} from './Form/Form';

import './idioma.scss';




export function Idiomas(){

    const [idiomas, setIdiomas] = useState([]);
    const addIdioma = (ev, idioma, nivel) => {
        ev.preventDefault();
        setIdiomas([...idiomas, {idioma, nivel}])
        
    }


    return (
        <Dados>
         <h1>Idiomas</h1>
         <Form onSave={addIdioma}/>
         <ListaIdiomas  idiomas={idiomas}/>
        </Dados>
    )
}