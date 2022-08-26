import styled from 'styled-components';


export const Section = styled.div`
    width: 900px;
    height: 800px;
    
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.h1`
    font: 400 16px 'Poppins', sans-serif;
`;


export const Label = styled.label`
    font: 400 12px 'Poppins', sans-serif;
`;

export const Input = styled.input`
    min-width: 200px;
    max-width: 400px;
    border: 1px solid #AFAFAF;
    border-radius: 8px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextArea = styled.textarea`
    width: 350px;
    border: 1px solid #AFAFAF;
    border-radius: 8px;
`;