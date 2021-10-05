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
 
    return(
        <Form onSubmit={e => e.preventDefault()}>
            <FormWrapper>
                <Field.Text  label="Instituição de ensino" type="text" name="instituicao" onChange={(e) => setInstituicao(e.target.value)} value={instituicao || ""}/>
                <Field.Text  label="Curso" type="text" name="curso" onChange={(e) => setCurso(e.target.value)} value={curso || ""}/>
                <Wrapper>
                    <label htmlFor="tipoFormacao">Formação</label>
                    <select name="tipoFormacao" onChange={(e) => {setTipoFormacao(e.target.value)}} value={tipoFormacao || ""}>
                        <option value="">Selecione</option>
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
                    <select name="statusFormacao" onChange={(e) => setStatusFormacao(e.target.value)} value={statusFormacao || ""}>
                        <option value="">Selecione</option>
                        <option value="cursando">Cursando</option>
                        <option value="concluido">Concluído</option>
                        <option value="trancado">Trancado</option>
                    </select>
                </Wrapper>
                <Field.Text label="Data de inicio" type="month" name="dataInicio" onChange={(e) => setDataInicio(e.target.value)} lang="pt-BR" value={dataInicio || ""}/>
                <Field.Text label="Data de término" type="month" name="dataTermino"  onChange={(e) => setDataTermino(e.target.value)} lang="pt-BR" value={dataTermino || ""}/>
                <Button type="submit"
                onClick={(ev) => {
                    setInstituicao("")
                    setCurso("")
                    setTipoFormacao("")
                    setStatusFormacao("")
                    setDataInicio("")
                    setDataTermino("")
                    onSave(ev, instituicao, curso, tipoFormacao, statusFormacao, dataInicio, dataTermino)
                }}>Adicionar</Button>
            </FormWrapper>
        </Form>
    )
}