import * as yup from 'yup';

 export let schema = yup.object().shape({
    //schema de validações com valores do name="" atributo da tag html
    name: yup.string().required('campo obrigatório'),
    lastName: yup.string().required('campo obrigatório'),
    phone: yup.string().required('campo obrigatório'),

}).required();