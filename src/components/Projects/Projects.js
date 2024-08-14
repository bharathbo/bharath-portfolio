import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import bookmydesk from "../../Assets/Projects/image.png";
import bot from "../../Assets/Projects/bott.jpg";
import face from "../../Assets/Projects/ff.jpg";
import online from "../../Assets/Projects/on.jpg";
import taskk from "../../Assets/Projects/tt.jpg";
import atmm from "../../Assets/Projects/atm.jpg";





import Particle from "../Particle";
import ProjectCard from "./ProjectCards";


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
              imgPath={bookmydesk}
              isBlog={false}
              title="BookMyDesk"
              description="BookMyDesk is an innovative desk booking system
designed to streamline workspace management. It enables
employees to reserve desks in advance, promoting flexible
and efficient use of office space"
              ghLink="https://github.com/bharathbo/BookMyDesk"
              demoLink="https://bookmydesk.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="Campus BOT"
              description="Campus BOT is a Python-based software program developed to provide 
students and lecturers with convenient access to essential academic information."
              ghLink="https://github.com/bharathbo/Bot"
              // demoLink="https://github.com/bharathbo/Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Mask detection"
              description="Face mask detection using Python involves building a machine learning model to identify whether individuals are wearing masks by analyzing images or video feeds."
              ghLink="https://github.com/bharathbo/Face-Mask-Detection"
              // demoLink="https://github.com/bharathbo/Face-Mask-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online}
              isBlog={false}
              title="Online-Groceries-Using-Web-Application
"
              description="Online Groceries Using Web Application is a project that involves developing a web-based platform where users can browse, order, and manage grocery items online."
              ghLink="https://github.com/bharathbo/Online-Groceries-Using-Web-Application"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskk}
              isBlog={false}
              title="Task Management"
              description="Task management is the process of managing a task through its life cycle, from planning and assignment to tracking and completion."
              ghLink="https://github.com/bharathbo/Task-Management"
              demoLink="https://65ceee51da48d874d85c7391--luxury-croissant-4b3ef5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atmm}
              isBlog={false}
              title="ATM INTERFACE"
              description="An ATM interface is a user-friendly system that allows customers to interact with an Automated Teller Machine (ATM) to perform banking transactions."
              ghLink="https://github.com/bharathbo/ATM-INTERFACE"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
