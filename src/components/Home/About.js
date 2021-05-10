import React from "react";
import styled from "styled-components";
import { setColor, setRem, setBorder } from "../../styles";
import Section from "../global/Section";

const About = () => {
  return (
    <Section>
        <AboutTitle>
            <div>
                <h2>About Porto!</h2>
            </div>
            <div>
                <p>
                Porto is a bit of a crazy portfolio. Below you will find links to my websites and web applications. Have fun!ź
                </p>
                <p>
                <span className="nameInText">Balance</span>, an app under construction with which you can find out the value of things.
                <span className="nameInText">Process</span>, an application for artists to help you observe the creative process.
                </p>
            </div>
            
            
        </AboutTitle>
    </Section>
  );
};

const AboutTitle = styled.div`
width: 100%;
  padding: ${setRem(32)};
  ${setBorder({size: setRem(2), color: setColor.lightAccent})};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${setRem(10)};
  h2 {
      text-align: center;
      margin-bottom: ${setRem(20)}
  }
  p {
      margin-bottom: ${setRem(10)}
  }
  .nameInText {
      font-weight: 700;
  }
  @media (max-width: 768px) {
      display: block;
      margin: 5px;
  }
`;

export default About;
