import React from 'react';
import styled from 'styled-components';


const ButtonSubmit = styled.input`
    height: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    width: 150px;

    cursor: pointer;

    background: #023859;
    border-radius: 8px;
    border: none;
    text-align: center;

`;


const SubmitButton = ({value}) => {

    return(
        <>
            <ButtonSubmit type="submit" value={value}/>
        </>
    )
}

export default SubmitButton;