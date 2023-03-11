import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '~/components';
import { createUser } from '~/services';

import { Container, Form } from './styles';

const schema = yup.object({
  name: yup.string().required('Preencha esse campo!'),
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'E-mail inválido!')
    .required('Preencha esse campo!'),
  password: yup
    .string()
    .min(8, 'Senha muito curta!')
    .required('Preencha esse campo!'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas são diferentes!')
    .required('Preencha esse campo!'),
});

const Register = () => {
  type FormFields = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  };

  const router = useRouter();

  const { register, handleSubmit, setError, formState } = useForm<FormFields>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onRegister: SubmitHandler<FormFields> = async data => {
    try {
      await createUser(data);

      router.push('/login');
    } catch (e) {
      const { data } = e.response;

      if (data.email) {
        setError('email', { message: 'E-mail já utilizado!' });
      }
    }
  };

  return (
    <Container>
      <Head>
        <title>Cadastro</title>
      </Head>
      <main>
        <h2>Cadastro</h2>
        <Form onSubmit={handleSubmit(onRegister)}>
          <Input
            placeholder="Nome"
            error={!!formState.errors.name}
            errorMessage={formState.errors.name?.message}
            {...register('name')}
          />
          <Input
            type="email"
            placeholder="E-mail"
            error={!!formState.errors.email}
            errorMessage={formState.errors.email?.message}
            {...register('email')}
          />
          <Input
            type="password"
            placeholder="Senha"
            error={!!formState.errors.password}
            errorMessage={formState.errors.password?.message}
            {...register('password')}
          />
          <Input
            type="password"
            placeholder="Repita a senha"
            error={!!formState.errors.passwordConfirmation}
            errorMessage={formState.errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          />
          <button type="submit" className="submit">
            Cadastrar
          </button>
        </Form>
      </main>
    </Container>
  );
};

export default Register;
