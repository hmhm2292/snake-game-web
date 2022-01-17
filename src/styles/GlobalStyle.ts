import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: black;
  }

  @font-face {
    font-family: "PressStart2P";
    src: url("/fonts/PressStart2P-Regular.ttf");
  }
`;
