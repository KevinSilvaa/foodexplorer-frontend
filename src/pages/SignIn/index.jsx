
// Style Imports
import { Container, Logo, Form } from "./styles"

// Components Imports
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Strategic imports 
import { Link } from "react-router-dom";

// Icons Imports
import { FiLock, FiUser } from "react-icons/fi";

// Image Imports
import logo from "../../assets/Logo.svg";

export function SignIn() {

  return (
    <Container>
      <Logo>
        <img src={logo} width={40} height={40} />
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
