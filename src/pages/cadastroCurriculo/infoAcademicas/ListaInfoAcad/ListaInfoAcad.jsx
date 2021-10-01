import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import './style.scss';

export function ListaInfoAcad(props){
    const {formacao} = props;

    return(
        <table>
            <thead>
                <tr>
                    <th>Formação</th>
                    <th>Status</th>
                    <th>Instituição</th>
                    <th>Curso</th>
                    <th>Início</th>
                    <th>Término</th>
                </tr>
            </thead>
            <tbody>
            {formacao.map(formacaoInfo => {
                return(
                    <tr id="item">
                        <td>{formacaoInfo.tipoFormacao}</td>
                        <td>{formacaoInfo.statusFormacao}</td>
                        <td>{formacaoInfo.instituicao}</td>
                        <td>{formacaoInfo.curso}</td>
                        <td>{formacaoInfo.dataInicio}</td>
                        <td>{formacaoInfo.dataTermino}</td>
                        <button><DeleteIcon/></button>
                    </tr>
                )
            })}
            </tbody>   
        </table>
    )
}