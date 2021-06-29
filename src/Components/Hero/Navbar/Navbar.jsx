import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
`;

const Name = styled.div`
  margin-right: 5px;
`;

const Navbar = (props) => {
  let { language, setLanguage } = props;

  return (
    <Nav>
      <Name>
        <h1 className="name">Seb Gourmet</h1>
        <h1 className="title">Traiteur</h1>
      </Name>{" "}
      <Burger language={language} setLanguage={setLanguage} />
    </Nav>
  );
};

export default Navbar;
