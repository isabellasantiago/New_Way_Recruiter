import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Form, ItemInput } from './style'
import { WrapperVaga } from '../style';


export function FormItem(props) {
    const { name, id, label, onSave, register } = props;
    const [item, setItem] = useState();

    return(
        <Form>
            <WrapperVaga>
            <label htmlFor={id}>{label}</label>
            <ItemInput>
                <input 
                    type="text"
                    onChange={ev => {
                        setItem(ev.target.value)
                        ev.target.value=""
                    }}
                    id={id}
                    {...register(name)}
                    
                />
                <button type="submit" onClick={ev => {
                    onSave(ev, item)
                    }} ><AddIcon /></button>
            </ItemInput>
            </WrapperVaga>
           
        </Form>
    )
}