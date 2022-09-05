import styled from 'styled-components';


export const Container = styled.div`
    box-sizing: 'border-box';
    font-family: 'Poppins', sans-serif !important;
    width: 500px;
    height: 30px;
    padding: 10px 3px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: linear-gradient(90deg, #0067AA 33.09%, rgba(3, 103, 165, 0.75) 68.12%, rgba(3, 103, 165, 0.74) 104.5%);
    border-radius: 10px;
    cursor: pointer;
`;

export const Title = styled.h3`
    font: 600 12px 'Poppins', sans-serif;
    color: #FFFFFF;
    width: 100px;
    white-space: nowrap;
`;

export const LocalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
`;

export const Local = styled.span`
    font: 400 12px 'Poppins', sans-serif;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-transform: capitalize;
`;

export const Salary = styled.span`
    font: 400 12px 'Poppins', sans-serif;
    color: #FFFFFF;
    width: 100px;
    white-space: nowrap;

    &::before{
        content: "R$";
    }
`;