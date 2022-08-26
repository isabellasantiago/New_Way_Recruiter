import styled from 'styled-components';

export const Section = styled.div`
    width: 350px;
    left: 35%;
    position: absolute;

    background:white;
    border-radius: 10px;
    border: 1px solid #000;


    @media (min-width: 1380px){
        max-width: 40%;
        height: 70vh;
    };

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`

    *{
       font-family: "Poppins", sans-serif;
       box-sizing: border-box;
    }

    width: 100%;
    height: 100%;
    

    background: none;

    padding: 22px;


    input{
        max-width: 285px;
    }

    #cifrao{
        font-size: 20px;
        font-weight: 800;
        color: #023859;
        line-height: 30px;

        margin-top: 12px;
    }

    .salario{
        max-height: 34px; 
        max-width: 120px;
    }

    select{
        background: #fff;
        max-width: 150px;
    }

    textarea{
        border: 1px solid #afafaf;
        border-radius: 8px;
        height: 100px;
        max-width: 300px; 

        
        padding: 12px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const WrapperVaga = styled.div`
    display: flex;               
    flex-direction: column;
    white-space: wrap;
    font-family: "Poppins", sans-serif;
    width: 100%;

    select{
        font-family: "Poppins", sans-serif;
    }
    > #filtragem{
        white-space: wrap;
        width: 300px;
        text-align: center;
    }

    > span {
        font-size: 0.8rem;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }
`;

export const InputDiv = styled.label`
    position: relative;
    display: flex;
    margin-top: 10px;
    
    font: 400 1rem 'Poppins' ;

    display: flex;
    flex-flow: column nowrap;

    margin-bottom: 10px;

    max-width: 330px;

    ${(props) => props.disable && `
                cursor: not-allowed;
                display: none;
                pointer-events:none;
    `}

    > span {
        font-size: 0.8rem;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }

    > label{
        font-size: 1rem;
        white-space: nowrap;
    }
`;

export const InputText = styled.input`
font-family: 'Poppins', 'Roboto', Sans-serif;
border: 1px solid #c4c4c4;
border-radius: 8px;
padding: 5px 15px;
max-width: 330px;
height: 35px;

`;

export const ButtonNext = styled.input`
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

`;