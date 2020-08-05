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
          <Col>
            <Container className="left-container">
              <CommodityStock />
            </Container>
          </Col>
          <Col lg={7}>
            <Container className="main-container">
              <Costs />
              <Stock />
              <Finance />
            </Container>
          </Col>
          <Col>
            <Container className="right-container">
              <Customer />
            </Container>
          </Col>

        </Row>
      </Container>
    </DndProvider>
  );
};

export default Board;
