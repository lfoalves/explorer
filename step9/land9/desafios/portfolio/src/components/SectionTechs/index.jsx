import { Container, Content } from "./styles";

import { CardTech } from "../CardTech";

import { techs } from "../../utils/techs";

export function SectionTechs() {
  return (
    <Container className="cards">

        <h2>Techs</h2>

        <Content>
          {
            techs.map(tech => {
              return(
                <CardTech key={tech.tech} data={tech} />
              );
            })
          }
        </Content>
      
    </Container>
  );
}