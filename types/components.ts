import { ReactNode } from 'react';
import { ApiError, AuthResponse, UserData } from './auth';


export interface LayoutProps {
  children: ReactNode;
}

export interface AuthLayoutProps extends LayoutProps {
  title?: string;
  description?: string;
}

export interface DashboardLayoutProps extends LayoutProps {
  user: UserData;
}

export interface NavbarProps {
  user: UserData;
  onLogout: () => void;
}

export interface FormProps {
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

export interface LoginFormProps extends FormProps {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: ApiError[]) => void;
}

export interface SignupFormProps extends FormProps {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: ApiError[]) => void;
}