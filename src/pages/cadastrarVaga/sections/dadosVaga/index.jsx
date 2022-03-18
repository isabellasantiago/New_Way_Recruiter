import React, {useState} from 'react' 
import { Section } from '../style.js'
import { FormVaga } from './form/formVaga'

//passar os dados da vaga para o index cadastrarVaga

export function DadosVaga(props){
    const { register, setStep, errors } = props;

    return (
        <Section>
            <FormVaga register={register} setStep={setStep} errors={errors}/>
        </Section>
    )
}