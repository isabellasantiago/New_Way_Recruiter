import React, {useState} from 'react';
import { Form, Row } from './style';
import { Wrapper } from '../../../components/Wrapper'
import { SelectArea } from '../../../../../components/SelectArea'
import { SelectProfession } from '../../../../../components/SelectProfession'
import Button from '../../../../../components/Button/Button'
import {ReactComponent as OnlineCV } from '../../../../../assets/images/onlineCV.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../../../../validation/validation'

//nao funciona nos selects, apenas depois de selecionar(area e profissao)

export function FormContratacao({onSave}){
    const [dados, setDados] = useState({});
    const [areaDesejada, setAreaDesejada] = useState('');
    const [contrato, setContrato] = useState('');
    const [nivelDesejado, setNivelDesejado] = useState('');
    const [profissao, setProfissao] = useState('');

    const {handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    return(
        <Form onSubmit={handleSubmit(onSave)}>
            <Row>
                <Wrapper>
                    <label htmlFor="area">Área desejada</label>
                <SelectArea id="area" value={areaDesejada} {...register('areaDesajada')} onChange={ev => setAreaDesejada(ev.target.value)} />
                <p>{errors.areaDesejada?.message}</p>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="contrato">Contrato</label>
                    <select name="contrato" id="contrato" value={contrato} {...register('contrato')} onChange={ev => setContrato(ev.target.value)}>
                        <option value="">Selecione</option>
                        <option value="clt">CLT</option>
                        <option value="pj">PJ</option>
                        <option value="ambos">CLT e PJ</option>
                    </select>
                    <p>{errors.contrato?.message}</p>
                </Wrapper>
            </Row>
            <Row>
                <Wrapper>
                    <label htmlFor="nivel">Nível</label>
                    <select name="nivel" id="nivel" value={nivelDesejado} {...register('nivel')} onChange={ev => setNivelDesejado(ev.target.value)} required>
                        <option value="">Selecione</option>
                        <option value="operacional">Operacional</option>
                        <option value="estagio">Estágio</option>
                        <option value="assistente">Assistente</option>
                        <option value="auxiliar">Auxiliar</option>
                        <option value="tecnino">Técnico</option>
                        <option value="analista">Analista</option>
                        <option value="jr">Júnior</option>
                        <option value="pl">Pleno</option>
                        <option value="sr">Sênior</option>
                    </select>
                    <p>{errors.nivel?.message}</p>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="profession">Profissão</label>
                    <SelectProfession name="profession" id="profession" area={areaDesejada} value={profissao} {...register('profession')} onChange={ev => setProfissao(ev.target.value)}/>
                    <p>{errors.profession?.message}</p>
                </Wrapper>
            </Row>
            <Row>
                <Button type="submit" onClick={() => {
                    console.log(areaDesejada, contrato, nivelDesejado, profissao)
                    setDados({areaDesejada, contrato, nivelDesejado, profissao})
                } 
                    }
                    >Finalizar cadastro</Button>
                    <OnlineCV style={
                        {
                            maxWidth:"250px",
                            maxHeight:"250px"
                        }
                    }/>
            </Row>
        </Form>
    )
}