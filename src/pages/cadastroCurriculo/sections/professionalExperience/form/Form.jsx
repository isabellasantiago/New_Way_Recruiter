import React, {useState} from 'react';
import {Form} from './style';
import Field from '../../../../../components/forms/Field';
import {Wrapper} from '../../../components/Wrapper';
import Button from '../../../../../components/Button/Button'
import {FormWrapper} from '../../infoAcademicas/Form/style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../../../../validation/validation'

//nao adiciona a experiencia, register nao pega no select

export function ProfessionalExpierenceForm(props){
    const {onSave} = props;
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [cargo, setCargo] = useState('')
    const [nivelOperacional, setNivelOperacional] = useState('')
    const [dataInicioEmprego, setDataInicioEmprego] = useState('')
    const [dataFinalEmprego, setDataFinalEmprego] = useState('')
    const [trabalhoAqui, setTrabalhoAqui] = useState(false)
    const [descricaoFuncoes, setDescricaoFuncoes] = useState('')
    
    const {handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    return(
        <Form onSubmit={handleSubmit(onSave)}>
            <FormWrapper id="row1">
                <Wrapper>
                    <Field.Text label="Nome da empresa" name="nomeEmpresa" type="text" value={nomeEmpresa} {...register('nomeEmpresa')} onChange={(ev) => setNomeEmpresa(ev.target.value)}/>
                    <p>{errors.nomeEmpresa?.message}</p>
                </Wrapper>
                <Wrapper>
                    <Field.Text label="Cargo" name="cargo" type="text" value={cargo} {...register('cargo')} onChange={(ev) => setCargo(ev.target.value)}/>
                    <p>{errors.cargo?.message}</p>
                </Wrapper>
                <Wrapper>
                    <label htmlFor="nivelOperacional">Nível operacional</label>
                    <select name="nivelOperacional" id="nivelOperacional" value={nivelOperacional} {...register('nivelOperacional')} onChange={(ev) => setNivelOperacional(ev.target.value)}>
                        <option value="">Selecione</option>
                        <option value="operacional">Operacional</option>
                        <option value="estagio">Estágio</option>
                        <option value="auxiliar">Auxiliar</option>
                        <option value="assistente">Assistente</option>
                        <option value="trainee">Trainee</option>
                        <option value="tecnico">Técnico</option>
                        <option value="analista">Analista</option>
                        <option value="junior">Junior</option>
                        <option value="pleno">Pleno</option>
                        <option value="senior">Senior</option>
                    </select>
                    <p>{errors.nivelOperacional?.message}</p>
                </Wrapper>
            </FormWrapper>
            <FormWrapper>
                <Wrapper>
                    <Field.Text type="date" label="Data de inicio" name="dataInicioEmprego" value={dataInicioEmprego} {...register('dataInicioEmprego')} onChange={(ev) => setDataInicioEmprego(ev.target.value)}/>
                    <p>{errors.dataInicioEmprego?.message}</p>
                </Wrapper>
                <Wrapper>
                    <Field.Text type="date" label="Data final" name="dataFinalEmprego" value={dataFinalEmprego} {...register('dataFinalEmprego')} onChange={(ev) => setDataFinalEmprego(ev.target.value)} disable={trabalhoAqui ? true : false}/>
                    <p>{errors.dataFinalEmprego?.message}</p>
                </Wrapper>
                <div id="checkbox">
                <input type="checkbox" name="trabalhoAqui" onChange={() => setTrabalhoAqui(!trabalhoAqui)}/>
                <span>Trabalho aqui</span>
                </div>
            </FormWrapper>
            <FormWrapper>
                <Wrapper>
                    <label htmlFor="descricaoFuncoes" id="label">DESCRIÇÃO DAS FUNÇÕES</label>
                    <textarea name="descricaoFuncoes" id="descricaoFuncoes" cols="30" rows="10" value={descricaoFuncoes || ''} onChange={(ev) => setDescricaoFuncoes(ev.target.value)} ></textarea>
                </Wrapper>
                <Button
                onClick={()=> {
                    setNomeEmpresa("")
                    setCargo("")
                    setNivelOperacional("")
                    setDataInicioEmprego("")
                    setDataFinalEmprego("")
                    setTrabalhoAqui(false);
                    setDescricaoFuncoes("");
                    console.log(nomeEmpresa, cargo, nivelOperacional, dataInicioEmprego, dataFinalEmprego, trabalhoAqui, descricaoFuncoes)
                }}
                >
                Adicionar
                </Button>
            </FormWrapper>
        </Form>
    )
}