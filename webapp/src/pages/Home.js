import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import ErrorPage from "../components/ErrorPage";
import LoaderContainer from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [otherMovies, setOtherMovies] = useState([]);

  const handleLoadMovies = async () => {
    try {
      const _data = await fetch(
        `${process.env.REACT_APP_BASE_URL}/movies/list?sortBy=releaseDate&order=desc`
      );
      const data = await _data.json();
      const movies = data.movies;

      let _trendingMovies = [];
      let _otherMovies = [];

      movies.forEach((_movie) => {
        if (_movie.tag === "other") {
          _otherMovies = [..._otherMovies, _movie];
        } else {
          _trendingMovies = [..._trendingMovies, _movie];
        }
      });

      setTrendingMovies([..._trendingMovies]);
      setOtherMovies([..._otherMovies]);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    handleLoadMovies();
  }, []);

  const handleView = () => {
    if (loading) {
      return <LoaderContainer />;
    } else if (error) {
      return <ErrorPage />;
    }

    return (
      <>
        <MovieList title="Trending Movies" movies={trendingMovies} />
        <MovieList title="Other Movies" movies={otherMovies} />
      </>
    );
  };

  return <Container>{handleView()}</Container>;
};

const Container = styled.main`
  color: white;
  margin: 0 auto;
  background: #313131;
  min-height: calc(100vh - 84px);
  padding: 84px 3vw 0px 3vw;
`;

export default Home;
