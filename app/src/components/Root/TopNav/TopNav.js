import React from "react";
import styled from "styled-components";

import masttIcon from "##/assets/images/mastt-icon.png";

const Nav = styled.div`
  align-items: center;
  background-color: #ededed;
  box-sizing: border-box;
  display: flex;
  height: 3rem;
  justify-content: center;
  width: 100%;
`;

const Image = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  height: 4rem;
  width: 7.2rem;
`;

const TopNav = () => {
  return (
    <Nav>
      <Image src={masttIcon} />
      Contract Navigator - AS4000
    </Nav>
  );
};

export default TopNav;
