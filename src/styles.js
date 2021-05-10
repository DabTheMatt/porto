import { css } from "styled-components";

export const setColor = {
  mainBlack: "#011b28",
  mainWhite: "#EEF7FB",
  lightAccent: "#ffb703",
  darkAccent: "#fb8500",
  mainBlue: "#219ebc",
};

export const setFont = {
  main: "'Roboto', sans-serif;",
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setShadow = (type = "box", size = "20px", color = "black") => {
  return `${type}-shadow: ${size} ${size} ${color}`;
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBorder = ({size="2px", style="solid", color="black"}={}) => {
    return`border: ${size} ${style} ${color}`
}