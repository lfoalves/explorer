import styled from "styled-components";

export const Container = styled.div`
  z-index: 3;

  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  .hide {
    display: none;
  }

  > button {
    background: none;
    border: none;

    
    > svg {
      filter: drop-shadow(1px 1px 5px rgba(0,0,0,0.3));
      path {
        fill: ${({theme}) => theme.COLORS.WHITE};
      }
    }
  } 
`;