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
    salary: yup.number().positive('Tipo inválido').required('campo obrigatório'),
    contractType: yup.number().max(4).required('campo obrigatório'),
    about: yup.string().required('campo obrigatório'),
    level: yup.number().max(4).required('campo obrigatório').positive().integer().min(1),
    cityAndState: yup.string().required('campo obrigatório'),
    requirements: yup.array().of(yup.string()),
    benefits: yup.array().of(yup.string()),
}).required();

export let schema2 = yup.object({
    softSkills: yup.array().of(yup.string()),
    hardSkills: yup.array().of(yup.string()),
    ethnicity: yup.number().max(2).required('campo obrigatório').positive().integer().min(1),
    gender: yup.number().max(3).required('campo obrigatório').positive().integer().min(1),
    pcd: yup.boolean().required('Campo obrigatório'),
    acceptsAllLevels: yup.boolean().required('Campo obrigatório'),
})