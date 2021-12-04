import React from "react";
import AccesorioCard from "./card";
import { requestHome } from "../helper/helper";
import { Col } from "react-bootstrap";
import "./card.css";

export default class AccesoriosCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accesorios: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    requestHome
      .get("/home")
      .then((response) => {
        this.setState({ accesorios: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        {this.state.accesorios.map((accesorio) => (
          <Col id="cards">
            <AccesorioCard
              title={accesorio.nombre}
              url={accesorio.imagen}
              description={accesorio.detalle}
              price={accesorio.precio}
            />
          </Col>
        ))}
      </>
    );
  }
}
