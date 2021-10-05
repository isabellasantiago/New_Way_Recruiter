import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input, select{
        max-width: 230px;
    }

    input[type="date"]{
        max-width: 200px;
    }
`;

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    >div{
        margin-bottom: 18px;
    }
`;