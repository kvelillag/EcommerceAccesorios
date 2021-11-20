import React from "react";
import { Container } from "react-bootstrap";
import logo from "../img/HANDMADE.png";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <img id="logo" src={logo} />;
  }
}
