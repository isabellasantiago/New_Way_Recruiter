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

    #label{
        color: rgba(0,0,0, 0.68);
    }

    button{
        align-self: flex-end;
        margin-bottom: 18px;
    }
    select{
        background: #fff;
    }

    #row1{
        input{
            max-width: 300px;
        }
    }
`;
