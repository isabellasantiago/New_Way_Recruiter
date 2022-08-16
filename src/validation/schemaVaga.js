import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'Tipo inválido',
    },
    number: {
        positive: 'Precisa ser positivo!',
    }
});

export let schema = yup.object().shape({
    title: yup.string().required('campo obrigatório'),
    salary: yup.number('somente números').positive('somente números').required('campo obrigatório').min(1, 'campo obrigatório'),
    contractType: yup.number('campo obrigatório').max(4).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    about: yup.string().required('campo obrigatório'),
    level: yup.number().max(4).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    cityAndState: yup.string().required('campo obrigatório'),
}).required();