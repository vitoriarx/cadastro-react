import React, { useState, useRef } from "react";

import people from './assets/people.svg'
import seta from './assets/seta.svg'
import lixeira from './assets/lixeira.svg'

import { Container, Image, H1, ContainerItens, InputLabel, Input, Button, User } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name:inputName.current.value , age:inputAge.current.value}])
  }

  function deleteUser(userId){
    const newUsers = users.filter( user => user.id !== userId)

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={people} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar<img alt="seta" src={seta} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt="lixeira" src={lixeira} /></button>
            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App 