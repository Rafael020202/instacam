import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  max-width: 500px;

  background-color: #efefef;

  border-radius: 5px;

  padding: 8px;

  font-size: 1.2rem;
  color: #8e8e8e;

  svg {
    margin-right: 12px;
  }

  input {
    flex: 1;
    background-color: transparent;
    font-size: 1rem;
  }

  @media (max-width: 530px) {
    & {
      display: none;
    }
  }

  @media (max-width: 630px) {
    & {
      max-width: 250px;
    }
  }
`;