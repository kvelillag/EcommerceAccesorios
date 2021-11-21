import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

export default class EmpleadosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accesorio: {
        nombre: "",
        precio: "",
        detalle: "",
        categoria: "",
        imagen: "",
      },
    };
  }

  setValue(index, value) {
    this.setState({
      accesorio: {
        ...this.state.accesorio,
        [index]: value,
      },
    });
  }

  render() {
    return (
      <Container id="accesorios-crear-container">
        <Row>
          <h1>Crear accesorio</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("precio", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Detalle</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("detalle", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("categoria", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imágen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("imagen", e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={() => console.log(this.state)}>
              Guardar accesorio
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
