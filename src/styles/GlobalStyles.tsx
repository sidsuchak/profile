import { createGlobalStyle } from "styled-components";
import texture from "../images/texture.jpg";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Outfit', sans-serif;
    background-image: url(${texture});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #f8fafc;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    color: #e0f2fe;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  p, li {
    color: #cbd5e1;
    font-weight: 300;
    font-size: 1rem;
  }

  a {
    color: #27DAF5;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #0ea5e9;
    }
  }

  strong {
    color: #facc15;
  }

  body.modal-open nav {
    z-index: 0 !important;
    pointer-events: none;
    opacity: 0.2;
  }
`;

export default GlobalStyles;
