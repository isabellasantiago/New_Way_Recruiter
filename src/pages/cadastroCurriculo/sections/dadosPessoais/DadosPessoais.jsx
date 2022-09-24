import React from 'react';
import { SelectEstado } from '../../../../components/SelectEstado';
import { SelectCidade } from '../../../../components/SelectCidade';
import Button from '../../../../components/Button/Button';

import { DadosPessoais, TitleForm, DadosPessoaisForm, Grid} from './style.js';
import {Wrapper} from '../../components/Wrapper';


export function DadosPessoaisSection({useForm}){
    const { register, errors } = useForm;


    return(
        <DadosPessoais>
            <TitleForm>Dados Pessoais</TitleForm>
            <DadosPessoaisForm id="dadosPessoais">
                <Grid>
                    <Wrapper>
                        <label htmlFor="image">Imagem</label>
                        <input type="url" name="image" className="image" placeholder="Adicione o link da sua imagem" {...register('imageURL')}/>
                        {errors?.imageURL &&
                            <span>{errors?.imageURL.message}</span>
                        }
                    </Wrapper>
                
                    <Wrapper>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="url" name="linkedin" className="linkedin" {...register('linkedinURL')}/>
                        {errors?.linkedinURL &&
                            <span>{errors?.linkedinURL.message}</span>
                        }
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
                        {errors?.naturalness &&
                            <span>{errors?.naturalness.message}</span>
                        }
                    </Wrapper>
                    <Wrapper>
                        <label htmlFor="birthDate">Data de nascimento*</label>
                        <input type="date" className="birthDate" name="birthDate" {...register('birthDate')}/>
                        {errors?.birthDate &&
                            <span>{errors?.birthDate.message}</span>
                        }
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="state" >Estado*</label>
                        <SelectEstado className="state" name="state" register={register}/>
                        {errors?.state &&
                            <span>{errors?.state.message}</span>
                        }
                    </Wrapper>

                    <Wrapper>
                        <label htmlFor="city" className="city">Cidade*</label>
                        <SelectCidade id="city" name="city" register={register}/>
                        {errors?.city &&
                            <span>{errors?.city.message}</span>
                        }
                    </Wrapper>
                </Grid>
                <Grid>
                    <Wrapper>
                        <label htmlFor="phone" className="phone">Celular</label>
                        <input type="tel" name="phone" className="phone" {...register('phone')}/>
                        {errors?.phone &&
                            <span>{errors?.phone.message}</span>
                        }
                    </Wrapper>
                </Grid>
            </DadosPessoaisForm>
        </DadosPessoais>
    )
}