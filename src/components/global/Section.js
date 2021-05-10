import styled from "styled-components";
import { setColor, setRem, setFlex } from "../../styles";

const Section = styled.section`
  height: auto;
  padding: ${setRem(64)};
  margin: 0 auto;
  ${setFlex()};
  background: ${(props) => props.color};
`;

export default Section;
