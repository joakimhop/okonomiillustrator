import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const Finance = () => (
  <div className="finance text-center">
    <Row><Col><h3>PENGER - FINANS</h3></Col></Row>
    <Row className="align-items-end">
      <Col>
        <Box name="bank" title="Bank/Kasse" />
      </Col>
      <Col>
        <Box name="kundefordringer" title="Kundefordringer" />
      </Col>
    </Row>
    <Row className="align-items-end">
      <Col>
        <Box name="skatt" title="Skatt" />
      </Col>
      <Col>
        <Box name="renter" title="Renter" />
      </Col>
      <Col>
        <Box name="lan" title="Lån" />
      </Col>
    </Row>
  </div>
);

export default Finance;
