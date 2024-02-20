import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import logo from "../../Assets/Projects/logo.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={logo}
              isBlog={false}
              title="Portfolio1"
              description="Personal website portfolio for yussuf, ."
              ghLink="https://github.com/galoroyusuf/portfolio1"
              demoLink="https://galoroyusuf.github.io/portfolio1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Africa safaris"
              description="onedayatatimeafricasafaris is fully responsive travel website,
              Responsive for all devices, built using HTML, CSS, and JavaScript."
              ghLink="https://https://github.com/galoroyusuf/africasafaris"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Eth-todo-list"
              description="TO DO LIST A todo list app using blockchain technology."
              ghLink="https://github.com/galoroyusuf/eth-todo-list"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="students marks calculator-java"
              description="java program for calculating student marks."
              ghLink="https://github.com/galoroyusuf/student-Marks-Calculator-using-Java"
             
            />
          </Col>


        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
