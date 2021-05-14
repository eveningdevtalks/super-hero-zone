import styled from "styled-components";
import StartIcon from "../assets/star.svg";

const MovieRating = ({ rating }) => {
  return (
    <MovieRatingContainer>
      <img src={StartIcon} alt="star" />
      <div><Rating>{rating}</Rating>/10</div>
    </MovieRatingContainer>
  );
};

const MovieRatingContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const Rating = styled.span`
  font-weight: 600;
  font-size: 1.2em;
`

export default MovieRating;
