import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './EditarExcluirEmpresa.scss';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {useForm} from 'react-hook-form';
import axios from 'axios';





export function EditarExcluirEmpresa(){

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();
  const [post, setPost] = useState(null);

  
  async function Delete (){

    if (window.confirm("Tem certeza que deseja excluir esta conta?") ==  true){
      await axios.delete('http://localhost:3333/deleteempresa/2')
        
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
      axios.get(`http://localhost:3333/oneempresa/2`).then((response) => {
        setPost(response.data);
      });
    }, []);

    async function UpdateUser(data){
     
    
      if (window.confirm("Os dados estão corretos?") ==  true){
       
        await axios.put('http://localhost:3333/empresa/2', {
             
          
            
          nomefantasia: data.nameFantasia,
          endereco: data.endereco,
          sobre:data.sobre,
          logoemp: data.logoemp,
          linkedin: data.linkedin,
             
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
    <div className="profilevemp">
       

            <section className="princ" >

                <div className="profile">
                <form onSubmit={handleSubmit(UpdateUser)} >
              
              <div className="row">
                <section>
              

          

          

          </section>

          <section className="colunms2">
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
             <label>Conte-nos a sua história!</label>
              <textarea {...register("sobre")} type="text" className="historia-empresa"/>
             </div>
   
             
   
             </div>
   
             <div >
             <div className="control-group">
          <label> Endereço*  </label>
          <input type="text" placeholder="Exemplo: São Paulo, Brasil" className=""
          {...register("endereco", { required: "Endereço é obrigatório!" })}
          />
          {errors.endereco && (
            <p style={{ color: "red" }}>{errors.endereco.message}</p>
          )}
        
          </div>
   
             <div className="control-group">
             <label>Logo da empresa</label>
             <input {...register("logoemp")} type="text" placeholder="Insira o link da sua logo" className=""/>
             </div>
   
             <div className="control-group">
             <label> Linkedin </label>
             <input {...register("linkedin")} type="text"  className=""/>
             </div>
             </div>

          </section >
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