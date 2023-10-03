import { Container } from "./styles";
import polygon from "../../assets/polygon.svg";

export function Logo(){
    return(
        <Container>
            <img src={polygon} alt="Logo"/>
            <h1>food explorer</h1>
        </Container>
    )
}