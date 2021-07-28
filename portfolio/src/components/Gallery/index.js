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
            <Image src={Img1} alt="" fluid/>
          </Col>
          <Col>
            <Image src={Img2} alt="" />
          </Col>
          <Col>
            <Image src={Img3} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Gallery;