/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({title, id, icon}){
    return(
        <Container id={id}>
            {icon}
            {title}
        </Container>
    )
}