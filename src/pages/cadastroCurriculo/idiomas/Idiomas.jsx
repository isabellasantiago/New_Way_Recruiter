import React from 'react';
import Field from '../../../components/forms/Field';
import Dados from '../dados/Dados';

import './idioma.scss';

import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';
import Select from '../../../components/forms/Select/SelectForm';
import Button from '../../../components/Button/Button';


export function Idiomas(){
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <Dados>
        <h1>Idiomas</h1>
        <form action="#" id="idiomas" onSubmit={handleSubmit()}>
            <div id="sec1">
                <Field.Text label="Idioma" name="idioma" type="text" {...register}/>
                <Select>
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediario</option>
                    <option value="avançado">Avançado</option>
                    <option value="fluente">Fluente</option>
                </Select>
                <Button type="button">Adicionar</Button>
            </div>
            <div id="sec2">
                lista
            </div>
        </form>
        </Dados>
    )
}