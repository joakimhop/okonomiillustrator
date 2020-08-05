import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import readCookie from '../helpers/readCookie';
import Box from './box';

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
              <h2>RÅLEVERANDØR</h2>
            </Container>
          </Col>
          <Col lg={7}>
            <Container className="main-container">
              <Row className="costs text-center">
                <Col><h2>ÅRLIGE BETALBARE KOSTNADER</h2></Col>
              </Row>
              <Row className="in-stock text-center">
                <Col><h2>LAGER - PROSESSER - VARER I ARBEID</h2></Col>
              </Row>
              <Row className="finance text-center">
                <Col><h2>PENGER - FINANS</h2></Col>
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
            </Container>
          </Col>
          <Col>
            <Container className="right-container">
              <h2>KUNDE</h2>
            </Container>
          </Col>

        </Row>
      </Container>
    </DndProvider>
  );
};

export default Board;
