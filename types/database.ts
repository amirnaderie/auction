import { UserRole } from "./auth";

export interface BaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface UserModel extends BaseModel {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    lastLogin?: Date;
    isVerified: boolean;
    verificationToken?: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
  }
  
  export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  }
  