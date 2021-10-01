import React, { useState } from 'react';
import Field from '../../../../components/forms/Field';
import Button from '../../../../components/Button/Button';

import './formIdiomas.scss'


export function Form(props){
    const {onSave} = props;
    const [text, setText] = useState('')
    const [nivel, setNivel] = useState('')


    return(
        <>
            <form action="#" id="idiomas">
                <div id="checkbox">
                    <input type="checkbox" name="monolinguismo"/>
                    <span>Não Possuo conhecimentos</span>
                </div>
                {}
                <div id="sec1">
                    <Field.Text label="Idioma" name="idioma" type="text" onChange={(e) => {setText(e.target.value)}}/>
                    <div id="wrapper">
                        <label htmlFor="nivel">Nível</label>
                        <select name="nivel" onChange={(e) => {setNivel(e.target.value)}} value={nivel}>
                            <option value="">Selecione</option>
                            <option value="Basico">Básico</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                            <option value="Fluente">Fluente</option>
                        </select>
                    </div>
                    <Button type="submit" onClick={(ev) => onSave(ev,text, nivel)}>Adicionar</Button>
                </div>
            </form>
        </>
    )
}