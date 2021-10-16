import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

import ArticleNav from "./ArticleNav";
import SideNav from "./SideNav";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import TopNavigation from "./TopNav";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Burger = styled(GiHamburgerMenu)`
  position: absolute;
  left: calc(5% - 1rem);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const TopNav = styled.div`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  display: grid;
  box-shadow: 0 1px 2px #aaa;
  grid-template-columns: ${({ showSearch, isMobile }) =>
    isMobile || showSearch ? "1fr" : "1fr 2fr 1fr"};
`;

const SearchNav = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: row;
  width: 100%;
  height: 100%;
`;

const ChapterNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2050e0;
  color: white;
`;

const Contents = styled.div`
  width: 100%;
  display: grid;
  height: 90%;
  grid-template-columns: ${({ showSearch, isMobile }) =>
    isMobile || showSearch ? "1fr" : "1fr 2fr 1fr"};
  box-sizing: border-box;
  overflow: hidden;
`;

const GET_CHAPTERS = gql`
  query GetChapters {
    chapters {
      id
      index
      name
      articles {
        id
        index
        name
        sections {
          id
          type
          text
          name
        }
      }
    }
  }
`;

const Root = () => {
  const { loading, error, data } = useQuery(GET_CHAPTERS);
  const { chapters, setChapters, isMobile, searchQuery } = useContext(
    AppContext
  ); // getting functions from global state in appcontext
  const [burgerActive, setBurgerActive] = useState(false);

  const showSearch = useMemo(() => searchQuery.trim().length > 0, [
    searchQuery,
  ]);

  useEffect(() => {
    // react lifecycle, replaces componentdidmount, componentshowupdate, component
    if (data && data.chapters) {
      setChapters(data.chapters);
    }
  }, [data]);

  if (loading || error) return <div>"error or loading"</div>;

  if (!chapters || chapters.length === 0) return <div>loading chapters</div>;

  return (
    <Wrapper>
      <TopNavigation />
      <TopNav showSearch={showSearch} isMobile={isMobile}>
        {!isMobile && !showSearch && <ChapterNav>Chapters</ChapterNav>}
        <SearchNav>
          {isMobile && !showSearch && (
            <Burger onClick={() => setBurgerActive(!burgerActive)} />
          )}
          <SearchBox autoComplete="false" />
        </SearchNav>
        {!isMobile && !showSearch && <ChapterNav>Articles</ChapterNav>}
      </TopNav>
      <Contents showSearch={showSearch} isMobile={isMobile}>
        {(burgerActive || !isMobile) && !showSearch && <SideNav />}
        <SearchResults searchQuery={searchQuery} />
        {!isMobile && !showSearch && <ArticleNav />}
      </Contents>
    </Wrapper>
  );
};

export default Root;
