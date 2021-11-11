import styled from 'styled-components';

export const Area = styled.div`
    box-sizing: border-box;
    
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 20px;
    padding: 22px;

    display: flex;
    align-items: center;
    flex-direction: column;


    width: 80%;
    height: 50%;
    
`;

export const AreaHeader = styled.div`
    width: 90%;
    font: 14px "Poppins", Sans-serif;
    white-space: nowrap;

`;

export const AreaItem = styled.div`
    font: 14px "Poppins", Sans-serif;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 22px;
    width: 80%;

    border: 1px solid #c4c4c4;
    
`;

export const AreaData = styled.div`
    max-width: 80%;
    height: 100%;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }

    span{
        text-transform: capitalize;
    }

    #descricao{
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        Word-wrap: break-Word;
    }


    h4{
        font-size: 14px;
        font-weight: 600;
    }
`;