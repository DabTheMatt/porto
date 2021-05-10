import React from "react";
import styled from "styled-components";
import { setColor, setRem, setShadow, setFlex } from "../../styles";
import About from "../Home/About";

const Home = ({ title }) => {
  return (
      <>
    <HomeWrapper>
      <h1 className="text">{title}</h1>
      
      
    </HomeWrapper>
    <About />
    </>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    45deg,
    ${setColor.lightAccent},
    ${setColor.darkAccent}
  );
  ${setFlex({})};
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1 {
      color: ${setColor.mainWhite};
      font-size: ${setRem(80)};
  }

  
 
  
`;

export default Home;
