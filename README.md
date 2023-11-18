Trilha Explorer - Desafio Final

Author: Felipe Augusto de Araujo Coelho
Layout Figma: https://www.figma.com/community/file/1196874589259687769/food-explorer-v2
Deploy: 
Dependências:
    Axios
    Styled Components
    React
    Swiper

Conceito Mobile First

Aplicação feita usando React+Vite

# Estrutura do Projeto

## 6 páginas:
1.  > **SignIn**:
	
    hooks:
    ```javascript
    import { useState } from "react";
    ```
    componentes:
    ```javascript
    import { Hyperlink } from "../../components/Hyperlink";
    import { Button } from "../../components/Button";
    import { Input } from "../../components/Input";
    import { Logo } from "../../components/Logo";
    import { Container } from "./styles";
    ```
    funções:
    ```javascript
    import { useAuth } from "../../hooks/auth"
    ```
2. > **SignUp**:

    hooks:
    ```javascript
    import { useState } from "react";
    ```
    componentes:
    ```javascript
    import { Hyperlink } from "../../components/Hyperlink"
    import { Button } from "../../components/Button"
    import { Input } from "../../components/Input"
    import { Logo } from "../../components/Logo"
    import { Container } from "./styles"
    ```
    funções:
    ```javascript
    import { useNavigate } from "react-router-dom";
    import {api} from '../../services/api';
    ```
3. > **Home**:

    hooks:
    ```javascript
    import { useEffect, useState } from "react";
    ```
    componentes:
    ```javascript
    import { Header } from "../../components/Header";
    import { Footer } from "../../components/Footer";
    import { Container } from "./styles";
    import { Slider } from "../../components/Slider";
    ```

    funções:
    ```javascript
    import { api } from "../../services/api";
    import { useAuth } from "../../hooks/auth";
    ```
    assets:
    ```javascript
    import home from "../../assets/homeImg.svg";
    ```
4. > **Details**:

    hooks:
    ```javascript
    import { useEffect, useState } from "react";
    ```
    componentes:
    ```javascript
    import { Hyperlink } from "../../components/Hyperlink";
    import { Footer } from "../../components/Footer";
    import { Button } from "../../components/Button";
    import { Container } from "./styles";
    import { ReactSVG } from "react-svg";
    import { Tags } from "../../components/Tags";
    import {Header} from "../../components/Header";
    import { InputCounter } from "../../components/InputCounter";
    ```
    funções:
    ```javascript
    import { api } from "../../services/api";
    import { useParams } from "react-router-dom";
    import {useAuth} from '../../hooks/auth'
    ```
    assets:
    ```javascript
    import empty from "../../assets/default-dish.svg";
    import back from "../../assets/arrowLeft.svg";
    ```
5. > **NewDish**:

    hooks:
    ```javascript
    import { useState } from "react";
    ```
    componentes:
    ```javascript
    import { Hyperlink } from "../../../components/Hyperlink";
    import { Footer } from "../../../components/Footer";
    import { Header } from "../../../components/Header";
    import { Container } from "./styles";
    import { Input } from "../../../components/Input";
    import { Select } from "../../../components/Select";
    import { Textarea } from "../../../components/Textarea";
    import { Button } from "../../../components/Button";
    import { Ingredients } from "../../../components/Ingredients";
    import { ReactSVG } from "react-svg";
    ```
    funções:
    ```javascript
    import { api } from "../../../services/api";
    import { useNavigate } from "react-router-dom";
    import { useAuth } from "../../../hooks/auth";
    ```
    assets:
    ```javascript
    import upload from "../../../assets/upload.svg";
    import arrowLeft from "../../../assets/arrowLeft.svg";
    ```
6. > **EditDish**:

    hooks:
    ```javascript
    import { useState, useEffect } from "react";
    ```
    componentes:
    ```javascript
    import { Hyperlink } from "../../../components/Hyperlink";
    import { Footer } from "../../../components/Footer";
    import { Header } from "../../../components/Header";
    import { Container } from "./styles";
    import { Input } from "../../../components/Input";
    import { Select } from "../../../components/Select";
    import { Textarea } from "../../../components/Textarea";
    import { Button } from "../../../components/Button";
    import { Ingredients } from "../../../components/Ingredients";
    ```
    funções:
    ```javascript
    import { api } from "../../../services/api";
    import { useNavigate, useParams } from "react-router-dom";
    ```
    assets:
    ```javascript
    import upload from "../../../assets/upload.svg";
    import arrowLeft from "../../../assets/arrowLeft.svg";
    ```
