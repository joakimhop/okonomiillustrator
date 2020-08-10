import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Establishment = () => (

  <div className="establishment text-center">
    <Col><h3>???</h3></Col>
    <Row>
      <Col>
        <Box name="etableringskostnader" title="Etableringskostnader" />
      </Col>
    </Row>
  </div>
);

export default Establishment;
