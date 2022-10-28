import { Container, Content } from "./styles";

export function CardTech({ data, ...rest}) {
  return (
    <Container>
      <Content>
        <img src={data.img} alt={'Ícone de' + ' ' + data.tech} />
        <p>{data.name}</p>
      </Content>
    </Container>
  );
}