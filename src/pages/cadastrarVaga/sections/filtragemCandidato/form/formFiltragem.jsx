import { useEffect, useState } from "react";
import { Form, WrapperVaga, InputWrapper, Row } from "../../dadosVaga/form/style";
import { Wrapper } from '../../../../cadastroCurriculo/components/Wrapper'
import { InputSkills } from "../../../../cadastroCurriculo/sections/Skills/InputSkills";
import Button from '../../../../../components/Button/Button'
import Api from '../../../../../services/mainApi'
import { useForm, Controller } from "react-hook-form";
import { schema2 } from "../../../../../validation/schemaVaga";
import { yupResolver } from "@hookform/resolvers/yup";
import { Body, Section } from "../../../style";
import { useJobVacancie } from "../../../../../services/contexts/registerJobVacancie";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../../../../components/HeaderComponent/HeaderComponent";
import { Steps } from "../../steps";

//inputskills nao estao funcionando como deveriam
//faixa passa o estado somente depois do segundo clique
//ao pressionar enter no input skills ele volta para a sessao de dados
//nada acontece ao clicar em "cadastrar"

export function FormFiltragem(props){
    const {jobVacancie, setValues } = useJobVacancie();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors}, watch, control  } = useForm({
        defaultValues: {
            softSkills: jobVacancie.softSkills,
            hardSkills: jobVacancie.hardSkills,
            gender: jobVacancie.gender,
            ethnicity: jobVacancie.ethnicity,
            pcd: jobVacancie.pcd,
            acceptsAllLevels: jobVacancie.acceptsAllLevels,
            especificEthnicity: jobVacancie.especificEthnicity, 
            especificGender: jobVacancie.especificGender,
        },
        resolver: yupResolver(schema2)
    })
    const [especificGender, setEspecificGender] = useState()
    const [especificEthnicity, setEspecificEthnicity] = useState()
    const [hardSkillsList, setHardSkillsList] = useState([])
    const [softSkillsList, setSoftSkillsList] = useState([])
    const [hardSkills, setHardSkills] = useState([])
    const [softSkills, setSoftSkills] = useState([])
    const [suggestionsSoftSkills, setSuggestionsSoftSkills] = useState([])
    const [suggestionsHardSkills, setSuggestionsHardSkills] = useState([])


    useEffect(() => {
        const getSuggestion = async () => {
            const suggestions = await Api.get('/hardSkills')
            setHardSkillsList(suggestions.data)
        }
        const getSuggestionSoftSkills = async () => {
            const suggestions = await Api.get('/softskills')
            setSoftSkillsList(suggestions.data)
        }
        getSuggestion()
        getSuggestionSoftSkills()
        setValues({ step: 2})

    }, [])

    const onSubmit = (data) => {
        setValues(data)
        navigate('/company/register/job-vacancie/result')
    }

    console.log(watch())
    return(
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps />
            <Section>
                <Form handleSubmit={onSubmit}>
                    <Row>
                        <WrapperVaga>
                            <label id="filtragem" htmlFor="especifGender">Esta vaga é destinada a um gênero específico?*</label>
                            <InputWrapper>
                                <input {...register('especificGender')} type="radio" name="especifGender"  onClick={() => setEspecificGender(true)} value={true}/>Sim
                                <input {...register('especificGender')} type="radio" name="especifGender"  onClick={() => setEspecificGender(false)} value={false}/>Não
                                {especificGender && (
                                    <Wrapper>
                                        <select {...register('gender')} name="gender" id="gender" className="gender" >
                                        <option value={1}>Mulher Cis</option>
                                        <option value={2}>Mulher Trans</option>
                                        <option value={3}>Pessoas Trans</option>
                                        <option value={4}>Mulher cis e pessoas trans</option>
                                        </select>
                                        <span>{errors.gender?.message}</span>
                                    </Wrapper>
                                )}
                                <span>{errors?.especificGender?.message}</span>
                            </InputWrapper>
                        </WrapperVaga>
                        <WrapperVaga>
                            <label id="filtragem" htmlFor="especifEthnicity">Esta vaga é destinada a uma Etnia específica?*</label>
                            <InputWrapper>
                                <input {...register('especificEthnicity')} type="radio" name="especificEthnicity" onClick={() => setEspecificEthnicity(true)} value={true}/>Sim
                                <input {...register('especificEthnicity')} type="radio" name="especificEthnicity" onClick={() => setEspecificEthnicity(false)} value={false}/>Não
                                {especificEthnicity && (
                                <Wrapper>
                                    <select {...register('ethnicity')} name="ethnicity" id="ethnicity" className="ethnicity" >
                                        <option value={1}>Negra</option>
                                        <option value={2}>Indígena</option>
                                        <option value={3}>Amarela</option>
                                    </select>
                                    <span>{errors?.ethnicity?.message}</span>
                                </Wrapper>
                                )}
                                <span>{errors?.especificEthnicity?.message}</span>
                            </InputWrapper>
                        </WrapperVaga>
                    </Row>
                    <Row>
                        <WrapperVaga>
                            <label id="filtragem" htmlFor="pcd">Esta vaga é destinada a somente pessoas com deficiência?*</label>
                            <InputWrapper>
                                <input {...register('pcd')} type="radio" name="pcd" value={true} />Sim
                                <input {...register('pcd')} type="radio" name="pcd" value={false}/>Não
                                <span>{errors?.pcd?.message}</span>
                            </InputWrapper>
                        </WrapperVaga>
                        <WrapperVaga>
                            <label id="filtragem" htmlFor="acceptsAllLevels">Aceita candidatura de todos os níveis?*</label>
                            <InputWrapper>
                                <input {...register('acceptsAllLevels')} type="radio" name="acceptsAllLevels" value={true} />Sim
                                <input {...register('acceptsAllLevels')} type="radio" name="acceptsAllLevels" value={false} />Não
                                <span>{errors?.acceptsAllLevels?.message}</span>
                            </InputWrapper>
                        </WrapperVaga>
                    </Row>
                    <Row>
                        <Controller 
                            control={control}
                            render={({ field: { title, skillsList, suggestions, skills, setSkills }}) => (
                                <InputSkills
                                    title="Hard Skills"
                                    skillsList={hardSkillsList}
                                    suggestions={suggestionsHardSkills}
                                    skills={hardSkills}
                                    setSkills={setHardSkills}
                                />
                            )}
                        />
                        
                    </Row>
                    <Row>
                        <InputSkills
                            title="Soft Skills"
                            skillsList={softSkillsList}
                            suggestions={suggestionsSoftSkills}
                            skills={softSkills}
                            setSkills={setSoftSkills}
                        />
                    </Row>
                    <Button type="submit" onClick={handleSubmit}>Cadastrar</Button>
                </Form>
            </Section>
        </Body>
    )    
}