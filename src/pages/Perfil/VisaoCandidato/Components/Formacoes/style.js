import styled from 'styled-components';


export const Formacoes = styled.div`
  width: 100%;

  background: #FEFEFE;
  border-radius: 8px;
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

export const CourseName = styled.h3`
  font: 600 24px 'Poppins';
  font-style: normal;
  line-height: 36px;
  color: #000000;
  text-transform: capitalize;
  
  width: 80%;
`;

export const JobsLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 123px;
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
`;

export const Level = styled.h5`
  font: 500 16px 'Poppins', sans-serif;
  font-style: normal;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;

  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  margin-top:12px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: calc(100%/2 + 100px);
  height:20px;
`;
