import { useHistory } from "react-router";
import styled from "styled-components";
import MovieRating from "./MovieRating";

const MovieList = ({ title, movies }) => {
  const history = useHistory();

  const handleViewMovie = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <Container>
      <ListTitle>{title}</ListTitle>
      <MovieContainer>
        {movies.map((_movie) => (
          <Movie key={_movie._id} onClick={() => handleViewMovie(_movie._id)}>
            <img src={_movie.imageUrl} alt=""></img>
            <MovieContent>
              <MovieTitle>{_movie.title}</MovieTitle>
              <MovieType marvel={_movie.studio === "marvel"}>
                {_movie.studio === "marvel" ? "Marvel" : "DC Comics"}
              </MovieType>
              <MovieRating rating={_movie.rating} />
            </MovieContent>
          </Movie>
        ))}
      </MovieContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListTitle = styled.h1`
  font-family: 'Cairo', sans-serif;
`

const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`

const MovieType = styled.div`
  background: ${(props) => (props.marvel ? "#F0131E" : "#0476f2")};
  border-radius: 50px;
  padding: 5px 15px;
  margin-top: 10px;
`;

const MovieContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  z-index: 3;
  opacity: 0;
`;

const MovieTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
`;

const Movie = styled.div`
  border-radius: 10px;
  position: relative;
  height: 400px;
  border: 3px solid #505050;
  transition: all 0.25s ease-in;
  width: 18%;
  margin: 10px;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  &:hover {
    border: 3px solid #dedede;
    transform: translateY(-5px);
    cursor: pointer;

    > img {
      z-index: -1;
      opacity: 0.2;
    }

    ${MovieContent} {
      z-index: 3;
      opacity: 1;
    }
  }

  > img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: all 0.25s ease-in;
    width: 100%;
    top: 0;
    border-radius: 10px;

    &:hover {
      opacity: 0.2;
      z-index: -1;

      ${MovieContent} {
        z-index: 3;
        opacity: 1;
      }
    }
  }
`;

export default MovieList;
