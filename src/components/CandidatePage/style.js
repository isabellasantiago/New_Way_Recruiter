import styled from 'styled-components';

export const Body = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 100vh;

    background: ${({ bgColor }) => bgColor || '#fff'};

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;