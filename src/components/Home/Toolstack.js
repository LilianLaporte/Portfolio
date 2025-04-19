import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLatex,
  SiLinux,
  SiNotion,
} from "react-icons/si";
import {DiGit} from "react-icons/di";

function TechIcon({ children, label }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Col 
      xs={4} 
      md={2} 
      className="tech-icons"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="skill-name">{label}</div>
      ) : (
        children
      )}
    </Col>
  );
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon label="Git">
        <DiGit />
      </TechIcon>
      <TechIcon label="Linux">
        <SiLinux />
      </TechIcon>
      <TechIcon label="VS Code">
        <SiVisualstudiocode />
      </TechIcon>
      <TechIcon label="Notion">
        <SiNotion />
      </TechIcon>
      <TechIcon label="LaTeX">
        <SiLatex />
      </TechIcon>
    </Row>
  );
}

export default Toolstack;
