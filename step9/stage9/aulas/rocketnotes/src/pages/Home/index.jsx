import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from '../../components/Section';
import { Note } from "../../components/Note";

import { FiPlus } from 'react-icons/fi';

const result = [
  {
    title: 'React',
    tags: [
      {id: '1', name: 'react'},
      {id: '2', name: 'rocketseat'}
    ]
  },
  {
    title: 'Node',
    tags: [
      {id: '1', name: 'node'},
      {id: '2', name: 'backend'}
    ]
  },
  {
    title: 'Express',
    tags: [
      {id: '1', name: 'expressjs'},
      {id: '2', name: 'backend'}
    ]
  },
  {
    title: 'LinkedIn',
    tags: [
      {id: '1', name: 'premium'},
      {id: '2', name: 'learning'}
    ]
  }
]

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title={'Todos'} isActive /></li>
        <li><ButtonText title={'Frontend'} /></li>
        <li><ButtonText title={'Backend'} /></li>
        <li><ButtonText title={'React'} /></li>
        <li><ButtonText title={'Node'} /></li>
      </Menu>

      <Search>
        <Input
          placeholder={'Pesquisar pelo título'}
        />
      </Search>

      <Content>
        <Section title={'Minhas notas'}>
          {
            result && result.map(dado => {
              return (
                <Note data={dado} />
              )
            })
          }
        </Section>
      </Content>

      <NewNote to={'/new'}>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}