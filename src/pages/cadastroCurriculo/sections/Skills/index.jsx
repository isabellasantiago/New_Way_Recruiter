import Dados from "../../dados/Dados";
import { InputSkills } from "./InputSkills";



export function SkillsInput(){

    return(
        <Dados>
            <InputSkills label="Hard Skills" placeholder="Adicione uma habilidade"/>
            <InputSkills label="Soft Skills" placeholder="Adicione uma habilidade"/>
        </Dados>
    )
}