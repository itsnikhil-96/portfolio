import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skillsData = [
  { title: "Programming Languages", items: ["C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Bootstrap"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
  { title: "Tools", items: ["VS Code", "Postman","Canva","Adobe Express"] },
];

const bgColors = [
  "#f8f9fa", "#f1f3f5", "#e7f3ff", "#fff3cd", "#e2f0d9", "#fce4ec"
];

const SkillsPage = () => {
  return (
    <div>
      <h3 className="mt-4 text-center heading">Skills</h3>
      <Container className="p-4">
        <Row>
          {skillsData.map((skill, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card
                className="h-100 skill-card border-0"
                style={{ backgroundColor: bgColors[idx % bgColors.length] }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fs-5 fw-semibold border-start ps-2 border-3 border-primary mb-3">
                      {skill.title}
                    </Card.Title>
                    <ul className="mb-0 ps-3 fs-6">
                      {skill.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
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

export default SkillsPage;
