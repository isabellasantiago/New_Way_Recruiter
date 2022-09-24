import { useEffect, useState } from 'react';
import { fetchCitiesForState, parseCity } from '../../helpers/ibge';


import '../SelectEstado/select.scss';


export const SelectCidade = ({className, id, name, state, onChange=()=>{}, register}) => {
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        fetchCitiesForState(state).then(parseCity).then(setCities)
    }, [state]);

    return (
        <select className={className} id={id || name} name={name || id} onChange={onChange} {...register(`${name}`)}>
            <option value="">Seleciona uma cidade</option>
            {cities.map((city)=>{
                const {label, value} = city;
                return(<option key={value} value={value}>{label}</option>)
            })}
        </select>
    );
}