import { css, Global } from "@emotion/react";

export const GlobalStylesheet = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins Bold";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Bold.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins Italic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Italic.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins Regular";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Regular.ttf") format("truetype");
        font-display: swap;
      }

      #__next,
      #app,
      body,
      html {
        min-height: 100vh;
      }

      html,
      body {
        width: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Poppins Regular", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;
        color: #ccc;
        font-size: 15px;
        background: url(/images/body_bg.png) #1e1e1e;
      }

      .Toastify__toast--info {
        background: #0076ff;
      }

      .Toastify__toast--error {
        background: #ed1700;
      }

      .blurred {
        filter: blur(4px);
      }

      .tooltip-container.tooltip-container {
        text-align: center;
        box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.25);
        background-color: rgba(0, 0, 0, 1);
      }
      .tooltip-arrow.tooltip-arrow {
        color: rgba(0, 0, 0, 1);
      }

      @keyframes pulse {
        0% {
          background-color: #eee;
        }
        50% {
          background-color: #e4e4e4;
        }
        100% {
          background-color: #eee;
        }
      }

      ::-moz-focus-inner {
        border: 0;
      }

      *,
      ::after,
      ::before {
        box-sizing: border-box;
        font-family: "Poppins Regular", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;
      }
    `}
  />
);

/*
      @font-face {
        font-family: "Poppins Black";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Black.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins BlackItalic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-BlackItalic.ttf") format("truetype");
        font-display: swap;
      }
       @font-face {
        font-family: "Poppins BoldItalic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-BoldItalic.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins ExtraBold";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-ExtraBold.ttf") format("truetype");
        font-display: swap;
      }
 
      @font-face {
        font-family: "Poppins LightItalic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-LightItalic.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins Medium";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Medium.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins MediumItalic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-MediumItalic.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins SemiBold";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-SemiBold.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins SemiBoldItalic";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-SemiBoldItalic.ttf") format("truetype");
        font-display: swap;
      }
*/

export default GlobalStylesheet;
