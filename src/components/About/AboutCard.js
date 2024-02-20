import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elhadji </span>
            from <span className="purple"> Kenya.</span>
            <br />
            I am  a software developer in Kenya.
            <br />
            I have completed BSc in software engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Fifa
            </li>
            <li className="about-activity">
              <ImPointRight /> coffee
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "indeed man is in a loss!"{" "}
          </p>
          <footer className="blockquote-footer">elhadjio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
