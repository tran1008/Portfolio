import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Quoc Huy </span>
            from <span className="purple"> Ho Chi Minh city</span>
            <br /> I am a final year student pursuing an Electronics and Telecomunication at Ho Chi Minh City University of Science.
            <br />
            Additionally, I am currently employed as a software developer at <span className="purple">FPT Smart Cloud</span>. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport (football, running)
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen To Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A journey of a thousand miles begins with a single step!"{" "}
          </p>
          <footer className="blockquote-footer">Huy Tran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
