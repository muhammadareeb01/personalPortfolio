
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
} from "react-icons/di";
import {
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiSass />, name: "Sass" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`} className="skill-tooltip">
                {skill.name}
              </Tooltip>
            }
          >
            <div className="icon-wrapper">{skill.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
