import { UserData, ApiResponse, LoginCredentials, SignupData } from './auth';

export interface UseAuthReturn {
  user: UserData | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export interface UseFetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}