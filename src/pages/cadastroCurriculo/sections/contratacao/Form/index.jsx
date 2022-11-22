import React from 'react';
import { Form, Row } from './style';
import { Wrapper } from '../../../components/Wrapper'
import { SelectArea } from '../../../../../components/SelectArea'
import { SelectProfession } from '../../../../../components/SelectProfession'

export function FormContratacao({ useForm, personalData }){
    const {register, errors, watch } = useForm;
    const area = watch('personalData.field')

    return(
        <Form>
            <Row>
                <Wrapper>
                <label htmlFor="area">Área desejada</label>
                <SelectArea id="field" name="personalData.field" register={register} />
                <span>{errors?.personalData?.field?.message}</span>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="contractType">Contrato</label>
                    <select name="personalData.contractType" id="contractType" {...register('personalData.contractType')} >
                        <option value="">Selecione</option>
                        <option value={Number(2)}>CLT</option>
                        <option value={Number(1)}>PJ</option>
                        <option value={Number(3)}>CLT e PJ</option>
                        <option value={Number(4)}>Outros</option>
                    </select>
                    <span>{errors?.personalData?.contractType?.message}</span>
                </Wrapper>
            </Row>
            <Row>
                <Wrapper>
                    <label htmlFor="level">Nível</label>
                    <select name="level" id="level" {...register('personalData.level')} >
                        <option value="">Selecione</option>
                        <option value={Number(1)}>Estágio</option>
                        <option value={Number(6)}>Agente</option>
                        <option value={Number(5)}>Analista</option>
                        <option value={Number(2)}>Júnior</option>
                        <option value={Number(3)}>Pleno</option>
                        <option value={Number(4)}>Sênior</option>
                    </select>
                    <span>{errors?.personalData?.level?.message}</span>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="personalData.role">Profissão</label>
                    <SelectProfession name="personalData.role" id="role" register={register} area={area} />
                    <span>{errors?.personalData?.role?.message}</span>
                </Wrapper>
            </Row>
        </Form>
    )
}