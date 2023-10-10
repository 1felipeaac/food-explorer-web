import { Button } from "../Button";
import { InputCounter } from "../InputCounter";
import { Container } from "./styles";

export function CardDish({name, price}){

    return(
        <Container>
            <img src="" alt="" />
            <span>
                <h3>{name}</h3>
                <p>{price}</p>
            </span>
            <InputCounter/>
            <Button title={"incluir"}/>
        </Container>
    )
}