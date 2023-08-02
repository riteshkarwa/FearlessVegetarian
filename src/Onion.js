import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Onion extends Component {
    render() {
        const optsDesktop = {
            height: '800',
            width: '1000',
        };
      
        const optsMobile = {
            height: '550',
            width: '325',
        };
      return (
        <div>
            <h1>Onion Curry is one of those recipes which is very easy and quick to make. It is a perfect dish to prepare when you are tired or want to make something in jiffy. 
                Not only it is easy, this recipe also taste great with Roti (Indian Bread), rice and dal.</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol>
                <li>1 tablespoon cooking oil</li> 
                <li>2 whole medium size onion</li> 
                <li>1/2 teaspoon Cumin seeds (Jeera)</li> 
                <li>1/2 teaspoon Mustard seeds</li>
                <li>1 teaspoon Coriander Powder (Dhania)</li> 
                <li>1/4 teaspoon Asafoetida (hing)</li> 
                <li>1/2 teaspoon Red Chilli powder</li> 
                <li>1/2 teaspoon Tumeric powder</li> 
                <li>1/2 tablespoon Garam Masala spice found in Indian Grocery store</li> 
                <li>1/2 teaspoon Curry powder found in Indian Grocery Store</li> 
                <li>1/2 teaspoon Kitchen King Masala found in Indian Grocery Store</li>
                <li>1/4 teaspoon fenugreek leaves for garnishing</li>
                <li>1 whole green chiles chopped</li>
                <li>Salt, to taste </li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Heat a tablespoon of oil in a large pan, add the asafoetida, cumin seeds and mustard seeds. Allow them to crackle.</li>
                <li>Once they crackle, add the onions, sprinkle some salt and cook the onions on medium heat until they are well roasted, gets a caramelized color and softened as well.</li>
                <li>Once the onions have a good color and has cooked through, add the remaining masalas: coriander powder, red chili powder(you can start with adding very
                    little in the beginning and add more towards the end of the dish), tumeric powder, garam masala powder, kitchen king masala, curry 
                    powder.</li>
                <li>Toss the onions until all the masalas get well coated on it.</li>
                <li>Once done, check the salt and spice levels and adjust to suit your taste. Turn off the heat and transfer the Onion Curry into a serving bowl.</li>
                <li>Crush the dried fenugreek leaves between your palms to release their aroma and flavor.</li>
                <li>Sprinkle the crushed leaves into the curry.</li>
                <li>That is it your Onion curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan).</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="onion.jpg" thumbnail rounded fluid></Image>
            <div>
                <h2>Aloo Gobi Preparation Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="HOjKlXrKBGY" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="HOjKlXrKBGY" opts={optsDesktop} />
                </MediaQuery>
            </div>
        </div>
      );
    }
}
     
export default Onion