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
import { AuthProvider } from "./services/contexts/auth";
import { JobVacancieProvider } from "./services/contexts/registerJobVacancie";

import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
import PrivateRoute from './routes/PrivateRoute'
import { HomePage } from "./pages/HomePage";
import { FormVaga } from "./pages/cadastrarVaga/sections/dadosVaga/form/formVaga";
import { FormFiltragem } from "./pages/cadastrarVaga/sections/filtragemCandidato/form/formFiltragem";




function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <JobVacancieProvider>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route
            exact
            path="/login"
            element={<Login/>}
        />
        <Route path="/home" exact element={<PrivateRoute Item={HomePage}/>}/>
        <Route path="/register/candidate" element={<CandidatoForm/>}/>
        <Route path="/register/company" element={<EmpresaForm/>}/>
        <Route path="/company/register/job-vacancie/step1" element={<PrivateRoute Item={FormVaga}/>} />
        <Route path="/company/register/job-vacancie/step2" element={<PrivateRoute Item={FormFiltragem}/>}/>
        <Route path="/edit-delete/candidato" element={<PrivateRoute Item={EditarExcluirCandidato}/>}/>
        <Route path="/edit-delete/empresa" element={<PrivateRoute Item={EditarExcluirEmpresa}/>}/>
        <Route exact path="/candidato/profile" element={<ProfileVCand/>}/>
        <Route exact path="/profile" element={<ProfileVEmp/>}/>
        <Route path="/candidatos" element={<ModalCandidato/>}/>
        <Route path="/cv" element={<Curriculo/>}/>
      </Routes>
      </JobVacancieProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
