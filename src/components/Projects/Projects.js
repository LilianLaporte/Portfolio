import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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

function Projects() {
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
              imgPath={US_image}
              isBlog={false}
              title="Real Time Ultrasound Imaging Feedback"
              description="This project explores a new way to visualize and guide microbubbles (MBs) using ultrasound imaging and custom-made channels. 
              It introduces real-time feedback and a tracking method based on AI. The system can even steer MBs under strong flow conditions, though tracking becomes difficult at high speeds."
              ghLink="https://github.com/LilianLaporte/Real-Time-Ultrasound-Imaging-Feedback"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arc}
              isBlog={false}
              title="ARC"
              description="Assisted the team in improving an automatic waste sorting system by implementing a new computer vision pipeline for waste tracking, developing a 
              simulation of the entire system in Gazebo, and enhancing the presorting stage."
              websiteLink="https://riverclean.ethz.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Xplore}
              isBlog={false}
              title="Xplore"
              description="Responsible for designing and building the forearm of a Mars rover as part of an inter-university competition.<br />
                <span style='font-weight: bold;'>Awards:</span>
                <ul style='list-style-position: inside; margin: 0; padding-left: 1.5em; display: inline;'>
                  <li>#3 at European Rover Challenge (ERC) for our first year of creation</li>
                  <li>Special prize for handling task</li>
                  <li>Special prize for science task</li>
                </ul>"
              websiteLink="https://epfl-xplore.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrivingGames}
              isBlog={false}
              title="Driving Game"
              description="Guide each agent (vehicle) to a designated area by first generating the path, then controlling the agent, and finally avoiding both static obstacles and other agents."
              ghLink="https://github.com/LilianLaporte/Driving-games"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocketlander}
              isBlog={false}
              title="Rocket Lander"
              description="Designed a system to simulate the vertical landing of a SpaceX Falcon 9 rocket. Progressed from basic to advanced controllers: starting with PID, then Model Predictive Control, and finally a Reinforcement Learning-based approach."
              ghLink="https://github.com/LilianLaporte/rocket-lander"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={up_up}
              isBlog={false}
              title="Double Pendulum"
              description="Built a controller to stabilize a double pendulum in both upright and downward positions. Used LQR for the challenging 'up-up' balance and a cascaded PID to handle disturbances in the 'down-down' state."
              ghLink="https://github.com/LilianLaporte/Double-pendulum"
            />
          </Col>

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
              imgPath={mirror}
              isBlog={false}
              title="Mehanism for a femtosecond laser micromachining machine"
              description="Created a dynamic mechanism for a femtosecond laser machine by replacing a fixed mirror with a movable one on a dual-axis rotating system. 
                The design allows precise mirror pivoting from 10Hz to 820Hz while maintaining balance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={semoir}
              isBlog={false}
              title="Automatic Seed Drill"
              description="Developed an automatic seed drill that opens a trench, plants seeds, and closes it behind. 
                Users can adjust seed size and spacing to customize planting at any time."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
