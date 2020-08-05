import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const CommodityStock = () => (
  <Row className="commoditystock text-center">
    <Col><h3>RÅVARE- LEVERANDØR</h3></Col>
    <Row className="text-center">
      <Col>
        <Box name="ravareleverandor" title="" />
      </Col>
    </Row>
  </Row>
);

export default CommodityStock;
