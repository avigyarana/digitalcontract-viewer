import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

import Article from "./Article";

const Wrapper = styled.div`
  padding: 2rem;
  overflow: scroll;
`;

const Header = styled.strong`
  color: #2050e0;
  font-size: 1rem;
  margin: 0.5rem 0;
  display: block;
`;

const SubTitle = styled.strong`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  display: block;
`;

const Chapter = () => {
  const { chapters, currentChapter } = useContext(AppContext);
  const elementRef = useRef(null);

  const chapter = chapters[currentChapter];

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollTop = 0;
    }
  }, [currentChapter]);

  return (
    <Wrapper ref={elementRef} id={`chapter-${chapter.index}`}>
      <Header>Chapter {chapter.index}</Header>
      <SubTitle>{chapter.name}</SubTitle>
      {chapter.articles.map(({ id, ...props }) => (
        <Article key={id} chapterIndex={chapter.index} {...props} />
      ))}
    </Wrapper>
  );
};

export default Chapter;
