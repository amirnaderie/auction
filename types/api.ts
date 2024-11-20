import { NextApiRequest, NextApiResponse } from 'next';
import { UserData, ApiResponse } from './auth';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: UserData;
}

export type ApiHandler<T = any> = (
  req: AuthenticatedRequest,
  res: NextApiResponse<ApiResponse<T>>
) => Promise<void> | void;

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}