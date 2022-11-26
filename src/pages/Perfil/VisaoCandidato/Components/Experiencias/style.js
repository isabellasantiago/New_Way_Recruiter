import styled, { css } from 'styled-components';

export const Main = styled.div`
  width: 700px;
  height: 500px;
  background: #FEFEFE;
  border-radius: 8px;
  margin-bottom:77px;
  display: flex;
  flex-direction: column;
  background-color: green;

`;

export const Title = styled.h2`
  margin-left:54px;
  margin-top:22px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
`;


export const Center = styled.div`
  width: 858px;
  height: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const LastExperience = styled.div`
  display: flex;
  flex-direction: row;
  width:676px;
  height: 173px;
`;

export const CompanyName = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
   
  align-items: center;
  color: #000000;

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
  width: 400px;
  height: 123px;
  margin-left: 18px;
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
  font: '500 18pxPoppins';
  font-style: normal;
  line-height: 27px;
  color: #000000;

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
  display: flex;
  align-items: center;
  color: #000000;

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
  width: 666.01px;
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
  width: 500px;
  height:20px;
`;
