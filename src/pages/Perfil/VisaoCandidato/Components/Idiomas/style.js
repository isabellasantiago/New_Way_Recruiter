import styled from 'styled-components';

export const Idiomas = styled.div`
  width: 50%;

  background: #FEFEFE;
  border-radius: 8px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h1`
  font: 500 24px 'Poppins';
  font-style: normal;
  line-height: 36px;
  color: #000000;

  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  width: 100%;
  height: 90%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
export const List = styled.ul`
  margin-left: 130px;
  width: 285px;
  height: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #023859;
`;

export const LanguageInfo = styled.h2`
  font: 500 18px 'Poppins', sans-serif;
  font-style: normal;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;

  text-transform: capitalize;

`;