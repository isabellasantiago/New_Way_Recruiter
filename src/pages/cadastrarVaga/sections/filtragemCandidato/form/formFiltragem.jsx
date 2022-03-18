import { useState } from "react";
import { Form, WrapperVaga, InputWrapper, Row } from "../../dadosVaga/form/style";
import { useForm } from "react-hook-form";
import schema from '../../../../../validation/validation'
import { yupResolver } from "@hookform/resolvers/yup";
import { Wrapper } from '../../../../cadastroCurriculo/components/Wrapper'
import { InputSkills } from "../../../../cadastroCurriculo/sections/Skills/InputSkills";
import Button from '../../../../../components/Button/Button'

//inputskills nao estao funcionando como deveriam
//faixa passa o estado somente depois do segundo clique
//ao pressionar enter no input skills ele volta para a sessao de dados
//nada acontece ao clicar em "cadastrar"

export function FormFiltragem(props){
    const { onSave } = props;
    const [especificGender, setEspecificGender] = useState(false)
    const [ especificEtnia, setEspecificEtnia] = useState(false)
    const [ especificPcd, setEspecificPcd ] = useState(false)
    const [especificLevel,setEspecificLevel] = useState(false)

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    return(
        <Form onSubmit={handleSubmit(onSave)}>
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="genderRadio">Esta vaga é destinada a um gênero específico?*</label>
                    <InputWrapper>
                        <input type="radio" name="genderRadio" value={true} checked={especificGender === true} {...register('genderRadio')} onChange={ev => setEspecificGender(ev.target.value)}/>Sim
                        <input type="radio" name="genderRadio" value={false} checked={especificGender === false} {...register('genderRadio')} onChange={ev => setEspecificGender(ev.target.value)} />Não
                        {especificPcd ? (
                            <Wrapper>
                                <select name="gender" id="gender" className="gender" {...register('gender')}>
                                <option value="">Selecione...</option>
                                <option value="mulher">Mulher</option>
                                <option value="homem">Homem</option>
                                <option value="mtrans">Mulher Trans</option>
                                <option value="htrans">Homem Trans</option>
                                <option value="outros">Outros</option>
                                </select>
                                {errors.gender?.message}
                            </Wrapper>
                        ) : null}
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="etniaRadio">Esta vaga é destinada a uma Etnia específica?*</label>
                    <InputWrapper>
                        <input type="radio" name="etniaRadio" value={true} checked={especificEtnia === true} onChange={ev => setEspecificEtnia(ev.target.value)}/>Sim
                        <input type="radio" name="etniaRadio" value={false} checked={especificEtnia === false} onChange={ev => setEspecificEtnia(ev.target.value)}/>Não
                    </InputWrapper>
                        {especificEtnia ?
                        <Wrapper>
                            <select name="etnia" id="entnia" className="etnia" {...register('etnia')}>
                                <option value="negro">Negro</option>
                                <option value="indigena">Indígena</option>
                            </select>
                            {errors.etnia?.message}
                        </Wrapper>
                        : null}
                </WrapperVaga>
            </Row>
            <Row>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="pcdRadio">Esta vaga é destinada a somente pessoas com deficiência?*</label>
                    <InputWrapper>
                        <input type="radio" name="pcdRadio" value={true} checked={especificPcd === true} onChange={ev => setEspecificPcd}/>Sim
                        <input type="radio" name="pcdRadio" value={false} checked={especificPcd === false} onChange={ev => setEspecificPcd}/>Não
                    </InputWrapper>
                </WrapperVaga>
                <WrapperVaga>
                    <label id="filtragem" htmlFor="niveis">Aceita candidatura de todos os níveis?*</label>
                    <InputWrapper>
                        <input type="radio" name="niveis" value={true} checked={especificLevel === true} onChange={ev => setEspecificLevel}/>Sim
                        <input type="radio" name="niveis" value={false} checked={especificLevel === false} onChange={ev => setEspecificLevel}/>Não
                    </InputWrapper>
                </WrapperVaga>
            </Row>
            <Row>
                <InputSkills label="Quais hardskills a(o) candidata(o) deveria ter?*" placeholder="Adicione uma habilidade"/>
            </Row>
            <Row>
                <InputSkills label="Quais softskills a(o) candidata(o) deveria ter?*" placeholder="Adicione uma habilidade"/>
            </Row>
            <Button type="submit">Cadastrar</Button>
        </Form>
    )    
}