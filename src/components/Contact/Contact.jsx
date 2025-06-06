import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css';
import resumePDF from '../../assets/CSE_22501A05E8.pdf';

const ContactPage = () => {
  return (
    <div>
      <h2 className="mt-3 text-center heading">Contact Me</h2>
      <Container className="p-4 border rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
        <Row className="align-items-start text-center text-md-start">
          
          {/* Left Column: Resume Download */}
          <Col xs={12} lg={4} className="d-flex flex-column align-items-center justify-content-center">
            <h5 className="m-3">View My Resume</h5>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Resume</Button>
            </a>
          </Col>

          {/* Right Column: Contact Info */}
          <Col className="mt-4" xs={12} lg={8}>
            <Row>
              <Col xs={12} sm={6} className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <a href="mailto:nikhilpolimetla852@gmail.com">nikhilpolimelta852@gmail.com</a>
              </Col>
              <Col xs={12} sm={6} className="mb-3 d-flex align-items-center">
                <FaLinkedin className="me-2" />
                <a
                  href="https://www.linkedin.com/in/itsnikhil96/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Col>
              <Col xs={12} sm={6} className="mb-3 d-flex align-items-center">
                <FaGithub className="me-2" />
                <a
                  href="https://github.com/itsnikhil-96/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Col>
              <Col xs={12} sm={6} className="mb-3 d-flex align-items-center">
                <FaPhone className="me-2" />
                <a href="tel:+919177649519">+91-9177649519</a>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
