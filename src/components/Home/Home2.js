import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Photo_CV.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi, I’m a French engineering student with a background in Microtechnics from <b className="blue">EPFL</b>, including an exchange at <b className="blue">TU Delft</b>. <br/>
            I'm currently pursuing my Master's in Robotics, Systems, and Control at <b className="blue">ETH Zurich</b>, where I get to combine my passion for robotics and cutting-edge technology (and occasionally make robots behave). <br/>
            Outside the lab, you’ll probably find me exploring <b className="blue">nature</b> or getting humbled by a game of <b className="blue" >chess</b> — my favorite way to challenge both myself and my patience.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
