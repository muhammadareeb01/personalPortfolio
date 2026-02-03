import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
          
          {/* Raptr Store - Professional E-commerce Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop"
              isBlog={false}
              title="Raptr Store"
              description="Production-ready e-commerce platform built with Next.js, TypeScript, and Tailwind. Features include PayFast & Easypaisa Mini App integration with secure token-based authentication, optimized SEO achieving 86% page speed score, and efficient data flow with RTK Query caching."
              ghLink="https://github.com/muhammadareeb01"
              demoLink="https://raptrstore.com/"
            />
          </Col>

          {/* HyperBoxx - Mystery Box E-Commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop"
              isBlog={false}
              title="HyperBoxx"
              description="Full-stack mystery box platform with React.js, Node.js, Express.js & Firebase. Integrated Stripe with webhook verification, Admin Dashboard with RBAC, weighted RNG with SHA-256 provably fair hashing, and ERP-style inventory management."
              ghLink="https://github.com/muhammadareeb01/HyperBoxx"
            />
          </Col>

          {/* Home Exchange Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop"
              isBlog={false}
              title="Home Exchange Platform"
              description="Full-stack Home Exchange app using Next.js and TypeScript with secure JWT + Supabase Auth. Features real-time chat via Firebase, instant notifications, responsive design for all devices, and optimized property listing queries for faster load times."
            />
          </Col>

          {/* Full-Stack Blog */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop"
              isBlog={false}
              title="Full-Stack Blog Website"
              description="Scalable blog platform with full CRUD functionality using Next.js and MongoDB. Features Firebase Auth + JWT authentication, responsive Tailwind CSS design, and 30% improved server response time through optimized backend API architecture."
            />
          </Col>

          {/* React Admin Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
              isBlog={false}
              title="React Admin Dashboard"
              description="Modern admin dashboard with reusable UI components and modular architecture. Integrated real-time API data using Redux Toolkit & RTK Query with custom hooks. Interactive Chart.js analytics with fully responsive layouts for all screen sizes."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
