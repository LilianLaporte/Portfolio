import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import US_image from "../../Assets/Projects/US_image.gif";
import rocketlander from "../../Assets/Projects/MPC_success.gif";
import up_up from "../../Assets/Projects/Double_pendulum.gif";
import DrivingGames from "../../Assets/Projects/Driving_Games.gif";
import archipelago from "../../Assets/Projects/Archipelago.png";
import semoir from "../../Assets/Projects/Semoir_auto.png";
import mirror from "../../Assets/Projects/Mirror.png";
import Xplore from "../../Assets/Projects/Xplore.gif";
import Arc from "../../Assets/Projects/Arc.gif";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">School </strong>Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on during my studies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={archipelago}
              isBlog={false}
              title="Archipelago"
              description="Due to a predicted rise in sea level, a city-state on the edge of the ocean decides to transform itself into a floating city. We have developed a tool to evaluate a city plan in which each district is a circular island and the districts are linked by floating bridges. Certain efficiency criteria are systematically evaluated."
              ghLink="https://github.com/LilianLaporte/Archipelago/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrivingGames}
              isBlog={false}
              title="Driving Game"
              description="The project's goal is to guide each agent (vehicle) to a designated area by first generating the path, then controlling the agent, and finally avoiding both static obstacles and other agents."
              ghLink="https://github.com/LilianLaporte/Driving-games"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocketlander}
              isBlog={false}
              title="Rocket Lander"
              description="The project is a simulation of the SpaceX Falcon 9 vertical landing phase its purpose is to develop a controller to land the rocket."
              ghLink="https://github.com/LilianLaporte/rocket-lander"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={US_image}
              isBlog={false}
              title="Real Time Ultrasound Imaging Feedback"
              description="The purpose of the project is to build a real-time ultrasound imaging feedback in order to control microbubbles to a specific location."
              ghLink="https://github.com/LilianLaporte/Real-Time-Ultrasound-Imaging-Feedback"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={up_up}
              isBlog={false}
              title="Double Pendulum"
              description="The purpose of the project is to control a double pendulum by stabilizing it in 2 equilibrium positions and rejecting the input disturbance."
              ghLink="https://github.com/LilianLaporte/Double-pendulum"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={semoir}
              isBlog={false}
              title="Automatic Seed Drill"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirror}
              isBlog={false}
              title="Mehanism for a femtosecond laser micromachining machine"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Xplore}
              isBlog={false}
              title="Xplore"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arc}
              isBlog={false}
              title="ARC"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
