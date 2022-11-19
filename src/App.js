import React from "react";
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
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

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route exact path="/candidate/profile/:id" element={<ProfileVCand/>}/>
          <Route exact path="/profile" element={<ProfileVEmp/>}/>
          <Route path="/candidates" element={<ModalCandidato/>}/>
          <Route exact path="/candidate/resume/:id" element={<Curriculo/>}/>
          <Route path="/job-vacancies-list" element={<JobVacanciesList />}/>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
