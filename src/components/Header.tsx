import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return <StyledHeader>test</StyledHeader>;
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  height: 80px;
`;

export default Header;
