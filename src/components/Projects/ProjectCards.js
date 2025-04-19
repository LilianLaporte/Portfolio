import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbWorld } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: props.description }}>
          
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 10px' }}>
            <BsGithub style={{ marginRight: '5px' }} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.websiteLink && (
          <Button
            variant="primary"
            href={props.websiteLink}
            target="_blank"
            style={{ marginLeft: "10px", display: 'inline-flex', alignItems: 'center', padding: '5px 10px' }}
          >
            <TbWorld style={{ marginRight: '5px' }} />
            {"Website"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
