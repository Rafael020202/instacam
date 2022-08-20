import type { NextPage } from 'next'
import { useState, FormEvent } from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';

import { Container, BgLogin, FormContainer, Form } from './styled';

import Input from '../../components/Input';
import { signIn } from '../../utils/authentication';

interface Login {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const [data, setData] = useState<Login>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    const change = {
      ...data,
      [name]: value
    } as Login;

    setData(change);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    
    try {
      await signIn(data.email, data.password);
    } catch (error: any) {
      console.error('error', error.message);

      setError(true);
    } finally {
      setLoading(false);
    }

  }

  return (
    <Container>
        <BgLogin>
          <span>Hot & charm</span>
        </BgLogin>
        <FormContainer>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <span>Login</span>
            <Input 
              label='E-mail'
              placeholder='E-mail'
              name='email'
              onChange={(e) => handleChange(e)}
              value={data.email}
            />
            
            <Input 
              label='Password'
              placeholder='Password'
              type='password'
              name='password'
              onChange={(e) => handleChange(e)}
              value={data.password}
            />

            {error && <strong>Wrong email or password</strong>}

            <button>{loading ?<CgSpinnerAlt/> :'LOGIN'}</button>

            <section>
              <a>Forgot passowrd?</a>
              <a>Sign up</a>
            </section>
          </Form>
        </FormContainer>  
    </Container>
  )
}

export default SignIn;