import styled from 'styled-components';

export const Form = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 30px;

    input, select{
        max-width: 230px;
    }

    input[type="date"]{
        max-width: 200px;
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

    button{
        margin-top: 10px;
    }

    select{
        background: #fff;
    }
`;

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${(justify) => justify || 'space-between'};
    gap: 20px;
    align-items: center;

    > div{
        margin-bottom: 18px;
    }

    button{
        border: none;
        background: none;
        cursor: pointer;
        height: 36px;
        width: 20px;
        
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    
    textArea{
        resize: none;
        font: 500 14px 'Poppins', sans-serif;
        padding:10px 15px;
    }
`;