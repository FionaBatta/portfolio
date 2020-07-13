// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Experience.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_exp">
        <Container>
            <h2 className="h2_exp">Experiences   Professionnelles</h2>
            <Row>
            <Fade cascade>
            <Col>
                <Card className="border-0">
                    <Card.Body className="card_exp">
                        <Card.Title className="card_exp-title font-weight-bold">Aide aux devoirs</Card.Title>
                        <Card.Subtitle className="card_exp-subtitle">Accompagner des enfants tout au long de l'année scolaire.</Card.Subtitle>
                        <Card.Text className="card_exp-text">D'Août 2013 à Août 2019</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="border-0">
                    <Card.Body className="card_exp">
                        <Card.Title className="card_exp-title font-weight-bold">Stage d'observation au Sushi Matsuri</Card.Title>
                        <Card.Subtitle className="card_exp-subtitle">Servire les clients, aider en cuisine.</Card.Subtitle>
                        <Card.Text className="card_exp-text">2011</Card.Text>
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