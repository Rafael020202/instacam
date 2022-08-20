import { FC, HTMLProps } from 'react';
import { Container, Content } from './styled';

import { IconBaseProps } from 'react-icons';

interface InputPros extends HTMLProps<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  handleIconClick?: () => void
}

const Input: FC<InputPros> = ({ icon: Icon, handleIconClick: handleiconclick, ...props }) => {
  return (
    <Container>
      <Content isFilled={!!props.value}>
        <div>
          { props.value && <label>{props.placeholder}</label> }
          <input {...props}/>
        </div>
        { Icon && <Icon onClick={handleiconclick} size={20}/> }
      </Content>
    </Container>
  )
}

export default Input;