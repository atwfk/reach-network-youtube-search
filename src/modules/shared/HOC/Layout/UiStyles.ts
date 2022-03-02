import { createGlobalStyle } from "styled-components";
import { SCREENS } from "../../constants";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #efefef;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    main {
        padding: 20px;
        max-width: ${SCREENS.LG};
        margin: auto;

        @media (min-width: ${SCREENS.MD}) {
         margin-top: 80px
        }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button {
      background-color: transparent;
      border: none;
    }
    ul {
      list-style: none;
    }
`;
