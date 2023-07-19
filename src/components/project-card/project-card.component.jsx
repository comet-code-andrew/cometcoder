import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


import yogicometImage from '../../static/images/project-images/yogicomet.png';
import pokedexImage from '../../static/images/project-images/pokedex.png';
import cometcodersImage from '../../static/images/project-images/cometcoders.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = () => {

  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{maxWidth: 500}}>
            <CardMedia
              sx={{height: 400}}
              image={yogicometImage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yogi Comet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yogi Comet is a&nbsp;
                <a target="_blank" href="https://en.wikipedia.org/wiki/Yogi">Yogi's</a>
                &nbsp;companion app. Implements
                &nbsp;<a target="_blank" href="https://docs.mux.com/guides/video/stream-video-files">Mux's Stream API</a>
                &nbsp;as well as AWS S3 for audio data storage and for static website hosting. The backend also uses AWS
                Codebuild and Code Pipeline for Continuous Delivery triggered by PR's from Github.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<LaunchIcon/>} target={"_blank"} href="http://yogicomet.com/">Visit</Button>
              <Button size="small" startIcon={<GitHubIcon/>} target={"_blank"} href="https://github.com/thecometcoders/yoga-app">Github</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{maxWidth: 500}}>
            <CardMedia
              sx={{height: 400}}
              image={pokedexImage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pokedex
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A React based application, implements styled components and functional components. Uses the
                &nbsp;<a target="_blank" href="https://docs.pokemontcg.io/">Pokemon TCG API</a>. You can search for
                pokemon sets which are dynamically populated by the API, then click on those sets to then search for
                a specific card.

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<LaunchIcon/>} target={"_blank"} href="https://pokedex.cometcode.com/">Visit</Button>
              <Button size="small" startIcon={<GitHubIcon/>} target={"_blank"} href="https://github.com/comet-code-andrew/pokemon-rolodex">Github</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{maxWidth: 500}}>
            <CardMedia
              sx={{height: 400}}
              image={cometcodersImage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Comet Coders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comet Coders is an accountability group I started in January of 2023. We are a group of technologist who
                meet weekly to talk about projects we are working. I started this group to surround myself with
                motivated and likeminded individuals who wanted to have an online space to grow. Anyone is welcome to
                join so long as you are committed to participating once a month, webcamera and mic on.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<LaunchIcon/>} target={"_blank"} href="http://cometcoders.com/">Visit</Button>
              <Button size="small" startIcon={<GitHubIcon/>} target={"_blank"} href="https://github.com/thecometcoders/cometcoders">Github</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default ProjectCard

