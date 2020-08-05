import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Customer = () => (
  <Row className="customer text-center">
    <Col><h2>KUNDE</h2></Col>
    <Row>
      <Col>
        <Box name="kunde" title="Oppstilling av ferdigvarer" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="penger" title="Penger (kundens penger)" />
      </Col>
    </Row>

  </Row>
);

export default Customer;
