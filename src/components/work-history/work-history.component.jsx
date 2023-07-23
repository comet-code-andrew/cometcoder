import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import json from "../../static/work-history-data.json"

const WorkHistory = () => {

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
            <Typography variant="body1" component="div">
              Software Engineer / TMA Software Lead
            </Typography>
              <List dense={true}>
                {
                  aura_list[0].map(value => {
                    return (
                      <ListItem>
                        <ListItemIcon>
                          <HorizontalRuleIcon color="secondary"/>
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="body1">
                            {value}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    )
                  })
                }
              </List>
          </CardContent>
        </Box>
      </Card>
      <div className="spacer"/>
      <Card sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography component="div" variant="h5">
              U of A Bio Computing Facility
            </Typography>
            <Typography variant="body1" component="div">
              Student Full Stack Engineer
            </Typography>
            <List dense={true}>
              {
                bio_list[0].map(value => {
                  return (
                    <ListItem>
                      <ListItemIcon>
                        <HorizontalRuleIcon color="secondary"/>
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body1">
                          {value}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )
                })
              }
            </List>
          </CardContent>
        </Box>
      </Card>


    </>
  )
}

export default WorkHistory
