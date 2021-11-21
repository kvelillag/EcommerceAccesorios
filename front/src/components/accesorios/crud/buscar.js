import React from "react";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../../grid/grid";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "precio",
    text: "Precio",
  },
  {
    dataField: "detalle",
    text: "Detalle",
  },
  {
    dataField: "categoria",
    text: "Categoría",
  },
  {
    dataField: "imagen",
    text: "Imágen",
  },
];

export default class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="accesorios-buscar-container">
        <Row>
          <h1>Buscar accesorios</h1>
        </Row>
        <Row>
          <DataGrid url="/accesorios" columns={columns} />
        </Row>
      </Container>
    );
  }
}
