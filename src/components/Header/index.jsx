/* eslint-disable react/jsx-no-undef */
import { Container, Buttons } from "./styles";
import { Logo } from "../Logo";
import menu from '../../assets/menu.svg'
import receipt from '../../assets/receipt.svg'

export function Header(){

    return(
        <Container>
            <nav>
                <Buttons id="buttonMenu">
                    <img src={menu} id="menu" alt="icon menu" />
                </Buttons>
                <Logo/>
                <Buttons id="buttonReceipt">
                    <img src={receipt} id="receipt" alt="icon receipt"/>
                </Buttons>
            </nav>
        </Container>
    )
}