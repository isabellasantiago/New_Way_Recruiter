import React, {useState} from 'react' 
import { Section } from '../style.js'
import { FormVaga } from './form/formVaga'

//passar os dados da vaga para o index cadastrarVaga

export function DadosVaga(props){
    const [ vagaForm, setVagaForm ] = useState();
    const { vagaValue } = props;

    const addVagaForm = (data) => {
        console.log(data)
        setVagaForm(...vagaForm || [], data)
        vagaValue = vagaForm
    }

    return (
        <Section>
            <FormVaga vagaValue={addVagaForm}/>
        </Section>
    )
}