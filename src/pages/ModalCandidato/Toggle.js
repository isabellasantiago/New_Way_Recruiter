import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import perfilImg from '../../assets/images/pexels-ezekixl-akinnewu-1006227.svg';
import './modal-candidato.scss';

export default function Toggle() {
  const [show, toggleShow] = React.useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
   async function loadUsers(){
      const response = await api.get('Data/candidatos2.json')
      //console.log(response.data);
      setUsers(response.data);

    }

    loadUsers();
  }, []);
  
  return (
    <div>
      <button className="toggleButton" onClick={() => toggleShow(!show)}> {show ? 'Ver menos' : 'Ver mais'}</button>    
      {show && 

      <div>
      {users.map((user) => {
        return(
           <div key={users.id } className="candidatos">

              <div className="perfilImg">
                <img src={user.foto}  alt="perfilImg"/>
              </div>

              <div className="info">
                <h2>{user.nome}</h2>
                <p>{user.info}</p>
                <p>{user.info2}</p>
              </div>

              <div className="percent">
                  <h2>{user.percent}</h2>
                  <h3>{user.span}</h3>
                  <a href="#">conhecer o candidato</a>
                
              </div>

            </div>
            )
          })}
</div>
}
</div> 
   
  )
}

