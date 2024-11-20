import { ApiError } from "next/dist/server/api-utils";

export class AppError extends Error {
    constructor(
      public statusCode: number,
      public message: string,
      public errors?: ApiError[]
    ) {
      super(message);
      this.name = 'AppError';
    }
  }
  
  export class AuthenticationError extends AppError {
    constructor(message = 'Authentication failed') {
      super(401, message);
      this.name = 'AuthenticationError';
    }
  }
  
  export class ValidationError extends AppError {
    constructor(errors: ApiError[]) {
      super(400, 'Validation failed', errors);
      this.name = 'ValidationError';
    }
  }