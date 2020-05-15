import apiSetup from './setup';
import {ServerResponse} from './types';

export type LoginResponse = ServerResponse<{
  id: string;
}>;

const Login = async (): Promise<LoginResponse | null> => {
  const response = await apiSetup().get('login');

  return response.data as LoginResponse;
};

const Register = async (
  email: string,
  password: string
): Promise<LoginResponse | null> => {
  const response = await apiSetup().post('login', {email, password});

  return response.data as LoginResponse;
};

export {Login, Register};
