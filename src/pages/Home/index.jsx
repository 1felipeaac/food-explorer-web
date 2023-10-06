import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Container } from "./styles";
import home from '../../assets/homeImg.svg'

export function Home(){

    return(
        <Container>
            <Header/>
            <div id="banner"></div>
            <img id="imgHome" src={home} alt="" />
            <span>
                <h3>Sabores inigualáveis</h3>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </span>
    
            <Footer/>
        </Container>
    )
}