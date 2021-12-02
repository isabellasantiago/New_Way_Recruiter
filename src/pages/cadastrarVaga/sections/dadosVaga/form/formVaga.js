import React, {useState} from 'react';
import { Form, InputWrapper, Row, WrapperVaga } from './style'
import Field from '../../../../../components/forms/Field'
import {useForm} from 'react-hook-form'
import schema from '../../../../../validation/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { List } from '../form/lista'


export function FormVaga(){
    const [requisitos, setRequisitos] = useState()
    const [beneficios, setBeneficios] = useState()

    const saveRequisitos = (requisito) => {
        setRequisitos([...requisitos || [], requisito])
        console.log(requisito)
    }


    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })


    return (
        <Form>
            <Row>
                <WrapperVaga>
                    <Field.Text label="Título da vaga *" name="nomeVaga" {...register('nomeVaga')}/>
                    <p>{errors.nomeVaga?.message}</p>
                </WrapperVaga>
                <InputWrapper>
                    <p id="cifrao">R$</p>
                    <WrapperVaga>
                        <Field.Text label="Salário *" id="salario" name="salario" className="salario" {...register('salario')}/>
                        <p>{errors.salario?.message}</p>
                    </WrapperVaga>
                </InputWrapper>
                <WrapperVaga>
                    <label htmlFor="contrato">Tipo do contrato*</label>
                    <select name="contrato" id="contrato" {...register('contrato')}>
                        <option value="clt">CLT</option>
                        <option value="pj">PJ</option>
                        <option value="ambos">CLT ou PJ</option>
                    </select>
                    <p>{errors.contrato?.message}</p>
                </WrapperVaga>
            </Row>
            <Row>
                <WrapperVaga>
                        <label htmlFor="sobreVaga">Sobre a vaga</label>
                        <textarea name="sobreVaga" cols="400" row="50" id="sobreVaga" {...register('sobreVaga')}/>
                        <p>{errors.sobreVaga?.message}</p>
                </WrapperVaga>
                <WrapperVaga>
                        <WrapperVaga>
                            <Field.Text label="Local *" name="local" id ="local" {...register('local')}/>
                            <p>{errors.local?.message}</p>
                        </WrapperVaga>
                        <WrapperVaga>
                            <label htmlFor="nivel">Nível</label>
                            <select name="nivel" id="nivel" {...register('nivel')}>
                                <option value="jr">JR</option>
                                <option value="estagio">Estágio</option>
                                <option value="pl">PL</option>
                                <option value="sr">SR</option>
                            </select>
                        </WrapperVaga>
                </WrapperVaga>
            </Row>
            <Row>
                <List label="Requisitos" items={saveRequisitos} value={requisitos} {...register('requisitos')}/>
                <List label="Benefícios" value={beneficios} {...register('beneficios')} />
            </Row>
        </Form>
    )
}