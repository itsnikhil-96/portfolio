import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <Row className="text-center">
          <Col>
            <p
              className="mb-0"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6c757d' }}
            >
              © {new Date().getFullYear()} Nikhil Polimetla | Built with React & Bootstrap |{' '}
              <a href="https://github.com/itsnikhil-96" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
