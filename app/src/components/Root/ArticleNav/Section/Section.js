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

const Section = ({ name, index, chapterIndex }) => {
  const handleClick = () => {
    const element = document.getElementById(`article-${chapterIndex}.${index}`);

    if (element && document.body.contains(element)) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Wrapper onClick={handleClick}>
        <strong>
          Article {chapterIndex}.{index} {name && `- ${name}`}
        </strong>
      </Wrapper>
      <Separator />
    </>
  );
};

export default Section;
