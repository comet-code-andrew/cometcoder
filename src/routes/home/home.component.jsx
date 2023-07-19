import ProjectCard from "../../components/project-card/project-card.component"
import WorkHistory from "../../components/work-history/work-history.component";

import Divider from "@mui/material/Divider";
import {CustomDivider} from "../../components/project-card/project-card.styles";




const Home = () => {

  return (
    <>
      <container>

        <h1>Andrew Heyer</h1>
        <h2>Full Stack Developer</h2>
        <CustomDivider />
        <spacer/>


        <p>Full Stack Developer living in Las Vegas USA, former Software Engineer at
        the Vera Rubin Observatory, bachelors from the University of Arizona.</p>

        <h2>Projects</h2>
        <CustomDivider />
        <spacer/>
        <ProjectCard/>

        <h2>Work History</h2>
        <Divider />
        <spacer/>
        <WorkHistory/>

        <spacer/>


      </container>
    </>
  )

}


export default Home