/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({title, id, icon, ...rest}){
    return(
        <Container id={id} {...rest}>
            {icon}
            {title}
        </Container>
    )
}