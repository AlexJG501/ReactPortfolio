import React from 'react';
import faceImage from '../../assets/images/face.jpg';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container fluid>
      <Row className="my-2">
        <Col>
        <img src={faceImage} className="my-2 face_img" style={{ width: "30%" }} alt="My face" />       
        </Col>
        <Col>
        <p className="am_txt">I started to dabble in coding in 2018 with Codecademy. 
          Some hobbies of mine are: making music, working out, 
          and investing. I like to be to work towards my goals, physically as well 
          as mentally. Thanks for stopping by, and come back soon 
          to see more progress!
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;