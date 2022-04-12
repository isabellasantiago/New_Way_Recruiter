import { useEffect, useState } from "react";
import { Form, WrapperVaga, InputWrapper, Row } from "../../dadosVaga/form/style";
import { Wrapper } from '../../../../cadastroCurriculo/components/Wrapper'
import { InputSkills } from "../../../../cadastroCurriculo/sections/Skills/InputSkills";
import Button from '../../../../../components/Button/Button'
import Api from '../../../../../services/mainApi'

//inputskills nao estao funcionando como deveriam
//faixa passa o estado somente depois do segundo clique
//ao pressionar enter no input skills ele volta para a sessao de dados
//nada acontece ao clicar em "cadastrar"

export function FormFiltragem(props){
    const { register, onClickSubmit, errors } = props;
    const [especificGender, setEspecificGender] = useState(false)
    const [ especificEtnia, setEspecificEtnia] = useState(false)
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

    }, [])

    return(
        <Form>
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="genderRadio">Esta vaga é destinada a um gênero específico?*</label>
                    <InputWrapper>
                        <input type="radio" name="genderRadio" value={true} onClick={() => setEspecificGender(true)}/>Sim
                        <input type="radio" name="genderRadio" value={false} onClick={() => setEspecificGender(false)} />Não
                        {especificGender && (
                            <Wrapper>
                                <select name="gender" id="gender" className="gender" {...register('gender')}>
                                <option value={0}>Mulher Cis</option>
                                <option value={1}>Mulher Trans</option>
                                <option value={2}>Pessoas Trans</option>
                                <option value={3}>Mulher cis e pessoas trans</option>
                                </select>
                                <span>{errors.gender?.message}</span>
                            </Wrapper>
                        )}
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="etniaRadio">Esta vaga é destinada a uma Etnia específica?*</label>
                    <InputWrapper>
                        <input type="radio" name="etniaRadio" value={true} onChange={() => setEspecificEtnia(true)}/>Sim
                        <input type="radio" name="etniaRadio" value={false} onChange={() => setEspecificEtnia(false)}/>Não

                        {especificEtnia && (
                        <Wrapper>
                            <select name="etnia" id="entnia" className="etnia" {...register('ethnicity')}>
                                <option value={0}>Negra</option>
                                <option value={1}>Indígena</option>
                                <option value={2}>Amarela</option>
                            </select>
                            <span>{errors?.etnia?.message}</span>
                        </Wrapper>
                        )}
                    </InputWrapper>
                </WrapperVaga>
            </Row>
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="pcdRadio">Esta vaga é destinada a somente pessoas com deficiência?*</label>
                    <InputWrapper>
                        <input type="radio" name="pcdRadio" value={true} {...register('pcd')}/>Sim
                        <input type="radio" name="pcdRadio" value={false} {...register('pcd')}/>Não
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="niveis">Aceita candidatura de todos os níveis?*</label>
                    <InputWrapper>
                        <input type="radio" name="niveis" value={true} {...register('acceptsAllLevels')}/>Sim
                        <input type="radio" name="niveis" value={false} {...register('acceptsAllLevels')}/>Não
                    </InputWrapper>
                </WrapperVaga>
            </Row>
            <Row>
                <InputSkills 
                    title="Hard Skills"
                    skillsList={hardSkillsList}
                    suggestions={suggestionsHardSkills}
                    skills={hardSkills}
                    setSkills={setHardSkills}
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
            <Button type="submit" onClick={onClickSubmit}>Cadastrar</Button>
        </Form>
    )    
}