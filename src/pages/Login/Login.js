import React, {useState, useContext} from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { PageLogin, Register } from './styles.js';
import {ReactComponent as LoginPic} from '../../assets/images/loginPic.svg';
import { AuthContext } from '../../services/contexts/auth.js';
import { getUserByEmail } from '../../shared/functions/user';


export function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [showRegister, setShowRegister] = useState(false);

    const { login } = useContext(AuthContext);

    const handleLogin = async (ev) => {
        ev.preventDefault();

        const userExists = await getUserByEmail(email);

        if(!userExists) setShowRegister(true);

        login(email, senha);

    }

    return(
        <PageLogin>
            
            <div id="image-description">
                <div id="image">
                    <LoginPic/>
                </div>
                <div id="description">
                    <h2>Um novo jeito de recrutar.</h2>
                    <p>Não perca tempo recebendo vagas que não condizem com você.</p>
                </div>
            </div>
            <div id="login">
                <div id="logo">
                    <a href="/">
                        <h1>New <span>Way</span> Recruiter</h1>
                    </a>
                </div>
                <form  name="login-form" id="login-form">
                <div id="inputs-login">
                <h2>Login</h2>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required value={email} onChange={ev => setEmail(ev.target.value)}/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" required value={senha} onChange={ev => setSenha(ev.target.value)}/>
                </div>
                <button type="submit" onClick={ev => handleLogin(ev)}>
                    <ExitToAppIcon
                    color="white"
                    fontSize="small"
                    />
                    Entrar
                </button>
                {showRegister && (
                    <Register>
                        <span>Registre-se aqui <strong><a href='/register/candidate'>candidato.</a></strong></span>
                        <span>OU</span>
                        <span>Registre-se aqui <strong><a href='/register/company'>empresa.</a></strong></span>
                    </Register>
                )}
                </form>
            </div>
        </PageLogin>
    );
}