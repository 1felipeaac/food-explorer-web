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

1.  > <h3 id="signin">SignIn</h3>

    | hooks        | componentes   | funções     | assets | dependências |
    | ------------ | ------------- | ----------- | ------ | ------------ |
    | { useState } | { Hyperlink } | { useAuth } |        |              |
    |              | { Button }    |             |        |              |
    |              | { Input }     |             |        |              |
    |              | { Logo }      |             |        |              |
    |              | { Container } |             |        |              |

2.  > <h3 id="signup">SignUp</h3>

    | hooks        | componentes   | funções         | assets | dependências |
    | ------------ | ------------- | --------------- | ------ | ------------ |
    | { useState } | { Hyperlink } | { useAuth }     |        |              |
    |              | { Button }    | { api }         |        |              |
    |              | { Input }     | { useNavigate } |        |              |
    |              | { Logo }      |                 |        |              |
    |              | { Container } |                 |        |              |

3.  > <h3 id="home">Home</h3>

    | hooks        | componentes   | funções     | assets | dependências |
    | ------------ | ------------- | ----------- | ------ | ------------ |
    | { useEffect} | { Header }    | { useAuth } | home   |              |
    | { useState } | { Footer }    | { api }     |        |              |
    |              | { Slider }    |             |        |              |
    |              | { Container } |             |        |              |

4.  > <h3 id="details">Details</h3>

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

5.  > <h3 id="newdish">NewDish</h3>

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

6.  > <h3 id="editdish">EditDish</h3>

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

7. > <h3 id="notfound">NotFound</h3>

    | hooks         | componentes     | funções         | assets    | dependências      |
    | ------------- | --------------- | --------------- | --------- | ----------------- |
    |               | { Link }        |                 |           | `npm i react-router-dom` |
    |               | { Container }   |  |           |                   |

- ## Componentes:

1.  > <h3 id="button">Button</h3>

    | props       | componentes   | funções                  | assets | dependências |
    | ----------- | ------------- | ------------------------ | ------ | ------------ |
    | { title }   | { Container } |                          |        |              |
    | { id }      | { Link }      |                          |        |`npm i react-router-dom`|
    | { icon }    |               |                          |        |              |
    | {toPage}    |               |                          |        |              |
    | { ...rest } |               |                          |        |              |

2.  > <h3 id="card">CardDish</h3>

    | props           | componentes      | funções                  | assets | dependências |
    | --------------- | ---------------- | ------------------------ | ------ | ------------ |
    | { to }          | { Button }       |                          |        |              |
    | { name }        | { InputCounter } |                          |        |              |
    | { price }       | {Container}      |                          |        |              |
    | {src}           | {ReactSVG}       |                          |        | `npm i react-svg`|
    | { icon }        | {Link}           |                          |        |`npm i react-router-dom`|
    | { description } |                  |                          |        |              |
    | { className }   |                  |                          |        |              |

3.  > <h3 id="footer">Footer</h3>

    | props | componentes   | funções | assets | dependências |
    | ----- | ------------- | ------- | ------ | ------------ |
    |       | { Logo }      |         |        |              |
    |       | { Container } |         |        |              |

4.  > <h3 id="header">Header</h3>

    | props           | componentes       | funções | assets | dependências |
    | --------------- | ----------------- | ------- | ------ | ------------ |
    | { onSearch }    | { HeaderDesktop } |         |        |              |
    | { onOpenMenu }  | { HeaderMobile }  |         |        |              |
    | { onCloseMenu } | { Menu }          |         |        |              |
    | {menuIsOpen}    |                   |         |        |              |

5.  > <h3 id="hdesktop">HeaderDesktop</h3>

    | props        | componentes   | funções     | assets      | dependências |
    | ------------ | ------------- | ----------- | ----------- | ------------ |
    | { onSearch } | { Container } | { useAuth } | exit        |              |
    |              | { Logo }      |             | iconReceipt |              |
    |              | { Search }    |             |             |              |
    |              | { Button }    |             |             |              |

