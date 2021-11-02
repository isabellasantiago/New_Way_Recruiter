import React, { useEffect, useState } from 'react';

import './EditarExcluirCandidato.scss';
import { HeaderComponent } from '../../../components/HeaderComponent/HeaderComponent'

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
       <HeaderComponent candidato={true}/>

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
          
              <button  type="submit" className="save">
                <span>Salvar dados da conta</span>
              </button>
              <div className="btn">
                  <button onClick={Delete} className="DeleteConta">
                    <span>Excluir conta</span>
                  </button>
                </div>
          </form>
                
                   
                    
                    </div>
                    
                    

                

                
            </section>
  </div>
  );
}