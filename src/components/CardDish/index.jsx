/* eslint-disable react/prop-types */
import { Button } from "../Button";
import { InputCounter } from "../InputCounter";
import { Container } from "./styles";

export function CardDish({ to, name, price }) {
  return (
    <Container to={to}>
      <img src="" alt="" />
      <span>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
      </span>
      <InputCounter />
      <Button title={"incluir"} />
    </Container>
  );
}
