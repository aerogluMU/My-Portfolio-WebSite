import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tubitak from "../../Assets/Projects/TÜBİTAK_logo.png";
import baykar from "../../Assets/Projects/baykar.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={baykar}
            isBlog={false}
            isGA={true}
            isdemoLink={false}
            title="Baykar"
            subtitle="Job Application Project"
            description="Baykar is a Turkey-based machinery manufacturing and defense company. I successfully completed the aptitude test given to me by Atlas Imaging company, which operates under the roof of this company, and shared the content of this exam and the details of my answers on GitHub."
            ghLink="https://github.com/aerogluMU/ALperen-Eroglu-Baykar-Challenges"
            demoLink=""
          />
        </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tubitak}
              isBlog={false}
              isGA={false}
              isdemoLink={false}
              title="Smart Robot Vacuum Cleaner"
              subtitle="GRADUATION PROJECT & TUBITAK 2209-A PROJECT | Advisor: Prof. Dr. Gökhan Bora ESMER"
              description="Smart robot vacuums are products that have been talked about in the global market recently and have gained an important place in the market. Due to its innovation in the market and the demand it sees, its development continues today and its importance is increasing in the R&D centers of many important companies. Reducing the workload in housework and saving time are some of the conveniences it provides, and it is a proof of how necessary smart robots that make people's lives are for people. When we look at the smart robot vacuum cleaner market in the world and in our country, unfortunately, there is no product developed and produced in Turkey. Smart robot vacuums, which are named after domestic companies in our country and are on sale in the market, are made in China. This project deals with the R&D problem in the smart robot vacuum cleaner sector in our country."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tubitak}
              isBlog={false}
              isGA={false}
              isdemoLink={false}
              title="Marketlerde Meyve Sebze Reyonlarının Gömülü Kamera Sistemi ile İzlenmesi"
              subtitle="TUBITAK 2209-B PROJECT | Advisor: Prof. Dr. Cem Unsalan"
              description="One of the important problems in the markets is that the stock of this product cannot be renewed in case of a decrease in the product in the fruit and vegetable section. The aim of this project is to produce a solution to this problem. In addition, rotten fruit analysis is done to prevent the presence of poor quality products in the aisle. For this reason, the successful realization of the project was ensured with the support of Migros AŞ, the industrial partner of the project."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
