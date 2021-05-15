import styled from "styled-components";
import StartIcon from "../assets/star.svg";

const MovieRating = ({ rating }) => {
  return (
    <MovieRatingContainer>
      <RatingImage src={StartIcon} alt="star" />
      <Rating>
        <RatingValue>{rating}</RatingValue>/10
      </Rating>
    </MovieRatingContainer>
  );
};

const MovieRatingContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const RatingImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Rating = styled.div``;

const RatingValue = styled.span`
  font-weight: 600;
  font-size: 1.2em;
`;

export default MovieRating;
