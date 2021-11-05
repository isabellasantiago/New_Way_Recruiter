import { useState, useEffect } from 'react';
import Dados from '../../components/dados/Dados';
import {ProfessionalExpierenceForm} from './form/Form';
import { ListaProfessionalExpierence } from './listaProfessionalExperience';

export function ProfessionalExpierence(){
    const [listExperiences, setListExperiences] = useState();

    const addExperience = (ev, nomeEmpresa, cargo, nivelOperacional, dataInicioEmprego, dataFinalEmprego, trabalhoAqui,descricaoFuncoes) => {
        ev.preventDefault();
        setListExperiences([...listExperiences || [], {nomeEmpresa, cargo, nivelOperacional, dataInicioEmprego, dataFinalEmprego, trabalhoAqui, descricaoFuncoes}])
    }

    const deleteExperience = (index) => {
        let newListExp = [...listExperiences]
        newListExp.splice(index, 1)
        setListExperiences(newListExp)
    }

    const saveListExperiences = (exp) => {
        localStorage.setItem("listExperiences", JSON.stringify(exp))
    }

    const loadListExperiences = (exp) => {
        const loadedExperiences = JSON.parse(localStorage.getItem("listExperiences"))
        return loadedExperiences
    }

    useEffect(() => {
        if(listExperiences){
            saveListExperiences(listExperiences)
        }
    }, [listExperiences])
    useEffect(() => {
        const loadedExperiences = loadListExperiences();
        setListExperiences(loadedExperiences);
    },[])

    return(
        <Dados>
            <h1>Experiência profissional</h1>
            <ProfessionalExpierenceForm onSave={addExperience}/>
            {listExperiences ? 
            <ListaProfessionalExpierence experience={listExperiences} deleteExp={deleteExperience}/>
            : null}
        </Dados>
    )
}