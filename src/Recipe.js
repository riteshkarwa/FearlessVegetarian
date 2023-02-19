import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class Recipe extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="potato.png" />
                        <Card.Body>
                            <Card.Title>Anytime Potato Seasoned with Indian Spices</Card.Title>
                            <Card.Text>
                            My favourite go to meal, can we made for breakfast lunch or dinner.Takes roughlyy 30 minutes to cook
                            </Card.Text>
                            <Button variant="primary" href="/potato">Potato Recipe Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
  }
}
 
export default Recipe;