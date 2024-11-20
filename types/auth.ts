export interface UserData {
    id?: string;
    name: string;
    email: string;
    role?: UserRole;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export type UserRole = 'admin' | 'user';
  
  export interface LoginCredentials {
    userMobile: string;
    password: string;
  }
  
  export interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: UserData;
  }
  
  export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: ApiError[];
  }
  
  export interface ApiError {
    field?: string;
    message: string;
    code?: string;
  }
  