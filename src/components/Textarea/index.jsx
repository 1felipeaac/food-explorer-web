import { Container } from "./styles";

export function Textarea(){

    return(
        <Container>
            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </Container>
    )
}