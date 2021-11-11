import styled from 'styled-components';

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;

    font-family: "Poppins", Sans-serif;
    select{
        background: #fff;
        max-width: 250px;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 10px auto;
`;