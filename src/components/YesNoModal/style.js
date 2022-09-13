import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    font-family: 'Poppins', sans-serif;
    padding: 20px;
`;

export const Division = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
`;

export const Description = styled(Title)`
    font: 500 10px;
`;

export const YesNoBtn = styled.button`
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 8px;

    color: ${({ color }) => color  || '#000'};
    background: ${({ bgColor }) => bgColor || '#c4c4c4'};
    cursor: pointer;

    &:hover {
        filter: brightness(50%);
    }
`;

export const YesNoContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 10px;
`;