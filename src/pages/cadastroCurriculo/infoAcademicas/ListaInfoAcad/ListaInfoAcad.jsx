import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {format, getYear} from 'date-fns';

import {TableLista, TableHeader, TableTitle, TableBody, TableItem, TableData, TableRow} from './style';



export function ListaInfoAcad(props){
    const {formacao} = props;

    const dateValidation = (date, dateFinal) => {
        if(Number(getYear(date)) > Number(getYear(dateFinal))){
            throw new Error("Invalid date")
        }

        return format(dateFinal, 'MMM/yyy')
    }


    return(
        <TableLista>
            <TableHeader>
                <TableRow>
                    <TableTitle>Formação</TableTitle>
                    <TableTitle>Status</TableTitle>
                    <TableTitle>Instituição</TableTitle>
                    <TableTitle>Curso</TableTitle>
                    <TableTitle>Início</TableTitle>
                    <TableTitle>Término</TableTitle>
                </TableRow>
            </TableHeader>
            <TableBody>
            {formacao.map((formacaoInfo, index) => {
                    if(formacaoInfo.id !== 0){
                        return(
                            <TableItem key={index}>
                                <TableData>{formacaoInfo.tipoFormacao}</TableData>
                                <TableData>{formacaoInfo.statusFormacao}</TableData>
                                <TableData>{formacaoInfo.instituicao}</TableData>
                                <TableData>{formacaoInfo.curso}</TableData>
                                <TableData>{formacaoInfo.dataInicio}</TableData>
                                <TableData>{formacaoInfo.dataTermino}</TableData>
                                <button onClick={() => props.deleteFormacao(index)}><DeleteIcon/></button>
                            </TableItem>
                        )
                    }
                })
            }
            </TableBody>   
        </TableLista>
    )
}