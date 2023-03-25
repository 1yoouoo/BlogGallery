import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import service from '../libs/api';
import CodeBlock from '../components/CodeBlock';
interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
}
const ViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  // 게시글 가져오기
  const getArticle = useCallback((id: string) => {
    service.get(`/read/${id}`).then((result) => {
      setArticle(result);
    });
  }, []);

  useEffect(() => {
    if (id) {
      getArticle(id);
    }
  }, [getArticle, id]);

  return article ? (
    <StyledViewPage className={'ViewPage'}>
      <StyledViewPageTitle className={'ViewPage__title'}>
        {article.title}
      </StyledViewPageTitle>
      <StyledViewPageImage
        className={'ViewPage__image'}
        src={article.image}
        alt="thumnail"
      />
      <StyledViewPageContent className={'ViewPage__content'}>
        <ReactMarkdown components={{ code: CodeBlock }}>
          {article.content}
        </ReactMarkdown>
      </StyledViewPageContent>
    </StyledViewPage>
  ) : (
    <div>loading..</div>
  );
};

const StyledViewPage = styled.div`
  width: 700px;
  text-align: left;
  margin: auto;
`;
const StyledViewPageTitle = styled.h1`
  font-weight: 500;
  font-size: 2.5em;
  margin-top: 10px;
`;
const StyledViewPageImage = styled.img`
  width: 100%;
`;
const StyledViewPageContent = styled.div`
  line-height: 1.4;
`;

export default ViewPage;
