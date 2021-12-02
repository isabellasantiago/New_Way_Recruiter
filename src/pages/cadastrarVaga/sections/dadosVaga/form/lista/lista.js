import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import { Item }from './style'
import CheckIcon from '@mui/icons-material/Check';


export function ListaItem(props){
    const { itens } = props


    return(
        <>
        {itens.map((item, index) => {
           return(
           <Item id="item">
            <CheckIcon />
            <span>{item}</span>
            <button onClick={() => props.deleteItem(index)}><DeleteIcon/></button>
           </Item>
           )
        })}
        
        </>
    )
}