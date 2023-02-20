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
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="potato.png" />
                        <Card.Body>
                            <Card.Title>Anytime Potato Seasoned with Indian Spices</Card.Title>
                            <Card.Text>
                            My favourite go to meal, can be made for breakfast lunch or dinner. Takes roughly 30 minutes to cook.
                            </Card.Text>
                            <Button variant="primary" href="/potato">Potato Recipe Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="sandwich.png" />
                        <Card.Body>
                            <Card.Title>Loaded Vegetable sandwich</Card.Title>
                            <Card.Text>
                            Delicious Vegetable Sandwich super easy to make and very filling.
                            </Card.Text>
                            <Button variant="primary" href="/sandwich">Vegetable Sandwich Recipe Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
  }
}
 
export default Recipe;