/* eslint-disable react/prop-types */
import { Button } from "../Button";
import { InputCounter } from "../InputCounter";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

// import { api } from "../../services/api";

export function CardDish({
  to,
  name,
  price,
  src,
  icon,
  description,
  className,
}) {
  const logged = useAuth();
  const role = logged.user.role;

  return (
    <Container className={className}>
      <ReactSVG className="iconCard" src={icon} />
      <Link to={to}>
        <img id="imageDish" src={src} alt="" />
        <span>
          <h3>{name}</h3>
          {role === "admin" && <p>{description}</p>}
          <strong>R$ {price.toFixed(2)}</strong>
        </span>
      </Link>
      {role === "costumer" && (
        <div id="submitOrder">
          <InputCounter />
          <Button title={"incluir"} />
        </div>
      )}
    </Container>
  );
}
