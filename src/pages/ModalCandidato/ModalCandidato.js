// import React from 'react';
// import {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
// import closeImg from '../../assets/images/close.svg';
// import './modal-candidato.scss';
// import Toggle from './Toggle';
// import api from "../../services/api";

// const useStyles = makeStyles((theme) => ({
//   modalButton:{
//     width:'100%',
//     height:'100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonClose:{
//     float: 'right',
//     background:'#F7F7F7',
//     border: '1px solid #F7F7F7',
//     cursor: 'pointer',
//   },
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'rgba(0, 0, 0, 0.8)',
//   },
//   paper: {
//     borderRadius: 10,
//     width: 1008,
//     height: 700,
//     overflowY: 'auto',
   
//     background: '#F7F7F7',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   modalcenter:{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:50,
//   },
// }));

// const Fade = React.forwardRef(function Fade(props, ref) {

  


//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };


// export  function ModalCandidato() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//    async function loadUsers(){
//       const response = await api.get('Data/candidatos.json')
//       //console.log(response.data);
//       setUsers(response.data);

//     }

//     loadUsers();
//   }, []);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  
//   return (

//     <div className={classes.modalButton}>
//       <button type="button" onClick={handleOpen}>
//         Abrir Modal
//       </button>
//       <Modal
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//                  <button className={classes.buttonClose} onClick={handleClose}> <img src={closeImg} alt="closeImg"/></button>
//             <div id="modalcenter" className={classes.modalcenter}>
              
//             <h2 id="spring-modal-title"> Conheça  os  candidatos ! </h2>
            
//             <p id="spring-modal-description">Vaga: Designer UX Júnior.</p>

           
//               {users.map((user) => {
//           return(
//              <div key={users.id } className="candidatos">

//                 <div className="perfilImg">
//                   <img src={user.foto}  alt="perfilImg"/>
//                 </div>

//                 <div className="info">
//                   <h2>{user.nome}</h2>
//                   <p>{user.info}</p>
//                   <p>{user.info2}</p>
//                 </div>

//                 <div className="percent">
//                     <h2>{user.percent}</h2>
//                     <h3>{user.span}</h3>
//                     <a href="#">conhecer o candidato</a>
                  
//                 </div>

//               </div>
//               )
//             })}

              

                  
//                   <Toggle />

//             </div>
            
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }