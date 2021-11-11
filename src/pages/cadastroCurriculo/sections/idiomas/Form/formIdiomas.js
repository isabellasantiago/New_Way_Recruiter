import styled from 'styled-components';

export const FormIdioma = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-bottom: 20px;

    select{
        background: #fff;
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
    }
    
`;