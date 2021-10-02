import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from 'react-hook-form';

import Field from '../Field';
import Form from '../Form/Form';
import schema from './validation';

const FormNew = ({}) => {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    };


    return (
    <Form onSubmit={}>
        <Field.Text label="Label" name="email" type="text" register={register}/>

        <Button>Enviar</Button>
    </Form>
)};

export default FormNew;