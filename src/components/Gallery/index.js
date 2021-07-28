import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Img1 from '../../assets/images/screenshots/0.jpg';
import Img2 from '../../assets/images/screenshots/1.jpg';
import Img3 from '../../assets/images/screenshots/2.jpg';

function Gallery() {
  return (
    <section className="sectionSpacing">
      <Container>
        <Row>
          <h1 className="text-center" id="screenshot" data-testid="h1tag">Portfolio</h1>
        </Row>
        <Row className="flex-row space-between pb-1">
          <Col>
            <a href="https://nmisustin.github.io/guesstures/"><Image src={Img1} alt="Guess-tures: A website with flashcards to help those with difficulty recognizing facial expressions" fluid/></a>
          </Col>
          <Col>
          <a href="https://alexjg501.github.io/run-buddy/"><Image src={Img2} alt="Run Buddy: A mock website to pair runners with personal trainers" /></a>
          </Col>
          <Col>
          <a href="https://fast-woodland-75585.herokuapp.com/"><Image src={Img3} alt="RPS-Chat: A chat site that allows communication in a chatroom with a challenge option for rock paper scissors" /></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Gallery;