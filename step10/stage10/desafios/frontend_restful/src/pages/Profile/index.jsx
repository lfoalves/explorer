import { useState } from 'react';
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';

import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Avatar, Form } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GoBack } from '../../components/GoBack';

export function Profile() {
  const { user, updateProfile } = useAuth();
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordNew, setPasswordNew] = useState();
  const [passwordOld, setPasswordOld] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUserUpdate() {
    const updated = {
      name,
      email,
      newPassword: passwordNew,
      oldPassword: passwordOld
    }

    updated.newPassword = null;
    updated.oldPassword = null;

    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>

      <header>
        <GoBack />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>


        <Input
          type={'text'}
          placeholder={'Name'}
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type={'email'}
          placeholder={'E-mail'}
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />

        <Input
          type={'password'}
          placeholder={'Senha atual'}
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          type={'password'}
          placeholder={'Nova senha'}
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title={'Salvar'} onClick={handleUserUpdate} />
      </Form>
      
    </Container>
  );
}