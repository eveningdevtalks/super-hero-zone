import styled from "styled-components";
import StartIcon from "../assets/star.svg";

const MovieRating = ({ rating }) => {
  return (
    <MovieRatingContainer>
      <img src={StartIcon} alt="star" />
      <div>{rating}</div>
    </MovieRatingContainer>
  );
};

const MovieRatingContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export default MovieRating;
