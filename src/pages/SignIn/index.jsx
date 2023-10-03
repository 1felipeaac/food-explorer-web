import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"
export function SignIn(){

    return(
        <Container>
            <Logo/>
            <Input placeholder="exemplo@exemplo.com.br" id="email" name="Email"/>
            <Input placeholder="No mínimo 6 caracteres" id="senha" name="Senha"/>
            <Button name="Entrar"/>
        </Container>
    )
}