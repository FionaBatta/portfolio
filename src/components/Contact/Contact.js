// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Form from './Form/Form';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Contact.scss';
import Phone from './phone.png';
import Mail from './mail.png';
import CV from './cv.png';
import pdf from './CV_Battaglia_Fiona.pdf'

class Contact extends React.Component {


  render() {
    return (
      <div className="div_contact-coord">
        <Container>
            <Row>
            <Fade cascade>
            <div className="div_contact">
            <h2 className="h2_contact">Me Contacter</h2>
                <Form />
            </div>
            <div className="div_coord">
            <h2 className="h2_coord">Coordonnées</h2>
              <Card className="border-0 bg-transparent">
                <Card.Body className="card_coord">
                  <Card.Img className="card_coord-phone" src={ Phone } />
                  <Card.Text className="card_coord-phonesub" >06 13 29 59 90</Card.Text>
                  <Card.Img className="card_coord-mail" src={ Mail } />
                  <Card.Text className="card_coord-mailsub" >fiona.battaglia@epitech.com</Card.Text>
                </Card.Body>
              </Card>
              <Card className="border-0 bg-transparent">
                <Card.Body className="card_cv">
                  <a className="card_cv-lien" href={pdf}>
                    <Card.Img className="card_cv-img" src={ CV } />
                    <Card.Title className="card_cv-title">Voir mon CV</Card.Title>
                  </a>
                  <Card.Subtitle className="card_cv-subtitle">(PDF)</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            </Fade>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;