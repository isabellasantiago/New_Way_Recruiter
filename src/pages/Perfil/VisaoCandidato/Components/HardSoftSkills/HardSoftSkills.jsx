import './style.scss';

export function HardSoftSkills(){
  return(
    <div className="skills">
      
        <h1>Habilidades e Softskills</h1>

        <h3>As habilidades mais fortes de Matheus:</h3>

        <div className="center">
        <div className="hardskills">
          <span>Design UX</span>
        </div>

        <div className="hardskills">
          <span>Autocad</span>
        </div>

        <div className="hardskills">
          <span>Photoshop</span>
        </div>

        <div className="hardskills">
          <span>Figma</span>
        </div>

        
       
        
        </div>
        <div className="row">
        <span className="hr"></span>
        </div>
        

        <h3>As soft skills que mais se destacam em Matheus:</h3>
<div className="center">
        <div className="softskills">
          <span>Adaptabilidade</span>
        </div>

        <div className="softskills">
          <span>Comunicação</span>
        </div>

        <div className="softskills">
          <span>Trabalho em equipe</span>
        </div>

        <div className="softskills">
          <span>Criatividade</span>
        </div>

        
        </div>
    </div>
  );
}