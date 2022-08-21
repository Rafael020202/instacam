import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import { AiFillHome, AiOutlinePlusSquare } from 'react-icons/ai'

import { Actions, Container } from './styled';
import SearchBox from '../SearchBox';

const Header: FC = () => {
  return (
    <Container>
        <SearchBox />
        <Actions>
          <AiFillHome size={30}/>
          <AiOutlinePlusSquare size={30}/>
          <Image 
            src={'/images/21.jpg'} 
            alt='profile-pic' 
            width={40} 
            height={40} 
          />
        </Actions>
      </Container>
  )
}

export default Header;