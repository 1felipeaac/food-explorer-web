/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Hyperlink({title, to}){
    return(
        <Container to={to}>
            {title}
        </Container>
    )
}