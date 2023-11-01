/* eslint-disable react/prop-types */
import { Button } from "../Button";
import { InputCounter } from "../InputCounter";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import {ReactSVG} from "react-svg"
import { Link } from 'react-router-dom';

// import { api } from "../../services/api";

export function CardDish({ to, name, price, src, icon }) {
  const logged = useAuth();
  const role = logged.user.role;

  return (
    <Container>
      <ReactSVG className="iconCard" src={icon}/>
      <Link  to={to}>
        <img id="imageDish" src={src} alt="" />
        <span>
          <h3>{name}</h3>
          <p>R$ {price.toFixed(2)}</p>
        </span>
      </Link>
      {role === "costumer" && 
        <div id="submitOrder">
          <InputCounter />
          <Button title={"incluir"} />
        </div>
      }
    </Container>
  );
}
