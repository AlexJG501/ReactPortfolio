import React from 'react';
import faceImage from '../../assets/images/face.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div>
    <Container fluid>
      <Row className="my-2 justify-content-center">
        <Col>
        <Image src={faceImage} className="my-2 face_img" style={{ width: "20%" }} alt="My face" roundedCircle />       
        </Col>
        </Row>
        <Row>
          <Col>
        <p className="my-2 d-flex align-middle am_txt">I started to dabble in coding in 2018 with Codecademy. 
          Some hobbies of mine are: making music, working out, 
          and investing. I like to work towards my goals, physically as well 
          as mentally. Thanks for stopping by, and come back soon 
          to see more progress!
        </p>
        <br />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;