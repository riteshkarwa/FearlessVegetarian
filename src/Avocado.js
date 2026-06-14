import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';

class Avocado extends Component {
    render() {
        return (
            <div>
                <h1>Avocado Toast (Easy & Healthy Breakfast)</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 10–15 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 ripe avocado </li>
                    <li>2 slices Dave’s Killer Bread (21 Whole Grains & Seeds)</li>
                    <li>Everything but the Bagel Sesame Seasoning </li>
                    <li>Alessi Premium Balsamic Reduction</li>
                    <li>1/2 Tomato depending on the size</li>
                    <li>Few slices of onion</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Toast the bread until golden and crispy.</li>
                    <li>Cut the avocado, remove seed, and mash or slice it.</li>
                    <li>Spread avocado evenly on the toast.</li>
                    <li>Add tomato slices on top.</li>
                    <li>Add onion slices for crunch and flavor.</li>
                    <li>Drizzle balsamic reduction.</li>
                    <li>Sprinkle Everything But The Bagel seasoning.</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/avocado.jpg" alt="Avocado toast topped with tomato, onion, and seasoning" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/avocado.jpg" alt="Avocado toast topped with tomato, onion, and seasoning" thumbnail rounded fluid width="60%" height="60%"></Image>
                </MediaQuery>
            </div>
        );
    }
}

export default Avocado;
