import React, {useState} from 'react';


import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../components/forms/FormNew/validation';

import Form from '../../../components/forms/Form/Form'
import Field from '../../../components/forms/Field';
import Select from '../../../components/forms/Select/SelectForm'
import Dados from '../dados/Dados'


import '../curriculo.scss';

import Label from '../../../components/forms/Field/Label/Label';
import Content from '../../../components/forms/Field/Content/Content';
import { SelectEstado } from '../../../components/SelectEstado';
import { SelectCidade } from '../../../components/SelectCidade';
import Button from '../../../components/Button/Button';






export function DadosPessoais(){

    const [formValues, setFormValues] = useState({});
    const [pcd, setPcd] = useState(false);


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

    const isPcd = () =>{
        setPcd(true);
    }

    return(
    <Dados>
        <h1>Dados Pessoais</h1>
        <Form onSubmit={handleSubmit(dadosPessoais)}>
            <Field.Text label="Imagem" name="image" type="url" {...register('image')} className="image"/>
            <Field.Text label="Linkedin" name="linkedin" type="url" {...register('linkedin')} className="linkedin"/>
            <Label>
                <Content>Naturalidade*</Content>
                <Select label="Naturalidade" name="naturalness" type="text" {...register('naturalness')} className="naturalness">
                    <option value="#">Selecione</option>
                    <option value="br">Brasileira(o)</option>
                    <option value="estrangeiro">Estrangeira(o)</option>
                </Select>
            </Label>
            <Label className="gender">
            <Content>Gênero*</Content>
            <Select  name="gender" {...register('gender')} >
                <option value="mulher">Mulher</option>
                <option value="homem">Homem</option>
                <option value="mtrans">Mulher Trans</option>
                <option value="htrans">Homem Trans</option>
                <option value="outros">Outros</option>
            </Select>
            </Label>
            <Field.Text label="Data de nascimento" name="birthDate" type="date" {...register('birthDate')} className="birthDate"/>
            <Field.Text label="Celular" name="phone" {...register('phone')} className="phone"/>
            <Label className="uf">
            <Content>Estado*</Content>
            <SelectEstado className="uf" id="state" name="state" onChange={handleInputChange}/>
            </Label>
            <Label className="city">
            <Content>Cidade*</Content>
            <SelectCidade id="city" name="city" state={formValues.state}  onChange={handleInputChange} {...register("city")}/>
            </Label>
            <Label className="etnia">
            <Content>Etnia*</Content>
            <Select name="etnia" {...register('etnia')} >
                <option value="negro">Negro</option>
                <option value="branco">Branco</option>
                <option value="indigena">Indígena</option>
            </Select>
            </Label>
            <Label className="pcd">
            <Content>PCD (Pessoa com deficiência)*</Content>
            <Select name="pcd" {...register('pcd')} className="pcd">
                <option >Selecione</option>
                <option value={true} onChange={isPcd}>Sim</option>
                <option value={false}>Não</option>
            </Select>
            </Label>
            {isPcd === true && (
                <Field.Text label="Tipo da deficiência" name="typePcd" {...register('typePcd')} className="typePcd"/>
            )}
            <Label className="contactViaWhatsapp">
            <Content>Deseja contato via whatsapp? *</Content>
                <input type="radio" name="contactViaWhatsapp" className="contactViaWhatsapp" {...register("contactViaWhatsapp")}/>Sim
                <input type="radio" name="contactViaWhatsapp" className="contactViaWhatsapp" {...register("contactViaWhatsapp")}/>Não
            </Label>
            <Button type="submit" onClick={handleSubmit(dadosPessoais)}><a href="#info-academicas">Próximo passo</a></Button>
        </Form>
    </Dados> 
    )
}