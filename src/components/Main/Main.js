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
              <Fade cascade>
                <div className="h1_nom-prenom">
                  <h1 className="h1_nom">Fiona </h1>
                  <h1 className="h1_prenom">Battaglia</h1>
                </div>
                <div className="h1_sous-titre">Développeuse Web</div>
              </Fade>
      </div>
    );
  }
}

export default Main;