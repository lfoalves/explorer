import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 6rem;

  overflow-y: scroll;
  
  background: linear-gradient(90deg, #9572FC 20%, #43E7AD 100%);

  .container {
    max-width: 136rem;
    height: fit-content;
    margin: 0 auto;

    border-radius: 1rem;
    
    padding: 4rem 1rem 2rem;
  }
`;