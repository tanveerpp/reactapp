import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {
  return (
        <div className="col-sm-4">
    <div>
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button>Show More</Button>
        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default Cards;