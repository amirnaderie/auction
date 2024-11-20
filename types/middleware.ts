import { NextMiddleware } from 'next/server';

export interface MiddlewareConfig {
  matcher: string[];
  publicPaths?: string[];
  authPaths?: string[];
}