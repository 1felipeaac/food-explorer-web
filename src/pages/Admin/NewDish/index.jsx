import { Hyperlink } from "../../../Components/Hyperlink";
import { Footer } from "../../../components/Footer";
import { HeaderDesktop } from "../../../components/Header/Desktop";
import { HeaderMobile } from "../../../components/Header/Mobile";
import { Container } from "./styles";

export function NewDish(){

    return (
        <Container>
            <HeaderDesktop/>
            <HeaderMobile/>
            <Hyperlink title={"Voltar"} to={"/"}/>
            <Footer/>
        </Container>
    )
}