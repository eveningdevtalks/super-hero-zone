import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import MovieRating from "../components/MovieRating";
import MarvelLogo from '../assets/Marvel_Logo.svg';
import DCLogo from '../assets/DC_Comics_logo.svg';

const MovieDetail = () => {
  const type = "marvel";

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
          <Navigation>
            <Button onClick={handleViewHome}>↚ Back</Button>
          </Navigation>
          <MovieCard>
            <Title>Avengers: Age of Ultron</Title>
            <MovieContent>
              <ImageArea>
                <img
                  src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"
                  alt=""
                ></img>
                <MovieRating rating="7.3/10" />
              </ImageArea>
              <ContentArea>
                <MovieDescription>
                  Avengers: Age of Ultron is a 2015 American superhero film
                  based on the Marvel Comics superhero team the Avengers.
                  Produced by Marvel Studios and distributed by Walt Disney
                  Studios Motion Pictures, it is the sequel to The Avengers
                  (2012) and the 11th film in the Marvel Cinematic Universe
                  (MCU). Written and directed by Joss Whedon, the film features
                  an ensemble cast including Robert Downey Jr., Chris Hemsworth,
                  Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner,
                  Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul
                  Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris
                  Elba, Stellan Skarsgård, James Spader, and Samuel L. Jackson.
                  In the film, the Avengers fight Ultron, an artificial
                  intelligence obsessed with causing human extinction.
                </MovieDescription>
                <ExtraDetails>
                  <ReleaseDate>Released: April 13, 2015</ReleaseDate>
                  <Studio>
                    { type === 'marvel' ?  <img src={MarvelLogo} alt="marvel" /> : <img src={DCLogo} alt="dc comics"ෆ /> }
                  </Studio>
                </ExtraDetails>
              </ContentArea>
            </MovieContent>
          </MovieCard>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 84px 10vw 0;
  margin: 0 auto;
  background: ${(props) => (props.type === "marvel" ? "#F0131E" : "#0476f2")};
  min-height: calc(100vh - 84px);
  justify-content: flex-start;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
`;

const MovieContent = styled.div`
  display: flex;
  padding-top: 10px;
`;

const ImageArea = styled.div`
  width: 40%;

  > img {
    inset: 0px;
    display: block;
    object-fit: fill;
    border-radius: 10px;
    flex: 1;
    width: -webkit-fill-available;
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

const ContentArea = styled.div`
  padding: 0 20px;
  width: 60%;
`;

const MovieDescription = styled.p`
  text-align: justify;
`;

const ExtraDetails = styled.div`
  display: flex;
`;

const ReleaseDate = styled.div`
  width: 50%;
`;

const Studio = styled.div`
  width: 50%;

  img {
    width: 100px;
  }
`;

const MovieCard = styled.div`
  width: 65%;
  margin: 0 auto;
  background: rgb(249, 249, 249);
  height: 50vh;
  box-shadow: 10px 10px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 30px;
`;

const Navigation = styled.div`
  padding: 5px 20px;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: none;
  color: rgba(249, 249, 249, 0.5);
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 1.1rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: rgba(249, 249, 249, 0.8);
    cursor: pointer;
  }
`;

export default MovieDetail;
