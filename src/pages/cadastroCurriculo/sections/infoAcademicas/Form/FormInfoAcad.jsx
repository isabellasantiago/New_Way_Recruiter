import React, { useState } from 'react';
import schema from '../../../../../validation/validation';
import Button from '../../../../../components/Button/Button';
import Field from '../../../../../components/forms/Field';
import { Wrapper } from '../../../components/Wrapper';
import { Form, FormWrapper} from './style';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

//nao ta adicionando e ta dando os campos como obrigatorios

export function FormInfoAcad(props){
    const {onSave} = props;
    const [instituicao, setInstituicao] = useState('');
    const [curso, setCurso] = useState('');
    const [tipoFormacao, setTipoFormacao] = useState('');
    const [statusFormacao, setStatusFormacao] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');

    const {handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })



     
 
    return(
        <Form onSubmit={handleSubmit(onSave)}>
            <FormWrapper>
                <Wrapper>
                    <Field.Text  label="Instituição de ensino" type="text" name="instituicao" {...register('instituicao')} onChange={(e) => setInstituicao(e.target.value)} value={instituicao} />
                    <p>{errors.instituicao?.message}</p>
                </Wrapper>
                <Wrapper>
                    <Field.Text  label="Curso" type="text" name="curso" {...register('curso')} onChange={(e) => setCurso(e.target.value)} value={curso}/>
                    <p>{errors.curso?.message}</p>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="tipoFormacao">Formação</label>
                    <select id="tipoFormacao" name="tipoFormacao" {...register('tipoFormacao')} onChange={(e) => {setTipoFormacao(e.target.value)}} value={tipoFormacao || ""} >
                        <option value="">Selecione</option>
                        <option value="ensinoRegular">Ensino regular</option>
                        <option value="extraCurricular">Extra curricular</option>
                        <option value="tecnico">Tecnico</option>
                        <option value="superior">Superior</option>
                        <option value="posGraduação">Pós graduação</option>
                        <option value="mestrado">Mestrado</option>
                        <option value="doutorado">Doutorado</option>
                    </select>
                    <p>{errors.tipoFormacao?.message}</p>
                </Wrapper>
            </FormWrapper>
            <FormWrapper>
                <Wrapper>
                    <label htmlFor="statusFormacao">Status</label>
                    <select id="statusFormacao" name="statusFormacao" {...register('statusFormacao')} onChange={(e) => setStatusFormacao(e.target.value)} value={statusFormacao} >
                        <option value="">Selecione</option>
                        <option value="cursando">Cursando</option>
                        <option value="concluido">Concluído</option>
                        <option value="trancado">Trancado</option>
                    </select>
                    <p>{errors.statusFormacao?.message}</p>
                </Wrapper>
                <Wrapper>
                    <Field.Text label="Data de inicio" type="date" name="dataInicio" {...register('dataInicio')} onChange={(e) => setDataInicio(e.target.value)} value={dataInicio} />
                    <p>{errors.dataInicio?.message}</p>
                </Wrapper>
                <Wrapper>
                    <Field.Text label="Data de término" type="date" name="dataTermino" {...register('dataTermino')} onChange={(e) => setDataTermino(e.target.value)} value={dataTermino} />
                    <p>{errors.dataTermino?.message}</p>
                </Wrapper>
                <Button type="submit"
                onClick={() => {
                    setInstituicao("")
                    setCurso("")
                    setTipoFormacao("")
                    setStatusFormacao("")
                    setDataInicio("")
                    setDataTermino("")
                    console.log(instituicao, tipoFormacao, statusFormacao, dataInicio, dataTermino, curso)
                }}>Adicionar</Button>
            </FormWrapper>
        </Form>
    )
}