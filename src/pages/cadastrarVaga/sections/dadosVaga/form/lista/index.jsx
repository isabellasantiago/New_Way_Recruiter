import React, {useState} from 'react';
import { Wrapper } from '../../../../../cadastroCurriculo/components/Wrapper';
import { FormItem } from './form'
import { ListaItem } from './lista'



export function List({ label, name, id, items }) {
    
    const [itemList, setItemList] = useState([]);
    

    const addItem = (ev, item) => {
        ev.preventDefault()
        setItemList([...itemList || [], item])
        items = itemList
    }

    const deleteItem = (index) => {
        let newItems = [...itemList];
        newItems.splice(index, 1)

        setItemList(newItems)
    }

    return(
        <Wrapper>
        <FormItem onSave={addItem} label={label} name={name} id={id}/>
        {itemList ? <ListaItem itens={itemList} deleteItem={deleteItem}/> : null}
        </Wrapper>
    )
}