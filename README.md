<p align="center">
  <img width="550" height="99" src="https://user-images.githubusercontent.com/106932234/204160165-1936c0db-539f-4a11-bf5e-1f3d3f789896.png">
</p>

<h3 align="center">Projeto realizado durante a trilha Explorer da Rocketseat</h3> <br><br>

<h3 align="center"><a href="https://foodexplorer-kevinsilvaa.netlify.app">Veja o resultado final do projeto</a></h3><br><br>

# Detalhes do projeto

### Este projeto é um cardápio digital de um restaurante fictício!</h3><br>
  
Durante a construção desse cardápio digital tive a oportunidade de adquirir experiência e treinar tudo que foi ensinado durante a trilha Explorer da Rocketseat, principalmente ReactJS e Node.js
A aplicação foi construída com base em um layout do figma e foi utilizado <strong>React</strong> para o [Front-end](https://github.com/KevinSilvaa/foodexplorer-frontend) e <strong>Node.js</strong> no [Back-end](https://github.com/KevinSilvaa/foodexplorer-backend).<br><br>
### Possuem dois tipos de perfis na aplicação:<br><br>
O Administrador, que pode criar, editar, excluir ou atualizar pratos, e também, pode ver os pedidos que foram feitos pelos clientes e atualizar o estado de preparação que cada pedido se encontra.<br><br>
E o usuário, que após o seu registro, tem diversas opções de interações com o site, desde favoritar um prato, adicionar produtos no carrinho, até mesmo ver o status de preparação que o seu pedido se encontra.<br><br>
Ambos perfis também contam com um sistema de pesquisa dos pratos e uma página de detalhes de cada prato, contendo o nome, descrição, preço, imagem e ingredientes.

<br>
<br>

# Tecnologias utilizadas para construção do Front-end

- `ReactJS`: Uma framework do JavaScript utilizada para estruturação das páginas
    
  - `Vite`; Utilizado para criar a base da aplicação em ReactJS.
  - `React Router Dom`; Utilizado para interagir com a DOM, principalmente com a navegação entre páginas.
  - `Styled Components`; Utilizado para a estilização dentro do JavaScript.
  - `React Icons`; Utilizado para importar ícones de uma maneira mais simples.
  - `SplideJS`; Utilizado para criar o carrossel com os pratos.
  
- `Axios`; Utilizado para conectar o Back-end com o Front-end

&nbsp;
&nbsp;
&nbsp;

### [Veja também como foi construído o Back-end](https://github.com/KevinSilvaa/foodexplorer-backend).

# Como executar o projeto localmente

### Clone o projeto para o local desejado na sua máquina

## Front-end
```bash
$ git clone git@github.com:KevinSilvaa/foodexplorer-frontend.git
```

## Back-end
```bash
$ git clone git@github.com:KevinSilvaa/foodexplorer-backend.git
```

### É necessário executar tanto o Front-end, quanto o Back-end para que o projeto funcione corretamente.

&nbsp;
&nbsp;
&nbsp;

### 🚧 Executando o Back-end
```bash
# Insira uma porta e um segredo para o token de autenticação em um arquivo .env
AUTH_SECRET=
PORT=

# Navegue até o diretório onde o Back-end está localizado
cd foodexplorer-backend

# Instale todas dependências necessárias do projeto
$ npm install

# Inicie a aplicação
$ npm run dev
```

### 💻 Executando o Front-end
```bash
# Navegue até o diretório onde o Front-end está localizado
$ cd foodexplorer-frontend

# Instale todas as dependências necessárias do projeto
$ npm install

# Inicie a aplicação
$ npm run dev

# Após todos esses passos, utilize o endereço enviado via terminal dentro do navegador. O endereço padrão utilizado no projeto foi:

http://localhost:5173
```

## 🔖 Layout

Caso queira visualizar o layout do projeto, [clique aqui](https://www.figma.com/file/uPtB43YFVq8AsAsGz7tjqI/food-explorer-v2-(Community)?node-id=201%3A1532&mode=dev).

## Feito por:

### Kevin
### Linkedin: www.linkedin.com/in/kevinsilvaa
