/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Hyperlink({title, icon, to, onClick}){
    return(
        <Container to={to} onClick={onClick}>
            {icon}
            {title}
        </Container>
    )
}