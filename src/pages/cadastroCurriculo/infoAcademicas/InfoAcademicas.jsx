import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';


import Field from '../../../components/forms/Field';
import Select from '../../../components/forms/Select/SelectForm'

import './style.scss';

import Dados from '../dados/Dados';
import Label from '../../../components/forms/Field/Label/Label';
import Content from '../../../components/forms/Field/Content/Content';
import Button from '../../../components/Button/Button';
import { IconButton} from '@material-ui/core';
import {AddIcon} from'@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'



const valorInicial = {id: 0, instituicao: '', curso:'', tipoFormacao: '', statusFormacao: '', dataInicio: '', dataConclusao: ''}

export function InfoAcademicas(){
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const infoAcademicas = (data) => {
        console.log(data)
    };

    const [listaFormacao, setListaFormacao] =  useState([valorInicial])
    let count = 1;

    function onChange(ev){
        const {name, value} = ev.target;

        setListaFormacao({...listaFormacao, [name]: value})
    }

    const handleChange = (instituicao, id, curso, tipoFormacao, status, dataInicio, dataConclusao) => {
        setListaFormacao(prev => prev.map(item => item.id === id ? {...item, instituicao, curso, tipoFormacao, status, dataInicio, dataConclusao } : item))
    }

    const handleDelete = (id) => {
        setListaFormacao(prev => prev.filter(item => item.id !== id))
    }

    const handleAdd = (index) => {
        const novaFormacao = {id: count++, instituicao: '', curso:'', tipoFormacao: '', status: '', dataInicio: '', dataConclusao: ''}
        setListaFormacao(prev => [...prev.slice(0, index + 1), novaFormacao, ...prev.slice(index + 1)])
    }
    return(
    <Dados id="info-academicas">
        <h1>Informações acadêmicas</h1>
        <form id="info-academicas" onSubmit={handleSubmit(infoAcademicas)}>
            <div id="sec1">
                <Field.Text  label="Instituição de ensino" type="text" name="instituicao" onChange={onChange} {...register("instituicao")} value={listaFormacao.instituicao}/>
                <Field.Text  label="Curso" type="text" name="curso" onChange={onChange} {...register("curso")} value={listaFormacao.curso}/>
            </div>
            <div id="sec2">
                <Label>
                    <Content>Formação</Content>
                    <Select {...register("tipoFormacao")} name="tipoFormacao" onChange={onChange} value={listaFormacao.tipoFormacao}>
                        <option value="">Selecione</option>
                        <option value="extraCurricular">Extra curricular</option>
                        <option value="tecnico">Tecnico</option>
                        <option value="superior">Superior</option>
                        <option value="posGraduação">Pós graduação</option>
                        <option value="mestrado">Mestrado</option>
                        <option value="doutorado">Doutorado</option>
                    </Select>
                </Label>
                <Label>
                    <Content>Status</Content>
                    <Select {...register("statusFormacao")} name="statusFormacao" onChange={onChange} value={listaFormacao.statusFormacao}>
                        <option value="">Selecione</option>
                        <option value="cursando">Cursando</option>
                        <option value="concluído">Concluído</option>
                        <option value="trancado">Trancado</option>
                    </Select>
                </Label>
                <Field.Text label="Data de inicio" type="month" {...register("dataInicio")} name="dataInicio" onChange={onChange} value={listaFormacao.dataInicio}/>
                <Field.Text label="Data de término" type="month" {...register("dataConclusao")} name="dataConclusao" onChange={onChange} value={listaFormacao.dataConclusao}/>
                <Button type="submit">Adicionar</Button>
            </div>
            
                {/* {listaFormacao.map((item, index) => {
                <div id="sec3">
                    <div key={item.id}>
                        <Field.Text value={item.instituicao}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <Field.Text value={item.curso}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <Field.Text value={item.tipoFormacao}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <Field.Text value={item.statusFormacao}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <Field.Text value={item.dataInicio}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <Field.Text value={item.dataConclusao}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                        />
                        <IconButton onClick={() => handleAdd(index)}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
                })} */}
            
        </form>
    </Dados>
    )
}