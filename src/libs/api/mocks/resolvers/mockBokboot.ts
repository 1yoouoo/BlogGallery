import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';
import data from '../../../../server/database.js';

interface CodeProps {
  code: string;
}

interface IdProps {
  id: string;
}

const mockWrite = async (
  req: RestRequest<CodeProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { code } = req.body;

  if (!code)
    return res(
      ctx.status(500),
      ctx.json({ message: 'Please, Enter the code.' }),
    );

  return res(
    ctx.status(200),
    ctx.json({ queryParam: '?id=1', message: 'Code copy was succesful.' }),
  );
};

const mockRead = async (
  req: RestRequest<IdProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  // const { id } = req.body;
  // if (!id)
  //   return res(
  //     ctx.status(500),
  //     ctx.json({ message: 'Please, Enter Code Id.' }),
  //   );
  return res(ctx.status(200), ctx.json(data));
};

export { mockWrite, mockRead };
