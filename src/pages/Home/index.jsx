import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../Components/Footer";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

// import { api } from "../../services/api";

export function Home() {

    // try {
    //     const teste = await api.get("/dishes")
    
    //     console.log(teste)
        
    // } catch (error) {
    //     console.log(error.message)
    // }

  return (
    <Container>
      <HeaderDesktop />
      <HeaderMobile />
      <main>
        <div id="display">
          <div id="banner"></div>
          <img id="imgHome" src={home} alt="" />
          <span id="presentation">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </span>
        </div>
        
      </main>

      <Footer />
    </Container>
  );
}
