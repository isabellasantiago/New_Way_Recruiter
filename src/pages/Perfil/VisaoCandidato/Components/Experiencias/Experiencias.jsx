import google from '../../../../../assets/images/google.png';
import flash from '../../../../../assets/images/flash.png';
import neon from '../../../../../assets/images/neon.svg';
import './style.scss'

export function Experiencias() {
  return (
    <div className="experiencias">
      <h2>Experiências</h2>
      <div className="center">
        <div className="first-experience">
          <img src={neon} alt="neon" />
          <h3>Neon</h3>
          <div className="jobsline">
            <span>
              <ul class="timeline" id="timeline">
                <li class="li complete">
                  <div class="timestamp">
                  </div>
                  <div class="status">
                    <h4> Designer UX </h4>
                    <h5>jan. 2021 - o momento</h5>
                    <h5>Nível: Pl</h5>
                  </div>
                </li>
                <li class="li complete">
                  <div class="timestamp">
                  </div>
                  <div class="status">
                    <h4> Designer UX </h4>
                    <h5>out. 2020 - jan. 2021</h5>
                    <h5>Nível:  Jr</h5>
                  </div>
                </li>
                <li class="li complete">
                  <div class="timestamp">
                  </div>
                  <div class="status">
                    <h4> Designer UX </h4>
                    <h5>mar. 2020 - jan. 2021</h5>
                    <h5>Nível:  Estágio</h5>
                  </div>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <span class="line"></span>
        <div className="otherexperiences">
          <img src={google} alt="neon" />
          <div className="jobsline">
            <h3>Google</h3>
            <h5>ago. de 2019 - fev. de 2020</h5>
            <div className="row">
              <h6 className="cargo">Customer Success</h6>  <h6 className="nivel">Nível: Jr</h6>
            </div>
          </div>
        </div>
        <span class="line"></span>
        <div className="otherexperiences">
          <img src={flash} alt="neon" />
          <div className="jobsline">
            <h3>Flash Benefícios</h3>
            <h5>ago. de 2018 - ago. de 2019</h5>
            <div className="row">
              <h6 className="cargo">Customer Success</h6>  <h6 className="nivel">Nível: Jr</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}