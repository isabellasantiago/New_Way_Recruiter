import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EditarExcluirCandidato } from "./pages/Editar-Excluir/Candidato/EditarExcluirCandidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { ProfileVCand } from "./pages/Perfil/VisaoCandidato/ProfileVCandidato";
import { ProfileVEmp } from "./pages/Perfil/VisaoEmpresa/ProfileVEmp";
import { Curriculo } from './pages/cadastroCurriculo/Curriculo';
import { AuthProvider } from "./services/contexts/auth";

import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
import PrivateRoute from './routes/PrivateRoute'
import { HomePage } from "./pages/HomePage";
import { JobVacanciesList } from "./pages/JobVacancieList";
import { JobVacancieProfile } from "./pages/JobVacancieProfile";





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
        <Route path="/register/candidate" element={<CandidatoForm/>}/>
        <Route path="/register/company" element={<EmpresaForm/>}/>
        <Route path="/job-vacancie/profile/:id" element={<JobVacancieProfile />} />
        <Route path="/edit-delete/candidato" element={<PrivateRoute Item={EditarExcluirCandidato}/>}/>
        <Route exact path="/candidato/profile" element={<ProfileVCand/>}/>
        <Route exact path="/profile" element={<ProfileVEmp/>}/>
        <Route path="/candidatos" element={<ModalCandidato/>}/>
        <Route path="/cv" element={<Curriculo/>}/>
        <Route path="/job-vacancies-list" element={<JobVacanciesList />}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
