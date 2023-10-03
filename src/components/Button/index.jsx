import { Container } from "./styles";

export function Button({name, id}){
    return(
        <Container id={id}>
            {name}
        </Container>
    )
}