import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'

import {Item} from './style.js';


export function ListaIdiomas(props){
    const {idiomas} = props;
    return(
        <>
        {idiomas.map((idioma, index) => {
            return(
                <Item id="item">
                <span>{idioma.idioma}</span>
                <span>{idioma.nivel}</span>
                <button onClick={() => props.deleteIdioma(index)}><DeleteIcon /></button>
                </Item>
            )
        })}
        </>
    )
}