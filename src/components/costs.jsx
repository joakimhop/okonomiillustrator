import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Costs = () => (
  <div className="costs text-center">
    <Row>
      <Col><h3>ÅRLIGE BETALBARE KOSTNADER</h3></Col>
    </Row>
    <Row className="align-items-end">
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
        <Box name="salg_admin" title="Salg/admin" />
      </Col>
      <Col>
        <Box name="utviklingskostnader" title="Utviklings- kostnader" />
      </Col>
      <Col>
        <h6>Ikke betalbare</h6>
        <Box name="avskrivning" title="Avskrivning" />
      </Col>
    </Row>
  </div>
);

export default Costs;
