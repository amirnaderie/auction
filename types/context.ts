import { Dispatch, SetStateAction } from 'react';
import { LoginCredentials, SignupData, UserData } from './auth';

export interface AuthContextType {
  user: UserData | null;
  setUser: Dispatch<SetStateAction<UserData | null>>;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}