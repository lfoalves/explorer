import { Container, Profile, Logout } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return(
    <Container>
      <Profile to={'/profile'}>
        <img src="https://www.github.com/lfoalves.png" alt="Foto de LFOALVES" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Luiz Fernando Alves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}