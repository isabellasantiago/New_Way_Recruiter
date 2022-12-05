import React from 'react'
import { Select } from './style'



export const SelectProfession = ({className, id, name, onChange=()=>{}, professions, register, defaultValue}) => {
    
    return(
        <Select className={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)} value={defaultValue}>
            <option value="">Selecione...</option>
            {professions?.map((profession) => {
                const { name } = profession
                return (<option key={name} value={name}>{name}</option>)
            })}
        </Select>
    )
}