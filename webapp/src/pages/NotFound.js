import styled from "styled-components";

const NotFound = () => {
    return <Container>
        <h1>ERROR 404</h1>
        <div>🦹🏻 Costume not found</div>
    </Container>;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default NotFound;