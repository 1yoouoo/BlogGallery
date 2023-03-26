import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import service from '../libs/api';
import Article from './Article';
interface ArticleType {
  id: number;
  title: string;
  content: string;
  image: string;
  createdTime: string;
}

const ArticleList = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const getArticles = () => {
    service.get('/read').then((result) => {
      setArticles(result);
    });
  };
  const handleMouseEnter = (article: ArticleType) => {
    const img = new Image();
    img.src = `${article.image}?w=700`;
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <StyledArticleList>
      <ul>
        {articles &&
          articles.map((article) => (
            <li key={article.id} onMouseEnter={() => handleMouseEnter(article)}>
              <Link
                to={`/view/${article.id}`}
                style={{ textDecoration: 'none', color: 'initial' }}
              >
                <Article {...article} />
              </Link>
            </li>
          ))}
      </ul>
    </StyledArticleList>
  );
};

const StyledArticleList = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    overflow: hidden;
    width: 100%;
    padding: 25px 0 30px;
    border-bottom: 1px solid #eee;
  }
`;
export default ArticleList;
