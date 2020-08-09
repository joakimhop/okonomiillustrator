import React from 'react';
import { useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Finance from './finance';
import Stock from './stock';
import Costs from './costs';
import CommodityStock from './commodityStock';
import Customer from './customer';

const Board = () => {
  const gameData = useSelector((state) => state.gameServer);

  return (
    <div>
      {gameData.loading ? 'loading' : (
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
      )}
    </div>
  );
};

export default Board;
