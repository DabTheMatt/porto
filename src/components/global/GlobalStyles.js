import { createGlobalStyle } from "styled-components";
import { setFont, setColor } from "../../styles";

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${setFont.main};
    color: ${setColor.mainBlack};
}
`;

export default Globals;