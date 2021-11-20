import React, {useState} from 'react';
import Dados from '../../components/dados/Dados';
import { FormContratacao } from './Form';

export function DadosContratacao(){
    const [contratacao, setCrontatacao] = useState();

    const saveContratacao = (ev, areaDesejada, contrato, nivelDesejado, profissao) => {
        ev.preventDefault();
        const data = {
            areaDesejada,
            contrato,
            nivelDesejado,
            profissao
        }
        console.log(data)
    }

    return(
        <Dados>
            <h1>Dados para contratação</h1>
        <FormContratacao onSave={saveContratacao}/>
        </Dados>
    )
}