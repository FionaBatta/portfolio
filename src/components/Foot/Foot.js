// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Foot.scss';
import LinkedIn from './linkedin.png';
import ScrollTop from "react-scrolltop-button";

class Contact extends React.Component {

  render() {
    return (
      <div className="div_foot">
        <Container>
            <Row>
                <Col>
                <Fade cascade>
                    <div className="foot_langue">Site réalisé avec ReactJS.</div>
                    <div className="foot_copy"></div>
                </Fade>
                </Col>
                <Col>
                <Fade cascade>
                    <div className="foot_link"><a  href="https://www.linkedin.com/in/fiona-battaglia-0070911b2/"><img src={ LinkedIn } className="foot-linked" /></a></div>
                </Fade>
                </Col>
          </Row>
        </Container>
        <ScrollTop text="↑"
          className="top-scroll" 
          style={{ 
            backgroundColor: "transparent",
            border: "none"
          }}  
        />
      </div>
    );
  }
}

export default Contact;