import styled from 'styled-components'

export const Body = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 100vh;

    background: #fff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 50px;
`;

export const Section = styled.section`
    width: 80%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;


    background: rgba(196, 196, 196, 0.15);
    border-radius: 40px;


    @media (min-width: 1380px){
        max-width: 40%;
    }
`;