import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import service from '../libs/api';

const ViewPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(false);
  // 게시글 가져오기
  const getArticle = useCallback((id: any) => {
    service.get(`/read/${id}`).then((result) => {
      setArticle(result);
    });
  }, []);

  useEffect(() => {
    getArticle(id);
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
        {/* <ReactMarkdown source={article.content} renderers={{ code: CodeBlock }} /> */}
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
