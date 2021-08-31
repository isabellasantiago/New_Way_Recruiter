import React, { useState } from 'react';
import './empresaform.scss';
import empresaFormImg from '../../assets/images/careerDevelopment.svg'
import MaskInput from '../../MaskInput';

const initialValues = {
  cpf:'',
  cnpj: ''
};

export function EmpresaForm(){

  const [values,setValues] = useState(initialValues);

    function handleChange(event) {
      setValues({
        ...values,
      [event.target.name]: event.target.value
      });
    }

  return(
  <div className="empresaform">
    <header className="emp-header">
          <a href="/" id="logo">
              <h1>New <span>Way</span> Recruiter</h1>
          </a>
    </header>
    
      <div className="form-main">
        <h2>Cadastre-se agora como empresa!</h2>
        <p>E nunca mais se preocupe com a triagem dos seus candidatos.</p>
      <br/>
      
          <img src={empresaFormImg} className="empresaFormImg" alt="empresaFormImg"/>

        <form >
          <section className="colunms1">
            
          <div >
            
         <div className="control-group">
          <label>Razão Social*</label>
          <input type="text" className=""/>
          </div>

          <div className="control-group">
          <label>CNPJ*</label>
         <MaskInput
          placeholder="Exemplo: 02.614.385/0001-02"
          name="cnpj"
          mask="99.999.999/9999-99"
          value={values.cnpj}
          onChange={handleChange}
         />
          </div>

          </div>

          <div >

          <div className="control-group">
          <label>Nome Fantasia*</label>
          <input type="text"  className=""/>
          </div>

          <div className="control-group">
          <label> Endereço*  </label>
          <input type="text" placeholder="Exemplo: São Paulo, Brasil" className=""/>
          </div>

          </div>

          </section>

          <section className="colunms2">
          <div >
            
            <div className="control-group">
             <label>Conte-nos a sua história!</label>
              <textarea  type="text" className="historia-empresa"/>
             </div>
   
             
   
             </div>
   
             <div >
   
             <div className="control-group">
             <label>Logo da empresa</label>
             <input type="text" placeholder="Insira o link da sua logo" className=""/>
             </div>
   
             <div className="control-group">
             <label> Linkedin </label>
             <input type="text"  className=""/>
             </div>
             </div>

          </section >
          
          <section className="colunms3">
          <div >
            
            <div className="control-group">
             <label>E-mail*</label>
             <input type="email" className=""/>
             </div>
   
             <div className="control-group">
             <label>Confirmar senha *</label>
             <input type="password"  className="password"/>
             </div>
   
             </div>
   
             <div >
   
             <div className="control-group">
             <label>Senha*</label>
             <input type="password"  className="password"/>
             </div>
   
             <div className="control-group">
             <label> Qual é o estilo da sua empresa? </label>
            
            <select>

            <option value="startup">Startup</option>
            <option value="multinacional">Multinacional</option>
            <option value="tradicional">Tradicional</option>
           
            </select>
             </div>
   
             </div>
          </section>
         

          <button className="candidato-submit" type="submit">Cadastrar</button> 
        </form>

       
       </div>
     
       
      </div>

  
  );
}