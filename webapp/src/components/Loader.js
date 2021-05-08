import styled from "styled-components";

const LoaderContainer = () => {
  return (
    <LoaderBlock>
      <Loader />
    </LoaderBlock>
  );
};

const Loader = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  align-self: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default LoaderContainer;
