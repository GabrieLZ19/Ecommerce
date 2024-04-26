import styled from "styled-components";
import { useState } from "react";

const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: black;
    width: 100%;
    padding: 20px;
    box-sizing: content-box;
    text-align: center;
    z-index: 2;
  }
`;

const StyledListItem = styled.li`
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  background: linear-gradient(180deg, #7c6ce4 0%, #624de3 100%);
  color: white;
  font-family: "Nunito Sans", sans-serif;
  border-radius: 15px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const MenuPhone = styled.button`
  background: none;
  border: none;
  position: relative;
  left: 30px;
  color: white;
  font-size: 20px;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav>
        <img src="./public/Logo.png" alt="logo" style={{ width: "100px" }} />

        <MenuPhone onClick={toggleMenu}>☰</MenuPhone>

        <StyledList isOpen={isOpen}>
          <StyledListItem>Productos</StyledListItem>
          <StyledListItem>Categorías</StyledListItem>
          <StyledListItem>Populares</StyledListItem>
          <StyledListItem>
            <img
              src="./public/search.svg"
              alt="search"
              style={{ cursor: "pointer" }}
            />
          </StyledListItem>
          <StyledListItem>
            <img
              src="./public/carrito.svg"
              alt="carrito"
              style={{ cursor: "pointer" }}
            />
          </StyledListItem>
          <StyledListItem>
            <Button>Login</Button>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </>
  );
};

export default NavBar;
