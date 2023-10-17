/* eslint-disable react/jsx-no-undef */
import { Hyperlink } from "../../../components/Hyperlink";
import { Footer } from "../../../components/Footer";
import { HeaderDesktop } from "../../../components/Header/Desktop";
import { HeaderMobile } from "../../../components/Header/Mobile";
import { Container } from "./styles";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { Ingredients } from "../../../components/Ingredients";

export function NewDish() {
  return (
    <Container>
      <HeaderDesktop />
      <HeaderMobile />

      <div id="formDish">
        <Hyperlink title={"Voltar"} to={"/"} />

        <h1>Novo prato</h1>

        <Input
          title={"Imagem do prato"}
          type={"file"}
          placeholder={"Selecione imagem"}
        />
        <Input title={"Nome"} type={"text"} placeholder={"Ex.: Cuscuz"} />
        <Select />
        <section>
          <Ingredients value={"Ingrediente"}/>
          <Ingredients isNew placeholder="Adicionar" />
        </section>
        <Input title={"Preço"} type={"number"} placeholder={"R$00,00"} />
        <Textarea />
        <Button title={"Salvar Alterações"} />
      </div>
      <Footer />
    </Container>
  );
}
