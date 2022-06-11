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

    const onClickSubmit = () => {
        const formData = new FormData();

        formData.append('title')
        formData.append('salary')
        formData.append('contractType')
        formData.append('about')
        formData.append('cityAndState')
        formData.append('level')
        formData.append('requirements')
        formData.append('benefits')
        formData.append('gender')
        formData.append('ethnicity')
        formData.append('pcd')
        formData.append('acceptsAllLevels')
        // formData.append('softSkills', softSkills)
    }

    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps steps={setStep} />
            <form >
                {step === 1 ?
                <DadosVaga id="dadosVaga" register={register} setStep={setStep} errors={errors} /> :
                <FiltragemCandidatos id="filtragemCandidos" register={register} errors={errors} />
                }
            </form>
        </Body>
    )
}