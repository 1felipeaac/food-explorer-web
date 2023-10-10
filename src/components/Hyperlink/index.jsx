/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Hyperlink({title, to, onClick}){
    return(
        <Container to={to} onClick={onClick}>
            {title}
        </Container>
    )
}