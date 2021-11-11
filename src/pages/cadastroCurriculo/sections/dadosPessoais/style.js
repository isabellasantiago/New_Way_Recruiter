import styled from 'styled-components';


export const DadosPessoais = styled.section`
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
    box-sizing: border-box;
    width:70%;
    
    max-height: 100vh;

    border-radius: 8px;
    margin-top: 50px;
    margin-bottom: 50px;

    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    #radio-button{
       display: flex;
       gap: 5px;
       align-items: center;
    }

    .linkedin{
        justify-content: flex-end;
    }

    select, input{
        &:not(input[type="radio"]){
        width: 230px
        }
        
    }
    
    input{
        font-family: 'Poppins';
        font-size: 0.8rem;
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        ;
        padding: 5px 15px;
        height: 35px;
        max-width: 330px;
    }

    a{
        text-decoration: none;
        color: #fff;
    }
    
`

export const TitleForm = styled.h1`
    font-weight: 500;
    margin:20px auto;
`;


export const DadosPessoaisForm = styled.form`
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;

    font-family: 'Poppins', Arial, Sans-serif;
    min-width: 80%;

    min-height: 50vh;
    max-height: 95vh;

    select{
        background: #fff;
    }
`;

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`;
        

