import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class Recipe extends Component {
  render() {
    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="potato.png" />
                        <Card.Body>
                            <Card.Title>Anytime Potato Seasoned with Indian Spices</Card.Title>
                            <Card.Text>
                            My favorite go to meal, can be made for breakfast lunch or dinner. Takes roughly 30 minutes to cook.
                            </Card.Text>
                            <Button variant="primary" href="/potato">Anytime Potato Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="sandwich.png" />
                        <Card.Body>
                            <Card.Title>Loaded Vegetable Sandwich</Card.Title>
                            <Card.Text>
                            Appetizing Vegetable Sandwich super easy to make and very filling. It's a popular Indian food from the city of Mumbai
                            </Card.Text>
                            <Button variant="primary" href="/sandwich">Vegetable Sandwich Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="peanutsd.jpg" />
                        <Card.Body>
                            <Card.Title>Peanut Butter Toast with Apple slices and Cinnamon Sugar</Card.Title>
                            <Card.Text>
                            Delicious Peanut Butter Toast with Apple slices and Cinnamon sugar, super easy to make and very filling.
                            </Card.Text>
                            <Button variant="primary" href="/peanutsd">Peanut Butter Apple Toast Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="potatocapsicum.jpg" />
                        <Card.Body>
                            <Card.Title>Potato Curry with Roasted Red Pepper Sauce</Card.Title>
                            <Card.Text>
                            Potato Curry with Roasted Red Pepper Sauce, Seasoned with Indian Spices. Takes roughly 45 minutes to cook.
                            </Card.Text>
                            <Button variant="primary" href="/potatocapsicum">Potato Curry with Red Pepper Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="beetroot.jpg" />
                        <Card.Body>
                            <Card.Title>Beetroot Curry with Coconut Milk Served with Rice</Card.Title>
                            <Card.Text>
                            The Beetroot Curry with Coconut Milk is quick and easy to make for a weeknight dinner or a summertime party at home.
                            </Card.Text>
                            <Button variant="primary" href="/beetroot">Beetroot Curry Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="avocado.jpg" />
                        <Card.Body>
                            <Card.Title>Avocado Toast</Card.Title>
                            <Card.Text>
                            Super easy and delicious Avocado Toast. Takes roughly 15 minutes to cook. Good breakfast option if you have a busy schedule
                            </Card.Text>
                            <Button variant="primary" href="/avocado">Avocado Toast Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '20rem' , margin:'10px'}}>
                        <Card.Img variant="top" src="chipotle_1.jpg" />
                        <Card.Body>
                            <Card.Title>Chipotle Bowl</Card.Title>
                            <Card.Text>
                            Appetizing Chipotle Bowl easy to make for get together or party.
                            </Card.Text>
                            <Button variant="primary" href="/chipotle">Chipotle Bowl Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
  }
}
 
export default Recipe;