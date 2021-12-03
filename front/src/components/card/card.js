import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import anillo from "../img/imgProductos/anillo-diamante_café.jpg";

export default class AccesorioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card id="accesorio-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require(`../img/imgProductos/${this.props.url}`).default}
        />
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
