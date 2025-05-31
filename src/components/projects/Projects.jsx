import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Replace with actual images and links
import img1 from '../../assets/say.png';
import img2 from '../../assets/hiremate.png';
import img3 from '../../assets/bikeride.jpeg';
import img4 from '../../assets/blue.png';

const projects = [
  {
    name: "The Salvation Army",
    image: img1,
    skills: "React, Node.js, MongoDB, Bootstrap, MongoDB GridFS, JavaScript",
    description: "Built a dynamic and responsive website for a church to display events, announcements, and galleries. Integrated MongoDB GridFS to efficiently handle the upload and management of over 100 images, ensuring smooth performance and easy content updates.",
    liveLink: "http://salvation-army-pezzonipet-cyf5.vercel.app/",
    githubLink: "https://github.com/itsnikhil-96/salvation_army_pezzonipet",
  },
  {
    name: "HireMate",
    image: img2,
    skills: "React, Node.js, MongoDB, Bootstrap,JavaScript",
    description: "Developed a full-featured freelancing platform using the MERN stack, enabling secure messaging for seamless collaboration between clients and freelancers. The platform includes user authentication, project posting and integrated chat. Implemented user ratings and reviews to enhance transparency.",
    liveLink: "https://hire-mate.vercel.app/",
    githubLink: "https://github.com/itsnikhil-96/HireMate",
  },
  {
    name: "Bike Ride Demand Forecast",
    image: img3,
    skills: "Python, Kaggle, Google Colab",
    description: "Developed a machine learning model to forecast Ola bike ride demand by leveraging historical trip data combined with real-time weather information. Engineered key features such as time of day, day of week, temperature, and rainfall to enhance model accuracy. Applied data preprocessing, feature selection, and model evaluation techniques.",
    liveLink: "https://github.com/itsnikhil-96/ola_bike_ride_demand_forecast_project",
    githubLink: "https://github.com/itsnikhil-96/ola_bike_ride_demand_forecast_project",
  },
  {
    name: "Blue Track",
    image: img4,
    skills: "Android Studio, Java, SQL Lite",
    description: "BlueTrack is an innovative Android-based application designed to promote water conservation by  empowering users with precise tracking and insightful analysis of their daily water usage.It enables users to record their water consumption across various activities such as bathing, cooking, washing, and drinking.",
    liveLink: "https://github.com/itsnikhil-96/salvation_army_pezzonipet",
    githubLink: "https://github.com/itsnikhil-96/salvation_army_pezzonipet",
  },
];

const Projects = () => {
  return (
    <div>
      <h3 className="mt-4 mb-4 text-center heading">Projects</h3>
      <Container>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{
                  backgroundColor: '#f0f4ff',
                  borderRadius: '12px',
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      className="fs-5 fw-semibold mb-3 text-center"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {project.name}
                    </Card.Title>

                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.name}
                      className="mb-3 rounded"
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />

                    <p
                      className="text-muted small text-center mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {project.skills}
                    </p>

                    <hr className="my-2" />

                    <p
                      className="small"
                       style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <Button
                      variant="primary"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#0077cc',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '0.9rem',
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="dark"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#24292e',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '0.9rem',
                      }}
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
