import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 130px;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    background: ${({ color }) => color ? color : '#4EA3D9'};
    justify-content: flex-start;
    align-items: center;
    padding: 5px 2px;
`;

export const Text = styled.p`
    font: 500 14px 'Poppins', sans-serif;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
`;