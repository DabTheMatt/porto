import React from "react";
import styled from "styled-components";
import { setColor, setRem, setShadow, setFlex } from "../../styles";

const Home = ({title}) => {
    
    return (
        <HomeWrapper>
            <h1 className="title">{title}</h1> 
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(90deg, ${setColor.lightAccent}, ${setColor.darkAccent});
    ${setFlex({})};
h1{
    color: ${setColor.mainBlack};
    font-size: ${setRem(100)};
    ${setShadow("text", "2px", "white")};
    font-weight: 100;
    
    
}
h1:hover {
        animation: ease-in-out;
        transition: all 2s;
        font-size: ${setRem(200)};
        cursor: pointer;
    }
`;

export default Home;
