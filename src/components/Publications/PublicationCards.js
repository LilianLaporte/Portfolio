import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LuNewspaper } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

function PublicationCards(props) {
  return (
    <Card className="publication-card-view" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {/* Image on the left */}
      <Col style={{ flex: "0 0 30%", padding: "0px" }}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="publication-img" 
          style={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
      </Col>
      
        {/* Text content on the right */}
            <Col style={{ flex: "1", padding: "10px" }}>
              <Card.Body>
                <Card.Title><strong>{props.title}</strong></Card.Title>
                {/* Add space between title and authors */}
                <div style={{ marginBottom: "15px" }}></div>
                {/* Author */}
                <Card.Text style={{ textAlign: "justify" }}>
                  <strong>Authors: </strong> {props.authors}
                </Card.Text>
                {/* Abstract */} 
                <Card.Text style={{ textAlign: "justify" }}>
                    <strong>Abstract: </strong>{props.description}
                </Card.Text>
            
            {/* Paper link */}
          {props.paperLink && (
            <Button
              variant="primary"
              href={props.paperLink}
              target="_blank"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 10px' }}
            >
              <LuNewspaper style={{ marginRight: '5px' }} />
              {"Paper"}
            </Button>
          )}
        </Card.Body>
      </Col>
    </Card>
  );
}

export default PublicationCards;
