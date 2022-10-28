import { Container } from "./styles";

import { projects } from '../../utils/projects'

import { CardFlip } from '../../components/CardFlip';

export function SectionProjects() {

  return (
    <Container>
      <h1>Projects</h1>

      <main>
        {        
            projects.explorer.map(project => {
              return (
                <CardFlip data={project} key={project.codigo_url} />
              );
            })
        }
      </main>

    </Container>
  );
}