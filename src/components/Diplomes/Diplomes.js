// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Diplomes.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_diplomes">
        <Container>
            <h2 className="h2_diplomes">Diplomes et Formations</h2>
            <Row>
            <Fade cascade>
            <Col>
                <Card className="card_diplomes-all border-0">
                    <Card.Body className="card_diplomes">
                        <Card.Title className="card_diplomes-title font-weight-bold">Développeur web</Card.Title>
                        <Card.Subtitle className="card_diplomes-subtitle">Samsung Campus, Saint-Ouen</Card.Subtitle>
                        <Card.Text className="card_diplomes-date">Depuis Octobre 2019</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card_diplomes-all border-0">
                    <Card.Body className="card_diplomes">
                        <Card.Title className="card_diplomes-title font-weight-bold">LLCER Japonais </Card.Title>
                        <Card.Subtitle className="card_diplomes-subtitle">INALCO, Paris</Card.Subtitle>
                        <Card.Text className="card_diplomes-date">De Août 2014 à Août 2019</Card.Text>
                        <Card.Text className="card_diplomes-subtitle">Parcours Traitement Numérique Multilingues</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card_diplomes-all border-0">
                    <Card.Body className="card_diplomes">
                        <Card.Title className="card_diplomes-title font-weight-bold">Baccalauréat Littéraire</Card.Title>
                        <Card.Subtitle className="card_diplomes-subtitle">Lycée Joliot Curie, Nanterre</Card.Subtitle>
                        <Card.Text className="card_diplomes-date">2014</Card.Text>
                        <Card.Text className="card_diplomes-subtitle">Option Langue Européenne et Littérature Anglaise</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="card_diplomes-all border-0">
                    <Card.Body className="card_diplomes">
                        <Card.Title className="card_diplomes-title font-weight-bold">Brevet des Collèges</Card.Title>
                        <Card.Subtitle className="card_diplomes-subtitle">Collège Evariste Galois, Nanterre</Card.Subtitle>
                        <Card.Text className="card_diplomes-date">2011</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Fade>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;