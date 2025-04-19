import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Lilian Laporte </span>
            from <span className="blue"> France.</span>
            <br />
            I am currently employed as a robotics intern at MESH AG.
            <br />
            I am doing my master in Robotics, Systems and Control at ETHZ.
            <br />
            <br />
            I also have passion for these activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
