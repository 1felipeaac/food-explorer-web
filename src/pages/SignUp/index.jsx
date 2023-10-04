import { Link } from "../../Components/Link"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"
export function SignUp(){

    return(
        <Container id="pageLogin">
            <Logo id="logoForm"/>
            <div id="formLogin">
                <h2 id="subTitleLogin">Faça Login</h2>
                <Input type="text" placeholder="Ex.: Felipe Coelho" id="nomeSignIn" title="Nome"/>
                <Input type="email" placeholder="exemplo@exemplo.com.br" id="emailSignIn" title="Email"/>
                <Input type="password" placeholder="No mínimo 6 caracteres" id="senhaSignIn" title="Senha"/>
                <Button title="Entrar"/>
                <Link title="Criar uma conta"/>
            </div>
        </Container>
    )
}