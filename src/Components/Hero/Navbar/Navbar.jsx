import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-space-around;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
`;

const Name = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const NameTitle = styled.h1`
  font-size: 1.3rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Navbar = (props) => {
  let { language, setLanguage } = props;

  return (
    <Nav>
      <Name>
        <NameTitle>Seb Gourmet</NameTitle>
        <Title>Traiteur</Title>
      </Name>{" "}
      <Burger language={language} setLanguage={setLanguage} />
    </Nav>
  );
};

export default Navbar;
