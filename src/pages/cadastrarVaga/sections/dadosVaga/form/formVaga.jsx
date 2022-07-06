import React, {useContext, useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from '../../../../../validation/schemaVaga';
import { Form, InputWrapper, Row, WrapperVaga, ButtonNext, InputDiv, InputText } from './style'
import { List } from './lista'
import JobVacancieContext from '../../../../../services/contexts/registerJobVacancie';
import { Section } from '../../style';

const DEFAULT_VALUE = {
    title: '',
    salary: '',
    contractType: 0,
    cityAndState: '',
    level: 0,
    about: '',
    requirements: [],
    benefits: [],
}


export function FormVaga(props){
    const { jobVacancie, setJobVacancie } = useContext(JobVacancieContext);
    const { title, salary, contractType, cityAndState, level, about, requirements, benefits} = jobVacancie;


    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = () => {
        if(!errors) setJobVacancie({ ...jobVacancie, title, salary, contractType, cityAndState, level, about, requirements, benefits, step: 2})
        console.log(jobVacancie)
        
    }

    

    return (
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <WrapperVaga>
                        <InputDiv>
                        <label> Title </label>
                        <InputText
                            type="text"
                            placeholder='Ex: Designer UX'
                            onChange={(ev) => setJobVacancie(prevState => ({...prevState, title: ev.target.value}) )}
                            {...register('title')}
                        />
                        <span>{errors?.title?.message}</span>
                        </InputDiv>
                    </WrapperVaga>
                    <InputWrapper>
                        <p id="cifrao">R$</p>
                        <WrapperVaga>
                            <InputDiv>
                            <label> Salário</label>
                            <InputText placeholder="3.000,00" {...register('salary')} style={{maxWidth: '100px'}}/>
                            <span>{errors.salary?.message}</span>
                            </InputDiv>
            
                        </WrapperVaga>
                    </InputWrapper>
                    <WrapperVaga>
                        <InputDiv>
                            <label htmlFor="contrato">Tipo do contrato*</label>
                            <select style={{ maxWidth: '130px'}}name="contrato" id="contrato" onChange={(ev) => setJobVacancie({...jobVacancie, contractType: ev.target.value})} {...register('contractType')}>
                                <option value={0}>PJ</option>
                                <option value={1}>CLT</option>
                                <option value={2}>CLT ou PJ</option>
                                <option value={3}>OUTROS</option>
                            </select>
                            <span>{errors?.contractType?.message}</span>
                        </InputDiv>
                    </WrapperVaga>
                </Row>
                <Row>
                    <WrapperVaga>
                            <InputDiv>
                                <label htmlFor="sobreVaga">Sobre a vaga</label>
                                <textarea onChange={(ev) => setJobVacancie({...jobVacancie, about: ev.target.value})} name="sobreVaga" cols="400" row="50" id="sobreVaga" placeholder="Escreva aqui detalhes sobre a vaga" {...register('about')}/>
                                <span>{errors?.about?.message}</span>
                            </InputDiv>
                    </WrapperVaga>
                    <WrapperVaga>
                            <WrapperVaga>
                                <InputDiv>
                                <label>Local *</label>
                                <InputText style={{maxWidth: '240px'}} placeholder="São Paulo, São Paulo" {...register('cityAndState')}/>
                                <span>{errors.cityAndState?.message}</span>
                                </InputDiv>
                            </WrapperVaga>
                            <WrapperVaga>
                                <label htmlFor="nivel">Nível</label>
                                <select onChange={(ev) => setJobVacancie({...jobVacancie, level: ev.target.value})} name="nivel" id="nivel" {...register('level')}>
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
                    <ButtonNext type="submit">Próximo</ButtonNext>
                </Row>
            </Form>
        </Section>
    )
}