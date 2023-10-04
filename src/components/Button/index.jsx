/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({title, id}){
    return(
        <Container id={id}>
            {title}
        </Container>
    )
}