// Styling Imports
import { Container, Logo, Form } from "./styles"

// Components Imports
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Strategic Imports
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

// Icons Imports
import { FiLock, FiUser } from "react-icons/fi";

// Image Imports
import logo from "../../assets/Logo.svg"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { singUp } = useAuth()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    try {
      await api.post("/users", { name, email, password });
      alert("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
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
          icon={FiUser}
          title="Seu nome"
          type="text"
          placeholder="No mínimo 6 caracteres"
          id="1"
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Exemplo: @exemplo@gmail.com"
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
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>

    </Container>
  );
}
