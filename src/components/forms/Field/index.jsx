import React from 'react';
import Label from './Label/Label';
import Input from './Input/Input';
import Content from './Content/Content';



const Text = ({label, type, name, value, className, onChange}) =>{
    return <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} onChange={onChange} className={className} value={value}/>
    </Label>
}


const Field = {
    Text,
}

export default Field;