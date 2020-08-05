import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Costs = () => (
  <Row className="costs text-center">
    <Col><h3>ÅRLIGE BETALBARE KOSTNADER</h3></Col>
    <Row>
      <Col>
        <Box name="lonn" title="Lønn" />
      </Col>
      <Col>
        <Box name="leieravarelager" title="Leie råvarelager" />
      </Col>
      <Col>
        <Box name="leiearealprosessa" title="Leie areal prosess A" />
      </Col>
      <Col>
        <Box name="leiearealprosessb" title="Leie areal prosess B" />
      </Col>
      <Col>
        <Box name="leieferdigvarelager" title="Leie ferdigvare- lager" />
      </Col>
      <Col>
        <Box name="tappakunder" title="Tap på kunder" />
      </Col>
      <Col>
        <Box name="markedsforing" title="Markeds- føring" />
      </Col>
      <Col>
        <Box name="utviklingskostnader" title="Utviklings- kostnader" />
      </Col>
      <Col>
        <Box name="avskrivning" title="Avskrivning" />
      </Col>
    </Row>
  </Row>
);

export default Costs;
