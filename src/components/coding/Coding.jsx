import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import leetcodeLogo from '../../assets/leetcode.jpeg';
import codeforcesLogo from '../../assets/codechef.jpeg';

const codingProfiles = [
  {
    platform: 'LeetCode',
    logo: leetcodeLogo,
    rating: 'Rating: 1500+',
    problemsSolved: '300+ problems solved',
    badges: ['50 Days Badge'],
    profileLink: 'https://leetcode.com/u/nikhilpolimetla852/',
  },
  {
    platform: 'Codechef',
    logo: codeforcesLogo,
    rating: 'Rating: 1370+',
    problemsSolved: '450+ problems solved',
    badges: [
      'Silver Badge in Contests',
      'Silver Badge in Problem Solver',
      'Diamond Badge in Daily Streak (100 Days)',
    ],
    profileLink: 'https://www.codechef.com/users/nikhilp96',
  },
];

const CodingProfiles = () => {
  return (
    <div>
      <h3 className="mt-4 mb-4 text-center heading">Coding Profiles</h3>
      <Container>
        <Row className="g-4 justify-content-evenly">
          {codingProfiles.map((profile, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ backgroundColor: '#fff5e6', borderRadius: '12px' }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      className="fs-5 fw-semibold mb-3 text-center"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {profile.platform}
                    </Card.Title>

                    <div className="d-flex justify-content-center">
                      <Card.Img
                        variant="top"
                        src={profile.logo}
                        alt={profile.platform}
                        className="mb-3 rounded"
                        style={{
                          height: '200px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          borderRadius: '10px',
                        }}
                      />
                    </div>

                    <p
                      className="text-muted small text-center mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {profile.rating} | {profile.problemsSolved}
                    </p>
                    <p className="text-center mb-2">
                      <a
                        href={profile.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary small"
                      >
                        View Profile
                      </a>
                    </p>

                    <hr className="my-2" />

                    <div>
                      <p className="small fw-semibold mb-1">Badges:</p>
                      <ul className="small mb-0 ps-3">
                        {profile.badges.map((badge, idx) => (
                          <li key={idx}>{badge}</li>
                        ))}
                      </ul>
                    </div>
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

export default CodingProfiles;
