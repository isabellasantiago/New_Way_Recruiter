import React, { useState, useEffect } from 'react';
import Field from '../../../../../components/forms/Field';
import Button from '../../../../../components/Button/Button';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../../validation/validation';
import {FormIdioma, Checkbox, InputWrapper} from'./formIdiomas.js'
import { Wrapper } from '../../../components/Wrapper';

//nao ta adicionando o idioma e da o input text como campo obrigatorio mesmo que preenchido

export function Form(props){
    const {onSave} = props;
    const [text, setText] = useState('')
    const [nivel, setNivel] = useState('')
    const [monolinguismo, setMonolinguismo] = useState(false)
    const [idiomas, setIdiomas] = useState()


    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    return(
        <>
            <FormIdioma action="#" id="idiomas" onSubmit={handleSubmit(onSave)}>
                <Checkbox>
                    <input type="checkbox" name="monolinguismo" onChange={() => setMonolinguismo(!monolinguismo)}/>
                    <span>Não Possuo conhecimentos</span>
                </Checkbox>
                {!monolinguismo && (
                    <InputWrapper>
                    <Wrapper>
                        <Field.Text label="Idioma" name="idioma" type="text" {...register('idioma')} onChange={(e) => {setText(e.target.value)}} value={text}/>
                        <p>{errors.idioma?.message}</p>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="nivel">Nível</label>
                        <select name="nivel" {...register('nivel')} onChange={(e) => {setNivel(e.target.value)}} value={nivel}>
                            <option value="">Selecione</option>
                            <option value="Basico">Básico</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                            <option value="Fluente">Fluente</option>
                        </select>
                        <p>{errors.nivel?.message}</p>
                    </Wrapper>
                    <Button type="submit"
                    onClick={() => setIdiomas(text, nivel)}
                    >Adicionar</Button>
                </InputWrapper>
                )}
                    
            </FormIdioma>
        </>
    )
}