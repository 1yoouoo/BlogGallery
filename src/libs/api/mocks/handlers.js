import { rest } from 'msw';
import {
  mockGetAllArticles,
  mockGetArticleById,
} from './resolvers/mockBokboot';

export const handlers = [
  rest.get('/read', mockGetAllArticles),
  rest.get('/read/:id', mockGetArticleById),
];
