import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiNpm,
  SiFigma,
  SiJest,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiGit } from "react-icons/di";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <DiGit />, name: "Git" },
    { icon: <AiFillGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiNpm />, name: "NPM" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiJest />, name: "Jest" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tool-tooltip-${index}`} className="skill-tooltip">
                {tool.name}
              </Tooltip>
            }
          >
            <div className="icon-wrapper">{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
