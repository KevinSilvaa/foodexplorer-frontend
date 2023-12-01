// Styling Imports
import { Container, Logo, Form } from "./styles"

// Components Imports
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

// Strategic Imports
import { Link, useNavigate } from "react-router-dom";
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

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    if (password.length < 6) {
      return alert("A senha deve conter mais que 6 caracteres")
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      return alert("Insira um email válido");
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
          placeholder="Digite seu nome"
          id="1"
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Exemplo: @exemplo@gmail.com"
          type="email"
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
