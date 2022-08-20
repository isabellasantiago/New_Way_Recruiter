import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    box-sizing: border-box;
`;

export const CoverContainer = styled.div`
    width: 100%;
    height: 180px;
    border: 5px solid #c4c4c4;
    border-radius: 4px;
    background-color: #f4f4f4;
    position: relative;
    margin-bottom: 5px;
`;

export const ProfilePicContainer = styled.div`
    width: 140px;
    height: 140px;
    position: absolute;
    top: 80px;
    right: 0;
    left: calc(100%/2 - 90px);
    border-radius: 50%;
    border: 3px solid #000;
    background-color: #fff;
    z-index: 1;
`;

export const ProfilePic = styled.img`
    width: 100%;
    border: 1px solid #000;
`;

export const EditBtn = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    top:0;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    position: relative;
    border: 1px solid #000;
    padding: 20px 5px;
`;

export const CompanyName = styled.h1`
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    text-align: left;
    font-size: 1.2rem;
    position: absolute;
    top:0;
    right: 0;
    left: 0;
`;

export const InfoContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 100px;
`;

export const AboutContainer = styled.div`
    width: calc(100%/2 - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const CompanyIMG = styled.img`
    width: calc(100%/2 -10px);
    height: 50%;
    border-radius: 32px;
`;
export const About = styled.p`
    font: 500 14px 'Poppins', sans-serif;
    line-height: 18px;
    color: #000;
`;

export const LeftContainer = styled(AboutContainer)`
    gap: 10px;
`;