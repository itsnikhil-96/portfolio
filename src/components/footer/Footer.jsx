import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <Row className="text-center">
          <Col>
            <p
              className="mb-1"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6c757d' }}
            >
              © {new Date().getFullYear()} Nikhil Polimetla 
            </p>
            <p
              className="mb-0"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6c757d' }}
            >
              Ready to build modern websites, portfolios & freelance projects.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
