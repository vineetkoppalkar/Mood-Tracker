import React from 'react';

import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function CauseIconList({selectedCauses}) {

  const flexContainer = {
    display: 'inline-flex',
    flexDirection: 'wrap',
    padding: 0,
  };

  return (
    <Container>
      <Row>
        <List className="mx-auto" style={flexContainer} dense>
        {selectedCauses.map(cause =>
          <ListItem key={cause.id}>
            {cause.icon}
          </ListItem>
        )}
        </List>
      </Row>
    </Container>
  );
}
