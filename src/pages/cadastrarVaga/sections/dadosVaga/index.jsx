import React, {useState} from 'react' 
import { Section } from '../style.js'
import { FormVaga } from './form/formVaga'

//passar os dados da vaga para o index cadastrarVaga

export function DadosVaga(props){
    return (
        <Section>
            <FormVaga />
        </Section>
    )
}