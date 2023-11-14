/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Container, Buttons } from "./styles";
import { Logo } from "../../Logo";
import { useAuth } from "../../../hooks/auth";

import menu from "../../../assets/menu.svg";
import receipt from "../../../assets/receipt.svg";


export function HeaderMobile({onOpenMenu}) {
  const logged = useAuth();
  const role = logged.user.role;
  return (
    <Container className="mobile">
      <nav>
        
        <Buttons id="buttonMenu" onClick={onOpenMenu}>
          <img src={menu} id="menu" alt="icon menu" />
        </Buttons>
     
        {role === "admin" ? (<Logo role={role}/>) : <Logo/>}
        {role === "costumer" ? 
          (
            <Buttons id="buttonReceipt">
              <img src={receipt} id="receipt" alt="icon receipt" />
            </Buttons>
          ) : null
        }
      </nav>
    </Container>
  );
}
