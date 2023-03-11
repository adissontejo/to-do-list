import { api } from '../api';
import { serializers, UserParams } from '../serializers';

export const getLoggedUser = async () => {
  const response = await api.get('/users/logged');

  return serializers.userWithLists(response.data);
};

export const createUser = async (data: UserParams) => {
  const response = await api.post('/users', {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.passwordConfirmation,
  });

  return serializers.user(response.data);
};

export const authenticateUser = async (email: string, password: string) => {
  const response = await api.post('/users/login', {
    email,
    password,
  });

  return response.data as { token: string };
};
