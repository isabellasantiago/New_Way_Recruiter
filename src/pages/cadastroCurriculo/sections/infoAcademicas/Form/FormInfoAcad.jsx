import React, { useState } from 'react';
import Button from '../../../../../components/Button/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Wrapper } from '../../../components/Wrapper';
import { Form, FormWrapper} from './style';
import { useFieldArray } from 'react-hook-form';


export function FormInfoAcad({ useForm }){
    const { register, errors, control, watch } = useForm;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'academicsInfo'
    })

    const add = () => {
        append({
            instituitionName: '',
            courseName: '',
            academicFormation: '',
            academicFormationStatus: '',
            graduationEndDate: '',
            graduationStartDate: '',
        })
    }
    console.log(watch())

    return(
        <>
        <Button onClick={add}>
            <a href="#infoac">Adicionar</a>
        </Button>
        {fields.map((field, index) => {
            const moment = watch(`academicsInfo[${index}].academicFormationStatus`)
            return (
                <Form key={field.id} id="infoac">
                    <FormWrapper>
                        <Wrapper>
                            <label>Instituição de ensino</label>
                            <input type="text" name="instituitionName" {...register(`academicsInfo.${index}.instituitionName`)} defaultValue={field.instituitionName}/>
                        </Wrapper>
                        <Wrapper>
                            <label>Curso</label>
                            <input type="text" name="courseName" {...register(`academicsInfo.${index}.courseName`)} defaultValue={field.coursenName}/>
                        </Wrapper>
                        <Wrapper>
                            <label htmlFor="tipoFormacao">Formação</label>
                            <select id="tipoFormacao" name="academicFormation" {...register(`academicsInfo.${index}.academicFormation`)} defaultValue={field.academicFormation}>
                                <option value="">Selecione</option>
                                <option value={1}>Ensino regular</option>
                                <option value={7}>Extra curricular</option>
                                <option value={2}>Tecnico</option>
                                <option value={3}>Superior</option>
                                <option value={4}>Pós graduação</option>
                                <option value={5}>Mestrado</option>
                                <option value={6}>Doutorado</option>
                            </select>
                        </Wrapper>
                    </FormWrapper>
                    <FormWrapper>
                        <Wrapper>
                            <label htmlFor="statusFormacao">Status</label>
                            <select id="statusFormacao" name="academicFormationStatus" {...register(`academicsInfo.${index}.academicFormationStatus`)} defaultValue={field.academicFormationStatus}>
                                <option value="">Selecione</option>
                                <option value="cursando">Cursando</option>
                                <option value="concluido">Concluído</option>
                                <option value="trancado">Trancado</option>
                            </select>
                        </Wrapper>
                        <Wrapper>
                            <label>Data de inicio</label>
                            <input type="date" {...register(`academicsInfo.${index}.graduationStartDate`)} defaultValue={field.graduationStartDate}/>
                        </Wrapper>
                        {moment !== 'cursando' && (
                            <Wrapper>
                                <label>Data de término</label>
                                <input type="date" {...register(`academicsInfo.${index}.graduationEndDate`)} defaultValue={field.graduationEndDate}/>
                            </Wrapper>
                        )}
                        <button onClick={() => remove(field.id)}>
                            <DeleteOutlineIcon
                                color="#fff"
                            />
                        </button>
                    </FormWrapper>
                </Form>
            )
        })}
        </>
    )
}