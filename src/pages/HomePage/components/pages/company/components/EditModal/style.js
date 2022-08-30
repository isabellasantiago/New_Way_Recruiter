import styled from 'styled-components';


export const Section = styled.div`
    width: 700px;
    height: 650px;
    background-color: #fff;
    border-radius: 8px;

    padding: 15px;
    box-sizing: border-box;
    margin: 10px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    box-sizing: border-box;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    box-sizing: border-box;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h1`
    font: 400 16px 'Poppins', sans-serif;
    text-align: 'center';
`;


export const Label = styled.label`
    font: 400 12px 'Poppins', sans-serif;
`;

export const Input = styled.input`
    width: 280px;
    border: 1px solid #AFAFAF;
    border-radius: 8px;
    font: 400 14px 'Poppins', sans-serif;
    padding: 3px 4px;
    overflow-x: hidden;
    text-overflow: ellipsis;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    margin-bottom: 8px;
    
    span{
        font: 400 10px "Poppins", sans-serif;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }
`;

export const TextArea = styled.textarea`
    width: 280px;
    height: 120px;
    border: 1px solid #AFAFAF;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    padding: 4px 5px;
    resize: none;
`;

export const Limit = styled.div``;

export const RemoveAccount = styled.button`
    width: 110px;
    height: 28px;
    color: #ff0000;
    background-color: #cccc;
    border: none;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    &:hover{
        background-color: #c9c9c9;
    }
`;