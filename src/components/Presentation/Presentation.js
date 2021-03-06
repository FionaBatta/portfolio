// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Presentation.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_pres">
        <Container>
            <Row>
            <Fade cascade>
            <Col>
                <Card className="card_pres-all border-0">
                    <Card.Title className="card_pres-title">Age</Card.Title>
                    <Card.Text className="card_pres-text">24 ans</Card.Text>
                </Card>
            </Col>
            <Col>
                <Card className="card_pres-all border-0">
                    <Card.Title className="card_pres-title">En Cours</Card.Title>
                    <Card.Text className="card_pres-text">Recherche un contrat d'apprentissage</Card.Text>
                </Card>
            </Col>
            <Col>
                <Card className="card_pres-all border-0">
                    <Card.Title className="card_pres-title">Spécialité</Card.Title>
                    <Card.Text className="card_pres-text">Design & Intégration</Card.Text>
                </Card>
            </Col>
            <Col>
                <Card className="card_pres-all border-0">
                    <Card.Title className="card_pres-title">Langages</Card.Title>
                    <Card.Text className="card_pres-text">ReactJS</Card.Text>
                    <Card.Text className="card_pres-text">PHP</Card.Text>
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
