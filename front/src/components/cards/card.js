import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";

export default class AccesorioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card id="accesorio-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${this.props.url}`} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Detalle: {this.props.description}</Card.Text>
          <Card.Text>Precio: {this.props.price}</Card.Text>
          <Button variant="primary" disabled>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
