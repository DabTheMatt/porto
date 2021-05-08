import React from "react";
import styled from "styled-components";
import { setColor, setRem, setShadow, setFlex } from "../../styles";

const Home = () => {
    return (
        <HomeWrapper>
            <h1 className="title">Hello from Home</h1> 
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(45deg, ${setColor.lightAccent}, ${setColor.darkAccent});
    ${setFlex({})};
h1{
    color: ${setColor.mainBlack};
    font-size: ${setRem(100)};
    ${setShadow("text", "2px", "white")};
    font-weight: 100;
}
`;

export default Home;
