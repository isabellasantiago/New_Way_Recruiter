import React, { useState } from 'react';
import schema from '../../../../../validation/validation';
import Button from '../../../../../components/Button/Button';
// import Field from '../../../../../components/forms/Field';
import { Wrapper } from '../../../components/Wrapper';
import { Form, FormWrapper} from './style';


export function FormInfoAcad(props){
    const {onSave} = props;
    const [instituicao, setInstituicao] = useState('');
    const [curso, setCurso] = useState('');
    const [tipoFormacao, setTipoFormacao] = useState('');
    const [statusFormacao, setStatusFormacao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');


    const criaFormacao = async (event) =>{
        event.preventDefault();
        let formData = {
            instituicao: event.target[0].value,
            curso: event.target[1].value,
            tipoFormacao: event.target[2].value,
            statusFormacao: event.target[3].value,
            dataInicio: event.target[4].value,
            dataTermino: event.target[5].value,
        }
        const isValid = await schema.isValid(formData);
        return isValid();
    }
     
 
    return(
        <Form onSubmit={e => e.preventDefault()}>
            <FormWrapper>
                <Wrapper>
                    <label>Instituição de ensino</label>
                    <input type="text" name="instituicao"/>
                </Wrapper>
                <Wrapper>
                    <label>Curso</label>
                    <input type="text" name="curso"/>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="tipoFormacao">Formação</label>
                    <select id="tipoFormacao" name="tipoFormacao" onChange={(e) => {setTipoFormacao(e.target.value)}} value={tipoFormacao || ""} >
                        <option value="">Selecione</option>
                        <option value={1}>Ensino regular</option>
                        <option value={7}>Extra curricular</option>
                        <option value={2}>Tecnico</option>
                        <option value={3}>Superior</option>
                        <option value={4}>Pós graduação</option>
                        <option value={5}>Mestrado</option>
                        <option value={6}>Doutorado</option>
                    </select>
                </Wrapper>
            </FormWrapper>
            <FormWrapper>
                <Wrapper>
                    <label htmlFor="statusFormacao">Status</label>
                    <select id="statusFormacao" name="statusFormacao" onChange={(e) => setStatusFormacao(e.target.value)} value={statusFormacao || ""} >
                        <option value="">Selecione</option>
                        <option value="cursando">Cursando</option>
                        <option value="concluido">Concluído</option>
                        <option value="trancado">Trancado</option>
                    </select>
                </Wrapper>
                <Wrapper>
                    <label>Data de inicio</label>
                    <input label="" type="date"/>
                </Wrapper>
                <Wrapper>
                    <label>Data de término</label>
                    <input type="date" />
                </Wrapper>
                <Button type="submit">Adicionar</Button>
            </FormWrapper>
        </Form>
    )
}