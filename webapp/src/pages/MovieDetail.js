import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import MovieRating from "../components/MovieRating";
import MarvelLogo from '../assets/Marvel_Logo.svg';
import DCLogo from '../assets/DC_Comics_logo.svg';
import LoaderContainer from "../components/Loader";
import moment from 'moment';

const MovieDetail = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  const handleViewHome = () => {
    history.push("");
  };

  const handleLoadMovie = async (id) => {
    const _data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/movies/${id}`
    );
    const data = await _data.json();
    const movie = data.movie;
    setMovie(movie);
    setLoading(false);
  }

  useEffect(() => {
    handleLoadMovie(id);
  }, [id]);

  console.log(movie);

  return (
    <Container type={movie.studio}>
      {loading ? (
        <LoaderContainer />
      ) : (
        <>
          <Navigation>
            <Button onClick={handleViewHome}>↚ Back</Button>
          </Navigation>
          <MovieCard>
            <Title>{ movie.title }</Title>
            <MovieContent>
              <ImageArea>
                <img
                  src={movie.imageUrl}
                  alt=""
                ></img>
                <MovieRating rating={`${movie.rating}/10`} />
              </ImageArea>
              <ContentArea>
                <MovieDescription>
                  {movie.description}
                </MovieDescription>
                <ExtraDetails>
                  <ReleaseDate>Released: { moment(movie.releaseDate).format('MMM DD, YYYY') }</ReleaseDate>
                  <Studio>
                    { movie.studio === 'marvel' ?  <img src={MarvelLogo} alt="marvel" /> : <img src={DCLogo} alt="dc comics" /> }
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

const resolveBackground = (type) => {
  if (type === "marvel") {
    return "#F0131E";
  } else if (type === "dc") {
    return "#0476f2";
  }

  return "#313131";
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 84px 10vw 0;
  margin: 0 auto;
  background: ${(props) => resolveBackground(props.type)};
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
