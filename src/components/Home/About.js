import React from "react";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setBorder,
  setBackground,
  setBackgroundImage,
  setTransition,
  setFlex,
} from "../../styles";
import Section from "../global/Section";
import { PrimaryBtn } from "../global/Buttons";

const About = () => {
  return (
    <Section color="lightgray">
      <AboutWrapper>
        <div className="titleBtnWrapper">
          <h2 className="trans">About Porto!</h2>
          <PrimaryBtn>Find out more!</PrimaryBtn>
        </div>
        <div>
          <p>
            Porto is a bit of a crazy portfolio. Below you will find links to my
            websites and web applications. Have fun!ź
          </p>

          <p>
            <span className="nameInText">Balance</span>, an app under
            construction with which you can find out the value of things.
          </p>
          <p>
            {" "}
            <span className="nameInText">Process</span>, an application for
            artists to help you observe the creative process.
          </p>
        </div>
      </AboutWrapper>
    </Section>
  );
};

const AboutWrapper = styled.div`
  width: 100%;
  padding: ${setRem(20)};
  ${setBorder({ size: setRem(2), color: setColor.lightAccent })};
  ${setBackgroundImage({img: "https://images.pexels.com/photos/6580691/pexels-photo-6580691.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"})};
  /* background: url("https://images.pexels.com/photos/6580691/pexels-photo-6580691.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500") center / cover fixed no-repeat; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${setRem(20)};
  h2 {
    text-align: center;
    margin-bottom: ${setRem(20)};
  }
  p {
    margin-bottom: ${setRem(10)};
  }
  .nameInText {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 5px;
  }
  .trans {
    ${setTransition({})};
  }

  .trans:hover {
    color: red;
    cursor: pointer;
  }
  .titleBtnWrapper {
      ${setFlex()};
      flex-direction: column;
  }
`;

export default About;
