/* eslint-disable react/prop-types */
import { Button } from "../Button";
import { InputCounter } from "../InputCounter";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
// import { api } from "../../services/api";

export function CardDish({ to, name, price, src }) {
  const logged = useAuth();
  const role = logged.user.role;

  return (
    <Container to={to}>
      <img src={src} alt="" />
      <span>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
      </span>
      {role === "costumer" && (
        <>
          <InputCounter />
          <Button title={"incluir"} />
        </>
      )}
    </Container>
  );
}
