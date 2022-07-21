import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    number: {
        default: 'Tipo inválido',
        positive: 'Precisa ser positivo!',
    }
})

export let schema = yup.object({
    title: yup.string().required('campo obrigatório'),
    salary: yup.number().positive('somente números').required('campo obrigatório').min(1, 'campo obrigatório'),
    contractType: yup.number('campo obrigatório').max(4).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    about: yup.string().required('campo obrigatório'),
    level: yup.number().max(4).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    cityAndState: yup.string().required('campo obrigatório'),
    requirements: yup.array().of(yup.string()),
    benefits: yup.array().of(yup.string()),
}).required();

export let schema2 = yup.object({
    softSkills: yup.array().of(yup.string()),
    hardSkills: yup.array().of(yup.string()),
    especificGender: yup.boolean().required('campo obrigatório'),
    especifEthnicity: yup.boolean().required('campo obrigatório'),
    ethnicity: yup.number().max(2).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    gender: yup.number().max(3).required('campo obrigatório').positive().integer().min(1, 'campo obrigatório'),
    pcd: yup.boolean().required('Campo obrigatório'),
    acceptsAllLevels: yup.boolean().required('Campo obrigatório'),
})