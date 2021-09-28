import React, {useState} from 'react';
import { IconButton} from '@material-ui/core';
import {AddIcon} from'@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import Select from '../../../components/forms/Select/SelectForm';
import Button from '../../../components/Button/Button';
import Field from '../../../components/forms/Field';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';

export function ListaIdiomas(props){
    const {idiomas} = props;

    return(
        <>
        {idiomas.map(idioma => {
            return(
                <div id="idioma">
                <span>{idioma}</span>
                {/* <span>{nivel}</span> */}
                <button><DeleteIcon /></button>
                </div>
            )
        })}
        </>
    )
}

export function Form(props){
    const {onSave} = props;
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const [text, setText] = useState('')
    const [nivel, setNivel] = useState('')


    return(
        <>
        <form action="#" id="idiomas" onSubmit={handleSubmit}>
            <div id="sec1">
                <Field.Text label="Idioma" name="idioma" type="text" {...register("idioma")} onChange={(e) => {setText(e.currentTarget.value)}}/>
                <Select onChange={(e) => {setNivel(e.currentTarget.value)}}>
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediario</option>
                    <option value="avançado">Avançado</option>
                    <option value="fluente">Fluente</option>
                </Select>
                <Button type="button" onClick={() => {onSave(text, nivel)}}>Adicionar</Button>
            </div>
        </form>
        </>
    )
}