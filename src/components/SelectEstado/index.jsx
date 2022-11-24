import {useEffect, useState, useLayoutEffect } from 'react';
import { fetchStates, parseStates } from '../../helpers/ibge';


export const SelectEstado = ({className, id, name, onChange = ()=>{}, register, defaultValue, }) => {
    const [states, setStates] = useState([]);
    const [dfValue, setDfValue] = useState(defaultValue);

    useLayoutEffect(()=>{
        fetchStates().then(parseStates).then(setStates);
        setDfValue(states?.find((state) => state.value === defaultValue))
    }, []);
    
    return (
        <>
        <select defaultValue={dfValue} class={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)} >
            <option value="">Seleciona um estado</option>
            {states.map((state)=>{
                const {label, value} = state;
                return (<option key={value} value={value}>{label}</option>)
            })}
        </select>
        </>
    );
}