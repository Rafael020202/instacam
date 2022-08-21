import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 3.6rem;
  
  background-color: white;
  
  display: flex;
  justify-content: center;
  align-items: center;


  padding: 6px;

  border-bottom: 3px solid #e5e5e5;

  font-size: 2rem;

  @media only screen and (max-width: 530px) {
    & { 
      justify-content: center;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-left: 10px;

  img {
    border-radius: 50%;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;