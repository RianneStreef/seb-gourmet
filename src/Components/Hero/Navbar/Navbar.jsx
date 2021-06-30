import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  padding-right: 100px;
  margin-right: 100px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  font-family: "Roboto", sans-serif;
`;

const Name = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: 1024px) {
    margin-left: 250px;
  }
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
