import { Container, Content } from "./styles";

export function ButtonGradient({ title, ...rest}) {
  return (
    <Container {...rest}>
      <Content>
        {title}
      </Content>
    </Container>
  );
}