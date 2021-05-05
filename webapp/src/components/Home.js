import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Movie>
        <img
          src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"
          alt=""
        ></img>
        <div>Avengers: Age of Ultron</div>
      </Movie>
      <Movie>
        <img
          src="https://www.cnet.com/a/img/AOcFKGDQcrdRcm0f6p6G16jfw3c=/1200x675/2019/07/22/5fcdb86d-4e4e-469a-8c2a-606dde8eb8bb/guardians-of-the-galaxy-2-poster.jpg"
          alt=""
        ></img>
        <div>Guardians of the Galaxy</div>
      </Movie>
      <Movie>
        <img
          src="https://cdn.vox-cdn.com/thumbor/7K3uPy1iLOC4ovn73AY28U_-FGg=/0x0:1920x1079/1200x800/filters:focal(1085x298:1391x604)/cdn.vox-cdn.com/uploads/chorus_image/image/64773806/ply_dr_strange_graded.0.jpg"
          alt=""
        ></img>
        <div>Doctor Strange (2006)</div>
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

const Movie = styled.div`
  padding: 36px;
  border-radius: 10px;
  position: relative;
  height: 200px;
  display: flex;
  border: 3px solid transparent;
  transition: all 500ms ease-in-out;
  width: 30%;
  text-align: center;

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

  img {
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

  div {
    color: white;
    align-self: center;
    font-weight: 600;
    opacity: 0;
    width: 100%;
  }
`;

export default Home;
