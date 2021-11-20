import { useState, useEffect } from 'react'
import { Select } from './style'
import { areasAtuacao } from '../../helpers/areaAtuacao';


export const SelectProfession = ({className, id, name, onChange=()=>{}, area}) => {
    const [professions, setProfessions] = useState()
    useEffect(() => {
        const areaProfissao = areasAtuacao.filter(areaP => areaP.name === area)
        if(areaProfissao.length !== 0){
            setProfessions(areaProfissao[0].professions)
        }
        
    }, [area])
    return(
        <Select className={className} id={id || name} name={name || id} onChange={onChange}>
            <option value="">Selecione...</option>
            {professions?.map((profession) => {
                const { name } = profession
                const professionName = name
                return (<option key={professionName} value={professionName}>{professionName}</option>)
            })}
        </Select>
    )
}