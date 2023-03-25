import { rest } from 'msw';
import people from './dummy.json';

const todos = ['먹기'];
export const handlers = [
  // 할일 목록
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  rest.post('/todos', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
