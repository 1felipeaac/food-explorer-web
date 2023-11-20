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

- ## Páginas:

1.  > **SignIn**:

    | hooks        | componentes   | funções     | assets | dependências |
    | ------------ | ------------- | ----------- | ------ | ------------ |
    | { useState } | { Hyperlink } | { useAuth } |        |              |
    |              | { Button }    |             |        |              |
    |              | { Input }     |             |        |              |
    |              | { Logo }      |             |        |              |
    |              | { Container } |             |        |              |

2.  > **SignUp**:

    | hooks        | componentes   | funções         | assets | dependências |
    | ------------ | ------------- | --------------- | ------ | ------------ |
    | { useState } | { Hyperlink } | { useAuth }     |        |              |
    |              | { Button }    | { api }         |        |              |
    |              | { Input }     | { useNavigate } |        |              |
    |              | { Logo }      |                 |        |              |
    |              | { Container } |                 |        |              |

3.  > **Home**:

    | hooks        | componentes   | funções     | assets | dependências |
    | ------------ | ------------- | ----------- | ------ | ------------ |
    | { useEffect} | { Header }    | { useAuth } | home   |              |
    | { useState } | { Footer }    | { api }     |        |              |
    |              | { Slider }    |             |        |              |
    |              | { Container } |             |        |              |

4.  > **Details**:

    | hooks        | componentes      | funções       | assets | dependências      |
    | ------------ | ---------------- | ------------- | ------ | ----------------- |
    | { useEffect} | { Header }       | { api }       | empty  |                   |
    | { useState } | { Button }       | { useAuth }   | back   |                   |
    |              | { Container }    | { useParams } |        |                   |
    |              | { ReactSVG }     |               |        | `npm i react-svg` |
    |              | { Tags }         |               |        |                   |
    |              | { InputCounter } |               |        |                   |
    |              | { Hyperlink }    |               |        |                   |
    |              | { Footer }       |               |        |                   |

5.  > **NewDish**:

    | hooks        | componentes     | funções         | assets    | dependências      |
    | ------------ | --------------- | --------------- | --------- | ----------------- |
    | { useState } | { Header }      | { api }         | upload    |                   |
    |              | { Button }      | { useNavigate } | arrowLeft |                   |
    |              | { Container }   |                 |           |                   |
    |              | { ReactSVG }    |                 |           | `npm i react-svg` |
    |              | { Select }      |                 |           |                   |
    |              | { Hyperlink }   |                 |           |                   |
    |              | { Ingredients } |                 |           |                   |
    |              | { Textarea }    |                 |           |                   |
    |              | { Input }       |                 |           |                   |
    |              | { Footer }      |                 |           |                   |

6.  > **EditDish**:

    | hooks         | componentes     | funções         | assets    | dependências      |
    | ------------- | --------------- | --------------- | --------- | ----------------- |
    | { useState}   | { Header }      | { api }         | upload    |                   |
    | { useEffect } | { Button }      | { useParams }   | arrowLeft |                   |
    |               | { Container }   | { useNavigate } |           |                   |
    |               | { ReactSVG }    |                 |           | `npm i react-svg` |
    |               | { Select }      |                 |           |                   |
    |               | { Hyperlink }   |                 |           |                   |
    |               | { Ingredients } |                 |           |                   |
    |               | { Textarea }    |                 |           |                   |
    |               | { Input }       |                 |           |                   |
    |               | { Footer }      |                 |           |                   |

- ## Componentes:

1.  > **Button**:

    | props       | componentes   | funções                  | assets | dependências |
    | ----------- | ------------- | ------------------------ | ------ | ------------ |
    | { title }   | { Container } |                          |        |              |
    | { id }      | { Link }      | `npm i react-router-dom` |        |              |
    | { icon }    |               |                          |        |              |
    | {toPage}    |               |                          |        |              |
    | { ...rest } |               |                          |        |              |

2.  > **CardDish**:

    | props           | componentes      | funções                  | assets | dependências |
    | --------------- | ---------------- | ------------------------ | ------ | ------------ |
    | { to }          | { Button }       |                          |        |              |
    | { name }        | { InputCounter } |                          |        |              |
    | { price }       | {Container}      |                          |        |              |
    | {src}           | {ReactSVG}       | `npm i react-svg`        |        |              |
    | { icon }        | {Link}           | `npm i react-router-dom` |        |              |
    | { description } |                  |                          |        |              |
    | { className }   |                  |                          |        |              |

