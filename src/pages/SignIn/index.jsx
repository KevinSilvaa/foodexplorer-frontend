// Style Imports
import { Container, Logo, Form } from "./styles"

// Components Imports
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Strategic imports 
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

// Icons Imports
import { FiLock, FiUser } from "react-icons/fi";

// Image Imports
import logo from "../../assets/Logo.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos");
    }

    signIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} width={40} height={40} />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <h1>Faça login</h1>
        <Input
          placeholder="Exemplo: exemplo@gmail.com"
          type="text"
          title="Email"
          icon={FiUser}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          title="Senha"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>

    </Container>
  );
}
