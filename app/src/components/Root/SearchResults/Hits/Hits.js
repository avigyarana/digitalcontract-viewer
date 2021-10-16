import React, { useContext } from "react";
import { connectHits } from "react-instantsearch-dom";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

const SECTION_HIT_MAX_LENGTH = 60;

const List = styled.ul`
  list-style: none;
  padding: 0.3rem;
`;

const Item = styled.li`
  cursor: pointer;
  margin-bottom: 5px;
  user-select: none;
`;

const truncate = (str) =>
  str.length > SECTION_HIT_MAX_LENGTH
    ? `${str.substr(0, SECTION_HIT_MAX_LENGTH)}...`
    : str;

const Hit = (props) => {
  const { setCurrentChapter, currentChapter, setSearchQuery } = useContext(
    AppContext
  );

  return props.__typename === "Chapter" ? (
    <Item
      onClick={() => {
        setCurrentChapter(props.index - 1);
        setSearchQuery("");
      }}
      key={props.objectID}
    >
      <strong>Chapter {props.index} </strong>
      <span>{truncate(props.name)}</span>
    </Item>
  ) : props.__typename === "Article" ? (
    <Item
      onClick={() => {
        setCurrentChapter(props.chapter.index - 1);
        setSearchQuery("");
        setTimeout(() => {
          window.location = `${window.location.origin}#article-${props.chapter.index}.${props.index}`;
        }, 50);
      }}
      key={props.objectID}
    >
      <strong>
        Article {props.chapter.index}.{props.index}{" "}
      </strong>
      <span>{truncate(props.name)}</span>
    </Item>
  ) : (
    <Item
      onClick={() => {
        setCurrentChapter(props.article.chapter.index - 1);
        setSearchQuery("");
        setTimeout(() => {
          window.location = `${window.location.origin}#article-${props.article.chapter.index}.${props.article.index}`;
        }, 50);
      }}
      key={props.objectID}
    >
      <strong>Section </strong>
      <span>{truncate(props.text)}</span>
    </Item>
  );
};

const Hits = ({ hits }) => (
  <List>
    {hits.map((hit) => (
      <Hit {...hit} key={hit.objectID} />
    ))}
  </List>
);

export default connectHits(Hits);
