import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Software Developer with 1 year of experience building
              responsive and high-performing web applications.
              <br />
              <br />
              <span className="fiverr-badge">
                🏆 <b>Level 2 Seller</b> on Fiverr
              </span>
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> React.js, Next.js, TypeScript, and JavaScript. </b>
              </i>
              <br />
              <br />
              My expertise lies in &nbsp;
              <i>
                <b className="purple">Component-based UI development, REST API Integration, </b> and
                building{" "}
                <b className="purple">
                  Scalable Frontend Solutions.
                </b>
              </i>
              <br />
              <br />
              I leverage modern libraries and frameworks like
              <b className="purple"> Redux Toolkit, RTK Query, </b> and
              <i>
                <b className="purple">
                  {" "}
                  Tailwind CSS to create seamless user experiences.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammadareeb01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammadareeb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/muhammadareeb79?public_mode=true"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons fiverr-icon"
                  title="Fiverr - Level 2 Seller"
                >
                  <SiFiverr />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:syedareebali795@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