6.  > <h3 id="hmobile">HeaderMobile</h3>

    | props          | componentes   | funções     | assets  | dependências |
    | -------------- | ------------- | ----------- | ------- | ------------ |
    | { onOpenMenu } | { Container } | { useAuth } | menu    |              |
    |                | { Logo }      |             | receipt |              |
    |                | { Buttons }   |             |         |              |
    |                |               |             |         |              |

7.  > <h3 id="hyperlink">Hyperlink</h3>

    | props       | componentes   | funções | assets | dependências |
    | ----------- | ------------- | ------- | ------ | ------------ |
    | { title }   | { Container } |         |        |              |
    | { icon }    |               |         |        |              |
    | { to }      |               |         |        |              |
    | { onClick } |               |         |        |              |

8.  > <h3 id="ingredients">Ingredients</h3>

    | props       | componentes   | funções | assets | dependências      |
    | ----------- | ------------- | ------- | ------ | ----------------- |
    | { isNew }   | { Container } |         | plus   |                   |
    | { value }   | { ReactSVG }  |         | close  | `npm i react-svg` |
    | { onClick } |               |         |        |                   |
    | { ...rest } |               |         |        |                   |

9.  > <h3 id="input">Input</h3>

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

10. > <h3 id="icounter">inputCounter</h3>

    | props | componentes   | funções   | assets | dependências | hooks        |
    | ----- | ------------- | --------- | ------ | ------------ | ------------ |
    |       | { Container } | increment | minun  |              | { useState } |
    |       |               | decrement | plus   |              |              |

11. > <h3 id="logo">Logo</h3>

    | props | componentes   | funções | assets  | dependências | hooks |
    | ----- | ------------- | ------- | ------- | ------------ | ----- |
    | role  | { Container } |         | polygon |              |       |
    |       |               |         |         |              |       |

12. > <h3 id="menu">Menu</h3>

    | props         | componentes   | funções         | assets      | dependências             | hooks |
    | ------------- | ------------- | --------------- | ----------- | ------------------------ | ----- |
    | {onSearch}    | { Container } | { useAuth }     | buttonClose |                          |       |
    | {id}          | { Header }    | { useNavigate } |             | `npm i react-router-dom` |       |
    | {menuIsOpen}  | { Footer }    | { useLocation } |             | `npm i react-router-dom` |       |
    | {onCloseMenu} | { Link }      |                 |             |                          |       |
    |               | { Search }    |                 |             |                          |       |
    |               | { Hyperlink } |                 |             |                          |       |

13. <h3 id="search">Search</h3>

    | props      | componentes     | funções     | assets     | dependências | hooks |
    | ---------- | --------------- | ----------- | ---------- | ------------ | ----- |
    | {onSearch} | { Container }   | { useAuth } | iconSearch |              |       |
    |            | { InputSearch } |             |            |              |       |
    |            | { Footer }      |             |            |              |       |
    |            | { Link }        |             |            |              |       |
    |            | { Search }      |             |            |              |       |
    |            | { Hyperlink }   |             |            |              |       |

14. > <h3 id="select">Select</h3>

    | props      | componentes   | funções | assets | dependências | hooks |
    | ---------- | ------------- | ------- | ------ | ------------ | ----- |
    | {onChange} | { Container } |         |        |              |       |
    | {...rest}  |               |         |        |              |       |

15. > <h3 id="slider">Slider</h3>

    | props    | componentes   | funções | assets   | dependências         | hooks |
    | -------- | ------------- | ------- | -------- | -------------------- | ----- |
    | {title}  | { Container } | {api}   | empty    |                      |       |
    | {dishes} | {Swiper}      |         | favorite | `npm install swiper` |       |
    | {role}   | {SwiperSlide} |         | edit     | `npm install swiper` |       |
    |          | {Pagination}  |         |          | `npm install swiper` |       |
    |          | {Navigation}  |         |          | `npm install swiper` |       |
    |          | {CardDish}    |         |          |                      |       |
    |          | {SwiperSlide} |         |          |                      |       |

