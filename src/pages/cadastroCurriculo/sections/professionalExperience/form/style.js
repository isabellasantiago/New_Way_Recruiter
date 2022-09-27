import styled from 'styled-components';

export const Form = styled.form`
    width: 90%;
    height: 100%;
    font-family:"Poppins", Sans-serif;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    #checkbox{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    select{
        background: #fff;
    }

    input{
        font-family: 'Poppins';
        font-size: 0.8rem;
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        padding: 5px 15px;
        height: 35px;

        max-width: 200px;
    }

    #row1{
        input{
            max-width: 300px;
        }
    }
`;
