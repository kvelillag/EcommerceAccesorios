import React from "react";
import { Carousel, Row } from "react-bootstrap";
import anillos from "../img/anillos.jpg";
import collares from "../img/collares.jpg";
import pulseras from "../img/pulseras.jpg";
import aretes from "../img/aretes.jpg";
import "./home.css";
import AccesoriosCards from "../cards/cards";

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
          <AccesoriosCards />
        </Row>
      </>
    );
  }
}
