import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Finance = () => (
  <Row className="finance text-center">
    <Col><h3>PENGER - FINANS</h3></Col>
    <Row>
      <Col>
        <Box name="bank" title="Bank/Kasse" />
      </Col>
      <Col>
        <Box name="kundefordringer" title="Kundefordringer" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box name="renter" title="Renter" />
      </Col>
      <Col>
        <Box name="lan" title="Lån" />
      </Col>
    </Row>
  </Row>
);

export default Finance;
