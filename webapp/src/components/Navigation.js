import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <NavLogo href="#">
        Movie App <By>Evening Dev Talks</By>
      </NavLogo>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NavLogo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(249,249,249, 60%);
  }
`;

const By = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1rem;
  &:before {
    content: "by ";
  }
`;

export default Navigation;
