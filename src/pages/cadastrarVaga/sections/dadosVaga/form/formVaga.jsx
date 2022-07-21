import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../../../../validation/schemaVaga';
import { Form, InputWrapper, Row, WrapperVaga, ButtonNext, InputDiv, InputText } from './style'
import { List } from './lista'

import { useJobVacancie } from '../../../../../services/contexts/registerJobVacancie';
import { HeaderComponent } from '../../../../../components/HeaderComponent/HeaderComponent';
import { Body, Section } from '../../../style';
import { useNavigate } from 'react-router-dom';
import { Steps } from '../../steps';


export function FormVaga(props) {
    const { jobVacancie, setValues } = useJobVacancie();
    const { title, salary, contractType, cityAndState, level, about, requirements, benefits } = jobVacancie;

    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            title,
            salary,
            about,
            level,
            cityAndState,
            contractType,
            requirements,
            benefits,
        },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setValues({...data, step: 2})
        navigate('/company/register/job-vacancie/step2')
    }
    // setJobVacancie({ ...data, step: 2})

    // console.log(watch())
    return (
        <Body>
        <HeaderComponent candidate={false}/>
        <Steps />
        <Section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <InputDiv>
                        <label> Title </label>
                        <InputText
                            name="title"
                            type="text"
                            placeholder='Ex: Designer UX'
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

                                style={{ maxWidth: '240px' }}
                                placeholder="São Paulo, São Paulo"
                                {...register('cityAndState')} />
                            <span>{errors.cityAndState?.message}</span>
                        </InputDiv>
                        <InputDiv>
                            <label htmlFor="nivel">Nível</label>
                            <select

                                name="level"
                                {...register('level')}>
                                <option value={1}>ESTÁGIO</option>
                                <option value={2}>JR</option>
                                <option value={3}>PL</option>
                                <option value={4}>SR</option>
                            </select>
                            <span>{errors?.level?.message}</span>
                        </InputDiv>
                    </WrapperVaga>
                </Row>
                <Row>
                    <InputDiv style={{width: '100%'}}>
                        <List label="Requisitos" items={requirements} name="requirements" register={register} errors={errors} />
                        <span>{errors?.requirements?.message}</span>
                    </InputDiv>
                    
                    <InputDiv style={{width: '100%'}}>
                        <List label="Benefícios" items={benefits} name="benefits" register={register} errors={errors} />
                        <span>{errors?.benefits?.message}</span>
                    </InputDiv>
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