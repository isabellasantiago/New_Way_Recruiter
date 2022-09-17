import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    gap: 15px;
`;

export const Content = styled(Container)`
    height: 670px;
    overflow-y: ${({showMore}) => showMore && ('scroll')};
    ::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
    }
`;

export const Title = styled.h2`
    font: normal 28px 'Poppins';
    font-style: normal;
    line-height: 42px;
    text-align: center;

    color: #000000;
`;

export const Phrase = styled.p`
    font: 500 14px 'Poppins', sans-serif;
    font-style: normal;
    line-height: 21px;

    color: #000000;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Candidates = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    width: 620px;
    height: 110px;
    
    background: #FFFFFF;
    border: 2px solid #0367A5;
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: 4px 5px 7px rgba(0,0,0,0.3);
`;

export const PhotoBox = styled.div`
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    width: 230px;

    align-items: left;
    justify-content: left;
    text-align:left;
    
    h2 {
        font: 500 28px 'Poppins', sans-serif;
        line-height: 42px;
        white-space: nowrap;
        color: #000000;
    }

    p {
        font: 500 14px 'Poppins', sans-serif;
    }
`;

export const PercentContainter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const PercentValue = styled.h2`
    font: bold 28px 'Poppins';
    font-style: normal;
    line-height: 42px;
    text-align: center;
    color: #0367A5;
`;

export const SubPercentTitle=styled.h3`
    font: normal 18px 'Poppins';
    font-style: normal;
    text-align: center;
    color: #0367A5;
`;

export const LinkProfile = styled.a`
    font: normal 12px 'Poppins';
    font-style: normal;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;
`;

export const SeeMore = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 8px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    background: #fff;
    cursor: pointer;

    :hover{
        background-color: #e2e2e2;
    }
`;