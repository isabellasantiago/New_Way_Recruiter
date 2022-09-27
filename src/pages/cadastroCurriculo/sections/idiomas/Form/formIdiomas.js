import styled from 'styled-components';

export const FormIdioma = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-bottom: 20px;

    select{
        background: #fff;
    }
    input{
        font-family: 'Poppins';
        font-size: 0.8rem;
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        ;
        padding: 5px 15px;
        height: 35px;
    }
`;

export const Checkbox = styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    gap: 10px;
`;

export const InputWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    div{
        margin-bottom: 10px;
    }

    button{
        margin-top: 10px;
        border: none;
        background: none;
        cursor: pointer;
        height: 36px;
        width: 20px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;