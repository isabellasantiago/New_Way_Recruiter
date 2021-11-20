import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../validation/validation';
import { SelectEstado } from '../../../../components/SelectEstado';
import { SelectCidade } from '../../../../components/SelectCidade/index';
import Button from '../../../../components/Button/Button';

import { DadosPessoais, TitleForm, DadosPessoaisForm, Grid} from './style.js';
import {Wrapper} from '../../components/Wrapper';

const  initialValues = {
    image: '',
    linkedin: '',
    naturalness: '', 
    gender: '', 
    birthDate: '', 
    phone: '', 
    city: '', 
    state: '', 
    etnia: '', 
    pcd: '', 
    typePcd: '',
    whatsapp: '', 
    isPcd: ''
}

export function DadosPessoaisSection(props){
    const {onSave} = props;

    const [image, setImage] = useState();
    const [linkedin, setLinkedin] = useState();
    const [naturalness, setNaturalness] = useState();
    const [gender, setGender] = useState();
    const [birthDate, setBirthDate] = useState();
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [etnia, setEtnia] = useState();
    const [pcd , setPcd] = useState();
    const [typePcd, setTypePcd] = useState();
    const [whatsapp, setWhatsapp] = useState('');
    const [isPcd, setIsPcd] = useState(false);

    const [formValues, setFormValues] = useState({});

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const saveDadosPessoais = (dados) => {
        localStorage.setItem("dadosPessoais", JSON.stringify(dados));
    }
    const loadedDadosPessoais = () => {
        const loadedDados = JSON.parse(localStorage.getItem("dadosPessoais"))
        return loadedDados
    }

    useEffect(() => {
        if (formValues){
            saveDadosPessoais(formValues);
        }
    }, [formValues])

    useEffect(() => {
        const loadedDados = loadedDadosPessoais();
        setFormValues(loadedDados);
        console.log(loadedDados);
    }, [])


    return(
        <DadosPessoais>
            <TitleForm>Dados Pessoais</TitleForm>
            <DadosPessoaisForm  id="dadosPessoais" onSubmit={handleSubmit(onSave)} >
                <Grid>
                    <Wrapper>
                        <label htmlFor="image">Imagem</label>
                        <input type="url" name="image" className="image" placeholder="Adicione o link da sua imagem" {...register('image')} value={image} onChange={ev => setImage(ev.target.value)}/>
                        <p>{errors.image?.message}</p>
                    </Wrapper>
                
                    <Wrapper>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="url" name="linkedin" className="linkedin" {...register('linkedin')} value={linkedin} onChange={ev => setLinkedin(ev.target.value)}/>
                        <p>{errors.linkedin?.message}</p>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="naturalness">Naturalidade *</label>
                        <select name="naturalness" id="naturalness" className="naturalness" {...register('naturalness')} value={naturalness} onChange={ev => setNaturalness(ev.target.value)}>
                            <option value="">Selecione</option>
                            <option value="br">Brasileira(o)</option>
                            <option value="estrangeiro">Estrangeira(o)</option>
                        </select>
                        <p>{errors.naturalness?.message}</p>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="gender">Gênero*</label>
                        <select name="gender" id="gender" className="gender" {...register('gender')} value={gender} onChange={ev => setGender(ev.target.value)}>
                            <option value="">Selecione...</option>
                            <option value="mulher">Mulher Cis</option>
                            <option value="homem">Homem Cis</option>
                            <option value="mtrans">Mulher Trans</option>
                            <option value="htrans">Homem Trans</option>
                            <option value="outros">Outros</option>
                        </select>
                        <p>{errors.gender?.message}</p>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="birthDate">Data de nascimento*</label>
                        <input type="date" className="birthDate" name="birthDate" {...register('birthDate')} value={birthDate} onChange={ev => setBirthDate(ev.target.value)}/>
                        <p>{errors.birthDate?.message}</p>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="state" >Estado*</label>
                        <SelectEstado className="state" name="state" {...register('state')} value={state} onChange={ev => setState(ev.target.value)} />
                        <p>{errors.state?.message}</p>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="city" className="city">Cidade*</label>
                        <SelectCidade id="city" name="city" state={state} {...register("city")} value={city} onChange={ev => setCity(ev.target.value)} />
                        <p>{errors.city?.message}</p>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="phone" className="phone">Celular</label>
                        <input type="tel" name="phone" className="phone" {...register('phone')} value={phone} onChange={ev => setPhone(ev.target.value)}/>
                        <p>{errors.phone?.message}</p>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="etnia">Etnia*</label>
                        <select name="etnia" id="entnia" className="etnia" {...register('etnia')} value={etnia} onChange={ev => setEtnia(ev.target.value)}>
                            <option value="negro">Negro</option>
                            <option value="branco">Branco</option>
                            <option value="indigena">Indígena</option>
                        </select>
                        <p>{errors.etnia?.message}</p>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="pcd">PCD (pessoa com deficiência)*</label>
                        <select name="pcd" className="pcd" {...register('pcd')} value={pcd} onChange={ev => {
                            setPcd(ev.target.value)
                            setIsPcd(!isPcd)}}>
                            <option value="nao">Não</option>
                            <option value="sim">Sim</option>
                            
                        </select>
                        <p>{errors.pcd?.message}</p>
                    </Wrapper>
                    {isPcd && (
                        <Wrapper>
                        <label htmlFor="typePcd" >Tipo</label>
                        <input type="text" name="typePcd" className="typePcd" {...register('typePcd')} value={typePcd} onChange={ev => setTypePcd(ev.target.value)}/>
                        <p>{errors.typePcd?.message}</p>
                    </Wrapper>
                    )}
                    
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="whatsapp">Deseja receber mensagens via whatsapp?*</label>
                        <div id="radio-button">
                            <input type="radio" name="whatsapp" id="whatsapp" className="whatsapp" value="yes" onChange={ev => setWhatsapp(ev.target.value)} checked={whatsapp === "yes"}/> Sim
                            <input type="radio" name="whatsapp" id="whatsapp" className="whatsapp"  value="no" onChange={ev => setWhatsapp(ev.target.value)} checked={whatsapp === "no"}/> Não
                        </div>
                    </Wrapper>
                
                    <Button type="submit">
                    Próximo passo
                    </Button>
                </Grid>
            </DadosPessoaisForm>
        </DadosPessoais>
    )
}