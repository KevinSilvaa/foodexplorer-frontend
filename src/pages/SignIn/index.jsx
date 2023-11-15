
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
        <Input
          icon={FiUser}
          title="Email"
          type="text"
          placeholder="Exemplo: exemplo@gmail.com"
          id="1"
        />

        <Input
          icon={FiLock}
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          id="2"
        />
        <Button title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>

    </Container>
  );
}
