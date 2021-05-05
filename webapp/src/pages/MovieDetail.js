import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";

const MovieDetail = () => {
  const type = "Marvel1";

  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const handleViewHome = () => {
    history.push("");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container type={type}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>Hello</div>
          <button onClick={handleViewHome}>Home</button>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  color: white;
  display: flex;
  padding: 84px 10vw 0;
  margin: 0 auto;
  background: ${(props) => (props.type === "Marvel" ? "#F0131E" : "#0476f2")};
  height: calc(100vh - 84px);
  justify-content: center;
`;

export default MovieDetail;
