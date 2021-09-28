import React, { useState } from 'react';
import Field from '../../../../components/forms/Field';
import Button from '../../../../components/Button/Button';
import Select from '../../../../components/forms/Select/Select';



export function Form(props){
    const {onSave} = props;
    const [text, setText] = useState('')
    const [nivel, setNivel] = useState('Básico')


    return(
        <>
        <form action="#" id="idiomas">
            <div id="sec1">
                <Field.Text label="Idioma" name="idioma" type="text" onChange={(e) => {setText(e.target.value)}}/>
                <Select onChange={(e) => {setNivel(e.target.value)}} value={nivel}>
                    <option value="Basico">Básico</option>
                    <option value="Intermediario">Intermediario</option>
                    <option value="Avançado">Avançado</option>
                    <option value="Fluente">Fluente</option>
                </Select>
                <Button type="submit" onClick={(ev) => onSave(ev,text, nivel)}>Adicionar</Button>
            </div>
        </form>
        </>
    )
}