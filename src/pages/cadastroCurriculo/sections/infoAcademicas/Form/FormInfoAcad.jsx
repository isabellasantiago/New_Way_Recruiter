import React from 'react';
import Button from '../../../../../components/Button/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Wrapper } from '../../../components/Wrapper';
import { Form, FormWrapper } from './style';
import { useFieldArray } from 'react-hook-form';


export function FormInfoAcad({ useForm }) {
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

    return (
        <>
            <Button onClick={add}>
                <a href="#infoac">Adicionar</a>
            </Button>
            {fields.map((field, index) => {
                const moment = watch(`academicsInfo[${index}].academicFormationStatus`);
                console.log(watch(`academicsInfo[${index}].academicFormationStatus`))

                return (
                    <Form key={field.id} id="infoac">
                        <FormWrapper>
                            <Wrapper>
                                <label>Instituição de ensino</label>
                                <input type="text" name="instituitionName" {...register(`academicsInfo.${index}.instituitionName`)} defaultValue={field?.instituitionName} />
                                <span>{errors?.academicsInfo?.[index]?.instituitionName?.message}</span>
                            </Wrapper>
                            <Wrapper>
                                <label>Curso</label>
                                <input type="text" name="courseName" {...register(`academicsInfo.${index}.courseName`)} defaultValue={field.coursenName} />
                                <span>
                                    {errors?.academicsInfo?.[index]?.courseName?.message}
                                </span>
                            </Wrapper>
                            <Wrapper>
                                <label htmlFor="tipoFormacao">Formação</label>
                                <select id="tipoFormacao" name="academicFormation" {...register(`academicsInfo.${index}.academicFormation`)} defaultValue={field.academicFormation}>
                                    <option value="">Selecione</option>
                                    <option value={Number(1)}>Ensino regular</option>
                                    <option value={Number(7)}>Extra curricular</option>
                                    <option value={Number(2)}>Tecnico</option>
                                    <option value={Number(3)}>Superior</option>
                                    <option value={Number(4)}>Pós graduação</option>
                                    <option value={Number(5)}>Mestrado</option>
                                    <option value={Number(6)}>Doutorado</option>
                                </select>
                                <span>
                                    {errors?.academicsInfo?.[index]?.academicFormation?.message}
                                </span>
                            </Wrapper>
                        </FormWrapper>
                        <FormWrapper>
                            <Wrapper>
                                <label htmlFor="statusFormacao">Status</label>
                                <select id="statusFormacao" name="academicFormationStatus" {...register(`academicsInfo.${index}.academicFormationStatus`)} defaultValue={field.academicFormationStatus}>
                                    <option value="">Selecione</option>
                                    <option value={Number(1)}>Cursando</option>
                                    <option value={Number(2)}>Concluído</option>
                                    <option value={Number(3)}>Trancado</option>
                                </select>
                                <span>
                                    {errors?.academicsInfo?.[index]?.instituitionName?.message}
                                </span>
                            </Wrapper>
                            <Wrapper>
                                <label>Data de inicio</label>
                                <input type="date" {...register(`academicsInfo.${index}.graduationStartDate`)} defaultValue={field.graduationStartDate} />
                                <span>
                                    {errors?.academicsInfo?.[index]?.graduationStartDate?.message}
                                </span>
                            </Wrapper>
                            {moment !== '1' && (
                                <Wrapper>
                                    <label>Data de término</label>
                                    <input type="date" {...register(`academicsInfo.${index}.graduationEndDate`)} defaultValue={null} />
                                    <span>
                                        {errors?.academicsInfo?.[index]?.graduationEndDate?.message}
                                    </span>
                                </Wrapper>
                            )}
                            <button onClick={() => remove(field.id)}>
                                <DeleteOutlineIcon
                                    color="#fff"
                                >
                                    <a href="#infoac" />
                                </DeleteOutlineIcon>
                            </button>
                        </FormWrapper>
                    </Form>
                )
            })}
        </>
    )
}