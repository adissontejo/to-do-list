import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Form } from './styles';
import { authenticateUser } from '~/services';
import { setCookie } from 'cookies-next';
import { Input } from '~/components';

const schema = yup.object({
  email: yup.string().required('Preencha esse campo!'),
  password: yup.string().required('Preencha esse campo!'),
});

const Login = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const router = useRouter();

  const { register, handleSubmit, setError, clearErrors, formState } =
    useForm<FormData>({
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      const { token } = await authenticateUser(data.email, data.password);

      setCookie('auth-token', token);

      router.reload();
    } catch (e) {
      setError('root', { message: 'E-mail ou senha incorretos!' });
    }
  };

  return (
    <Container>
      <Head>
        <title>Log-in</title>
      </Head>
      <main>
        <h1>Planner</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={!!formState.errors.email || !!formState.errors.root}
            errorMessage={formState.errors.email?.message}
            placeholder="E-mail"
            type="email"
            {...register('email', {
              required: true,
              onChange: () => clearErrors('root'),
            })}
          />
          <Input
            error={!!formState.errors.password || !!formState.errors.root}
            errorMessage={
              formState.errors.root?.message ||
              formState.errors.password?.message
            }
            placeholder="Senha"
            type="password"
            {...register('password', {
              required: true,
              onChange: () => clearErrors('root'),
            })}
          />
          <button type="submit" className="submit">
            Entrar
          </button>
        </Form>
      </main>
      <p>Ainda não tem uma conta?</p>
      <button className="register" onClick={() => router.push('/register')}>
        Cadastre-se
      </button>
    </Container>
  );
};

export default Login;
