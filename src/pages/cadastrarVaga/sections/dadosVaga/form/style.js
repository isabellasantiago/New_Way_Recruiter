import styled from 'styled-components'

export const Form = styled.form`

    *{
       font-family: "Poppins", sans-serif;
       box-sizing: border-box;
    }

    width: 100%;
    height: 95%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;


export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 70%;
    gap: 40px;
    margin: 20px;

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
    
    flex-direction: column;
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