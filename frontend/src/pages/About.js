import React from "react";
import MyNav from "../components/MyNav";
import { Container, ListGroup } from "react-bootstrap";
import ColoredLine from "../components/ColoredLine";

function About() {
  return (
    <>
      <MyNav />
      <Container>
        <h2>Introduction</h2>
        <ColoredLine color="black" margin="1rem 0" />

        <p>
          This project proposal outlines a plan to create a social media
          platform and brand for athletes seeking sponsorship opportunities. The
          goal is to provide a centralized platform where athletes can showcase
          their talents and connect with potential sponsors. The primary target
          audience for this platform is sponsors who are looking to invest in
          up-and-coming athletes.
        </p>

        <h2>Team Members</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <ListGroup className="members-links">
          <a
            href="http://maiyagolf.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListGroup.Item action variant="warning">
              Maiya Tanaka Puterbaugh
            </ListGroup.Item>
          </a>
          <a
            href="https://jennylee.golf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListGroup.Item action variant="primary">
              Jenny Lee
            </ListGroup.Item>
          </a>
        </ListGroup>

        <h2>Technology Stack</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <ListGroup>
          <ListGroup.Item>Frontend: React</ListGroup.Item>
          <ListGroup.Item>Backend: Node.js/Express</ListGroup.Item>
        </ListGroup>

        <h2>Problem Statement</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <p>
          Aspiring athletes often struggle to gain exposure and secure
          sponsorship deals to support their careers. This platform aims to
          bridge the gap between talented athletes and potential sponsors by
          creating a dedicated space for athletes to showcase their skills and
          personalities, and for sponsors to discover and invest in promising
          talent.
        </p>

        <h2>Solution</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <p>
          Our solution is to develop a social media platform specifically
          tailored to the needs of athletes and sponsors. The platform will
          allow athletes to create profiles, share content, and connect with
          sponsors. Sponsors, on the other hand, will be able to search for
          athletes, view their profiles, and initiate sponsorship opportunities.
        </p>

        <h2>Features</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <ListGroup>
          <ListGroup.Item>
            Athlete Profiles: Athletes can create personalized profiles
            showcasing their sports, achievements, and sponsorship goals.
          </ListGroup.Item>
          <ListGroup.Item>
            Content Sharing: Athletes can share photos, videos, and updates
            about their training, competitions, and milestones.
          </ListGroup.Item>
          <ListGroup.Item>
            Sponsorship Opportunities: Sponsors can browse athlete profiles,
            initiate contact, and offer sponsorship deals directly through the
            platform.
          </ListGroup.Item>
          <ListGroup.Item>
            Engagement Metrics: The platform will provide analytics and
            engagement metrics to help athletes understand their reach and
            appeal to sponsors.
          </ListGroup.Item>
        </ListGroup>

        <h2>Marketing Strategy</h2>
        <ColoredLine color="black" margin="1rem 0" />
        <p>
          Our primary marketing channel will be Instagram, as it is a highly
          visual platform with a large user base. We will create an Instagram
          account for the platform, regularly featuring athletes and their
          stories to attract both athletes and sponsors. We will also utilize
          influencer marketing and collaborate with sports influencers to
          promote the platform.
        </p>

        <h2>Conclusion</h2>
        <ColoredLine color="black" margin="1rem 0" />

        <p>
          With our combined expertise in React and Node.js/Express, we aim to
          create a user-friendly and engaging platform that caters to the needs
          of athletes and sponsors. By providing a centralized hub for
          sponsorship opportunities, we believe this platform has the potential
          to revolutionize the way athletes pursue their dreams and connect with
          sponsors.
        </p>
      </Container>
    </>
  );
}

export default About;
