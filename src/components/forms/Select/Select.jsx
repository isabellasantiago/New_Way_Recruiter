import React from 'react';
import SelectForm from './SelectForm'



const Select = ({onChange, name, className, value}) => {
    return <>
        <SelectForm name={name} className={className} onChange={onChange} value={value}>
            <option value="">Selecione</option>
        </SelectForm>
    </>
}


export default Select;