3.  > **Footer**:

    | props | componentes   | funções | assets | dependências |
    | ----- | ------------- | ------- | ------ | ------------ |
    |       | { Logo }      |         |        |              |
    |       | { Container } |         |        |              |

4.  > **Header**:

    | props           | componentes       | funções | assets | dependências |
    | --------------- | ----------------- | ------- | ------ | ------------ |
    | { onSearch }    | { HeaderDesktop } |         |        |              |
    | { onOpenMenu }  | { HeaderMobile }  |         |        |              |
    | { onCloseMenu } | { Menu }          |         |        |              |
    | {menuIsOpen}    |                   |         |        |              |

5.  > **HeaderDesktop**:

    | props        | componentes   | funções     | assets      | dependências |
    | ------------ | ------------- | ----------- | ----------- | ------------ |
    | { onSearch } | { Container } | { useAuth } | exit        |              |
    |              | { Logo }      |             | iconReceipt |              |
    |              | { Search }    |             |             |              |
    |              | { Button }    |             |             |              |

6.  > **HeaderMobile**:

    | props          | componentes   | funções     | assets  | dependências |
    | -------------- | ------------- | ----------- | ------- | ------------ |
    | { onOpenMenu } | { Container } | { useAuth } | menu    |              |
    |                | { Logo }      |             | receipt |              |
    |                | { Buttons }   |             |         |              |
    |                |               |             |         |              |

7.  > **Hyperlink**:

    | props       | componentes   | funções | assets | dependências |
    | ----------- | ------------- | ------- | ------ | ------------ |
    | { title }   | { Container } |         |        |              |
    | { icon }    |               |         |        |              |
    | { to }      |               |         |        |              |
    | { onClick } |               |         |        |              |

8.  > **Ingredients**:

    | props       | componentes   | funções | assets | dependências      |
    | ----------- | ------------- | ------- | ------ | ----------------- |
    | { isNew }   | { Container } |         | plus   |                   |
    | { value }   | { ReactSVG }  |         | close  | `npm i react-svg` |
    | { onClick } |               |         |        |                   |
    | { ...rest } |               |         |        |                   |

9.  > **Input**:

    | props           | componentes   | funções | assets | dependências |
    | --------------- | ------------- | ------- | ------ | ------------ |
    | { idContainer } | { Container } |         |        |              |
    | { title }       |               |         |        |              |
    | { placeholder } |               |         |        |              |
    | { id }          |               |         |        |              |
    | { type }        |               |         |        |              |
    | { onChange }    |               |         |        |              |
    | { icon }        |               |         |        |              |
    | { required }    |               |         |        |              |
    | { ...rest }     |               |         |        |              |

10. > **InputCounter**:

    | props | componentes   | funções   | assets | dependências | hooks        |
    | ----- | ------------- | --------- | ------ | ------------ | ------------ |
    |       | { Container } | increment | minun  |              | { useState } |
    |       |               | decrement | plus   |              |              |

11. > **Logo**:

    | props | componentes   | funções | assets  | dependências | hooks |
    | ----- | ------------- | ------- | ------- | ------------ | ----- |
    | role  | { Container } |         | polygon |              |       |
    |       |               |         |         |              |       |

12. > **Menu**:

    | props         | componentes   | funções         | assets      | dependências             | hooks |
    | ------------- | ------------- | --------------- | ----------- | ------------------------ | ----- |
    | {onSearch}    | { Container } | { useAuth }     | buttonClose |                          |       |
    | {id}          | { Header }    | { useNavigate } |             | `npm i react-router-dom` |       |
    | {menuIsOpen}  | { Footer }    | { useLocation } |             | `npm i react-router-dom` |       |
    | {onCloseMenu} | { Link }      |                 |             |                          |       |
    |               | { Search }    |                 |             |                          |       |
    |               | { Hyperlink } |                 |             |                          |       |

13. > **Search**:

    | props      | componentes     | funções     | assets     | dependências | hooks |
    | ---------- | --------------- | ----------- | ---------- | ------------ | ----- |
    | {onSearch} | { Container }   | { useAuth } | iconSearch |              |       |
    |            | { InputSearch } |             |            |              |       |
    |            | { Footer }      |             |            |              |       |
    |            | { Link }        |             |            |              |       |
    |            | { Search }      |             |            |              |       |
    |            | { Hyperlink }   |             |            |              |       |

