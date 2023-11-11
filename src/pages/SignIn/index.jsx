import { Link } from "react-router-dom";
import { FiLock, FiUser } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Logo, Form } from "./styles"

export function SignIn() {

  return (
    <Container>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="44" viewBox="0 0 39 44" fill="none">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
        </svg>
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Faça login</h1>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            icon={FiUser}
            placeholder="Exemplo: exemplo@gmail.com"
            type="email"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Senha</label>
          <Input
            id="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
        </div>

        <Button title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>

    </Container>
  );
}
