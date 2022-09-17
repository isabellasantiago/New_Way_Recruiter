import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60vh;

    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
`;

export const Content = styled.div`
    width: 700px;
    height:100%;

    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding-top: 40px;

    border-radius: 8px;
    overflow: scroll;
`;