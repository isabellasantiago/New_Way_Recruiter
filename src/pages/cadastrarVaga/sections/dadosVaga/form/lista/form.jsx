import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Form, ItemInput } from './style'
import { WrapperVaga } from '../style';


export function FormItem(props) {
    const { id, label, onSave } = props;
    const [item, setItem] = useState();

    return(
        <Form>
            <WrapperVaga>
            <label htmlFor={id}>{label}</label>
            <ItemInput>
                <input 
                    type="text"
                    value={item}
                    onChange={ev => {
                        setItem(ev.target.value)
                        ev.target.value=""
                    }}
                    id={id}                    
                />
                <button type="submit" onClick={ev => {
                    onSave(ev, item)
                    }} ><AddIcon /></button>
            </ItemInput>
            </WrapperVaga>
           
        </Form>
    )
}