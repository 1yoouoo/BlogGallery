import { rest } from 'msw';
import { mockRead, mockWrite } from './resolvers/mockBokboot';

export const handlers = [
  rest.post('/write', mockWrite),
  rest.get('/read', mockRead),
];
