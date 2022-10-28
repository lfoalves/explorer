import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 6rem 1.6rem 0;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    text-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    font-size: 40pt;
  }

  .contact {
    margin-top: 1rem;

    text-align: left;
    
    p + p {
      margin-top: 0.8rem;
    }

    p a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;