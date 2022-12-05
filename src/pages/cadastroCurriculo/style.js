import styled from 'styled-components';

export const Cv = styled.form`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    #cabecalho{
        margin-top: 20px;

        display: flex;
        flex-flow: column nowrap;

        text-align: center;
        gap: 16px;
        align-items: center;
        justify-content: center;
    

        h1{
            font-weight: 500;
        }
    }

    #row {
        width: 100%;
        height: 200px;
        position: relative;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ButtonNext = styled.input`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    text-align: center;


    width: 150px;
    height: 30px;

    cursor: pointer;

    background: #023859;
    border-radius: 8px;
    border: none;

`;