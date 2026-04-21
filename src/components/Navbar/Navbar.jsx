import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  z-index: 1000;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <a href="#about">Sobre</a>
      <a href="#projects">Projetos</a>
      <a href="#skills">Habilidades</a>
      <a href="#contact">Contato</a>
    </Nav>
  );
}