14. > **Select**:

    | props      | componentes   | funções | assets | dependências | hooks |
    | ---------- | ------------- | ------- | ------ | ------------ | ----- |
    | {onChange} | { Container } |         |        |              |       |
    | {...rest}  |               |         |        |              |       |

15. > **Slider**:

    | props    | componentes   | funções | assets   | dependências         | hooks |
    | -------- | ------------- | ------- | -------- | -------------------- | ----- |
    | {title}  | { Container } | {api}   | empty    |                      |       |
    | {dishes} | {Swiper}      |         | favorite | `npm install swiper` |       |
    | {role}   | {SwiperSlide} |         | edit     | `npm install swiper` |       |
    |          | {Pagination}  |         |          | `npm install swiper` |       |
    |          | {Navigation}  |         |          | `npm install swiper` |       |
    |          | {CardDish}    |         |          |                      |       |
    |          | {SwiperSlide} |         |          |                      |       |

    Tags
    Textarea

        contem 3 rotas
        admin.routes
        auth.routes
        costumer.routes

16. > **Tags**:

    | props  | componentes   | funções | assets | dependências | hooks |
    | ------ | ------------- | ------- | ------ | ------------ | ----- |
    | {name} | { Container } |         |        |              |       |

17. > **Textarea**:

    | props         | componentes   | funções | assets | dependências | hooks |
    | ------------- | ------------- | ------- | ------ | ------------ | ----- |
    | {id}          | { Container } |         |        |              |       |
    | {placeholder} |               |         |        |              |       |
    | {onChange}    |               |         |        |              |       |
    | {...rest}     |               |         |        |              |       |

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

O componente <CardDish> [props: icon, name, price, desctiption, to, src; elementos: <ReactSVG> (npm install react-svg), <Link> (react-router-dom), <img>, <span>, <InputCounter> [props: ; elementos: <button>, <span>] e <Button>], renderiza os dados dos pratos (imagem, nome, preço, descrição) e direciona para página <Details> [props: ; elementos: <Header>, <Hyperlink>, <ReactSVG>, <Tags> [props: name; elementos: ]], <Button>, <InputCounter>, <Footer> pela props 'to={`details/${dish.id}`}'.

Depenendo da role do usuário, alguns elementos são exibidos, desctiption para 'admin' e <InputCounter> com <Button> para 'costumer'.

No <Slider> o icone do <CardDish> é controlado, também pela role, 'admin' exibe um icone 'edit' e 'costumer' exibe um ícone 'favorite'.

A página <Details> é responsável por exibir indivitualmente cada prato, essa exibição ocorre pela correspondência do id vindo pelo parâmetro da URL do elemento na rota '/details/id'. O hook useEffect busca através da requisiçao get(`dishes/${params.id}`), gera um array e renderiza o componente.

As páginas <NewDish>[props: ; elementos: <Header>, <Hyperlink>, <Input>, <Select>[props: onChange, ...rest ;elementos: <label>, <select>, <option>], <Ingredients> [props: isNew, value, onClick, ...rest; elementos: <input>, <button>], <Textarea>[props: id, placeholder, onChange, ...rest; elementos: <label>, <textarea>], <Button>, <Footer>] e <EditDish> possuem a mesma estrutura, com uma diferença que a página <EditDish> tem um botão a mais, ficando responsável por salvar alterações e excluir o prato.

A página <NewDish> utiliza os hooks useState para guadar os estados dos valores dos formulários, é checado se cada componente está devidamente preenchido e através da requisição post("/dishes", formData, {headers: {"Content-Type": "multipart/form-data",},}); os dados são inseridos no banco. Utilizamos o formData com multipart/form-data, para poder receber mais de um tipo de conteudo (texto, numero e imagem), o botão salvar tem a função gravar os dados inserir no banco.

<EditDish>, quando carregada, preenche automáticamente o formulário com os dados correspondentes ao id, o id também vem através dos parâmetros da URL, o usuário edita os dados que julgar necessário e salva no banco.

Por fim, a página <NotFound>[props: ; elementos: <h1> e <Link>] é exibida sempre que o usuário tenta acessar uma rota inexisten.
