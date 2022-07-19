import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../../../../validation/schemaVaga';
import { Form, InputWrapper, Row, WrapperVaga, ButtonNext, InputDiv, InputText } from './style'
import { List } from './lista'

import JobVacancieContext from '../../../../../services/contexts/registerJobVacancie';
import { Section } from '../../style';
import { HeaderComponent } from '../../../../../components/HeaderComponent/HeaderComponent';
import { Body } from '../../../style';
import { useNavigate } from 'react-router-dom';

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


export function FormVaga(props) {
    const { jobVacancie, setJobVacancie } = useContext(JobVacancieContext);
    const { title, salary, contractType, cityAndState, level, about, requirements, benefits } = jobVacancie;
    const [formsState, setFormsState] = useState(DEFAULT_VALUE);

    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
        navigate('/company/register/job-vacancie/step2')
    }
    // setJobVacancie({ ...data, step: 2})

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormsState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    // console.log(watch())
    return (
        <Body>
        <HeaderComponent candidate={false}/>
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <InputDiv>
                        <label> Title </label>
                        <InputText
                            name="title"
                            type="text"
                            placeholder='Ex: Designer UX'
                            onChange={handleInputChange}
                            {...register('title')}
                        />
                        <span>{errors?.title?.message}</span>
                    </InputDiv>
                    <InputWrapper>
                        <p id="cifrao">R$</p>
                        <InputDiv>
                            <label> Salário</label>
                            <InputText
                                name='salary'
                                onChange={handleInputChange}
                                placeholder="3000"
                                {...register('salary')}
                                style={{ maxWidth: '100px' }} />
                            <span>{errors.salary?.message}</span>
                        </InputDiv>
                    </InputWrapper>
                    <InputDiv>
                        <label htmlFor="contrato">Tipo do contrato*</label>
                        <select
                            style={{ maxWidth: '130px' }}
                            name="contractType"
                            onChange={handleInputChange}
                            {...register('contractType')}>
                            <option value={1}>PJ</option>
                            <option value={2}>CLT</option>
                            <option value={3}>CLT ou PJ</option>
                            <option value={4}>OUTROS</option>
                        </select>
                        <span>{errors?.contractType?.message}</span>
                    </InputDiv>
                </Row>
                <Row>

                    <InputDiv>
                        <label htmlFor="sobreVaga">Sobre a vaga</label>
                        <textarea
                            onChange={handleInputChange}
                            name="about"
                            cols="400"
                            row="50"
                            placeholder="Escreva aqui detalhes sobre a vaga"
                            {...register('about')} />
                        <span>{errors?.about?.message}</span>
                    </InputDiv>
                    <WrapperVaga>
                        <InputDiv>
                            <label>Local *</label>
                            <InputText
                                name="cityAndState"
                                onChange={handleInputChange}
                                style={{ maxWidth: '240px' }}
                                placeholder="São Paulo, São Paulo"
                                {...register('cityAndState')} />
                            <span>{errors.cityAndState?.message}</span>
                        </InputDiv>
                        <InputDiv>
                            <label htmlFor="nivel">Nível</label>
                            <select
                                onChange={handleInputChange}
                                name="level"
                                {...register('level')}>
                                <option value={1}>ESTÁGIO</option>
                                <option value={2}>JR</option>
                                <option value={3}>PL</option>
                                <option value={4}>SR</option>
                            </select>
                            {errors?.level?.message}
                        </InputDiv>
                    </WrapperVaga>
                </Row>
                <Row>
                    <List label="Requisitos" items={requirements} name="requirements" register={register} errors={errors} />
                    <List label="Benefícios" items={benefits} name="benefits" register={register} errors={errors} />
                </Row>
                <Row alignItems="flex-end">
                    <ButtonNext type="submit" value="Próximo" />
                </Row>
            </Form>
        </Section>
        </Body>
    )
}
/**/