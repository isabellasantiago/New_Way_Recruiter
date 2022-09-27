import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;               
    flex-direction: column;
    white-space: nowrap;
    width: 60%;
    font-family: "Poppins", sans-serif;
    position: relative;

    select{
        font-family: "Poppins", sans-serif;
    }

    input, select{
        position: relative;
    }

    span{
        font: 400 10px "Poppins", sans-serif;
        white-space: nowrap;
        color: #C73E1D;
        position: absolute;
        bottom: -18px;
    }
`;