// Modules //
import React from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import ReactModal from 'react-modal';

// Style //
import { Container, Col, Row, Card } from 'react-bootstrap';
import './Projets.scss';
import Meetic from './meetic.png';
import Med from './med.png';
import Puissance from './puissance.png';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  setModalState(showModal) {
    this.setState({
      showModal: showModal
    });
  }

  render() {
    return (
      <div className="div_projets">
        <Container>
        <Fade cascade>
            <Row>
                <Col>
                    <h2 className="h2_projets">Projets au seins du Samsung Campus</h2>
                    <h3 className="h3_projets">Liste non exhaustive</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card className="border-0 rounded">
                    <Card.Body className="card_projets rounded">
                        <Card.Img src={Med} onClick={ this.setModalState.bind(this, true) } />
                          <ReactModal isOpen={ this.state.showModal }>
                            <img src={ Med } onClick={ this.setModalState.bind(this, false) } />
                          </ReactModal>
                        <Card.Title className="card_projets-title font-weight-bold">D.Y.Med</Card.Title>
                        <Card.Subtitle className="card_projets-subtitle">Site de e-commerce.</Card.Subtitle>
                        <Card.Text className="card_projets-langue">ReactJS, CSS</Card.Text>
                        <Card.Text className="card_projets-date">06.2020</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="border-0 rounded">
                    <Card.Body className="card_projets rounded">
                        <Card.Img src={Puissance} onClick={ this.setModalState.bind(this, true) } />
                          <ReactModal isOpen={ this.state.showModal }>
                            <img src={ Puissance } onClick={ this.setModalState.bind(this, false) } />
                          </ReactModal>
                        <Card.Title className="card_projets-title font-weight-bold">Puissance 4</Card.Title>
                        <Card.Subtitle className="card_projets-subtitle">Jeu de Puissance 4.</Card.Subtitle>
                        <Card.Text className="card_projets-langue">Javascript, JQuery</Card.Text>
                        <Card.Text className="card_projets-date">03.2020</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="border-0 rounded">
                    <Card.Body className="card_projets rounded">
                        <Card.Img src={Meetic} onClick={ this.setModalState.bind(this, true) } />
                          <ReactModal isOpen={ this.state.showModal }>
                            <img src={ Meetic } onClick={ this.setModalState.bind(this, false) } />
                          </ReactModal>
                        <Card.Title className="card_projets-title font-weight-bold">My Meetic</Card.Title>
                        <Card.Subtitle className="card_projets-subtitle">Site de rencontres.</Card.Subtitle>
                        <Card.Text className="card_projets-langue">PHP Natif</Card.Text>
                        <Card.Text className="card_projets-date">02.2020</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    );
  }
}

export default Contact;