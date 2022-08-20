import { FC, HTMLProps } from 'react';
import { Container, Content } from './styled';

const Input: FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <Container>
      <Content isFilled={!!props.value}>
        { props.value && <label>{props.placeholder}</label> }
        <input {...props}/>
      </Content>
    </Container>
  )
}

export default Input;