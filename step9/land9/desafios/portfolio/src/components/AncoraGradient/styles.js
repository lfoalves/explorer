import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
    
  width: 100%;
  width: fit-content;

  padding: 0 0.5rem;

  background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);
  border-radius: 0.8rem;


  &:hover {
      box-shadow: 0 0 5px yellow, 0 0 30px purple, 0px 2px 50px rebeccapurple;
    }

  > a {
    width: 100%;

    border-radius: 0.8rem;

    padding: 0.5rem;

    text-transform: uppercase;

    background: none;
    background-color: ${({theme}) => theme.COLORS.BLACK};
    border: none;
  }

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