import React, { useState } from 'react';
import './candidato.scss';
import profile from '../../assets/images/profile.svg';
import MaskInput from '../../MaskInput';

const initialValues = {
  cpf:'',
  cnpj: ''
};

export function CandidatoForm(){

    const [values,setValues] = useState(initialValues);

    function handleChange(event) {
      setValues({
        ...values,
      [event.target.name]: event.target.value
      });
    }

  return (
  <div className="cd">
    <header className="cd-header">
          <a href="/" id="logo">
              <h1>New <span>Way</span> Recruiter</h1>
          </a>
    </header>

    <main>
      
      <div className="form-description">

          <h2>Faça agora seu cadastro como candidato!</h2>
          
              <p>Insira seus dados abaixo para efetuar seu cadastro!</p>

            <form>

              <div className="form-start">
                
             <div className="control-group">
              <label>Nome*</label>
              <input type="text" />
              </div>
                
              <div className="control-group">
              <label>Sobrenome*</label>
              <input type="text" />
              </div>

              </div>

              <div className="form-start">
                
              <div className="control-group">
              <label>CPF*</label>
              <MaskInput
              name= "cpf"
              mask= "999.999.999-99"
              value= {values.cpf}
              onChange={handleChange}
              />
              </div>

              <div className="control-group">
              <label>Número de telefone*</label>
              <input type="phone" />
              </div>

              </div>

              <br/>

              <div className="form-end">
              <label>E-mail*</label>
              <input type="email" />
              
              <label>Senha*</label>
              <input type="password" />
              
              <label>Confirmação senha*</label>
              <input type="password" />
            </div>

            <button className="candidato-submit" type="submit">Cadastrar</button>

            </form>

            <img src={profile} alt="profile-candidato" className="cdprofile"/>

       </div>

    </main>

  </div>);
}