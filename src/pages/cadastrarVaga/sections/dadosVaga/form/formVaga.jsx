import React, {useContext, useState} from 'react';
import { Form, InputWrapper, Row, WrapperVaga, ButtonNext } from './style'
import Field from '../../../../../components/forms/Field'
import { List } from './lista'
import JobVacancieContext from '../../../../../services/contexts/registerJobVacancie';
import { useForm } from 'react-hook-form';
import schemaVaga from '../../../../../validation/schemaVaga';
import { yupResolver } from '@hookform/resolvers/yup';


export function FormVaga(props){
    const { jobVacancie, setJobVacancie } = useContext(JobVacancieContext);
    const { title, salary, contractType, cityAndState, level, about, requirements, benefits} = jobVacancie;

    const { register, handleSubmit, formState: { errors}  } = useForm({
        resolver: yupResolver(schemaVaga)
    })

    const onSubmit = () => {
        console.log(jobVacancie)
        setJobVacancie({ ...jobVacancie, title, salary, contractType, cityAndState, level, about, requirements, benefits, step: 2})
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <WrapperVaga>
                    <Field.Text label="Título da vaga *"  name="nomeVaga" placeholder="Ex: Designer UX" {...register('title')}/>
                    <p>{errors?.title?.message}</p>
                </WrapperVaga>
                <InputWrapper>
                    <p id="cifrao">R$</p>
                    <WrapperVaga>
                        <Field.Text value={salary} label="Salário *" id="salario" name="salario" className="salario" placeholder="3.000,00"{...register('salary')}/>
                        <p>{errors?.salary?.message}</p>
                    </WrapperVaga>
                </InputWrapper>
                <WrapperVaga>
                    <label htmlFor="contrato">Tipo do contrato*</label>
                    <select value={contractType} name="contrato" id="contrato" {...register('contractType')}>
                        <option value={0}>PJ</option>
                        <option value={1}>CLT</option>
                        <option value={2}>CLT ou PJ</option>
                        <option value={3}>OUTROS</option>
                    </select>
                    <p>{errors?.contractType?.message}</p>
                </WrapperVaga>
            </Row>
            <Row>
                <WrapperVaga>
                        <label htmlFor="sobreVaga">Sobre a vaga</label>
                        <textarea value={about} name="sobreVaga" cols="400" row="50" id="sobreVaga" placeholder="Escreva aqui detalhes sobre a vaga" {...register('about')}/>
                        <p>{errors?.about?.message}</p>
                </WrapperVaga>
                <WrapperVaga>
                        <WrapperVaga>
                            <Field.Text value={cityAndState} label="Local *" name="local" id ="local" placeholder="São Paulo, Brasil" {...register('cityAndState')}/>
                            <p>{errors.cityAndState?.message}</p>
                        </WrapperVaga>
                        <WrapperVaga>
                            <label htmlFor="nivel">Nível</label>
                            <select value={level} name="nivel" id="nivel" {...register('level')}>
                                <option value={0}>ESTÁGIO</option>
                                <option value={1}>JR</option>
                                <option value={2}>PL</option>
                                <option value={3}>SR</option>
                            </select>
                            {errors?.level?.message}
                        </WrapperVaga>
                </WrapperVaga>
            </Row>
            <Row>
                <List label="Requisitos" items={requirements} name="requirements" {...register('requirements')}/>
                <List label="Benefícios" items={benefits} name={benefits} {...register('benefits')} />
            </Row>
            <Row alignItems="flex-end">
                <ButtonNext onClick={onSubmit}>Próximo</ButtonNext>
            </Row>
        </Form>
    )
}