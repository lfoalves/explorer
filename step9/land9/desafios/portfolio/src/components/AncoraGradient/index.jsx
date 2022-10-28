import { Link } from "react-router-dom";
import { Container } from "./styles";

export function AncoraGradient({ data, ...rest}) {
  return (
    <Container {...rest}>
      <Link to={data.route}>
        {data.link}
      </Link>
    </Container>
  );
}