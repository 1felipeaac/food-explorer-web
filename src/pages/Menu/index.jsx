/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Search, Header } from "./styles";
import {Link} from '../../Components/Link'
import {Footer} from '../../Components/Footer'
import buttonClose from '../../assets/close.svg'
import iconSearch from '../../assets/search.svg'

export function Menu({title}){
    return(
        <Container>
            <Header>
                <img src={buttonClose} alt="botão de fechar" />
                <h1>Menu</h1>
            </Header>
            <main>
                <span>
                    <img src={iconSearch} alt="icone de pesquisa" />
                    <Search type="search" placeholder=" Buscar por pratos ou ingredientes"/>
                </span>
                <Link title={title}/>
            </main>
            <Footer/>
        </Container>
    )
}