import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myPhoto from '../../assets/nikhil.jpeg'; // Ensure this path is correct

const About = () => {
  return (
    <div>
      <h3 className="mt-4 text-center heading">About Me</h3>
      <Container >
        <Row className="align-items-center">
          
          {/* Image Column - appears first on mobile, second on desktop */}
          <Col xs={12} md={4} className="text-center order-1 order-md-2 mt-4 mt-md-0">
            <Image
              src={myPhoto}
              alt="Profile"
              roundedCircle
              fluid
              style={{ width: '220px', height: '220px', objectFit: 'cover', border: '4px solid #fff' }}
              className="shadow"
            />
          </Col>

          {/* Text Column - appears second on mobile, first on desktop */}
          <Col xs={12} md={8} className="order-2 order-md-1">
            <ul className="fs-5 mt-2" style={{ textAlign: 'justify' }}>
              <li>Skilled in full stack web development using the MERN stack.</li>
              <li>Excellent problem solving and algorithmic thinking.</li>
              <li>Proficient in C++, Java, and Python.</li>
              <li>Strong understanding of computer science fundamentals including DSA, OS, DBMS, and computer networks.</li>
              <li>Practical knowledge in artificial intelligence and machine learning.</li>
            </ul>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default About;
