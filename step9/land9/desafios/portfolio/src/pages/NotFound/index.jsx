import { Link } from "react-router-dom";
import { ContainerContent } from "../../components/ContainerContent";
// import { Container } from "./styled";

export function NotFound() {
  return (
    // <Container>
    //   <div className="container">
    //     <h1>not found 404</h1>
    //     <Link to={'/'}>Ir para o início</Link>
    //   </div>
    // </Container>
    <ContainerContent>
      <h1>not found 404</h1>
      <Link to={'/'}>Ir para o início</Link>
    </ContainerContent>
  );
}