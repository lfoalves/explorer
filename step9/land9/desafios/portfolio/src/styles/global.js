import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track{
    background-color: '#321c41';
    margin-top: 6rem;
  }

  &::-webkit-scrollbar-thumb{
    border: 5px solid transparent;
    
    background: linear-gradient(180deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);
    border-radius: 20px;
    border: 0px solid transparent;
  }

  html {
    font-size: 62.5%;
  }
  html, body {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialized;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    
    font-family: sans-serif;
    font-family: 'Comfortaa', cursive;

    background-color: ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
    border: none;
    font-family: 'Comfortaa', cursive;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: bolder;
  }
  
  ul {
    list-style: none;
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Comfortaa', cursive;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  .container {
    width: 100%;
    height: 100%;

    max-width: 136.6rem;
    
    margin: 0 auto;
    
    padding: 1rem;
  }
`;