import styled from 'styled-components';

export const Container = styled.div`
  input[type="checkbox"] {
    appearance: none;
    display: grid;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #E94E77;
  }

  input[type=checkbox]:checked::before {
    text-align: center;
    content: '✓';
    color: white;
    border: none;
    font-size: 0.9rem;
    
  };

  input[type=checkbox]:checked {
    border: none
  }
`;