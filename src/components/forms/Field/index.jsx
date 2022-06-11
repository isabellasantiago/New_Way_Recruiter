import React from 'react';
import Label from './Label/Label';
import Input from './Input/Input.js';
import Content from './Content/Content';



const Text = ({label, type, name, value, className, onChange, disable, placeholder}) =>{
    return <Label disable={disable}>
        <Content>{label}</Content>
        <Input type={type} placeholder={placeholder} name={name} onChange={onChange} className={className} value={value}/>
    </Label>
}


const Field = {
    Text,
}

export default Field;