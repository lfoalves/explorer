import { Link } from 'react-router-dom'

import { Container, Profile, Logout } from "./styles";


import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <div className="container">
        <Link to={'/'} title={'Rocketmovies'}>RocketMovies</Link>

        <Input
          type={'text'}
          placeholder={'Pesquisar pelo título'}
          maxlength={50}
          mixlength={5}
        />

        <Profile to={'/profile'} title={'Editar perfil'}>
          <div>
            <strong>Luiz Fernando</strong>
            <Logout>
              Sair
            </Logout>
          </div>

          <img src="https://www.github.com/lfoalves.png" alt="Foto de Lfoalves" />
        </Profile>
      </div>
    </Container>
  );
}