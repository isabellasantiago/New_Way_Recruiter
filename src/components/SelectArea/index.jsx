import {SelectAreas} from './style.js'
import { areasAtuacao } from '../../helpers/areaAtuacao'

export const SelectArea = ({className, id, name, onChange=()=>{}, register, defaultValue }) => {

    return(
        <SelectAreas className={className} id={id || name} name={name | id} onChange={onChange} {...register(`${name}`)} defaultValue={defaultValue}>
            <option value="">Selecione</option>
            {areasAtuacao.map((area) => {
                const { name } = area;
                let label;
                if(name === "administrativa"){
                    label = "Administrativa"
                }
                if(name === "artesEDesign"){
                    label = "Artes e Design"
                }
                if(name === "exatasETecnologicas"){
                    label = "Exatas e Tecnológicas"
                }
                if(name === "sociaisEHumanas"){
                    label = "Sociais e Humanas"
                }
                if(name === "comunicacaoEInformacao"){
                    label = "Comunicação e Informação"
                }
                if(name === "engenharias"){
                    label = "Engenharias"
                }
                if(name === "meioAmbiente"){
                    label = "Meio Ambiente"
                }
                if(name === "saudeEBemEstar"){
                    label = "Saúde e Bem Estar"
                }

                return(<option key={name} value={name}>{label}</option>);
            })
            }
        </SelectAreas>
    )
}