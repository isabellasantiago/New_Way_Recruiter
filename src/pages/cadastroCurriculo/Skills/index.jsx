import Dados from "../dados/Dados";
import { InputSkills } from "./InputSkills";



export function SkillsInput(){

    return(
        <Dados>
            <InputSkills label="Hard Skills" placeholder="Adicione aqui suas habilidades técnicas"/>
            <InputSkills label="Soft Skills" placeholder="Adicione aqui suas habilidades comportamentais"/>
        </Dados>
    )
}