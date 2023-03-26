import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';
import articles from '../../../../server/database.js';

interface IdProps {
  id: string;
}

const mockGetAllArticles = async (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(
    ctx.status(200),
    ctx.json(articles),
    ctx.set('Cache-Control', 'max-age=3600'),
  );
};

const mockGetArticleById = async (
  req: RestRequest<IdProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { id } = req.params;
  return res(
    ctx.status(200),
    ctx.json(articles.find((article) => article.id == Number(id))),
  );
};

export { mockGetAllArticles, mockGetArticleById };
