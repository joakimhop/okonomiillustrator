import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import readCookie from '../helpers/readCookie';
import Finance from './finance';
import Stock from './stock';
import Costs from './costs';
import CommodityStock from './commodityStock';
import Customer from './customer';

const Board = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookieData = readCookie();
    if (cookieData) {
      dispatch({ type: 'INIT', data: cookieData });
    }
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Row>
          <Col lg={2}>
            <div className="left-container">
              <CommodityStock />
            </div>
          </Col>
          <Col lg={8}>
            <div className="main-container">
              <Costs />
              <Stock />
              <Finance />
            </div>
          </Col>
          <Col lg={2}>
            <div className="right-container">
              <Customer />
            </div>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

export default Board;
