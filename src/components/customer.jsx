import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Customer = () => (
  <div className="customer text-center">
    <Col><h3>KUNDE</h3></Col>
    <Row>
      <Col>
        <Box name="ferdigvarer" title="Oppstilling av ferdigvarer" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="penger1kvartal" title="Penger 1 kvartal" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="penger2kvartal" title="Penger 2 kvartal" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="penger3kvartal" title="Penger 3 kvartal" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="penger4kvartal" title="Penger 4 kvartal" />
      </Col>
    </Row>
  </div>
);

export default Customer;
