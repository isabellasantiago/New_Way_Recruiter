import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EditarExcluirCandidato } from "./pages/Editar-Excluir/Candidato/EditarExcluirCandidato";
import { EditarExcluirEmpresa } from "./pages/Editar-Excluir/Empresa/EditarExcluirEmpresa";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import { ProfileVCand } from "./pages/Perfil/VisaoCandidato/ProfileVCandidato";
import { ProfileVEmp } from "./pages/Perfil/VisaoEmpresa/ProfileVEmp";
import {Curriculo} from './pages/cadastroCurriculo/Curriculo';

import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
import CustomRoute from './routes/CustomRoutes'


function App() {

  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route
        path="/login"
        component={Login}
        exact
        isPrivate
      />
    <Route path="/candidato" component={CandidatoForm}/>
    <Route path="/empresaform" component={EmpresaForm}/>

    <CustomRoute path="/edit_or_delete/candidato" component={EditarExcluirCandidato}/>
    <CustomRoute path="/edit_or_delete/empresa" component={EditarExcluirEmpresa}/> 
    <Route exact path="/profile/idcandidato" component={ProfileVCand}/>
    <Route exact path="/profile/candidato" component={ProfileVEmp}/>
    <Route path="/modal-candidatos" component={ModalCandidato}/>
    <Route path="/cv" component={Curriculo}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
