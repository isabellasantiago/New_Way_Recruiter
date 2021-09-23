import React from 'react';
import SelectForm from './SelectForm'



const Select = ({ label, register, name, className}) => {
    return <>
        <SelectForm ref={register} name={name} className={className}>
            <option value="">Selecione</option>
        </SelectForm>
    </>
}


export default Select;