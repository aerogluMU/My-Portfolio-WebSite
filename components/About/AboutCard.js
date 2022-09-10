import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alperen Eroğlu </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br />I am an electrical and electronics engineer candidate continuing my education life.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 👾
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies 🎥
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" } }>
            "The trick to having good ideas is not to sit around in glorious isolation and try to think big thoughts. The trick is to get more parts on the table."
          </p>
          <footer className="blockquote-footer">Steven Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
