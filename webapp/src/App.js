import styled from "styled-components";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Home />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  background: #313131;
  height: 100vh;
`;

export default App;
