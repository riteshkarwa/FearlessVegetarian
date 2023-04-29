import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Khichdi extends Component {
    render() {
      return (
        <div>
            <h1>
            Couscous is a North African dish made from tiny steamed balls of semolina flour. Though we think of it and cook it as a grain, it is actually a type of pasta. 
            Like rice, couscous is a blank canvas that can take on any flavors you want to add.
            </h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
            </Row>
            <Row className="cooktimerow">
              <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1/2 cup Moong Dal</li>
                <li>1/2 cup Rice</li>
                <li>2 tablespoon olive oil</li>  
                <li>1 whole tomatoe finely chopped</li>
                <li>1 whole onion finely chopped</li>  
                <li>1 teaspoon cumin seeds</li> 
                <li>3 small potatoes finely chopped</li>
                <li>1/4 cup sweet peas</li>
                <li>1/4 teaspoon turmeric powder</li>
                <li>1/4 teaspoon red chilli powder</li>
                <li>1/4 teaspoon salt</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Rinse 1/2 cup moong lentils(can be found in Indian store) and 1/2 cup rice together. Then soak both of them for about 20 minutes in water.</li>
                <li>Now heat 2 tablespoons olive oil in a pressure cooker or insta Pot metal pot, then add 1 teaspoon cumin seeds (jeera).</li>
                <li>As soon as the cumin begins to splutter, add the 1 whole finely chopped onions.</li>
                <li>Sauté until the onions soften and turn translucent.</li>
                <li>When the onions have become translucent, add in ⅓ to ½ cup chopped tomatoes, ½  teaspoon chopped green chili and 1 teaspoon chopped ginger.</li> 
                <li>Mix well with the sautéed onions.</li>
                <li>After stirring in the tomatoes, add 1/4 teaspoon turmeric powder and a pinch of asafoetida (hing). Adding hing is optional.</li>
                <li>Sauté until the tomatoes soften stirring often.</li>
                <li>Next, add the drained rice and moong lentils to the pressure cooker, and stir for about a minute or until all the ingredients are fully combined.</li>
                <li>Season with salt to taste</li>
                <li>Mix and sauté the rice and lentils for a minute</li>
                <li>Add 4 cups water and mix really well, set the Instant Pot to pressure cook setting and set the timer for 6 minute</li>
                <li>When the Instant Pot beeps, let the pressure release naturally.</li>
                <li>Enjoy your delicious Khichdi with mango pickle.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="khichdi.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}

export default Khichdi