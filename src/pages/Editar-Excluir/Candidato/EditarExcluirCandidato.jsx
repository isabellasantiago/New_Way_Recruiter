import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './EditarExcluirCandidato.scss';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {useForm} from 'react-hook-form';
import axios from 'axios';





export function EditarExcluirCandidato(){

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();
  const [post, setPost] = useState(null);

  
  async function Delete (){

    if (window.confirm("Tem certeza que deseja excluir esta conta?") ==  true){
      await axios.delete('http://localhost:3333/deletecandidato/46')
        
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
    }else{
        return false;
    }
    
     
  
    }
    //useEffect usado para monitorar o usuario e seus dados para poder alterar.
    useEffect(() => {
      axios.get(`http://localhost:3333/onecandidato/46`).then((response) => {
        setPost(response.data);
      });
    }, []);

    async function UpdateUser(data){
     
    
      if (window.confirm("Os dados estão corretos?") ==  true){
       
        await axios.put('http://localhost:3333/candidato/46', {
             
          
            
             nome: data.nome,
             sobrenome: data.sobrenome,
             telefone:data.telefone,
           
             
           })
           .then(response => response.data)
           .catch(error => {
             throw error;
           });
          }else{
            return false;
          }
    }

  return(
    <div className="profilevcand">
       <header>
                <a href="/" id="logo">
                    <h1>New <span>Way</span> Recruiter</h1>

                    
                </a>
                <span className="cand">candidato</span>
                <div id="menus">
                    <NavLink exact to="/editdeletecandidato" >Perfil</NavLink>
                    <NavLink exact to="/editdeletecandidato" > Vagas</NavLink>
                    <NavLink  exact to="/editdeletecandidato" > Processos</NavLink>
                    <NavLink  exact to="/editdeletecandidato" activeClassName="selected" > <SettingsOutlinedIcon/> </NavLink>
                </div>
            </header>

            <section >

                <div className="profile">
                <form onSubmit={handleSubmit(UpdateUser)} >
              
              <div className="row">
                
                <div className="col">
              <label>Nome*</label>
              <input type="text" 
              {...register("nome", { required: "Nome  é obrigatório!" })}
              />
              {errors.nome && (
                <p style={{ color: "red" }}>{errors.nome.message}</p>
              )}
              </div>

             
                
              <div className="col">
              <label>Sobrenome*</label>
              <input type="text"
              {...register("sobrenome", { required: "Sobrenome  é obrigatório!" })}
              />
              {errors.sobrenome && (
                <p style={{ color: "red" }}>{errors.sobrenome.message}</p>
              )} 
</div>


      
<div className="col">
              <label>Número de telefone*</label>
              <input type="phone" 
              {...register("telefone", { required: "Número de telefone é obrigatório!" })}
              />
              {errors.telefone && (
                <p style={{ color: "red" }}>{errors.telefone.message}</p>
              )}
              </div>

            </div>
          
            <button  type="submit" className="save"> <span>Salvar dados da conta</span></button>
                </form>
                <div className="btn">
                 
                  <button onClick={Delete} className="DeleteConta"><span>Excluir conta</span> </button>
                  </div>
                   
                    
                    </div>
                    
                    

                

                
            </section>
    </div>
  );
}