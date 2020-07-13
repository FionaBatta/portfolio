// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import './Main.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_main">
              <div className="menu">
                <ul className="menu-ul">
                  <li className="menu-li" href="#diplomes">• Diplomes et Formations</li>
                  <li className="menu-li" href="#langues">• Langues et Compétences</li>
                  <li className="menu-li" href="#experiences">• Experiences Professionnelles</li>
                  <li className="menu-li" href="#cara">• Caractère et Centres d'intérêt</li>
                  <li className="menu-li" href="#projets">• Projets</li>
                  <li className="menu-li" href="#contact">• Contact et CV</li>
                </ul>
              </div>
              <Fade cascade>
                <div className="h1_nom-prenom">
                  <h1 className="h1_nom">Fiona </h1>
                  <h1 className="h1_prenom">Battaglia</h1>
                </div>
              </Fade>
      </div>
    );
  }
}

export default Main;