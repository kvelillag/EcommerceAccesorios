import React from "react";
import {
  Container,
  DropdownButton,
  Nav,
  Navbar,
  Dropdown,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    cookies.remove("_s");
    window.location.reload();
  }

  render() {
    return (
      <Navbar id="navbar" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Handmade Jewellery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <DropdownButton title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/login">Iniciar Sesion</Dropdown.Item>
              <Dropdown.Item href="/accesorios">Crud</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
