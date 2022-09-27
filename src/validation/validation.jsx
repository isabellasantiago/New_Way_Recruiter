import * as yup from 'yup';

 const schema = yup.object().shape({
    //schema de validações com valores do name="" atributo da tag html
    birthDate: yup.string().required('Data de nascimento é um campo obrigatório'),//data de nascimento
    naturalness: yup.string().required('Naturalidade é um campo obrigatório'),
    imageURL: yup.string().url().required('Sua foto de perfil é um campo obrigatório'),//link da imagem
    linkedinURL:yup.string().url(),
    state: yup.string().required('Estado é um campo é obrigatório'),// estado
    city: yup.string().required('Cidade é um campo é obrigatório'),// cidade
    phone: yup.string().matches(/^\([1-9]{2}\) 9[0-9]{1}[0-9]{3}\-[0-9]{4}$/, { message: 'Número de telefone invalido'}),
    academicsInfo: yup.array().of(
        yup.object().shape({
            instituitionName: yup.string().required('Este campo é um campo é obrigatório'),
            courseName: yup.string().required('Este campo é um campo é obrigatório'),
            academicFormation: yup.string().required('Este campo é um campo é obrigatório'),
            academicFormationStatus: yup.string().required('Este campo é um campo é obrigatório'),
            graduationEndDate: yup.date().required('Este campo é um campo é obrigatório'),
            graduationStartDate: yup.date().required('Este campo é um campo é obrigatório'),
        }).nullable()
    ),
    languagesInfo: yup.array().of(
        yup.object().shape({
            languageName: yup.string().required('Campo vazio'),
            languageLevel: yup.number().integer().required('Selecione um campo'),
        })
    ).nullable(),
    
    

})

export default schema