import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex: 1;
`;

export const BgLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #E94E77;
  
  height: 100%;
  width: 60%;
  
  font-size: 6rem;

  span {
    font-weight: bolder;
    font-family: Satisfy, cursive; 
    color: #fafafa;
  }

  @media only screen and (max-width: 768px){
    display: none;
  }

  @media only screen and (max-width: 980px){
    width: 40%;
    font-size: 4rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  
  padding: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  max-width: 500px;
  
  color: #E94E77;

  span {
    font-size: 3.5rem;
    font-weight: bolder;
    font-family: Satisfy, cursive; 
  }

  button {
    width: 100%;
    height: 58px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #E94E77;
    color: white;
    
    border-radius: 5px;
    
    font-size: 1.4rem;

    svg {
      animation: ${rotate} 0.8s linear infinite;
      font-size: 2.5rem;
    }
  }

  section {
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 1rem;

    font-size: 0.8rem;

    font-weight: bolder;

    a:hover {
      opacity: 0.8;
    }
  }
`;