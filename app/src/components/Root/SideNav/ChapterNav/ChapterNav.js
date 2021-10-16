import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  background-color: ${({ isActive }) => (isActive ? "#efefef" : "unset")};

  :hover {
    background-color: #eee;
  }
`;

const Header = styled.strong`
  color: #3a64fc;
  /* font-size: 20px; */
  margin-bottom: 0.5rem;
  display: block;
`;

const ArticleInfo = styled.span`
  color: #aaa;
  margin-top: 0.25rem;
  display: block;
`;

const Separator = styled.div`
  border-bottom: 1px solid #aaa;
  width: 85%;
  margin: 0 auto;
`;

const ChapterNav = ({ name, index, articles }) => {
  const { currentChapter, setCurrentChapter } = useContext(AppContext);

  if (articles.length < 1) return null;

  return (
    <>
      <Wrapper
        onClick={() => setCurrentChapter(index - 1)}
        isActive={index === currentChapter + 1}
      >
        <Header>Chapter {index}</Header>
        <strong>{name}</strong>
        <ArticleInfo>
          {articles.length === 1
            ? `Article ${index}.1`
            : `Articles ${index}.1 - ${index}.${articles.length}`}
        </ArticleInfo>
      </Wrapper>
      <Separator />
    </>
  );
};

export default ChapterNav;
