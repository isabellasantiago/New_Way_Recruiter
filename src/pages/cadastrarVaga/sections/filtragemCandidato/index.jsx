import React, {useState} from "react";
import { Section } from "../style";
import { FormFiltragem } from "./form/formFiltragem";

//passar o valor de filtragem para o index cadastrarVaga

export function FiltragemCandidatos(props){
    const { register, handleSubmit, errors } = props;
    const [filtragem, setFiltragem] = useState()

    return(
        <Section>
            <FormFiltragem register={register} handleSubmit={handleSubmit} errors={errors}/>
        </Section>
    )
}