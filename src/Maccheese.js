import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Maccheese extends Component {
    render() {
      return (
        <div>
            <h1>Macaroni and Cheese baked in a casserole dish. Recipe is simple and delicious! </h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 4 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 pound cooked elbow or shell macaroni </li> 
                <li>Butter or Crisco for greasing the pan </li> 
                <li>3 cups half and half or whole milk (skim milk would work too)</li> 
                <li>Cheese of your choice used for layering (Chedar or American)</li>
                <li>12 buttery crackers crushed to use as topping</li>
                <li>2 teaspoons paprika</li>
                <li>Salt and Pepper, to taste</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Heat oven to 350°F. Grease a 13x9 baking pan or casserole dish. </li>
                <li>Spoon in 1/3 the cooked macaroni and one cup of milk then top with 4 to 6 slices of cheese. Repeat this two more times to make 3 layers</li> 
                <li>For the topping, place the crackers in a bag and crush them with your hands or with a rolling pin</li>
                <li>Mix in the salt, pepper, and paprika</li>
                <li>Sprinkle mixture on top of the macaroni and cheese</li>
                <li>Bake until bubbly, or about 35 to 45 minutes.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="mac.jpg" thumbnail rounded fluid></Image>
            <div>
              <h2>Macaroni and Cheese Preparation Video</h2>
              <MediaQuery maxWidth={767}>
                <div className="video-responsive">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/p233zsNXGsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </MediaQuery>
              <MediaQuery minWidth={767}>
                <YouTube videoId="p233zsNXGsE"/>
              </MediaQuery>
            </div>
        </div>
      );
    }
}

export default Maccheese;