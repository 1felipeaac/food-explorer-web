import { Hyperlink } from "../../Components/Hyperlink"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"

import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {signIn} = useAuth()

    function handleSignIn(){
        signIn({email, password})
    }

    return(
        <Container id="pageLogin">
            <Logo id="logoForm"/>
            <div id="formLogin">
                <h2 id="subTitleLogin">Faça Login</h2>
                <Input 
                    type="email" 
                    placeholder="exemplo@exemplo.com.br" 
                    id="emailSignIn" 
                    title="Email"
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                <Input 
                    type="password" 
                    placeholder="No mínimo 6 caracteres" 
                    id="senhaSignIn" 
                    title="Senha"
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                <Button title="Entrar" onClick = {handleSignIn}/>
                
                <Hyperlink title="Criar uma conta" to='/register'/>
                
            </div>
        </Container>
    )
}