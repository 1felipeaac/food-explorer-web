import { useState } from "react"
import { Hyperlink } from "../../components/Hyperlink"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"
import { useNavigate } from "react-router-dom";

import {api} from '../../services/api';

export function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if (!name || !email || !password){
            return alert('Preencha todos os Campos')
        }

        api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuário Cadastrado com Sucesso")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível cadastrar usuário")
                }
            })
    }

    return(
        <Container id="pageLogin">
            <Logo id="logoForm"/>
            <div id="formLogin">
                <h2 id="subTitleLogin">Faça Login</h2>
                <Input 
                    type="text" 
                    placeholder="Ex.: Felipe Coelho" 
                    id="nomeSignIn" 
                    title="Nome"
                    onChange={e => setName(e.target.value)}
                    />
                <Input 
                    type="email" 
                    placeholder="exemplo@exemplo.com.br" 
                    id="emailSignIn" 
                    title="Email"
                    onChange={e => setEmail(e.target.value)}
                    />
                <Input 
                    type="password" 
                    placeholder="No mínimo 6 caracteres" 
                    id="senhaSignIn" 
                    title="Senha"
                    onChange={e => setPassword(e.target.value)}
                    />
                <Button title="Cadastrar" onClick={handleSignUp}/>
                <Hyperlink title="Já tenho uma conta" to={'/'}/>
            </div>
        </Container>
    )
}