import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../Components/Footer";
import { Container } from "./styles";
import home from '../../assets/homeImg.svg'

export function Home(){

    return(
        <Container>
            <HeaderDesktop/>
            <HeaderMobile/>
            <div id="banner"></div>
            <img id="imgHome" src={home} alt="" />
            <span id="presentation">
                <h3>Sabores inigualáveis</h3>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </span>
    
            <Footer/>
        </Container>
    )
}