16. > <h3 id="tags">Tags</h3>

    | props  | componentes   | funções | assets | dependências | hooks |
    | ------ | ------------- | ------- | ------ | ------------ | ----- |
    | {name} | { Container } |         |        |              |       |

17. > <h3 id="textarea">Textarea</h3>

    | props         | componentes   | funções | assets | dependências | hooks |
    | ------------- | ------------- | ------- | ------ | ------------ | ----- |
    | {id}          | { Container } |         |        |              |       |
    | {placeholder} |               |         |        |              |       |
    | {onChange}    |               |         |        |              |       |
    | {...rest}     |               |         |        |              |       |


- ## Estilos:
    
    + devideBreakPoints.js;
    + global.js | `npm install styled-components`;
    + theme.js.
    

- ## Rotas:
    
    + admin.routes.jsx;
    + auth.routes.jsx;
    + costumer.routes.jsx;
    + index.jsx.
    

- ## Service:
    
    + api.js.
    
- ## Hooks:
    
    + auth.jsx.
    
- ## Utils:
    
    + roles.js.
    

- ## Assets:
    
    + arrowLeft.svg;
    + close.svg; 
    + default-NewDishedit.svg; 
    + exit.svg;
    + favorite.svg; 
    + homeImg.svg, 
    + mobile.svg; 
    + minun.svg; 
    + plus.sv;
    + polygon.svg; 
    + react.svg; 
    + receipt.svg; 
    + search.svg; 
    + upload.svg.
    


# Funcionamento

<div style="text-align: justify">
O arquivo main.jsx, é o responsável por renderizar toda a aplicação. No centro desse arquivo existe &lt;Routes/&gt;, que tem o propósito de organizar o caminho a ser percorrido de acordo com as regras de acesso, verifica se existe usuário logado, caso não exista, direciona para  &lt;AuthRoutes/&gt; onde o usuário pode entrar ou se cadastrar. Existindo, seu caminho é direcionado de acordo com sua role (perfil de usuário) através da função AccessRoute(), podendo ir para  &lt;AdminRoutes/&gt; ou  &lt;CostumerRoutes/&gt;. O  &lt;Routes/&gt; é gerenciado no index.jsx da pasta routes e seu retorno está envolvido pelo &lt;BrowserRouter/&gt; que simplifica a execução e navegação, uma vez que utiliza o principio SPA.
Ainda no main.jsx o  &lt;Routes/&gt; está dentro do  &lt;AuthProvider&gt;, responsável de pela criação dos contextos e por compartilhar dados entre os componentes (pai e filhos) numa mesma árvore. Além disso também está contido pelo  &lt;GlobalStyles&gt; que padroniza as regras de estilos globais para os elementos HTML, e por um objeto de tema (theme.js em styles/theme.js) que define sobre as cores utilizadas no projeto.

