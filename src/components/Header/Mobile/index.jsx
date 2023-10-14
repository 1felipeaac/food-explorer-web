/* eslint-disable react/jsx-no-undef */
import { Container, Buttons } from "./styles";
import { Logo } from "../../Logo";
import menu from "../../../assets/menu.svg";
import receipt from "../../../assets/receipt.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect } from "react";
  


export function HeaderMobile() {
  const logged = useAuth();
  const role = logged.user.role;
  
  return (
    <Container className="mobile">
      <nav>
        <Link to="/menu">
          <Buttons id="buttonMenu">
            <img src={menu} id="menu" alt="icon menu" />
          </Buttons>
        </Link>
        {role === "admin" ? (<Logo role={role}/>) : <Logo/>}
        <Buttons id="buttonReceipt">
          <img src={receipt} id="receipt" alt="icon receipt" />
        </Buttons>
      </nav>
    </Container>
  );
}
