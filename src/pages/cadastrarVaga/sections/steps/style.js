import styled from 'styled-components';

export const StepButton = styled.button`
    font-weight: ${({ step }) => step ? 800 : 500};
`;

export const StepSection = styled.div`
    gap: 2px;
    box-sizing: border-box;
    
    width: 450px;
    height: 45px;
    border-radius: 15px;

    background: #7BD2F4;
    color: #000;

    padding: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        background:none;
        border: none;
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        font-size: 17px;
        line-height: 34px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000;
        
        &:active {
            font-weight: 600;
        }
    }

`;