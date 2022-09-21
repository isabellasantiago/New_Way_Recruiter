import styled, { css } from 'styled-components';

export const Content = styled.main`
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    background: linear-gradient(180deg, rgba(6, 74, 116, 0.83) 0%, rgba(1, 46, 64, 0) 100%);
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
`;

export const Title = styled.h1`
    font: 500 20px 'Poppins', sans-serif;
    line-height: 25px;
    color: #fff;
    text-align: center;
    margin: 15px;
`;

export const List = styled.div`
    width: calc(100% - 200px);
    height: calc(100% - 40px);

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
    gap: 30px;

    ${({ show }) => show && css({
        overflowY: 'scroll',
    })}
`;

export const Card = styled.div`
    width: 180px;
    height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: linear-gradient(180deg, rgba(12, 57, 85, 0.963542) 4.17%, #032134 65.1%),
    linear-gradient(0deg, #7BD2F4, #7BD2F4);
    padding: 8px 10px;
    border-radius: 20px;

    margin-bottom: 10px;
`;

export const CompanyName = styled(Title)`
    font-size: 18px;
    text-align: center;
`;

export const JVContainer = styled.div`
    width: 100%;
    height: calc(100%/2);
    background: #3F779A;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    h1{
        color: #000;
        font: 600 16px 'Poppins', sans-serif;
    }
    span{
        font: 500 13px 'Poppins', sans-serif;
    }
`;

export const SeeMoreLink = styled.button`
    margin: 6px 5px 0px 0px;
    color: #fff;
    font: 500 12px 'Poppins', sans-serif;
    line-height: 14px;
    align-self: flex-end;
    text-decoration: underline;
    background: none;
    border: none;
`;