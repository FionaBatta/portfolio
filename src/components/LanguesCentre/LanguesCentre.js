// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './LanguesCentre.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_langues-coord">
        <Container>
            <Row>
            <Fade cascade>
            <div className="div_langues">
                <h2 className="h2_langues">Langues Parlées</h2>
                <Card className="border-0">
                    <Card.Body className="card_langue">
                        <Card.Title className="card_langue-title font-weight-bold">Anglais</Card.Title>
                        <Card.Subtitle className="card_langue-subtitle">Niveau C1</Card.Subtitle>
                        <Card.Title className="card_langue-title font-weight-bold">Japonais</Card.Title>
                        <Card.Subtitle className="card_langue-subtitle">Niveau B1</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className="div_comp">
                <h2 className="h2_comp">Compétences</h2>
                <Card className="border-0">
                    <Card.Body className="card_comp">
                    <Card.Title className="card_comp-title font-weight-bold">SQL, MongoDB</Card.Title>
                      <Card.Title className="card_comp-title font-weight-bold">ReactJS, Javascript</Card.Title>
                      <Card.Title className="card_comp-title font-weight-bold">PHP, Symfony, Laravel</Card.Title>
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

export default Main;