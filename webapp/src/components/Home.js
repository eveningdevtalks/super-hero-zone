import styled from "styled-components";
import MovieRating from "./MovieRating";

const Home = () => {
  return (
    <Container>
      <Movie>
        <img
          src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"
          alt=""
        ></img>
        <MovieContent>
          <MovieTitle>Avengers: Age of Ultron</MovieTitle>
          <MovieType marvel>Marvel</MovieType>
          <MovieRating rating="7.3/10" />
        </MovieContent>
      </Movie>
      <Movie>
        <img
          src="https://www.cnet.com/a/img/AOcFKGDQcrdRcm0f6p6G16jfw3c=/1200x675/2019/07/22/5fcdb86d-4e4e-469a-8c2a-606dde8eb8bb/guardians-of-the-galaxy-2-poster.jpg"
          alt=""
        ></img>
        <MovieContent>
          <MovieTitle>Guardians of the Galaxy</MovieTitle>
          <MovieType marvel>Marvel</MovieType>
          <MovieRating rating="8/10" />
        </MovieContent>
      </Movie>
      <Movie>
        <img
          src="https://filmdaily.co/wp-content/uploads/2021/03/ww84-lede.jpeg"
          alt=""
        ></img>
        <MovieContent>
          <MovieTitle>Wonder Woman 1984</MovieTitle>
          <MovieType>DC Comics</MovieType>
          <MovieRating rating="5.4/10" />
        </MovieContent>
      </Movie>
    </Container>
  );
};

const Container = styled.main`
  color: white;
  padding-top: 84px;
  display: flex;
  width: 65vw;
  margin: 0 auto;
`;

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
  opacity: 0;
`;

const MovieTitle = styled.div`
  color: white;
  font-weight: 600;
`;

const Movie = styled.div`
  padding: 36px;
  border-radius: 10px;
  position: relative;
  height: 200px;
  border: 3px solid #505050;
  transition: all 500ms ease-in-out;
  width: 30%;

  &:hover {
    border: 3px solid #dedede;
    transform: translateY(-5px);

    div {
      opacity: 1;
    }
  }

  &:not(:first-of-type) {
    margin-left: 20px;
  }

  > img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    top: 0;
    border-radius: 10px;

    &:hover {
      opacity: 0.2;
    }
  }
`;

export default Home;
