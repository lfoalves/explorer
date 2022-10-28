import { Container } from "./styles";

export function ContainerContent({ children }) {
  return (
    <Container>
      <div className="container">
        {children}
      </div>
    </Container>
  );
}