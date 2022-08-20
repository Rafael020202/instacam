import type { NextPage } from 'next'
import { useState, FormEvent } from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';
import { FiEye } from 'react-icons/fi';

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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    const change = {
      ...data,
      [name]: value
    } as Login;

    setData(change);
  }

  const handleIconClick = () => {
    setShowPassword(!showPassword);
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
              type={showPassword ?'password' :'text'}
              name='password'
              onChange={(e) => handleChange(e)}
              value={data.password}
              icon={FiEye}
              handleIconClick={handleIconClick}
            />

            {error && <strong>Wrong email or password</strong>}

            <button>{loading ?<CgSpinnerAlt/> :'LOGIN'}</button>
          </Form>

          <section>
            <a>Forgot passowrd?</a>
            <a>Sign up</a>
          </section>
        </FormContainer>  
    </Container>
  )
}

export default SignIn;