import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Box from './box';

const Stock = () => (
  <div className="in-stock text-center">
    <Row><Col><h3>LAGER - PROSESSER - VARER I ARBEID</h3></Col></Row>
    <Row>
      <Col className="side-column">
        <Box name="ravarelager" title="Råvarelager" />
      </Col>
      <Col xs={6}>
        <Container className="level2container">
          <Row className="align-items-end">
            <Col className="underAreaTitle"><h6>Areal prosess A</h6></Col>
            <Col>
              <Box name="produksjon" title="Produksjon" />
            </Col>
          </Row>
          <Row className="lastrow align-items-end">
            <Col>
              <Box name="verdiproduksjonsutstyrA" title="Verdi produksjons- utstyr" />
            </Col>
            <Col>
              <Box name="montasje" title="Montasje" />
            </Col>
          </Row>
        </Container>
        <Container className="level2container">
          <Row className="lastrow align-items-end">
            <Col className="underAreaTitle"><h6>Areal prosess B</h6></Col>
            <Col>
              <Box name="prosess" title="Prosess" />
            </Col>
          </Row>
          <Row className="lastrow align-items-end">
            <Col>
              <Box name="verdiproduksjonsutstyrB" title="Verdi produksjons- utstyr" />
            </Col>
            <Col />
          </Row>
        </Container>
      </Col>
      <Col className="side-column">
        <Box name="ferdigvarelager" title="Ferdigvarelager" />
      </Col>
    </Row>
  </div>
);

export default Stock;