A navegação inicia-se na página de [&lt;SignIn&gt;](#signin), nela o usuário pode fazer login, preenchendo o formulário e confirmando no botão, ou seguir para página de cadastro. O login ocorre através dos hooks useState (React) e da função SignIn importado da &lt;useAuth&gt; que através da &lt;api&gt;, gerenciador de requisições HTTP, pela rota post(/sessions) valida os dados do usuário.

A página de cadastro [&lt;SignUp&gt;](#signup), possui um formulário com a mesma estrtutura da [&lt;SignIn&gt;](#signin), acrescentando um novo componente &lt;Input&gt; para nome. Aqui o usuário grava as informações no banco através da rota post(/users), utilizando as hooks para guardar o estado. Após o cadastro o usuário é automaticamente redirecionado a página [&lt;SignIn&gt;](#signin).

Ao entrar no site o usuário é direcionado para página [&lt;Home&gt;](#home), que é a página principal do site e renderiza a maioria dos componentes e redireciona o usuário pelas demais páginas. Nesta página, com uso dos hooks useEffect (React) são carregados do banco de dados todos os pratos existentes.

Os [&lt;HeaderDesktop&gt;](#hdesktop) e [&lt;HeaderMobile&gt;](#hmobile) alternam suas visibilidades de acordo com os BreakPoints definidos em styles/devideBreakPoints.js. Obedecendo as regras de mobile First. O componente [&lt;Menu&gt;](#menu) só será exibido em dispositivos com telas menores que 768px (devideBreakPoints.MD) e sua visibilidade é condicionada pelos estados e controlado pelas props onCloseMenu, onCloseMenu e menuIsOpen atraves de hooks useState.

O [&lt;HeaderDesktop&gt;](#hdesktop) é responsável pelas buscas de pratos (por nome ou ingredientes) e por deslogar (função signOut), já o [&lt;HeaderMobile&gt;](#hmobile) é responsável por direiconar para os pedidos (milha extra - não implementada, ainda) e pelo Menu lateral [&lt;Menu&gt;](#menu) que possui as mesmas funções do [&lt;HeaderDesktop&gt;](#hdesktop).

Para usuários comuns (roles = costumer) o [&lt;HeaderDesktop&gt;](#hdesktop); exibe um [&lt;Button&gt;](#button) de pedidos. Para usuários administradores (role = admin) exibe um [&lt;Button&gt;](#button) que direciona para criação de "Novos pratos", assim como no [&lt;Menu&gt;](#menu) que so exibe a opção de "Novos pratos" para role = admin.

Além desses componentes, a página tem um banner de apresentação, com uma arte e um texto descritivo 

A visualização dos pratos se dá através dos componentes [&lt;Slider&gt;](#slider), que são renderizados somente se houver resultados nas buscas dos hooks useEffect, que fazem requisição ao banco através da rota get('/dishes'), para exibição fixa e da rota `get('/dishes?name=${searchValue}')`, responsável pela busca de pratos especificos, caso a busca seja rendezidada a exibição fixa é "escondida" controlada por um useState (visible) e retorna quando a busca é finalizada (input vazio).

O componente [&lt;CardDish&gt;](#card), renderiza os dados dos pratos (imagem, nome, preço, descrição) e direciona para página [&lt;Details&gt;](#details), pela props 'to={`details/${dish.id}`}'.

Depenendo da role do usuário, alguns elementos são exibidos, desctiption para 'admin' e [&lt;InputCounter&gt;](#icounter) com [&lt;Button&gt;](#button) para 'costumer'.

No [&lt;Slider&gt;](#slider) o icone do [&lt;CardDish&gt;](#card) é controlado, também pela role, 'admin' exibe um icone 'edit' e 'costumer' exibe um ícone 'favorite'.

A página [&lt;Details&gt;](#details) é responsável por exibir indivitualmente cada prato, essa exibição ocorre pela correspondência do id vindo pelo parâmetro da URL do elemento na rota '/details/id'. O hook useEffect busca através da requisiçao get(`dishes/${params.id}`), gera um array e renderiza o componente.

As páginas [&lt;NewDish&gt;](#newdish) e [&lt;EditDish&gt;](#editdish) possuem a mesma estrutura, com uma diferença que a página [&lt;EditDish&gt;](#editdish) tem um botão a mais, ficando responsável por salvar alterações e excluir o prato.

A página [&lt;NewDish&gt;](#newdish) utiliza os hooks useState para guadar os estados dos valores dos formulários, é checado se cada componente está devidamente preenchido e através da requisição `post("/dishes", formData, {headers: {"Content-Type": "multipart/form-data",},});` os dados são inseridos no banco. Utilizamos o formData com multipart/form-data, para poder receber mais de um tipo de conteudo (texto, numero e imagem), o botão salvar tem a função gravar os dados inserir no banco.

[&lt;EditDish&gt;](#editdish), quando carregada, preenche automáticamente o formulário com os dados correspondentes ao id, o id também vem através dos parâmetros da URL, o usuário edita os dados que julgar necessário e salva no banco.

Por fim, a página [&lt;NotFound&gt;](#notfound) exibida sempre que o usuário tenta acessar uma rota inexisten.

</div>