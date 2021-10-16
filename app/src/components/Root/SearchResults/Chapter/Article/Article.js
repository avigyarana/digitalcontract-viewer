import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Header = styled.strong`
  display: block;
`;

const Article = ({ name, index, chapterIndex, sections, ...props }) => {
  return (
    <div id={`article-${chapterIndex}.${index}`} {...props}>
      <Header>
        {chapterIndex}.{index} {name}
      </Header>
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Article;
