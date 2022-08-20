import type { NextPage } from 'next'
import { Container, BgLogin, FormContainer, Form } from './styled';

import Input from '../../components/Input';

const signIn: NextPage = () => {
  return (
    <Container>
        <BgLogin>
          <span>Hot & charm</span>
        </BgLogin>
        <FormContainer>
          <Form>
            <span>Login</span>
            <Input 
              label='E-mail'
              placeholder='E-mail'
              
            />
            
            <Input 
              label='Password'
              placeholder='Password'
              type='password'
            />

            <section>
              <a>Forgot passowrd?</a>
              <a>Sign up</a>
            </section>

            <button>Log In</button>
          </Form>
        </FormContainer>  
    </Container>
  )
}

export default signIn;