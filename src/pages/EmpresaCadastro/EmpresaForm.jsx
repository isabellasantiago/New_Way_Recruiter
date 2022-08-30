import React from 'react';
import { EmpresaForms } from './styles';
import empresaFormImg from '../../assets/images/careerDevelopment.svg'
import MaskInput from '../../MaskInput';
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import Api from '../../services/mainApi';

export function EmpresaForm(){
  const history = useNavigate()
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();

  async function onSubmit (data)  {
      const post = await Api.post('/company', {
            corporateName: data.nameFantasia,
            tradeName: data.rzsocial,
            password:data.passwordConfirmation,
            cnpj:data.cnpj,
            email:data.email,
            address: data.endereco,
            aboutCompany:data.sobre,
            linkedinURL: data.linkedin,
            type: data.estilo,
            imageURL: data.logo,
      })
        if(post) history('/login')
      }

  return(
  <EmpresaForms className="empresaform">
    <header className="emp-header">
          <a href="/" id="logo">
              <h1>New <span>Way</span> Recruiter</h1>
          </a>
    </header>
    
      <div className="form-main">
        <h2>Cadastre-se agora como empresa!</h2>
        <p className="pStart">E nunca mais se preocupe com a triagem dos seus candidatos.</p>
      <br/>
      
          <img src={empresaFormImg} className="empresaFormImg" alt="empresaFormImg"/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="colunms1">
            
          <div >
            
         <div className="control-group">
          <label>Razão Social*</label>
          <input type="text" className=""
          {...register("rzsocial", { required: "Razão Social é obrigatório!" })}
          />
          {errors.rzsocial && (
            <p style={{ color: "red" }}>{errors.rzsocial.message}</p>
          )}
          
          </div>

          <div className="control-group">
          <label>CNPJ*</label>
         <MaskInput
          placeholder="Exemplo: 02.614.385/0001-02"
          name="cnpj"
          mask="99.999.999/9999-99"
         {...register("cnpj", { required: "CNPJ  é obrigatório!" })}
         
           
          />
          {errors.cnpj && (
            <p style={{ color: "red" }}>{errors.cnpj.message}</p>
          )}
         
          </div>

          </div>

          <div >

          <div className="control-group">
          <label>Nome Fantasia*</label>
          <input type="text"  className=""
          {...register("nameFantasia", { required: "Nome Fantasia  é obrigatório!" })}
          />
          {errors.nameFantasia && (
            <p style={{ color: "red" }}>{errors.nameFantasia.message}</p>
          )}
          
          </div>

          <div className="control-group">
          <label> Endereço*  </label>
          <input type="text" placeholder="Exemplo: São Paulo, Brasil" className=""
          {...register("endereco", { required: "Endereço é obrigatório!" })}
          />
          {errors.endereco && (
            <p style={{ color: "red" }}>{errors.endereco.message}</p>
          )}
        
          </div>

          </div>

          </section>

          <section className="colunms2">
          <div >
            
            <div className="control-group">
             <label>Conte-nos a sua história!</label>
              <textarea {...register("sobre")}  type="text" className="historia-empresa"/>
             </div>
   
             
   
             </div>
   
             <div >
   
             <div className="control-group">
             <label>Logo da empresa</label>
             <input {...register("logo")} type="text" placeholder="Insira o link da sua logo" className="logo"/>
             </div>
   
             <div className="control-group">
             <label> Linkedin </label>
             <input {...register("linkedin")} type="text"  className=""/>

             </div>
             </div>

          </section >
          
          <section className="colunms3">
          <div >
            
            <div className="control-group">
             <label>E-mail*</label>
             <input type="email" className=""
             {...register("email", { required: "E-mail é obrigatório!" })}
             />
             {errors.email && (
               <p style={{ color: "red" }}>{errors.email.message}</p>
             )}
             
             </div>
   
             <div className="control-group">
             <label>Confirmar senha *</label>
             <input type="password" className="password"
              {...register("passwordConfirmation", {
                required: "Por Favor confirme a senha!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas devem corresponder!";
                  }
                }
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{ color: "red" }}>
                {errors.passwordConfirmation.message}
              </p>
            )}
             </div>
   
             </div>
   
             <div >
   
             <div className="control-group">
             <label>Senha*</label>
             <input type="password" className="password"
             {...register("password", { required: "Senha é obrigatória!", 
             minLength: { value: 8, message: 'Senha não pode ser menor que 8 caracteres.' }
            })}
             
             />
             {errors.password && (
               <p style={{ color: "red" }}>{errors.password.message}</p>
             )}
             </div>
   
             <div className="control-group">
             <label> Qual é o estilo da sua empresa? </label>
            
            <select {...register("estilo")}>

            <option value={0}>Startup</option>
            <option value={1}>Multinacional</option>
            <option value={2}>Tradicional</option>
           
            </select>
             </div>
   
             </div>
          </section>
         

          <button  className="candidato-submit" type="submit">Cadastrar</button> 
        </form>

       
       </div>
     
       
      </EmpresaForms>

  
  );
}