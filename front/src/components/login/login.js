import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }
  iniciarSesion() {
    alert(`Usuario: ${this.state.usuario} - Contraseña: ${this.state.pass}`);
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({
                          usuario: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) =>
                        this.setState({
                          pass: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
