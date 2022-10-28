import { Link } from 'react-router-dom'

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Container, Avatar, Form } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GoBack } from '../../components/GoBack';

export function Profile() {
  return(
    <Container>

      <header>
        <GoBack />
      </header>

      <Form>
        <Avatar>
          <img src="https://www.github.com/lfoalves.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>


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
          placeholder={'Senha atual'}
          icon={FiLock}
        />

        <Input
          type={'password'}
          placeholder={'Nova senha'}
          icon={FiLock}
        />

        <Button title={'Salvar'} />
      </Form>
      
    </Container>
  );
}