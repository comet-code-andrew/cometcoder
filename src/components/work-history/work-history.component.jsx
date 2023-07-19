import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';


import bio5Image from '../../static/images/work-history-images/bio5.jpg';

import json from "../../static/work-history-data.json"

const WorkHistory = () => {
  const theme = useTheme();

  const aura_list = (Object.entries(json) || [])
    .filter((v, k) => v.includes('aura'))
    .map(([key, value]) => {
      return value
    })

  const bio_list = (Object.entries(json) || [])
    .filter((v, k) => v.includes('bio'))
    .map(([key, value]) => {
      return value
    })

  return (
    <>
      <Card sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography component="div" variant="h5">
              AURA/Vera Rubin Observatory
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Software Engineer / TMA Software Lead
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <List dense={true}>
                {
                  aura_list[0].map(value => {
                    return (
                      <ListItem>
                        <ListItemIcon>
                          <HorizontalRuleIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary={value}
                        />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <spacer/>
      <Card sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography component="div" variant="h5">
              U of A Bio Computing Facility
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Student Full Stack Engineer
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <List dense={true}>
                {
                  bio_list[0].map(value => {
                    return (
                      <ListItem>
                        <ListItemIcon>
                          <HorizontalRuleIcon/>
                        </ListItemIcon>
                        <ListItemText
                          primary={value}
                        />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Typography>
          </CardContent>
        </Box>
      </Card>


    </>
  )
}

export default WorkHistory
