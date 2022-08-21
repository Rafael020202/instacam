import type { NextPage } from 'next'

import { Container } from '../styles/home';
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default Home
