import './footer.css'

import linkedin from "../../assets/logo linkedin.png";
import youtube from "../../assets/logo youtube.png";
import instagram from "../../assets/logo instagram.png";
import facebook from "../../assets/logo facebook.png";
import logosquad from "../../assets/logoSquad.png";

export default function footer (){
    return (
        <footer>
        <div id="imagens">
        <img src={logosquad} alt="logo da squad" id="logo" />
          <pre id="direitos">TechForce Ltda @ Alguns direitos reservados.</pre>
        </div>
  
        <div id="linha1"></div>
  
        <div id="textos1">
          
          <br />
          <p>
            
            
            <a href="/lima.html" id="lima">HOME</a>
            <br />
            <a href="/fpoo.html" id="fpoo">DOCUMENTAÇÃO</a>
            <br />
          </p>
          <a href="/squad.html" id="squad">
            <pre>EQUIPE DE DESENVOLVEDORES</pre>
          </a>
        </div>
  
        <div id="linha2"></div>
  
        <div id="textos2">
         
         
          <div id="imagens1">
            <a href="https://www.instagram.com/itechforce_ofc/?igshid=YzVkODRmOTdmMw%3D%3D"><img src={instagram} alt="instagram" id="instagram" /> </a>
            <a href="https://www.facebook.com/techforce.ofc/"><img src={facebook} alt="facebook" id="facebook" /></a>
            <a href="https://www.youtube.com/channel/UCA4CY4WQ5ir7SB6wVnpf8YQ"><img src={youtube} alt="youtube" id="youtube" /></a>
           
          </div>
        </div>
      </footer>
    );
} 