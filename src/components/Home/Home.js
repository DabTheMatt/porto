import React from "react";
import styled from "styled-components";
import { setColor, setRem, setShadow, setFlex, setBackgroundImage} from "../../styles";
import About from "../Home/About";
import sweets from "../../images/sweets.jpeg";
import road from "../../images/road.jpeg";

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
  ${setBackgroundImage({})};

  ${setFlex({})};
  


  h1 {
      color: ${setColor.mainWhite};
      font-size: ${setRem(132)};
      opacity: 0;
      animation: blink 3s ease-in-out infinite;
      text-transform: uppercase;
  }
@keyframes blink {
    
    50% {
        opacity: 1;
        
        
    }
}
  

  
 
  
`;

export default Home;
