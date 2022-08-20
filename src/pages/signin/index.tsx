import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState, FormEvent, useContext, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';

import { AuthContext } from '../../context/AuthContext';
import { Container, BgLogin, FormContainer, Form } from './styled';
import Input from '../../components/Input';

interface Login {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const { signIn, user } = useContext(AuthContext);
  const [data, setData] = useState<Login>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

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
              type={showPassword ?'text' :'password'}
              name='password'
              onChange={(e) => handleChange(e)}
              value={data.password}
              icon={FiEye}
              handleIconClick={handleIconClick}
            />

            {error && <strong>Wrong email or password</strong>}

            <button>{loading ?<AiOutlineLoading/> :'LOGIN'}</button>
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