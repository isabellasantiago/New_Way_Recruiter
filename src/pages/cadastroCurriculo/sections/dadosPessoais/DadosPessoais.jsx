import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../validation/validation';
import { SelectEstado } from '../../../../components/SelectEstado';
import { SelectCidade } from '../../../../components/SelectCidade';
import Button from '../../../../components/Button/Button';

import {DadosPessoais, TitleForm, DadosPessoaisForm, Grid} from './style.js';
import {Wrapper} from '../../components/Wrapper';


export function DadosPessoaisSection(){

    const [formValues, setFormValues] = useState({});


    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        setFormValues({...formValues, [name]:value});
    }
    
    const dadosPessoais = (data) => {
        console.log(data)
    };


    return(
        <DadosPessoais>
            <TitleForm>Dados Pessoais</TitleForm>
            <DadosPessoaisForm action="#" onSubmit={handleSubmit(dadosPessoais)} id="dadosPessoais">
                <Grid>
                    <Wrapper>
                        <label htmlFor="image">Imagem</label>
                        <input type="url" name="image" className="image" placeholder="Adicione o link da sua imagem" {...register('image')}/>
                    </Wrapper>
                
                    <Wrapper>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="url" name="linkedin" className="linkedin" {...register('linkedin')}/>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="naturalness">Naturalidade *</label>
                        <select name="naturalness" id="naturalness" className="naturalness" {...register('naturalness')}>
                            <option value="">Selecione</option>
                            <option value="br">Brasileira(o)</option>
                            <option value="estrangeiro">Estrangeira(o)</option>
                        </select>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="gender">Gênero*</label>
                        <select name="gender" id="gender" className="gender" {...register('gender')}>
                            <option value="">Selecione...</option>
                            <option value="mulher">Mulher</option>
                            <option value="homem">Homem</option>
                            <option value="mtrans">Mulher Trans</option>
                            <option value="htrans">Homem Trans</option>
                            <option value="outros">Outros</option>
                        </select>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="birthDate">Data de nascimento*</label>
                        <input type="date" className="birthDate" name="birthDate" {...register('birthDate')}/>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="state" >Estado*</label>
                        <SelectEstado className="state" name="state" {...register('state')} onChange={handleInputChange}/>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="city" className="city">Cidade*</label>
                        <SelectCidade id="city" name="city" state={formValues.state}  onChange={handleInputChange} {...register("city")}/>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="phone" className="phone">Celular</label>
                        <input type="tel" name="phone" className="phone" {...register('phone')}/>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="etnia">Etnia*</label>
                        <select name="etnia" id="entnia" className="etnia" {...register('etnia')}>
                            <option value="negro">Negro</option>
                            <option value="branco">Branco</option>
                            <option value="indigena">Indígena</option>
                        </select>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="pcd">PCD (pessoa com deficiência)*</label>
                        <select name="pcd" className="pcd" {...register('pcd')}>
                            <option value="">Selecione...</option>
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="typePcd" >Tipo</label>
                        <input type="text" name="typePcd" className="typePcd" {...register('typePcd')}/>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="contactViaWhatsapp">Deseja receber mensagens via whatsapp?*</label>
                        <div id="radio-button">
                            <input type="radio" name="contactViaWhatsapp" id="contactViaWhatsapp" className="contactViaWhatsapp" value={true}/> Sim
                            <input type="radio" name="contactViaWhatsapp" id="contactViaWhatsapp" className="contactViaWhatsapp" value={false}/> Não
                        </div>
                    </Wrapper>
                
                    <Button as="a" href="#info-academicas">Próximo passo</Button>
                </Grid>
            </DadosPessoaisForm>
        </DadosPessoais>
    )
}