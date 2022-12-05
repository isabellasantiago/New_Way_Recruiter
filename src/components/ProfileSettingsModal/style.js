import styled from 'styled-components';

export const Input = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    padding: 5px;
    font-size: 12px;
    text-transform: capitalize;
`;

export const Label = styled.label`
    font: 500 12px 'Roboto', sans-serif;
    color: #000;
`;

export const InputContainer = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 8px;

    > span {
        font-size: 0.8rem;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    border-radius: 10px;
    gap: 50px;

    @media (min-width: 1380px){
        max-width: 40%;
        height: 70vh;
    };
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;

export const Rows = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-flow: row wrap;
    gap: 20px;
    width: 100%;
    height: (100%/2 - 40px);
`;

export const Btn = styled.button`
    width: 90px;
    height: 27px;
    color: ${({deleteMode}) => deleteMode ? '#B60000':'#fff'};
    background-color: ${({deleteMode}) => deleteMode ? '#E6E6E6' : '#023859'};
    border-radius: 6px;
    border: none;

    white-space: nowrap;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    margin-top: 50px;

    cursor: pointer;
`;