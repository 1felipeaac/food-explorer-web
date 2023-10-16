/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Button({title, id, icon, toPage, ...rest}){
    return(
        <Container id={id} {...rest}>
            {icon}
            <Link to={toPage}>
                {title}
            </Link>
        </Container>
    )
}