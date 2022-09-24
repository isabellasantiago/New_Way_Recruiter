import React from 'react';
import { Cd } from './styles' ;
import profile from '../../assets/images/profile.svg';
import MaskInput from '../../MaskInput';
import {useForm} from 'react-hook-form';
import Api from '../../services/mainApi';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../shared/functions/notify/notify';
import { Toaster } from 'react-hot-toast';


export function CandidatoForm(){
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit (data)  {
     try{
      const response = await Api.post('/candidate', {
        name: data.nome,
        lastName: data.sobrenome,
        cpf:data.cpf,
        phone:data.phoneNumber,
        email:data.email,
        password:data.passwordConfirmation,
     })

     if(response){
      notify('candidato cadastrado','success');
      navigate('/login');
     }

     return response;
     }catch(err){
      if(err) {
        console.log(err.message);
        notify(`${err.message}`,'error');
      }
     }
    }


  return (
  <Cd className="cd">
    <header className="cd-header">
          <a href="/" id="logo">
              <h1>New <span>Way</span> Recruiter</h1>
          </a>
    </header>
    <main>
      <div className="form-description">
          <h2>Faça agora seu cadastro como candidato!</h2>
              <p className="form-paragrafo">Insira seus dados abaixo para efetuar seu cadastro!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-start">
             <div className="control-group">
              <label>Nome*</label>
              <input type="text" 
              {...register("nome", { required: "Nome  é obrigatório!" })}
              />
              {errors.nome && (
                <p style={{ color: "red" }}>{errors.nome.message}</p>
              )}
              </div>

              <div className="control-group">
              <label>Sobrenome*</label>
              <input type="text"
              {...register("sobrenome", { required: "Sobrenome  é obrigatório!" })}
              />
              {errors.sobrenome && (
                <p style={{ color: "red" }}>{errors.sobrenome.message}</p>
              )} 
              </div>
              </div>
              <div className="form-start">
              <div className="control-group">
              <label>CPF*</label>
              <MaskInput
              name= "cpf"
              mask= "999.999.999-99"
              
              {...register("cpf", { required: "CPF  é obrigatório!" })}
              />
              {errors.cpf && (
                <p style={{ color: "red" }}>{errors.cpf.message}</p>
              )}
              </div>
              <div className="control-group">
              <label>Número de telefone*</label>
              <input type="phone" 
              {...register("phoneNumber", { required: "Número de telefone é obrigatório!" })}
              />
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
              )}
              </div>
              </div>
              <br/>
              <div className="form-end">
              <label>E-mail*</label>
              <input type="email" 
              {...register("email", { required: "E-mail é obrigatório!" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              <label>Senha*</label>
              <input type="password" 
              {...register("password", { required: "Senha é obrigatória!", 
              minLength: { value: 8, message: 'Senha não pode ser menor que 8 caracteres.' }
             })}
              
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
              
              
              <label>Confirmação senha*</label>
              <input type="password" 
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
            <button className="candidato-submit"  type="submit" >Cadastrar</button>
            </form>
            <img src={profile} alt="profile-candidato" className="cdprofile"/>
       </div>
    </main>
    <Toaster/>
  </Cd>
  );
}
