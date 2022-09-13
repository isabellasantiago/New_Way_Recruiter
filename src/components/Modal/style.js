import styled from "styled-components";

export const Section = styled.div`
    width: ${({width}) => width || '700px'};
    height: ${({height}) => height || '650px'};
    background-color: #fff;
    border-radius: 8px;

    padding: 15px;
    box-sizing: border-box;
    margin: 10px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;