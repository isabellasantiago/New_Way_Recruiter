import styled, { css } from 'styled-components';

export const Main = styled.div`
  width: 100%;
  background: #FEFEFE;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 40px;

`;

export const Title = styled.h2`
  font: 500 24px 'Poppins';
  font-style: normal;
  line-height: 36px;
  color: #000000;

  display: flex;
  align-items: center;
`;


export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;


export const LastExperience = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 150px;
`;

export const CompanyName = styled.h3`
  font: 600 24px 'Poppins';
  font-style: normal;
  line-height: 36px;
  color: #000000;
  text-transform: capitalize;
  
  width: 80%;

  ${({ complete }) => complete && css({
    font: '600 24px Poppins, sans-serif',
    fontStyle:'normal',
    lineHeight:'36px',

    marginLeft:'18px',
    alignItems:'center',
    color:'#000000',
  })}
`;

export const Timeline = styled.ul`
  margin-top:45px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JobsLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 123px;
`;


export const PromotionLineItem = styled.li`
  transition: all 200ms ease-in;

  ${({complete}) => complete && css({
    width:'175px'
  })}
`;

export const Timestamp = styled.div`
  margin-bottom: 20px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 100;
`;

export const Status = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 2px solid #D6DCE0;
  position: relative;
  transition: all 200ms ease-in;

  &:before{
    content: '';
    width: 17px;
    height: 17px;
    background-color: white;
    border-radius: 25px;
    border: 1px solid #ddd;
    position: absolute;
    top: -10px;
    left: 42%;
    transition: all 200ms ease-in;
  }

  ${({ complete }) => complete && css({
    borderTop: '2px solid #C6C6C6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&:before': {
      backgroundColor: '#023859',
      border: 'none',
      transition: 'all 200ms ease-in',
    }
  }
  )}
`;

export const RoleTitle = styled.h4`
  font: 500 18px 'Poppins', sans-serif;
  font-style: normal;
  line-height: 27px;
  color: #000000;
  text-transform: capitalize;

  display: flex;  
  align-items: center;

  ${({ complete }) => complete && css({
    marginTop: '10px',
    font: 'bold 15px Poppins',
    fontStyle: 'normal',
    lineHeight: '22px',
    textAlign: 'left',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: '#000000',
  })}
`;

export const Date = styled.h5`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #000000;
  ${({ complete }) => complete && css({
    width:'175px',
    font: '500 14px Poppins, sans-serif',
    fontStyle: 'normal',
    lineHeight: '21px',
    textAlign: 'center',
    /* identical to box height */

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    color: '#000000',
  })}
`;

export const Level = styled.h5`
  font: 500 16px 'Poppins', sans-serif;
  font-style: normal;
  line-height: 24px;
  color: #000000;

  display: flex;
  align-items: center;

  ${({ oldJobs}) => oldJobs && css({
    fontSize: '18px',
    lineHeight: '27px',
    marginLeft: '17px',
    display: 'flex',
    alignItems: 'center'
  })}

  
  ${({ complete }) => complete && css({
    width:'175px',
    font: '500 14px Poppins, sans-serif',
    fontStyle: 'normal',
    lineHeight: '21px',
    textAlign: 'center',
    /* identical to box height */

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    color: '#000000',
  })}
`;

export const Line = styled.span`
  width: 100%;
  height: 0px;
  left: 347px;
  top: 901.33px;

  border: 1px solid #C4C4C4;
  transform: rotate(-0.14deg);
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: row;
  width:676px;
  height: 240px;
  padding-top:39px;
`;

export const Row = styled.div`
  margin-top:12px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: calc(100%/2 + 100px);
  height:20px;
`;
