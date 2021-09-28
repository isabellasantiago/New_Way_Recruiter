import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'




export function ListaIdiomas(props){
    const {idiomas} = props;
    console.log(idiomas)
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