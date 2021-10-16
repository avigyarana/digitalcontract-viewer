import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Configure, Index } from "react-instantsearch-dom";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

import Chapter from "./Chapter";
import Hits from "./Hits";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  padding: 2rem;
  width: 80%;
`;

const Title = styled.strong`
  color: #aaa;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 0 10px;
  box-sizing: border-box;
  background-color: #aaa;
`;

const SearchResults = ({ searchQuery }) => {
  return searchQuery.trim().length > 0 ? (
    <Wrapper>
      <div>
        <Index indexName="chapters">
          <Title>
            Chapters
            <Line />
          </Title>
          <Configure hitsPerPage={8} />
          <Hits />
        </Index>
      </div>
      <div>
        <Index indexName="articles">
          <Title>
            Articles
            <Line />
          </Title>
          <Configure hitsPerPage={8} />
          <Hits />
        </Index>
      </div>
      <div>
        <Index indexName="sections">
          <Title>
            Sections
            <Line />
          </Title>
          <Configure hitsPerPage={8} />
          <Hits />
        </Index>
      </div>
    </Wrapper>
  ) : (
    <Chapter />
  );
};

export default SearchResults;
