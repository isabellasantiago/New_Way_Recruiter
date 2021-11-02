import {React, useState} from "react";
import {Router, Route, Switch} from 'react-router-dom';
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
import authService from './services/auth.service';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import history from './services/history'


function App() {
  const [userData, setUserData] = useState()

  function  loadUser() {
    let userData = authService.getLoggedUser()
    setUserData(userData)
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={props => <Login {...props} onLogin={() => loadUser()} />}/>
        <Route exact path="/candidato" component={CandidatoForm}/>
        <Route exact path="/empresaform" component={EmpresaForm}/>

        <PrivateRoute exatc path="/config/candidato" component={EditarExcluirCandidato}/>
        <Route exact path="/config/empresa" component={EditarExcluirEmpresa}/> 
        <Route exact path="/profile/candidato" component={ProfileVCand}/>
        <Route exact path="/profile/empresa" component={ProfileVEmp}/>
        <Route exact path="/modal-candidatos" component={ModalCandidato}/>
        <Route exact path="/empresaform" component={EmpresaForm}/>
        <Route exact path="/cv" component={Curriculo}/>
      </Switch>
    </Router>
  );
}

export default App;
