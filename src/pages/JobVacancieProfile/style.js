import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 600px;
    height: 95%;
    background-color: #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const Row = styled.div`
    width: 90%;
    height: ${({h}) => h ? h : 'calc(100% - 60px / 3)'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({justify}) => justify || 'space-between'};
    gap: 40px;
    color: #012e41;
    padding: 20px 30px;
`;

export const DataBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`;

export const Row2 = styled(Row)`
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 0;
`;


export const IconBox = styled.div`
    width: 70px;
    display: flex;
    align-items: center;
`;

export const ProfilePicBox = styled.div``;

export const ProfilePic = styled.img`
    width: 140px;
    height: 140px;
    left: calc(100%/2 - 90px);
    border-radius: 50%;
    border: 8px solid #f8f8f8;
    background-color: #fff;
    z-index: 1;
    object-fit: cover;
`;

export const Candidates = styled(ProfilePic)`
    width: 60px;
    height: 60px;
`;

export const Name = styled.h1`
    font: 600 18px 'Poppins', sans-serif;
    white-space: nowrap;
`;

export const CompanyName = styled.span`
    font: 400 14px 'Poppins', sans-serif;
    white-space: nowrap;
    text-align: flex-start;
`;

export const Label = styled(CompanyName)`
    font-weight: 600;
    font-size: ${({fontSize}) => fontSize};
    line-height: 14px;
    margin-left: ${({ml}) => ml || '0'};
    
    ${({color}) => color && (css`
        color: ${color};
    `)}
`;

export const Value = styled(Label)`
    font-weight: ${({notBold}) => notBold && '400'};
    color: ${({color}) => color || '#A6A6A6'} ;
    text-transform: capitalize;

    ${({salary}) => salary && (css`
        align-self: start;
    `)}

    ${({textArea}) => textArea && (css`
        width: 100%;
        height: 100%;
        white-space: normal;
    `)}
`;

export const LabelValueContainer = styled.div`
    width: ${({ w }) => w ? w : '200px'};
    max-height: 60px;
    display: flex;
    align-items: center;
    justify-content: ${({ justify }) => justify || 'space-evenly'};
    gap: 5px;
    flex-flow: ${({ flow }) => flow };
    margin-bottom: 15px;
`;

export const IconContainer = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
`;

export const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    margin-top: 50px;

    button:nth-child(2){
        margin-bottom: 20px;
    }
`;

export const Btn = styled.button`
    border: none;
    border-radius: 8px;
    background: #012e41;
    color: #f9f9f9;
    font: 400 12px 'Poppins', sans-serif;

    width: ${({w}) => w ? w : '100px'};
    height: ${({h}) => h ? h : '30px'};
    font-weight: ${({bold}) => bold && ('550')};

    cursor: pointer;
`;