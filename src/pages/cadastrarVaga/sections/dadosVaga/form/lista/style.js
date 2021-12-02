import styled from 'styled-components'

export const ItemInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 5px;
    background: #fff;
    border: 1px solid #afafaf;
    border-radius: 8px;
    max-width: 230px;
   
`;

export const Form = styled.form`
    max-width: 400px;

    input{
       background: none;
       width: 100%;
       border: none;
       padding: 0 5px;
    }


    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    max-width: 230px;

    button{
        background: none;
        border: none;
    }
`