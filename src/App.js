import {React} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";

import {createServer} from 'miragejs';

=======
import { Curriculo } from "./pages/cadastroCurriculo/Curriculo";
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d
import {Home} from "./pages/Home/Home";
import{Login} from "./pages/Login/Login";
import { ProfileVCand } from "./pages/Perfil/VisaoCandidato/ProfileVCandidato";
import { ProfileVEmp } from "./pages/Perfil/VisaoEmpresa/ProfileVEmp";

import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";

import {Curriculo} from './pages/cadastroCurriculo/Curriculo';
import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";



function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
<<<<<<< HEAD
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route exact path="/profilev_candidato" component={ProfileVCand}/>
    <Route exact path="/profilev_empresa" component={ProfileVEmp}/>

=======
    <Route path="/modal-candidatos" component={ModalCandidato}/>
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route path="/cv" component={Curriculo}/>
>>>>>>> e7dc246c23d002ac3a4b9648cc5787129cb0ce1d
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
