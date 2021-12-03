import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import anillos from "../img/anillos.jpg";
import collares from "../img/collares.jpg";
import pulseras from "../img/pulseras.jpg";
import aretes from "../img/aretes.jpg";
import "./home.css";
import AccesorioCard from "../card/card";
import { width } from "dom-helpers";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={anillos}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Anillos</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={collares}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2>Collares</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={pulseras}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Pulseras</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                id="banner"
                className="d-block w-100"
                src={aretes}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Aretes</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row id="card-row">
          <Col id="card">
            <AccesorioCard
              title="Anillo de plata"
              url="anillo_ámbar_plata.jpg"
              description="Piedras de ambar"
              price="$ 50.000"
            />
          </Col>
          <Col id="card">
            <AccesorioCard
              title="Collar de plata"
              url="collar_piedra_lapis_plata.jpg"
              description="Piedras de lapis"
              price="$ 50.000"
            />
          </Col>
          <Col id="card">
            <AccesorioCard
              title="Pulsera de oro"
              url="pulsera_reloj_cuero_oro.jpg"
              description="Detalle en cuero"
              price="$ 50.000"
            />
          </Col>
          <Col id="card">
            <AccesorioCard
              title="Arete"
              url="aretes_gota-azul.jpg"
              description="Piedras azules en forma de gota"
              price="$ 50.000"
            />
          </Col>
        </Row>
      </>
    );
  }
}