- contem 17 Components
    Button
    Cardish
    Footer
    Header
        Desktop
        Mobile
    Hyperlink
    Ingredients
    input
    InputCounter
    Logo
    MobileMenu
    Search
    Select
    Slider
    Tags
    Textarea
contem 3 rotas
    admin.routes
    auth.routes
    costumer.routes

contem 3 components de estilo
    devideBreakPoints
    global
    theme

contem 1 service

contem 1 hook

contem 1 utils

contem 15 elementos svg
    arrowLeft
    close
    default-NewDishedit
    exit
    favorite
    homeImg
    mobile
    minun
    plus
    polygon
    react
    receipt
    search
    upload

### Funcionamento

O arquivo main.jsx, é o responsável por renderizar toda a aplicação. No centro desse arquivo existe <Routes/>, que tem o propósito de organizar o caminho a ser percorrido de acordo com as regras de acesso, verifica se existe usuário logado, caso não exista, direciona para <AuthRoutes/> onde o usuário pode entrar ou se cadastrar. Existindo, seu caminho é direcionado de acordo com sua role (perfil de usuário) através da função AccessRoute(), podendo ir para <AdminRoutes/> ou <CostumerRoutes/>. O <Routes/> é gerenciado no index.jsx da pasta routes e seu retorno está envolvido pelo BrowserRouter (npm install react-router-dom) que simplifica a execução e navegação, uma vez que utiliza o principio SPA.
Ainda no main.jsx o <Routes/> está dentro do <AuthProvider>, responsável de pela criação dos contextos e por compartilhar dados entre os componentes (pai e filhos) numa mesma árvore. Além disso também está contido pelo <GlobalStyles> (npm install styled-components) que padroniza as regras de estilos globais para os elementos HTML, e por um objeto de tema (theme.js em styles/theme.js) que define sobre as cores utilizadas no projeto.

A navegação inicia-se na página de <SignIn>, que possui um componente <Logo> [props: role; elementos: <span>, <p> e um <svg>] e formulário com dois componentes <Input> [props: idContainer, title, placeholder, id, onChange, icon, required e ...rest; elementos: <label>, <span> e <input>()], um componente <Button> [props: title, id, icon, toPage, ...rest; elemento: <Link> (react-router-dom)] e um componente <Hyperlink> [props: title, icon, to, onClick; elemento: <Link> (react-router-dom) importado do styles.js]

Nela o usuário pode fazer login, preenchendo o formulário e confirmando no botão, ou seguir para página de cadastro. O login ocorre através dos hooks useState (React) e da função SignIn importado da {useAuth} que através da {api}, gerenciador de requisições HTTP, pela rota post(/sessions) valida os dados do usuário.

A página de cadastro <SignUp>, possui um formulário com a mesma estrtutura da <SignIn>, acrescentando um novo componente <Input> para nome. Aqui o usuário grava as informações no banco através da rota post(/users), utilizando as hooks para guardar o estado. Após o cadastro o usuário é automaticamente redirecionado a página <SignIn>.

Ao entrar no site o usuário é direcionado para página <Home>, que é a página principal do site e renderiza a maioria dos componentes e redireciona o usuário pelas demais páginas. Nesta página, com uso dos hooks useEffect (React) são carregados do banco de dados todos os pratos existentes.

Os componentes presentes são <Header> [props: menuIsOpen, onCloseMenu, onOpenMenu, onSearc; elementos: um Fragment contendo <HeaderDesktop>[props: onSearch ;elementos: <Logo>, <Search> [props: onSearch; elementos: <InputSearch> importado do styles.js] ], <Button>], <HeaderMobile> [props: onOpenMenu; elementos: <Buttons> importado do styles.js, <Logo>], e <Menu> [props: onSearch, id, menuIsOpen, onCloseMenu]; elementos: <Header> importado do styles.js, <Link> (react- router-dom), <Search>, <Hyperlink>, <Footer> [props: ; elementos: <Logo>, <h3>].

