import React, { useContext, useState } from 'react';
import JobVacancieContext from '../../../../../../services/contexts/registerJobVacancie';
import { Wrapper } from '../../../../../cadastroCurriculo/components/Wrapper';
import { FormItem } from './form'
import { ListaItem } from './lista'


const whichItems = (nameList, jobVacancie) => {
    return nameList === 'requirements' ? jobVacancie.requirements : jobVacancie.benefits
}

export function List({ label, name, id, register }) {

    const {jobVacancie, setValues} = useContext(JobVacancieContext);
    
    const [itemList, setItemList] = useState(whichItems(name, jobVacancie));
    

    const addItem = (ev, item) => {
        ev.preventDefault()
        setItemList([...itemList || [], item])
        setValues({[name]: itemList})
    }

    const deleteItem = (index) => {
        let newItems = [...itemList];
        newItems.splice(index, 1)

        setItemList(newItems)
    }

    return(
        <Wrapper>
        <FormItem onSave={addItem} label={label} name={name} id={id} register={register}/>
        {itemList ? <ListaItem itens={itemList} deleteItem={deleteItem}/> : null}
        </Wrapper>
    )
}