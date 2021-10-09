import styled from 'styled-components';

export const TableLista = styled.table`
    box-sizing: border-box;
    
    border: 1px solid #000;
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 20px;
    

    &:not(#header){
        padding: 5px;
    }

    
`;

export const TableHeader = styled.thead`
    width: 100%;
    margin: 0;
    border: 1px solid #000;
    

`;

export const TableTitle = styled.th`
    width: 130px;
    font-weight: 500;
`;

export const TableBody = styled.tbody`
    width: 100%;
`;

export const TableRow = styled.tr``;

export const TableItem = styled.tr`
    width: 100%;
    text-align: center;
    vertical-align: middle;
`;

export const TableData = styled.td`
    text-align: center;
    vertical-align: middle;
    width: 130px;

    font-size: 12px;

    text-transform: capitalize;

    button{
        background: transparent;
        border: 0;
        cursor:pointer;
    }
`;