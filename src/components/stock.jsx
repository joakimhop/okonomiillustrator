import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Stock = () => (
  <Row className="in-stock text-center">
    <Col><h3>LAGER - PROSESSER - VARER I ARBEID</h3></Col>
    <Row>
      <Col className="side-column">
        <Box name="ravarelager" title="Råvarelager" />
      </Col>
      <Col xs={5}>
        <Row>
          <Col><h5>Areal prosess A</h5></Col>
        </Row>
        <Row>
          <Col>
            <Box name="produksjon" title="Produksjon" />
          </Col>
          <Col>
            <Box name="montasje" title="Montasje" />
          </Col>
        </Row>
        <Row>
          <Col><h5>Areal prosess B</h5></Col>
        </Row>
        <Row>
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
