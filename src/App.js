import {React} from "react";
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


function App() {
  return (
    <BrowserRouter>
    {/* <StoreProvider> */}
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
    <Route path="/empresaform" component={EmpresaForm}/>

    <Route path="/editdeletecandidato" component={EditarExcluirCandidato}/>
    <Route path="/editdeleteempresa" component={EditarExcluirEmpresa}/> 
    <Route exact path="/profilev_candidato" component={ProfileVCand}/>
    <Route exact path="/profilev_empresa" component={ProfileVEmp}/>
    <Route path="/modal-candidatos" component={ModalCandidato}/>
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route path="/cv" component={Curriculo}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
