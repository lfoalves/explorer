import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  width: fit-content;
  height: fit-content;

  display: grid;
  place-content: center;

  padding: 0.3rem;

  border-radius: 1rem;

  background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);

  transition: all .2s;
  animation: rotateColors infinite 2s;

  &:hover {
    z-index: 1;
    transform: scale(1.3);
    box-shadow: 0px 2px 5px yellow, 0px 2px 30px purple, 0px 2px 50px rebeccapurple;
  }

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
  padding: 1.6rem;

  border-radius: 1rem;

  background-color: black;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;


  > img {
    width: 8rem;
  }
`;