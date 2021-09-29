import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'

import './style.scss'


export function ListaIdiomas(props){
    const {idiomas} = props;
    return(
        <>
        {idiomas.map(idioma => {
            return(
                <div id="item">
                <span>{idioma.idioma}</span>
                <span>{idioma.nivel}</span>
                <button><DeleteIcon /></button>
                </div>
            )
        })}
        </>
    )
}