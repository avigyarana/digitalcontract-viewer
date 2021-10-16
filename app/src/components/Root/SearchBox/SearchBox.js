import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";

import AppContext from "##/components/shared/AppContext";

const Wrapper = styled.div`
  height: 50%;
  margin 0 auto;
  padding-left:2rem;
  width: 80%;
`;

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  height: 1rem;
  margin-right: -2rem;
  position: relative;
  width: 1rem;
  z-index: 10;
`;

const TextBox = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 100%;
  background-color: #ebecef;
  border-radius: 5px;
  font-family: inherit;
  padding: 1rem 2.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  border: none;
`;

const SearchBox = ({ currentRefinement, refine, ...props }) => {
  const { setSearchQuery } = useContext(AppContext);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    refine(value);
    setSearchQuery(value);
  };

  return (
    <Wrapper>
      <SearchIcon />
      <TextBox {...props} value={currentRefinement} onChange={handleChange} />
    </Wrapper>
  );
};

export default connectSearchBox(SearchBox);
