import styled from "styled-components";

import { devices } from '../../styles/devices'

export const Container = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  
  #menu {
    display: none;
  }
  .menu {
    display: none;
    transform: translateX(-100%);
    transition: all .5s;
  }
  #nav {
    display: none;
  }

  .container {  
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .button {
      background: none;
      border: none;
      }
    }

  .menu.active {
    z-index: 5;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;

    transform: translateX(0%);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    backdrop-filter: blur(3px);

    > nav ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > li a {
        font-size: 32pt;
        width: 100%;
      }
  }
}

  background-color: rgba(0,0,0,.8);

  @media ${devices.tablet} {
    .button {
      display: none;
    }

    #nav {
      display: block;
    }

    label {
      display: none;
    }

    width: 100%;
    padding: 0.5rem;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 5;

    background-color: ${({theme}) => theme.COLORS.BLACK};

    border-bottom-color: lightblue;
    border-bottom-style: solid;
    border-bottom-width: 0rem;

    box-shadow: 0px 0px 15px ${({theme}) => theme.COLORS.PURPLE};

    .container {
      display: flex;
      align-items: center;
      justify-content: space-around;

      > nav {
        ul {
          display: flex;
          gap: 1rem;
        }
      }
    }
  }

`;