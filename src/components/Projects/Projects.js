import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviePrj from "../../Assets/Projects/moviePrj.png";
import Earth from "../../Assets/Projects/Picture1.png";
import smartCM from "../../Assets/Projects/smartCM.png";
import ParticleComponent from "../Home/HomeParticles";

function Projects() {
  return (
    <Container fluid className="project-section">
      <ParticleComponent />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviePrj}
              isBlog={false}
              title="Movie Review Website"
              description="The movie review app, where you will have your own admin panel to upload movies and users can rate the movie from 1 to 10. As admin you can see the progress, add, update or delete the movies. Also you can create new actors whom you can then add inside movies as they are the actors of that particular movie."
              ghLink="https://github.com/tran1008/review-movie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Earth}
              isBlog={false}
              title="Earth English Center – CMS Website"
              description="CMS website that monitors the quality of students' learning at an English center to predict output scores and give appropriate advice."
              ghLink="https://github.com/tran1008/Frontend-english-center-quality-management"
              demoLink="https://frontend-english-center-quality-management.vercel.app/app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartCM}
              isBlog={false}
              title="Product Management"
              description="Product management website helps manage product lists, divide categories by product, recommend featured products, and best-selling products, set up group accounts, and decentralize permissions for the system."
              ghLink="https://github.com/tran1008/product-management"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
