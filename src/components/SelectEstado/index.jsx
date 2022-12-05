import React from 'react';

export const SelectEstado = ({className, id, name, onChange = ()=>{}, register, defaultValue, states }) => {    
    return (
        <>
        <select value={defaultValue} class={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)} >
            <option value="">Seleciona um estado</option>
            {states?.map((state)=>{
                const { label, value } = state;
                return (<option key={value} value={value}>{label}</option>)
            })}
        </select>
        </>
    );
}