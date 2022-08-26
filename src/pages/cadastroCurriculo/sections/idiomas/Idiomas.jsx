import React, {useState, useEffect} from 'react';
import Dados from '../../components/dados/Dados';
import {ListaIdiomas} from './ListaIdiomas/ListaIdiomas';
import {Form} from './Form/Form';





export function Idiomas(){

    const [idiomas, setIdiomas] = useState();
    const addIdioma = (ev, idioma, nivel) => {
        ev.preventDefault();
        setIdiomas([...idiomas || [], {idioma, nivel}])
        
    }
    const deleteIdioma = (index) => {
        let newIdiomas = [...idiomas]
        newIdiomas.splice(index, 1)

        setIdiomas(newIdiomas)
    }
    const saveIdioma = (idiomaToSave) => {
        localStorage.setItem("idiomas", JSON.stringify(idiomaToSave))
    }
    const loadedIdioma = () => {
        const loadedIdioma = JSON.parse(localStorage.getItem("idiomas"))
        return loadedIdioma
    }
    useEffect(()=>{
        if(idiomas){
            saveIdioma(idiomas)
        }
    },[idiomas])
    
    useEffect(()=>{
        const loadedIdiomas = loadedIdioma();
        setIdiomas(loadedIdiomas);
        console.log(loadedIdiomas)
    },[])


    return (
        <Dados>
         <h1>Idiomas</h1>
         <Form onSave={addIdioma}/>
         {idiomas ? <ListaIdiomas  idiomas={idiomas} deleteIdioma={deleteIdioma}/> : null}
         
        </Dados>
    )
}