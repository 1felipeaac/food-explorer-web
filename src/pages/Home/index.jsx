import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Container } from "./styles";

export function Home(){

    return(
        <Container>
            <Header/>
            <h1>Pratos Aqui</h1>
            <Footer/>
        </Container>
    )
}