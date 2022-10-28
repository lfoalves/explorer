import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  width: fit-content;

  padding: 0.3rem;

  background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);
  border-radius: 1rem;

  animation: rotateColors infinite 1s;

  @keyframes rotateColors {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }    
  }
`;

export const Content = styled.div`
  width: 100%;

  border-radius: 1rem;

  padding: 0.5rem;

  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;

  background: none;
  background-color: ${({theme}) => theme.COLORS.BLACK};
  color: ${({theme}) => theme.COLORS.WHITE};
  border: none;
`;