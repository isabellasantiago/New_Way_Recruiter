import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import Field from '../../../../components/forms/Field';
import { Wrapper } from '../../dadosPessoais/style';
import { Form, FormWrapper} from './style';

export function FormInfoAcad(props){
    const {onSave} = props;
    const [instituicao, setInstituicao] = useState('');
    const [curso, setCurso] = useState('');
    const [tipoFormacao, setTipoFormacao] = useState('');
    const [statusFormacao, setStatusFormacao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');

    const validation = () => {
        if(!instituicao || !curso || !tipoFormacao || !statusFormacao || !dataInicio || !dataTermino){

        }   
    }
 
    return(
        <Form onSubmit={e => e.preventDefault()}>
            <FormWrapper>
                <Field.Text  label="Instituição de ensino" type="text" name="instituicao" onChange={(e) => setInstituicao(e.target.value)} value={instituicao || ""} required/>
                <Field.Text  label="Curso" type="text" name="curso" onChange={(e) => setCurso(e.target.value)} value={curso || ""} required/>
                <Wrapper>
                    <label htmlFor="tipoFormacao">Formação</label>
                    <select name="tipoFormacao" onChange={(e) => {setTipoFormacao(e.target.value)}} value={tipoFormacao || ""} required>
                        <option value="">Selecione</option>
                        <option value="ensinoRegular">Ensino regular</option>
                        <option value="extraCurricular">Extra curricular</option>
                        <option value="tecnico">Tecnico</option>
                        <option value="superior">Superior</option>
                        <option value="posGraduação">Pós graduação</option>
                        <option value="mestrado">Mestrado</option>
                        <option value="doutorado">Doutorado</option>
                    </select>
                </Wrapper>
            </FormWrapper>
            <FormWrapper>
                <Wrapper>
                    <label htmlFor="statusFormacao">Status</label>
                    <select name="statusFormacao" onChange={(e) => setStatusFormacao(e.target.value)} value={statusFormacao || ""} required>
                        <option value="">Selecione</option>
                        <option value="cursando">Cursando</option>
                        <option value="concluido">Concluído</option>
                        <option value="trancado">Trancado</option>
                    </select>
                </Wrapper>
                <Field.Text label="Data de inicio" type="date" name="dataInicio" onChange={(e) => setDataInicio(e.target.value)} value={dataInicio || ""} required/>
                <Field.Text label="Data de término" type="date" name="dataTermino"  onChange={(e) => setDataTermino(e.target.value)} value={dataTermino || ""} required/>
                <Button type="submit"
                onClick={(ev) => {
                    onSave(ev, instituicao, curso, tipoFormacao, statusFormacao, dataInicio, dataTermino)
                    setInstituicao("")
                    setCurso("")
                    setTipoFormacao("")
                    setStatusFormacao("")
                    setDataInicio("")
                    setDataTermino("")
                }}>Adicionar</Button>
            </FormWrapper>
        </Form>
    )
}