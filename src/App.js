import {React} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import {Home} from "./pages/Home/Home";
import{Login} from "./pages/Login/Login";
import {Curriculo} from './pages/cadastroCurriculo/Curriculo';

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route path="/cv" component={Curriculo}/>

    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