O <HeaderDesktop> e <HeaderMobile> alternam suas visibilidades de acordo com os BreakPoints definidos em styles/devideBreakPoints.js. Obedecendo as regras de mobile First. O componente <Menu> só será exibido em dispositivos com telas menores que 768px (devideBreakPoints.MD) e sua visibilidade é condicionada pelos estados e controlado pelas props onCloseMenu, onCloseMenu e menuIsOpen atraves de hooks useState.

O <HeaderDesktop> é responsável pelas buscas de pratos (por nome ou ingredientes) e por deslogar (função signOut), já o <HeaderMobile> é responsável por direiconar para os pedidos (milha extra - não implementada, ainda) e pelo Menu lateral <Menu> que possui as mesmas funções do <HeaderDesktop>.

Para usuários comuns (roles = costumer) o <HeaderDesktop> exibe um <Button> de pedidos. Para usuários administradores (role = admin) exibe um <Button> que direciona para criação de "Novos pratos", assim como no <Menu> que so exibe a opção de "Novos pratos" para role = admin.

Além desses componentes, a página tem um banner de apresentação, com uma arte <svg> e um texto descritivo <span><h3><p></span>.

A visualização dos pratos se dá através dos componentes <Slider>[props: dishes, role; componentes: <Swiper> (npm install swiper), <SwiperSlide> e <Cardish>], que são renderizados somente se houver resultados nas buscas dos hooks useEffect, que fazem requisição ao banco através da rota get('/dishes'), para exibição fixa e da rota get('/dishes?name=${searchValue}'), responsável pela busca de pratos especificos, caso a busca seja rendezidada a exibição fixa é "escondida" controlada por um useState (visible) e retorna quando a busca é finalizada (input vazio).

O componente <CardDish> [props: icon, name, price, desctiption, to, src; elementos: <ReactSVG> (npm install react-svg), <Link> (react-router-dom), <img>, <span>, <InputCounter> [props: ; elementos: <button>, <span>] e <Button>], renderiza os dados dos pratos  (imagem, nome, preço, descrição) e direciona para página <Details> [props: ; elementos: <Header>, <Hyperlink>, <ReactSVG>, <Tags> [props: name; elementos: ]], <Button>, <InputCounter>, <Footer> pela props 'to={`details/${dish.id}`}'.

Depenendo da role do usuário, alguns elementos são exibidos, desctiption para 'admin' e <InputCounter> com <Button> para 'costumer'.

No <Slider> o icone do <CardDish> é controlado, também pela role, 'admin' exibe um icone 'edit' e 'costumer' exibe um ícone 'favorite'.

A página <Details> é responsável por exibir indivitualmente cada prato, essa exibição ocorre pela correspondência do id vindo pelo parâmetro da URL do elemento na rota '/details/id'. O hook useEffect busca através da requisiçao get(`dishes/${params.id}`), gera um array e renderiza o componente.

As páginas <NewDish>[props: ; elementos: <Header>, <Hyperlink>, <Input>, <Select>[props: onChange, ...rest ;elementos: <label>, <select>, <option>], <Ingredients> [props: isNew, value, onClick, ...rest; elementos: <input>, <button>], <Textarea>[props: id, placeholder, onChange, ...rest; elementos: <label>, <textarea>], <Button>, <Footer>] e <EditDish> possuem a mesma estrutura, com uma diferença que a página <EditDish> tem um botão a mais, ficando responsável por salvar alterações e excluir o prato.

A página <NewDish> utiliza os hooks useState para guadar os estados dos valores dos formulários, é checado se cada componente está devidamente preenchido e através da requisição post("/dishes", formData, {headers: {"Content-Type": "multipart/form-data",},}); os dados são inseridos no banco. Utilizamos o formData com multipart/form-data, para poder receber mais de um tipo de conteudo (texto, numero e imagem), o botão salvar tem a função gravar os dados inserir no banco.

<EditDish>, quando carregada, preenche automáticamente o formulário com os dados correspondentes ao id, o id também vem através dos parâmetros da URL, o usuário edita os dados que julgar necessário e salva no banco.

Por fim, a página <NotFound>[props: ; elementos: <h1> e <Link>] é exibida sempre que o usuário tenta acessar uma rota inexisten.






