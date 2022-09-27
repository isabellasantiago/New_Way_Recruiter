import React from 'react';
import { SelectEstado } from '../../../../components/SelectEstado';
import { SelectCidade } from '../../../../components/SelectCidade';

import { DadosPessoais, TitleForm, DadosPessoaisForm, Grid} from './style.js';
import {Wrapper} from '../../components/Wrapper';


export function DadosPessoaisSection({useForm}){
    const { register, errors, watch } = useForm;

    const personalData = watch('personalData');

    return(
        <DadosPessoais>
            <TitleForm>Dados Pessoais</TitleForm>
            <DadosPessoaisForm id="dadosPessoais">
                <Grid>
                    <Wrapper>
                        <label htmlFor="image">Imagem</label>
                        <input type="url" name="image" className="image" placeholder="Adicione o link da sua imagem" {...register('personalData.imageURL')} defaultValue={personalData.imageURL}/>
                        <span>{errors?.personalData?.imageURL?.message}</span>
                    </Wrapper>
                
                    <Wrapper>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="url" name="linkedin" className="linkedin" {...register('personalData.linkedinURL')} defaultValue={personalData.linkedinURL}/>
                        <span>{errors?.personalData?.linkedinURL?.message}</span>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="naturalness">Naturalidade *</label>
                        <select name="naturalness" id="naturalness" className="naturalness" {...register('personalData.naturalness')} defaultValue={personalData.naturalness}>
                            <option value="">Selecione</option>
                            <option value="br">Brasileira(o)</option>
                            <option value="estrangeiro">Estrangeira(o)</option>
                        </select>
                        <span>{errors?.personalData?.naturalness?.message}</span>
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="birthDate">Data de nascimento*</label>
                        <input type="date" className="birthDate" name="birthDate" {...register('personalData.birthDate')} defaultValue={personalData.birthDate}/>
                        <span>{errors?.personalData?.birthDate?.message}</span>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="personalData.state" >Estado*</label>
                        <SelectEstado className="state" name="personalData.state" register={register} defaultValue={personalData.state}/>
                        <span>{errors?.personalData?.state?.message}</span>
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="city" className="city">Cidade*</label>
                        <SelectCidade id="city" name="personalData.city" state={personalData.state} register={register} defaultValue={personalData.city}/>
                        <span>{errors?.personalData?.city?.message}</span>
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="phone" className="phone">Celular</label>
                        <input type="tel" name="phone" placeholder="(11) 91111-4112" className="phone" {...register('personalData.phone')} defaultValue={personalData.phone}/>
                        <span>{errors?.personalData?.phone?.message}</span>
                    </Wrapper>
                </Grid>
            </DadosPessoaisForm>
        </DadosPessoais>
    )
}