import React from 'react';
import styled from 'styled-components';
interface ArticleProps {
  title: string;
  content: string;
  createdTime: string;
  image: string;
}
function zeroPad(value: number, len: number): string {
  const str = '0000000000' + value.toString();
  return str.substring(str.length - len);
}

function getParametersForUnsplash({
  width,
  height,
  quality,
  format,
}: {
  width: number;
  height: number;
  quality: number;
  format: string;
}): string {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */
function removeSpecialCharacter(str: string) {
  const removeCharacters = [
    '#',
    '_',
    '*',
    '~',
    '&',
    ';',
    '!',
    '[',
    ']',
    '`',
    '>',
    '\n',
    '=',
    '-',
  ];
  let _str = str;
  let i = 0,
    j = 0;

  for (i = 0; i < removeCharacters.length; i++) {
    j = 0;
    while (j < _str.length) {
      if (_str[j] === removeCharacters[i]) {
        _str = _str.substring(0, j).concat(_str.substring(j + 1));
        continue;
      }
      j++;
    }
  }

  return _str;
}

const Article = (props: ArticleProps) => {
  const createdTime = new Date(props.createdTime);
  return (
    <StyledArticle>
      <StyledArticleSummary>
        <StyledArticleSummaryTitle>{props.title}</StyledArticleSummaryTitle>
        <StyledArticleSummaryDesc>
          {removeSpecialCharacter(props.content)}
        </StyledArticleSummaryDesc>
        <StyledArticleSummaryETC>
          {createdTime.getFullYear() +
            '.' +
            zeroPad(createdTime.getMonth() + 1, 2) +
            '.' +
            zeroPad(createdTime.getDate(), 2)}
        </StyledArticleSummaryETC>
      </StyledArticleSummary>
      <StyledArticleThumbnail>
        <img
          src={
            props.image +
            getParametersForUnsplash({
              width: 1200,
              height: 1200,
              quality: 80,
              format: 'jpg',
            })
          }
          alt="thumbnail"
        />
      </StyledArticleThumbnail>
    </StyledArticle>
  );
};
const StyledArticle = styled.div`
  display: flex;
  word-break: break-all;
  text-align: left;
`;
const StyledArticleSummary = styled.div`
  flex: 1 1 auto;
  padding-right: 40px;
`;
const StyledArticleSummaryTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledArticleSummaryDesc = styled.div`
  display: block;
  padding-top: 5px;
  font-size: 14px;
  line-height: 22px;
  color: #666666;
  max-height: 43px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledArticleSummaryETC = styled.div`
  display: block;
  overflow: hidden;
  padding-top: 20px;
  font-size: 12px;
  color: #959595;
`;
const StyledArticleThumbnail = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: center;
  }
`;
export default Article;
