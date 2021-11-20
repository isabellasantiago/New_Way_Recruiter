import React, {useState, useEffect} from 'react';
import Dados from '../../components/dados/Dados';
import { FormInfoAcad }from './Form/FormInfoAcad';
import { ListaInfoAcad } from './ListaInfoAcad/ListaInfoAcad';




export function InfoAcademicas(){
    
    const infoAcademicas = (data) => {
        console.log(data)
    };

    const [listaFormacao, setListaFormacao] =  useState()

    const addInfoAcademicas = (data) => {
        setListaFormacao([...listaFormacao || [], {data}])

    }

    const deleteFormacao = (index) => {
        let newListaFormacao = [...listaFormacao]
        newListaFormacao.splice(index, 1)

        setListaFormacao(newListaFormacao)
    }

    const saveFormacao = (formacaoToSave) => {
        localStorage.setItem("listaFormacao", JSON.stringify(formacaoToSave))
    }

    const loadListaFormacao = () => {
        const loadedFormacao = JSON.parse(localStorage.getItem("listaFormacao"))

        return loadedFormacao
    }
    useEffect(()=>{
        if(listaFormacao){
            saveFormacao(listaFormacao)
        }
    }, [listaFormacao])

    useEffect(() => {
        const loadedFormacao = loadListaFormacao();
        setListaFormacao(loadedFormacao);
    }, []);


    return(
    <Dados id="info-academicas">
        <h1>Informações acadêmicas</h1>
        <FormInfoAcad onSave={addInfoAcademicas}/>
        {listaFormacao ? <ListaInfoAcad formacao={listaFormacao} deleteFormacao={deleteFormacao}/> : null}
    </Dados>
    )
}