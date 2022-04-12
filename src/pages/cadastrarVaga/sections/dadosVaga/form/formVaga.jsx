import React, {useState} from 'react';
import { Form, InputWrapper, Row, WrapperVaga, ButtonNext } from './style'
import Field from '../../../../../components/forms/Field'
import { List } from './lista'


export function FormVaga(props){
    const { register, errors, setStep } = props
    const [requisitos, setRequisitos] = useState()
    const [beneficios, setBeneficios] = useState()


    return (
        <Form>
            <Row>
                <WrapperVaga>
                    <Field.Text label="Título da vaga *" name="nomeVaga" placeholder="Ex: Designer UX" {...register('title')}/>
                    <p>{errors?.title?.message}</p>
                </WrapperVaga>
                <InputWrapper>
                    <p id="cifrao">R$</p>
                    <WrapperVaga>
                        <Field.Text label="Salário *" id="salario" name="salario" className="salario" placeholder="3.000,00"{...register('salary')}/>
                        <p>{errors?.salary?.message}</p>
                    </WrapperVaga>
                </InputWrapper>
                <WrapperVaga>
                    <label htmlFor="contrato">Tipo do contrato*</label>
                    <select name="contrato" id="contrato" {...register('contractType')}>
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
                        <textarea name="sobreVaga" cols="400" row="50" id="sobreVaga" placeholder="Escreva aqui detalhes sobre a vaga" {...register('about')}/>
                        <p>{errors?.about?.message}</p>
                </WrapperVaga>
                <WrapperVaga>
                        <WrapperVaga>
                            <Field.Text label="Local *" name="local" id ="local" placeholder="São Paulo, São Paulo" {...register('cityAndState')}/>
                            <p>{errors.cityAndState?.message}</p>
                        </WrapperVaga>
                        <WrapperVaga>
                            <label htmlFor="nivel">Nível</label>
                            <select name="nivel" id="nivel" {...register('level')}>
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
                <List label="Requisitos" items={setRequisitos} value={requisitos} {...register('requirements')}/>
                <List label="Benefícios"items={setBeneficios} value={beneficios} {...register('benefits')} />
            </Row>
            <Row alignItems="flex-end">
                <ButtonNext onClick={() => setStep(2)}>Próximo</ButtonNext>
            </Row>
        </Form>
    )
}