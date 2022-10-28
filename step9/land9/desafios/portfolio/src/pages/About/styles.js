import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 8rem 1.6rem 0;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5rem;

    > img {
      border: 0.3rem dashed aqua;
      width: 15rem;
      border-radius: 0.8rem;
    }

    > h2 {
      font-size: 4rem;
    text-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    }
`;