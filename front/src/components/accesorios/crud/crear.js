import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class Crear extends React.Component {
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
      loading: false,
      message: { text: "", show: false },
      redirect: false,
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      accesorio: {
        ...this.state.accesorio,
        [index]: value,
      },
    });
  }

  guardarAccesorio() {
    this.setState({ loading: true });
    request
      .post("/accesorios", this.state.accesorio)
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.exito) {
          this.setState({
            redirect: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage() {
    if (this.state.redirect) this.props.changeTab("buscar");
  }

  render() {
    return (
      <Container id="accesorios-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Crear accesorio</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("precio", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Detalle</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("detalle", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("categoria", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imágen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("imagen", e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarAccesorio())}
            >
              Guardar accesorio
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
