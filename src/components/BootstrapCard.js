import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BootstrapCard() {
  return (
    <div>
      <Card bg="light" style={{ width: '18rem' }}>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={['far', 'frown']} />
            <FontAwesomeIcon icon={['far', 'meh']} />
            <FontAwesomeIcon icon={['far', 'smile']} />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BootstrapCard;