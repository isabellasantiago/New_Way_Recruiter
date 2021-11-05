import React, {useState} from 'react';
import {Form} from './style';
import Field from '../../../../../components/forms/Field';
import {Wrapper} from '../../../components/Wrapper';
import Button from '../../../../../components/Button/Button'
import {FormWrapper} from '../../infoAcademicas/Form/style'


export function ProfessionalExpierenceForm(props){
    const {onSave} = props;
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [cargo, setCargo] = useState('')
    const [nivelOperacional, setNivelOperacional] = useState('')
    const [dataInicioEmprego, setDataInicioEmprego] = useState('')
    const [dataFinalEmprego, setDataFinalEmprego] = useState('')
    const [trabalhoAqui, setTrabalhoAqui] = useState(false)
    const [descricaoFuncoes, setDescricaoFuncoes] = useState('')
    
    return(
        <Form onSubmit={e => e.preventDefault()}>
            <FormWrapper id="row1">
                <Field.Text label="Nome da empresa" name="nomeEmpresa" type="text" value={nomeEmpresa || ''} onChange={(ev) => setNomeEmpresa(ev.target.value)}/>
                <Field.Text label="Cargo" name="cargo" type="text" value={cargo || ''} onChange={(ev) => setCargo(ev.target.value)}/>
                <Wrapper>
                    <label htmlFor="nivelOperacional">Nível operacional</label>
                    <select name="nivelOperacional" id="nivelOperacional" value={nivelOperacional || ''} onChange={(ev) => setNivelOperacional(ev.target.value)}>
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
                </Wrapper>
            </FormWrapper>
            <FormWrapper>
                <Field.Text type="date" label="Data de inicio" name="dataInicioEmprego" value={dataInicioEmprego || ''} onChange={(ev) => setDataInicioEmprego(ev.target.value)}/>
                <Field.Text type="date" label="Data final" name="dataFinalEmprego" value={dataFinalEmprego || ''} onChange={(ev) => setDataFinalEmprego(ev.target.value)} disable={trabalhoAqui ? true : false}/>
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
                onClick={(ev)=> {
                    onSave(ev, nomeEmpresa, cargo, nivelOperacional, dataInicioEmprego, dataFinalEmprego, trabalhoAqui, descricaoFuncoes)
                    setNomeEmpresa("")
                    setCargo("")
                    setNivelOperacional("")
                    setDataInicioEmprego("")
                    setDataFinalEmprego("")
                    setTrabalhoAqui(false);
                    setDescricaoFuncoes("");
                    console.log(nomeEmpresa, cargo)
                }}
                >
                Adicionar
                </Button>
            </FormWrapper>
        </Form>
    )
}