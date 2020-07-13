// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Caractere.scss';

class Main extends React.Component {

  render() {
    return (
      <div className="div_cara-centre">
        <Container>
            <Row>
            <Fade cascade>
            <div className="div_cara">
                <h2 className="h2_cara">Caractère</h2>
                <Card className="border-0 bg-transparent card_cara-all">
                    <Card.Body className="card_cara">
                        <Card.Title className="card_cara-title font-weight-bold">Organisée</Card.Title>
                        <Card.Title className="card_cara-title font-weight-bold">Autonome</Card.Title>
                        <Card.Title className="card_cara-title font-weight-bold">A l'écoute</Card.Title>
                        <Card.Title className="card_cara-title font-weight-bold">Créative</Card.Title>
                        <Card.Title className="card_cara-title font-weight-bold">Esprit de synthèse</Card.Title>
                        <Card.Title className="card_cara-title font-weight-bold">Travail en équipe</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="div_centre">
                <h2 className="h2_centre">Centres d'intérêt</h2>
                <Card className="border-0 bg-transparent card_centre-all">
                    <Card.Body className="card_centre">
                        <Card.Title className="card_centre-title font-weight-bold">Art et Dessin</Card.Title>
                        <Card.Subtitle className="card_centre-subtitle">En tant que passe-temps.</Card.Subtitle>
                        <Card.Title className="card_centre-title font-weight-bold">Linguistique</Card.Title>
                        <Card.Subtitle className="card_centre-subtitle">Cours suivis à l'université.</Card.Subtitle>
                        <Card.Title className="card_centre-title font-weight-bold">Jeux Vidéos</Card.Title>
                        <Card.Subtitle className="card_centre-subtitle">Réflexion, RPG, Plateforme...</Card.Subtitle>
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