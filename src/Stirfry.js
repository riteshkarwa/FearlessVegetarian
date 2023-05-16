import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Stirfry extends Component {
    render() {
      return (
        <div>
            <h1>Stir Fry Vegetables recipe uses Mandarin Teriyaki Sauce. It is super easy to make. For protein you can use Tofu or Tempeh</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
            </Row>
            <Row>
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 cup Panda Express Chinese Kitchen Mandarin-Teriyaki Sauce</li> 
                <li>3 bell peppers: red, yellow, and green</li> 
                <li>1 teaspoon fresh ginger root, minced</li>
                <li>1/2 teaspoon fresh garlic, minced</li>
                <li>1 tablespoon Sesame oil</li>
                <li>1 tablespoon olive oil</li>
                <li>Salt to taste</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>First step is to prepare Rice. Wash the rice before using it. I use 1 cup rice to 1.5 cup water in a pot add butter when it
                    starts to boil turn the flame to low and cook the rice for 10 min cover the pot.
                </li>
                <li>Thinly slice the tofu into rectangles. Dice the peppers into large chunks. Peel and mince the ginger. Peel and mince the garlic
                    Thinly slice the white onion</li> 
                <li>In your skillet or large pan, heat 1 tablespoon sesame oil over medium high heat. Add the small pieces of tofu, 
                    sprinkle with a few pinches  salt ginger powder, garlic powder and paprika. Mix all the ingredients and cook for 5 minutes.</li>
                <li>Remove the cooked tofu from the pan or skillet</li>
                <li>Add 1 tablespoon sesame oil to the same skillet or pan.Add minced ginger, minced garlic, peppers, chopped onion, and another pinch of salt. Saute until the vegetables are just tender, about 3 to 5 minutes.</li>
                <li>Turn off the heat. Add the tofu and teriyaki sauce and stir together until everything is coated with sauce.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="stirfry.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}

export default Stirfry