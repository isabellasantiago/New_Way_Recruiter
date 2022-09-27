import React from 'react';
import { Form, Row } from './style';
import { Wrapper } from '../../../components/Wrapper'
import { SelectArea } from '../../../../../components/SelectArea'
import { SelectProfession } from '../../../../../components/SelectProfession'

export function FormContratacao({useForm}){
    const {register, errors, watch} = useForm;
    const personalData = watch('personalData');
    const area = personalData.field

    return(
        <Form>
            <Row>
                <Wrapper>
                <label htmlFor="area">Área desejada</label>
                <SelectArea id="field" name="personalData.field" register={register} defaultValue={personalData.field}/>
                <span>{errors?.personalData?.field?.message}</span>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="contractType">Contrato</label>
                    <select name="personalData.contractType" id="contractType" {...register('personalData.contractType')} defaultValue={personalData.contractType}>
                        <option value="">Selecione</option>
                        <option value={2}>CLT</option>
                        <option value={1}>PJ</option>
                        <option value={3}>CLT e PJ</option>
                        <option value={4}>Outros</option>
                    </select>
                    <span>{errors?.personalData?.contractType?.message}</span>
                </Wrapper>
            </Row>
            <Row>
                <Wrapper>
                    <label htmlFor="level">Nível</label>
                    <select name="level" id="level" {...register('personalData.level')} defaultValue={personalData.level}>
                        <option value="">Selecione</option>
                        <option value={1}>Estágio</option>
                        <option value={6}>Agente</option>
                        <option value={5}>Analista</option>
                        <option value={2}>Júnior</option>
                        <option value={3}>Pleno</option>
                        <option value={4}>Sênior</option>
                    </select>
                    <span>{errors?.personalData?.level?.message}</span>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="personalData.role">Profissão</label>
                    <SelectProfession name="personalData.role" id="role" register={register} area={area} defaultValue={personalData.role}/>
                    <span>{errors?.personalData?.role?.message}</span>
                </Wrapper>
            </Row>
        </Form>
    )
}