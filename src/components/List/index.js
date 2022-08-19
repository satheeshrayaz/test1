import "./styles.css";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function List() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Row className="justify-content-md-center">
          <Col md="3" className="listname">
            1 of 3
          </Col>
          <Col md="3" className="listname">
            Variable width content
          </Col>
          <Col md="3" className="listname">
            3 of 3
          </Col> 
        </Row>
      </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}
