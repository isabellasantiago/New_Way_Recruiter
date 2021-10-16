import React, { useState, useEffect } from 'react';
import Field from '../../../../../components/forms/Field';
import Button from '../../../../../components/Button/Button';

import {FormIdioma, Checkbox, InputWrapper} from'./formIdiomas.js'
import { Wrapper } from '../../../components/Wrapper';


export function Form(props){
    const {onSave} = props;
    const [text, setText] = useState('')
    const [nivel, setNivel] = useState('')
    const [monolinguismo, setMonolinguismo] = useState(false)
    const [idiomas, setIdiomas] = useState(false)



    return(
        <>
            <FormIdioma action="#" id="idiomas">
                <Checkbox>
                    <input type="checkbox" name="monolinguismo" onChange={() => setMonolinguismo(true)}/>
                    <span>Não Possuo conhecimentos</span>
                </Checkbox>
                {!monolinguismo && (
                    <InputWrapper>
                    <Field.Text label="Idioma" name="idioma" type="text" onChange={(e) => {setText(e.target.value)}}/>
                    <Wrapper>
                        <label htmlFor="nivel">Nível</label>
                        <select name="nivel" onChange={(e) => {setNivel(e.target.value)}} value={nivel}>
                            <option value="">Selecione</option>
                            <option value="Basico">Básico</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                            <option value="Fluente">Fluente</option>
                        </select>
                    </Wrapper>
                    <Button type="submit" onClick={(ev) => onSave(ev,text, nivel)}>Adicionar</Button>
                </InputWrapper>
                )}
                    
            </FormIdioma>
        </>
    )
}