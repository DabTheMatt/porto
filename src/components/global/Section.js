import styled from "styled-components";
import { setColor, setRem } from "../../styles";

const Section = styled.section`
padding: ${setRem(32)};
background: ${setColor.mainWhite};
`;

export default Section;