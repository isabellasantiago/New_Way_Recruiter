import React, {useState} from 'react';
import { Form, Row } from './style';
import { Wrapper } from '../../../components/Wrapper'
import { SelectArea } from '../../../../../components/SelectArea'
import { SelectProfession } from '../../../../../components/SelectProfession'
import Button from '../../../../../components/Button/Button'

import {ReactComponent as OnlineCV } from '../../../../../assets/images/onlineCV.svg'

export function FormContratacao(){
    const [areaDesejada, setAreaDesejada] = useState('');
    const [contrato, setContrato] = useState('');
    const [nivelDesejado, setNivelDesejado] = useState('');
    const [profissao, setProfissao] = useState('');

    return(
        <Form>
            <Row>
                <Wrapper>
                    <label htmlFor="area">Área desejada</label>
                <SelectArea id="area" value={areaDesejada} onChange={ev => setAreaDesejada(ev.target.value)} />
                </Wrapper>
                <Wrapper>
                    <label htmlFor="contrato">Contrato</label>
                    <select name="contrato" id="contrato" value={contrato} onChange={ev => setContrato(ev.target.value)}>
                        <option value="">Selecione</option>
                        <option value="clt">CLT</option>
                        <option value="pj">PJ</option>
                        <option value="ambos">CLT e PJ</option>
                    </select>
                </Wrapper>
            </Row>
            <Row>
                <Wrapper>
                    <label htmlFor="nivel">Nível</label>
                    <select name="nivel" id="nivel" value={nivelDesejado} onChange={ev => setNivelDesejado(ev.target.value)} required>
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
                </Wrapper>
                <Wrapper>
                    <label htmlFor="profession">Profissão</label>
                    <SelectProfession name="profession" id="profession" area={areaDesejada} value={profissao} onChage={ev => setProfissao(ev.target.value)}/>
                </Wrapper>
            </Row>
            <Row>
                <Button>Finalizar cadastro</Button>
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