import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "##/components/shared/AppContext";

import ChapterNav from "./ChapterNav";

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: #fafafa;
  box-shadow: 0 0 0.5rem -0.1rem #aaa inset;
  height: 100%;

  @media (max-width: 1000px) {
    position: absolute;
    width: 80%;
  }
`;

const SideNav = () => {
  const { chapters } = useContext(AppContext);

  return (
    <Wrapper>
      {chapters.map((chapter) => (
        <ChapterNav
          key={chapter.id}
          id={chapter.id}
          name={chapter.name}
          index={chapter.index}
          articles={chapter.articles}
        />
      ))}
    </Wrapper>
  );
};

export default SideNav;
