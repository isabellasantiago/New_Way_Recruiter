import * as yup from 'yup';

const schemaVaga = yup.object().shape({
    title: yup.string().required('campo obrigatório'),
    salary: yup.string().required('campo obrigatório'),
    contractType: yup.number().max(3).required('campo obrigató'),
    about: yup.string().required('campo obrigatório'),
    level: yup.number().max(3).required('campo obrigatório').positive().integer().min(0),
    cityAndState: yup.string().required('campo obrigatório'),
    requirements: yup.array().of(yup.string()),
    benefits: yup.array().of(yup.string()),
    ethnicity: yup.number().max(2).required('campo obrigatório').positive().integer().min(0),
    gender: yup.number().max(3).required('campo obrigatório').positive().integer().min(0),
    pcd: yup.boolean().required('Campo obrigatório'),
    acceptsAllLevels: yup.boolean().required('Campo obrigatório'),
})

export default schemaVaga