import styled from "styled-components";
import errorImage from "./../assets/error.svg";

const ErrorPage = () => {
  return (
    <Container>
      <Image src={errorImage} alt="" />
      <Text>Hmmm... we have encountered an error! 😢</Text>
    </Container>
  );
};

const Container = styled.main`
  color: white;
  margin: 0 auto;
  background: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  border-radius: 1rem;
  flex-direction: column;
  margin-top: 2rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  color: #313131;
  margin-top: 2rem;
`

const Image = styled.img`
  width: 40%;
`

export default ErrorPage;
