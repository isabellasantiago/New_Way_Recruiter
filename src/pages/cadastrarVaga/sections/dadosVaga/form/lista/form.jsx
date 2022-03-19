import React, { useState } from 'react';
import { Wrapper } from '../../../../../cadastroCurriculo/components/Wrapper'
import AddIcon from '@material-ui/icons/Add';
import { Form, ItemInput } from './style'
import {useForm} from 'react-hook-form'
import schema from '../../../../../../validation/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { WrapperVaga } from '../style';

export function FormItem(props) {
    const { name, id, className, label, onSave } = props;
    const [item, setItem] = useState();

    return(
        <Form>
            <WrapperVaga>
            <label htmlFor={id}>{label}</label>
            <ItemInput>
                <input type="text" name={name} id={id} className={className} value={item} onChange={ev => {
                    setItem(ev.target.value)
                    ev.target.value=""
                    }} />
                <button type="submit" onClick={ev => onSave(ev, item)} ><AddIcon /></button>
            </ItemInput>
            </WrapperVaga>
           
        </Form>
    )
}