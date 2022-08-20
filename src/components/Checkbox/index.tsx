import { InputHTMLAttributes, FC } from 'react';
import { Container } from './styled';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <Container>
      <input {...props} type='checkbox'/>
    </Container>
  )
}

export default Checkbox;
