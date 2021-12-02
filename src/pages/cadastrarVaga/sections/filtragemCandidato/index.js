import React, {useState} from "react";
import { Section } from "../style";
import { FormFiltragem } from "./form/formFiltragem";

//passar o valor de filtragem para o index cadastrarVaga

export function FiltragemCandidatos(props){
    const { filtragemValue } = props;
    const [filtragem, setFiltragem] = useState()

    const addFiltragem = (data) => {
        console.log(data)
        setFiltragem(...filtragem || [], {data})
        filtragemValue = filtragem
    }

    return(
        <Section>
            <FormFiltragem onSave={addFiltragem}/>
        </Section>
    )
}