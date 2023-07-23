import ProjectCard from "../../components/project-card/project-card.component"
import WorkHistory from "../../components/work-history/work-history.component";

import Divider from "@mui/material/Divider";
import {Container} from "@mui/material";
import {Typography} from "@mui/material";


const Home = () => {

  return (
    <>
      <Container>

        <Typography variant="h1">Andrew Heyer</Typography>
        <Typography variant="h3">Full Stack Developer</Typography>
        <Typography variant="body1">Full Stack Developer living in Las Vegas USA, former Software Engineer at
        the Vera Rubin Observatory, bachelors from the University of Arizona.</Typography>
        <div className="spacer"/>


        <Typography variant="h2">Projects</Typography>
        <div className="spacer"/>
        <ProjectCard/>

        <Typography variant="h2">Work History</Typography>
        <div className="spacer"/>
        <WorkHistory/>
        <div className="spacer"/>
      </Container>
    </>
  )

}


export default Home