import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompt from "../../prompts/confirmation";

export default class Editar extends React.Component {
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
      idAccesorio: this.props.getIdAccesorio(),
      confirmation: {
        title: "Modificar accesorio",
        text: "¿Está seguro que desea modificar el accesorio?",
        show: false,
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  setValue(index, value) {
    this.setState({
      accesorio: {
        ...this.state.accesorio,
        [index]: value,
      },
    });
  }

  componentDidMount() {
    this.getAccesorio();
  }

  getAccesorio() {
    this.setState({ loading: true });
    request
      .get(`/accesorios/${this.state.idAccesorio}`)
      .then((response) => {
        this.setState({ loading: false, accesorio: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  guardarAccesorio() {
    this.setState({ loading: true });
    request
      .put(`/accesorios/${this.state.idAccesorio}`, this.state.accesorio)
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

  onCancel() {
    this.setState({
      confirmation: { ...this.state.confirmation, show: false },
    });
  }

  onConfirm() {
    this.setState({
      confirmation: { ...this.state.confirmation, show: false },
    });
    this.guardarAccesorio();
  }

  render() {
    return (
      <Container id="accesorios-crear-container">
        <ConfirmationPrompt
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h2>Editar accesorio</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
                value={this.state.accesorio.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("precio", e.target.value)}
                value={this.state.accesorio.precio}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Detalle</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("detalle", e.target.value)}
                value={this.state.accesorio.detalle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                onChange={(e) => this.setValue("categoria", e.target.value)}
              >
                <option>{this.state.accesorio.categoria}</option>
                <option value="Anillos">Anillos</option>
                <option value="Cadenas">Cadenas</option>
                <option value="Aretes">Aretes</option>
                <option value="Pulseras">Pulseras</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Imágen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("imagen", e.target.value)}
                value={this.state.accesorio.imagen}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              Guardar cambios
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
