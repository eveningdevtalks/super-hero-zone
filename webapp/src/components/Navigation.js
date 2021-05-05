import styled from "styled-components";
import logo from '../assets/hype logo new.png';

const Navigation = () => {
  return (
    <Nav>
      <NavLogo href="#">
        Super Hero Zone <By>Evening Dev Talks</By>
      </NavLogo>
      <Support>
        <img src={logo} alt="hype zone" />
      </Support>
    </Nav>
  );
};

const Support = styled.div`
  img {
    width: 50px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0px 40px;
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
