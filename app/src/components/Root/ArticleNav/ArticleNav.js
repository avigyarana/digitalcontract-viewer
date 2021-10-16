import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

import Section from "./Section";

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: #fafafa;
  box-shadow: 0 0 0.5rem -0.1rem #aaa inset;
  height: 100%;
`;

const ArticleNav = () => {
  const { chapters, currentChapter } = useContext(AppContext);

  const { articles, index } = chapters[currentChapter];

  return (
    <Wrapper>
      {articles.map((article) => (
        <Section
          key={article.id}
          name={article.name}
          index={article.index}
          chapterIndex={index}
        />
      ))}
    </Wrapper>
  );
};

export default ArticleNav;
