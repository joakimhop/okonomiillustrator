import React from 'react';
import { useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Finance from './finance';
import Stock from './stock';
import Costs from './costs';
import CommodityStock from './commodityStock';
import Customer from './customer';
import Establishment from './establishment';
import deleteSessionCookie from '../helpers/deleteSessionCookie';

const Board = () => {
  const gameData = useSelector((state) => state.game);

  const handleLogout = () => {
    deleteSessionCookie();
    window.location.reload();
  };

  return (
    <div>
      {gameData.loading ? 'loading' : (
        <DndProvider backend={HTML5Backend}>
          <Container>
            <Row>
              <Col lg={2}>
                <div className="left-container">
                  <Button variant="secondary" type="submit" onClick={() => handleLogout()}>
                    Logg ut
                  </Button>
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
                  <Establishment />
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
