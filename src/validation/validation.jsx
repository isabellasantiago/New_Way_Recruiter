import * as yup from 'yup';

 export let schema = yup.object().shape({
    //schema de validações com valores do name="" atributo da tag html
    personalData: yup.object().shape({
        birthDate: yup.string().required('Data de nascimento é um campo obrigatório'),//data de nascimento
        naturalness: yup.string().required('Naturalidade é um campo obrigatório'),
        imageURL: yup.string().url('Link inválido').required('Sua foto de perfil é um campo obrigatório'),//link da imagem
        linkedinURL:yup.string().url('Link inválido'),
        state: yup.string().required('Estado é um campo é obrigatório'),// estado
        city: yup.string().required('Cidade é um campo é obrigatório'),// cidade
        phone: yup.string().matches(/^\([1-9]{2}\) 9[0-9]{1}[0-9]{3}\-[0-9]{4}$/, { message: 'Número de telefone invalido'}),
        role: yup.string().required('Campo obrigatório'),
        field: yup.string().required('Selecione um campo'),
        contractType: yup.number('Selecione um campo').integer('Selectione um campo').typeError('Selecione um campo').required('Campo obrigatório'),
        level: yup.number({message: 'Selecione um campo'}).integer('Selecione um campo').typeError('Selecione um campo').required('campo obrigatório'),
    }),
    academicsInfo: yup.array().of(
        yup.object().shape({
            instituitionName: yup.string().required('Este campo é um campo é obrigatório'),
            courseName: yup.string().required('Este campo é um campo é obrigatório'),
            academicFormation: yup.string().required('Este campo é um campo é obrigatório'),
            academicFormationStatus: yup.string().required('Este campo é um campo é obrigatório'),
            graduationEndDate: yup.date({ message: 'Data inválida'}).typeError('Data inválida').default(null).nullable(),
            graduationStartDate: yup.date({ message: 'Data inválida'}).typeError('Data inválida').required('Este campo é um campo é obrigatório'),
        }).nullable()
    ),
    languagesInfo: yup.array().of(
        yup.object().shape({
            languageName: yup.string().required('Campo vazio'),
            languageLevel: yup.number('Selecione um campo').integer('Selecione um campo').typeError('Selecione um campo').required('Selecione um campo'),
        })
    ).nullable(),
    previousJobsInfo: yup.array().of(
        yup.object().shape({
            previousCompanyName: yup.string().required('campo obrigatório'),
            role: yup.string().required('campo obrigatório'),
            level: yup.number('Selecione um campo').integer('Selecione um campo').required('campo obrigatório'),
            fromDate: yup.date('Data inválida').typeError('Data inválida').required('campo obrigatorio'),
            toDate: yup.date('Data inválida').default(null).nullable().typeError('Data inválida'),
            jobDescription: yup.string(),
        })
    ).nullable(),

}).required();