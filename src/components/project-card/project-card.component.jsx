import {ColumDiv, Column, Container, Image} from "./project-card.styles";

const ProjectCard = () => {

  return (
    <>
      <Container>
        <Column>
          <ColumDiv>
            <h2>
            Pokedex
            </h2>
          </ColumDiv>
          <ColumDiv>
            <p>
            A React based app using styled components. Uses an API to populate itself with Pokemon sets you can filter through. Children routes are generated based on data from the API to then allow you to filter and search for Pokemon cards within that set.
            </p>
          </ColumDiv>
          <ColumDiv>
            Link
          </ColumDiv>
        </Column>
        <Image>
          <img src="image.jpg"/>
        </Image>
      </Container>

      <Container>
        <Column>
          <ColumDiv>
            <h2>
              YogiComet.com
            </h2>
          </ColumDiv>
          <ColumDiv>
            <p>
              A React app hosted on AWS S3. Implements Mux audio streaming API. Firebase authentication, protected routes and styled components.
            </p>
          </ColumDiv>
          <ColumDiv>
            Link
          </ColumDiv>
        </Column>
        <Image>
          <img src="image.jpg"/>
        </Image>
      </Container>

      <Container>
        <Column>
          <ColumDiv>
            <h2>
              CometCoders.com
            </h2>
          </ColumDiv>
          <ColumDiv>
            <p>
              A technologist accountability group I started when deciding to pivot my career from Hardware software control and into full-stack app development after leaving Vera Rubin Observatory.
            </p>
          </ColumDiv>
          <ColumDiv>
            Link
          </ColumDiv>
        </Column>
        <Image>
          <img src="image.jpg"/>
        </Image>
      </Container>
    </>
  )
}

export default ProjectCard

