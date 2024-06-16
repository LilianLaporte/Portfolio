import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiJavascript,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandGolang } from "react-icons/tb";
import MatlabSVG from '../../Assets/custom_svg/matlab.svg';
import ROSSVG from '../../Assets/custom_svg/Ros_logo.svg';
import CSVG from '../../Assets/custom_svg/C_logo.svg';
import ASMSVG from '../../Assets/custom_svg/ASM_logo.svg';
import SolidworksSVG from '../../Assets/custom_svg/Solidworks_logo.svg';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSVG} alt="C Icon"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ROSSVG} alt="ROS Icon"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MatlabSVG} alt="Matlab Icon"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ASMSVG} alt="ASM Icon"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SolidworksSVG} alt="Solidowrks Icon"/>
      </Col>
    </Row>
  );
}

export default Techstack;
