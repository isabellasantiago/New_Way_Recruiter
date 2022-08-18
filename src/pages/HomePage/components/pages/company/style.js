import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 0px 20px;
`;

export const CoverContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 5px solid #c4c4c4;
    border-radius: 4px;
    background-color: #f4f4f4;
    position: relative;
    margin-bottom: 5px;
`;

export const ProfilePicContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ProfilePic = styled.img`
    width: 100%;
    height: 100%;
`;

export const EditBtn = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: flex-end;
`;
