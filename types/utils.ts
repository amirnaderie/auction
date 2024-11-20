import { UserRole } from "./auth";

export interface JwtPayload {
    sub: string;
    email: string;
    role: UserRole;
    iat: number;
    exp: number;
  }
  
  export interface TokenService {
    generateToken: (payload: Partial<JwtPayload>) => string;
    verifyToken: (token: string) => JwtPayload | null;
  }
  
  export interface ValidationError {
    field: string;
    message: string;
  }
  
  export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
  }
  