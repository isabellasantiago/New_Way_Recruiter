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
`;

export const ButtonNext = styled.button`
    height: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    width: 150px;

    background: #023859;
    border-radius: 8px;
    border: none;

`;