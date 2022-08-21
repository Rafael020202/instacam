import { FC, HTMLProps } from 'react';
import { Container } from './styled';

import { FiSearch } from 'react-icons/fi';


const SearchBox: FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <Container>
      <FiSearch/>
      <input placeholder='Pesquisar'/>
    </Container>
  )
}

export default SearchBox;