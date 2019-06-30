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

import { causeObjects } from './CauseConstants';

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