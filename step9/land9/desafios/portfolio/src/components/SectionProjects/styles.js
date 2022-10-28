import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > main {
    margin-top: 4rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center
  }
`;