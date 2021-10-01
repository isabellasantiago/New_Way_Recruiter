import React, {useState} from 'react';
import Dados from '../dados/Dados';
import { FormInfoAcad }from './Form/FormInfoAcad';
import { ListaInfoAcad } from './ListaInfoAcad/ListaInfoAcad';





const valorInicial = {id: 0, instituicao: '', curso:'', tipoFormacao: '', statusFormacao: '', dataInicio: '', dataTermino: ''}

export function InfoAcademicas(){
    
    const infoAcademicas = (data) => {
        console.log(data)
    };

    const [listaFormacao, setListaFormacao] =  useState([valorInicial])
    let count = 1;

    const addInfoAcademicas =(ev, instituicao, curso, tipoFormacao, statusFormacao, dataInicio, dataTermino) => {
        ev.preventDefault();
        setListaFormacao([...listaFormacao, {instituicao, curso, tipoFormacao, statusFormacao, dataInicio, dataTermino}])
    }

    return(
    <Dados id="info-academicas">
        <h1>Informações acadêmicas</h1>
        <FormInfoAcad onSave={addInfoAcademicas}/>
        {console.log(addInfoAcademicas)}
        <ListaInfoAcad formacao={listaFormacao}/>
    </Dados>
    )
}