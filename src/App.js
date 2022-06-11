import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EditarExcluirCandidato } from "./pages/Editar-Excluir/Candidato/EditarExcluirCandidato";
import { EditarExcluirEmpresa } from "./pages/Editar-Excluir/Empresa/EditarExcluirEmpresa";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { ProfileVCand } from "./pages/Perfil/VisaoCandidato/ProfileVCandidato";
import { ProfileVEmp } from "./pages/Perfil/VisaoEmpresa/ProfileVEmp";
import { Curriculo } from './pages/cadastroCurriculo/Curriculo';
import { CadastroVaga } from "./pages/cadastrarVaga/";
import { AuthProvider } from "./services/context/auth2";

import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
import PrivateRoute from './routes/PrivateRoute'
import { HomePage } from "./pages/HomePage";




function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route
            exact
            path="/login"
            element={<Login/>}
        />
        <Route path="/home" exact element={<PrivateRoute Item={HomePage}/>}/>
        <Route path="/register/candidato" element={<CandidatoForm/>}/>
        <Route path="/register/empresa" element={<EmpresaForm/>}/>
        <Route path="/empresa/register/vaga" element={<PrivateRoute Item={CadastroVaga}/>} />
        <Route path="/edit-delete/candidato" element={<PrivateRoute Item={EditarExcluirCandidato}/>}/>
        <Route path="/edit-delete/empresa" element={<PrivateRoute Item={EditarExcluirEmpresa}/>}/>
        <Route exact path="/candidato/profile" element={<ProfileVCand/>}/>
        <Route exact path="/profile" element={<ProfileVEmp/>}/>
        <Route path="/candidatos" element={<ModalCandidato/>}/>
        <Route path="/cv" element={<Curriculo/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
