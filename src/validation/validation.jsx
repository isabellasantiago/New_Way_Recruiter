import * as yup from 'yup';

 const schema = yup.object().shape({
    //schema de validações com valores do name="" atributo da tag html
    name: yup.string().min(2, 'Mínimo 2 catacteres').required('Nome é um campo obrigatório'),//nome
    email: yup.string().email('E-mail inválido').required('E-mail é um campo obrigatório'),//email
    birthDate: yup.string().required('Data de nascimento é um campo obrigatório'),//data de nascimento
    naturalness: yup.string().required('Naturalidade é um campo obrigatório'),
    image: yup.string().url().required('Link do seu avatar é um campo obrigatório'),//link da imagem
    gender: yup.string().required('Sexo é um campo obrigatório'),//genero (feminio, masculino...)
    state: yup.string().required('Estado é um campo é obrigatório'),// estado
    city: yup.string().required('Cidade é um campo é obrigatório'),// cidade
    etnia: yup.string().required('Etnia é um campo obrigatório'),
    pcd: yup.string().required('PCD é um campo é obrigatório'),//pessoa com deficiendia
    typePcd: yup.string().required('Tipo é um campo é obrigatório'),//tipo da deficiencia
    contactViaWhatsapp: yup.string().required(''),//contato via whatsapp
    instituicao: yup.string().required('Este campo é um campo é obrigatório'),
    curso: yup.string().required('Este campo é um campo é obrigatório'),
    tipoFormacao: yup.string().required('Este campo é um campo é obrigatório'),
    statusFormacao: yup.string().required('Este campo é um campo é obrigatório'),
    dataInicio: yup.date().required('Este campo é um campo é obrigatório'),
    dataTermino: yup.date().required('Este campo é um campo é obrigatório'),
    nomeVaga: yup.string().required('campo obrigatório'),
    salario: yup.string().required('campo obrigatório'),
    contrato: yup.string().required('campo obrigató'),
    sobreVaga: yup.string().required('campo obrigatório'),
    item: yup.string().required('campo obrigatório'),
    requisitos: yup.array(),
    genderRadio: yup.boolean().required('campo obrigatório'),
    etniaRadio: yup.boolean().required('campo obrigatório'),
    niveis: yup.boolean().required('campo obrigatório'),

})

export default schema