export interface AppConfig {
    jwt: {
      secret: string;
      expiresIn: string;
    };
    cookie: {
      name: string;
      options: {
        httpOnly: boolean;
        secure: boolean;
        sameSite: boolean | 'lax' | 'strict' | 'none';
        maxAge: number;
      };
    };
    cors: {
      origin: string | string[];
      methods: string[];
    };
  }