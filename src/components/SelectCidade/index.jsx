import React from 'react';
import '../SelectEstado/select.scss';


export const SelectCidade = ({className, id, name, onChange = ()=>{}, register, defaultValue, cities }) => { 
    return (
        <>
        <select value={defaultValue} className={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)} >
            <option value="">Seleciona uma cidade</option>
            {cities?.map((city)=>{
                const {label, value} = city;
                return(<option key={value} value={label}>{label}</option>)
            })}
        </select>
        </>
    );
}