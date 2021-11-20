import * as yup from 'yup';

 const schema = yup.object().shape({
    //schema de validações com valores do name="" atributo da tag html
    name: yup.string().min(2, 'Mínimo 2 catacteres').required('campo obrigatório'),//nome
    email: yup.string().email('E-mail inválido').required('campo obrigatório'),//email
    birthDate: yup.string().required('campo obrigatório'),//data de nascimento
    naturalness: yup.string().required('campo obrigatório'),
    image: yup.string().url().required('campo obrigatório'),//link da imagem
    gender: yup.string().required('campo obrigatório'),//genero (feminio, masculino...)
    state: yup.string().required('campo obrigatório'),// estado
    city: yup.string().required('campo obrigatório'),// cidade
    etnia: yup.string().required('campo obrigatório'),
    pcd: yup.string().required('campo obrigatório'),//pessoa com deficiendia
    typePcd: yup.string().required('campo obrigatório'),//tipo da deficiencia
    whatsapp: yup.string().required(''),//contato via whatsapp
    instituicao: yup.string().required('campo obrigatório'),
    curso: yup.string().required('campo obrigatório'),
    tipoFormacao: yup.string().required('campo obrigatório'),
    statusFormacao: yup.string().required('campo obrigatório'),
    dataInicio: yup.date().required('campo obrigatório'),
    dataTermino: yup.date().required('campo obrigatório'),
    linkedin: yup.string().url(),
    phone:yup.string().length(11, 'celular inválido').required('campo obrigatório'),
    nivel: yup.string().required('campo obrigatório'),
    idioma: yup.string().required('campo obrigatório'),
    nomeEmpresa: yup.string().required('campo obrigatório'),
    cargo: yup.string().required('campo obrigatório'),
    nivelOperacion: yup.string().required('campo obrigatório'),
    dataInicioEmprego: yup.string().required('campo obrigatório'),
    dataFinalEmprego: yup.string().required('campo obrigatório'),
    areaDesejada: yup.string().required('campo obrigatório'),
    contrato: yup.string().required('campo obrigatório'),
    profession: yup.string().required('campo obrigatório'),
}).required()

export default schema