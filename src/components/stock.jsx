import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Stock = () => (
  <Row className="in-stock text-center">
    <Col><h2>LAGER - PROSESSER - VARER I ARBEID</h2></Col>
    <Row>
      <Col className="side-column">
        <Box name="ravarelager" title="Råvarelager" />
      </Col>
      <Col xs={5}>
        <Row>
          <h3>Areal prosess A</h3>
          <Col>
            <Box name="produksjon" title="Produksjon" />
          </Col>
          <Col>
            <Box name="montasje" title="Montasje" />
          </Col>
        </Row>
        <Row>
          <h3>Areal prosess B</h3>
          <Col>
            <Box name="prosess" title="Prosess" />
          </Col>
        </Row>
      </Col>
      <Col className="side-column">
        <Box name="ferdigvarelager" title="Ferdigvarelager" />
      </Col>
    </Row>

  </Row>
);

export default Stock;
