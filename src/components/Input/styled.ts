import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main<{isFilled:boolean}>`
  width: 100%;
  height: 64px;
  
  background-color: white;
  
  display: flex;
  flex-direction: column;
  
  border: ${ props => props.isFilled ? "1px solid #E94E77" :"1px solid rgb(239 239 239)"};
  border-radius: 10px;
  
  padding: 1rem;
  
  font-size: 1rem;

  label {
    font-weight: 300;
  }

  input {
    flex: 1;
    height: 100%;
    font-size: 1rem;
  }
`;