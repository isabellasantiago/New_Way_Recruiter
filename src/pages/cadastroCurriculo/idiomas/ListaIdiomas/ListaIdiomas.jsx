import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'

import {Item} from './style.js';


export function ListaIdiomas(props){
    const {idiomas} = props;
    return(
        <>
        {idiomas.length > 0 && (idiomas.map(idioma => {
            return(
                <Item id="item">
                <span>{idioma.idioma}</span>
                <span>{idioma.nivel}</span>
                <button><DeleteIcon /></button>
                </Item>
            )
        }))}
        </>
    )
}