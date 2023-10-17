/* eslint-disable react/jsx-no-undef */
import { Hyperlink } from "../../../Components/Hyperlink";
import { Footer } from "../../../components/Footer";
import { HeaderDesktop } from "../../../components/Header/Desktop";
import { HeaderMobile } from "../../../components/Header/Mobile";
import { Container } from "./styles";
import {Input} from "../../../Components/Input"
import { Select } from "../../../Components/Select";

export function NewDish(){

    return (
        <Container>
            <HeaderDesktop/>
            <HeaderMobile/>
            <Hyperlink title={"Voltar"} to={"/"}/>

            <h1>Novo prato</h1>

            <Input title={"Imagem do prato"} type={"file"} placeholder={"Selecione imagem"}/>
            <Input title={"Nome"} type={"text"} placeholder={"Ex.: Cuscuz"}/>
            <Select/>
            <Footer/>
        </Container>
    )
}