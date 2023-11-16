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

Projeto 
-contem 6 páginas
    SignIn
    SignUp
    Home
    Details
    EditDish - admin
    NewDish - admin
-contem 17 Components
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

Funcionamento

O arquivo main.jsx, é o responsável por renderizar toda a aplicação.No centro desse arquivo existe <Routes/>, que tem o propósito de organizar o caminho a ser percorrido de acordo com as regras de acesso, verifica se existe usuário logado, caso não exista direciona para <AuthRoutes/> onde o usuário pode entrar ou se cadastrar, existindo seu caminho é direcionado de acordo com sua role (perfil de usuário) através da função AccessRoute(), podendo ir para <AdminRoutes/> ou <CostumerRoutes/>. O <Routes/> é gerenciado no index.jsx da pasta routes e seu retorno está envolvido pelo BrowserRouter (npm install react-router-dom) que simplifica a execução e navegação, uma vez que utiliza o principio SPA.
Ainda no main.jsx o <Routes/> está dentro do <AuthProvider>, responsável de pela criação dos contextos e por compartilhar dados entre os componentes (pai e filhos) numa mesma árvore. Além disso também está contido pelo <GlobalStyles> (npm install styled-components) que padroniza as regras de estilos globais para os elementos HTML, e por um objeto de tema (theme.js em styles) que define sobre as cores utilizadas no projeto.

A navegação inicia-se na página de SignIn, que possui um formulário c



