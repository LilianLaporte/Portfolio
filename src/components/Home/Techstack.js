import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiHtml5,
  DiDocker,
} from "react-icons/di";
import {
  SiCplusplus,
  SiPytorch,
  SiOpencv,
  SiRos,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import MatlabSVG from '../../Assets/custom_svg/matlab.svg';
import ROSSVG from '../../Assets/custom_svg/Ros_logo.svg';
import CSVG from '../../Assets/custom_svg/C_logo.svg';
import ASMSVG from '../../Assets/custom_svg/ASM_logo.svg';
import SolidworksSVG from '../../Assets/custom_svg/Solidworks_logo.svg';

// New component for tech icon with hover effect
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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon label="Python">
        <DiPython />
      </TechIcon>

      <TechIcon label="PyTorch">
        <SiPytorch />
      </TechIcon>

      <TechIcon label="OpenCV">
        <SiOpencv />
      </TechIcon>
      
      <TechIcon label="C++">
        <SiCplusplus />
      </TechIcon>
      
      <TechIcon label="C">
        <img src={CSVG} alt="C Icon"/>
      </TechIcon>
      
      <TechIcon label="ROS">
        <SiRos />
      </TechIcon>
      
      <TechIcon label="MATLAB">
        <img src={MatlabSVG} alt="Matlab Icon"/>
      </TechIcon>
      
      <TechIcon label="Docker">
        <DiDocker />
      </TechIcon>
      
      <TechIcon label="JavaScript">
        <IoLogoJavascript />
      </TechIcon>
      
      <TechIcon label="HTML5">
        <DiHtml5 />
      </TechIcon>
      
      <TechIcon label="Assembly">
        <img src={ASMSVG} alt="ASM Icon"/>
      </TechIcon>
      
      <TechIcon label="SolidWorks">
        <img src={SolidworksSVG} alt="Solidworks Icon"/>
      </TechIcon>
    </Row>
  );
}

export default Techstack;