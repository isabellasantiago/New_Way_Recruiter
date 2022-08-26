import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;               
    flex-direction: column;
    white-space: nowrap;
    width: 60%;
    font-family: "Poppins", sans-serif;

    select{
        font-family: "Poppins", sans-serif;
    }

    > span {
        font-size: 0.8rem;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }
`;