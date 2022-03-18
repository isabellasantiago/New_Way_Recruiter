import React, { useState } from 'react';

import { Body } from './style';

import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent'
import { Steps } from './sections/steps';
import { DadosVaga } from './sections/dadosVaga/index'
import { FiltragemCandidatos } from './sections/filtragemCandidato'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaVaga from '../../validation/schemaVaga';



export function CadastroVaga(){
    const [step, setStep] = useState(1)

    const {register, handleSubmit, formState: {errors}, control} = useForm({
        resolver: yupResolver(schemaVaga)
    })

    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps steps={setStep} />
            {step === 1 ? 
            <DadosVaga id="dadosVaga" register={register} setStep={setStep} errors={errors} /> : 
            <FiltragemCandidatos id="filtragemCandidos" register={register} errors={errors} control={control} handleSubmit={handleSubmit}/>
            }
        </Body>
    )
}