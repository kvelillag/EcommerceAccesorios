import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import Buscar from "./crud/buscar";
import Crear from "./crud/crear";
import "./accesorios.css";

export default class Accesorios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
    };
  }
  render() {
    return (
      <Container id="accesorios-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>{this.state.currentTab === "buscar" ? <Buscar /> : <Crear />}</Row>
      </Container>
    );
  }
}
