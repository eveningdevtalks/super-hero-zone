import { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import MovieRating from "../components/MovieRating";
import ErrorPage from "../components/ErrorPage";
import MarvelLogo from "../assets/Marvel_Logo.svg";
import DCLogo from "../assets/DC_Comics_logo.svg";
import PopcornIcon from "../assets/popcorn.svg";
import LoaderContainer from "../components/Loader";

const MovieDetail = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  const handleViewHome = () => {
    history.push("");
  };

  const handleLoadMovie = useCallback(async (id) => {
    try {
      const _data = await fetch(
        `${process.env.REACT_APP_BASE_URL}/movies/${id}`
      );
      if (_data.status !== 200) {
        throw new Error();
      }
      const data = await _data.json();
      const movie = data.movie;

      if (!movie) {
        throw new Error();
      }

      setMovie(movie);
      setLoading(false);
      setError(false);
    } catch (err) {
      setMovie({});
      setLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    handleLoadMovie(id);
  }, [id, handleLoadMovie]);

  const handleContentView = () => {
    console.log(loading, error);
    if (loading) {
      return <LoaderContainer />;
    } else if (error) {
      return <ErrorPage />;
    }

    const releaseDate = movie.releaseDate
      ? `Released : ${new Intl.DateTimeFormat("en-US").format(
          new Date(movie.releaseDate)
        )}`
      : "Not Released";

    return (
      <>
        <Navigation>
          <Button onClick={handleViewHome}>↚ Back</Button>
        </Navigation>
        <MovieCard>
          <Title>{movie.title}</Title>
          <MovieContent>
            <ImageArea>
              <img src={movie.imageUrl} alt=""></img>
            </ImageArea>
            <ContentArea>
              <MovieRating rating={movie.rating} />
              <Duration>
                <img src={PopcornIcon} alt="" /> {movie.duration}
              </Duration>
              <MovieDescription>{movie.description}</MovieDescription>
              <ExtraDetails>
                <ReleaseDate>{releaseDate}</ReleaseDate>
                <Studio>
                  {movie.studio === "marvel" ? (
                    <img src={MarvelLogo} alt="marvel" />
                  ) : (
                    <img src={DCLogo} alt="dc comics" />
                  )}
                </Studio>
              </ExtraDetails>
            </ContentArea>
          </MovieContent>
        </MovieCard>
      </>
    );
  };

  return (
    <Container type={movie ? movie.studio : undefined}>
      {handleContentView()}
    </Container>
  );
};

const Duration = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 5%;
    margin-right: 10px;
  }
`;

const resolveBackground = (type) => {
  if (type === "marvel") {
    return "#F0131E";
  } else if (type === "dc") {
    return "#0476f2";
  }

  return "#313131";
};

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
  box-shadow: 10px 10px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
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
