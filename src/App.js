import {React} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import {Home} from "./pages/Home/Home";
import{Login} from "./pages/Login/Login";
<<<<<<< HEAD
import {Curriculo} from './pages/cadastroCurriculo/Curriculo';
=======
import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
>>>>>>> dev

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
<<<<<<< HEAD
    <Route path="/modal-candidatos" component={ModalCandidato}/>
=======
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route path="/cv" component={Curriculo}/>

>>>>>>> dev
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
