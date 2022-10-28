import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser ,FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type={'text'}
          placeholder={'Name'}
          icon={FiUser}
        />
        <Input
          type={'email'}
          placeholder={'E-mail'}
          icon={FiMail}
        />
        <Input
          type={'password'}
          placeholder={'Senha'}
          icon={FiLock}
        />

        <Button title={'Cadastrar'} type={'submit'} />

        <Link to={'/signin'}>
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />

    </Container>
  );
}