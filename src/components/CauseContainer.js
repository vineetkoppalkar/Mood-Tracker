import React from 'react';

import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import FitnessCenter from '@material-ui/icons/FitnessCenterOutlined';
import Movie from '@material-ui/icons/MovieOutlined';
import FastFood from '@material-ui/icons/FastfoodOutlined';
import Commute from '@material-ui/icons/CommuteOutlined';
import Work from '@material-ui/icons/WorkOutline';
import School from '@material-ui/icons/SchoolOutlined';
import Vacation from '@material-ui/icons/BeachAccessOutlined';
import Celebration from '@material-ui/icons/CakeOutlined';
import Nature from '@material-ui/icons/LocalFloristOutlined';
import Weather from '@material-ui/icons/AcUnitOutlined';
import Finance from '@material-ui/icons/LocalAtmOutlined';
import People from '@material-ui/icons/PeopleOutlined';
import Gaming from '@material-ui/icons/VideogameAssetOutlined';
import Exploration from '@material-ui/icons/ExploreOutlined';

class CauseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      causeArray: []
    }
  }

  updateCauseArray = (cause) => {
    let index = this.state.causeArray.indexOf(cause);
    index > -1 ? this.state.causeArray.splice(index, 1) : this.state.causeArray.push(cause);
    this.props.setCauseArray(this.state.causeArray);
  }

  render() {
    const causeObjects = [
      {
        "id": 0,
        "name": "Exercise",
        "icon": <FitnessCenter />
      }, 
      {
        "id": 1,
        "name": "Movie",
        "icon": <Movie />
      }, 
      {
        "id": 2,
        "name": "Food",
        "icon": <FastFood />
      },
      {
        "id": 3,
        "name": "Commute",
        "icon": <Commute />
      },
      {
        "id": 4,
        "name": "Work",
        "icon": <Work />
      },
      {
        "id": 5,
        "name": "School",
        "icon": <School />
      },
      {
        "id": 6,
        "name": "Vacation",
        "icon": <Vacation />
      },
      {
        "id": 7,
        "name": "Celebration",
        "icon": <Celebration />
      },
      {
        "id": 8,
        "name": "Nature",
        "icon": <Nature />
      },
      {
        "id": 9,
        "name": "Weather",
        "icon": <Weather />
      },
      {
        "id": 10,
        "name": "Finance",
        "icon": <Finance />
      },
      {
        "id": 11,
        "name": "People",
        "icon": <People />
      },
      {
        "id": 12,
        "name": "Gaming",
        "icon": <Gaming />
      },
      {
        "id": 13,
        "name": "Exploration",
        "icon": <Exploration />
      },
    ]

    return (
      <div>
        {this.props.promptContainer}
        <Container>
          <List dense>
            {causeObjects.map(cause => {
              const labelId = `checkbox-list-primary-label-${cause.id}`;
              return (
                <ListItem key={cause.id} button>
                  <ListItemAvatar>
                    {cause.icon}
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={cause.name} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      color="primary"
                      edge="end"
                      onChange={() => this.updateCauseArray(cause)}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </div>
    );
  }
}

export default CauseContainer;