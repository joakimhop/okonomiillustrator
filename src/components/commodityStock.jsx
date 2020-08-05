import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './box';

const CommodityStock = () => (
  <div className="commoditystock text-center">
    <Row><Col>RÅVARE- LEVERANDØR</Col></Row>
    <Row className="text-center">
      <Col>
        <Box name="ravareleverandor" title="" />
      </Col>
    </Row>
  </div>
);

export default CommodityStock;
