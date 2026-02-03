
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Areeb </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am a Software Developer with 1 year of experience building responsive
            and high-performing web applications.
            <br />
            I have completed B.E. in Computer Systems Engineering at Mehran University
            of Engineering and Technology with a GPA of 3.42/4.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Areeb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
