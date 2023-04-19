import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Hakkanoodle extends Component {
    render() {
      return (
        <div>
            <h1>Hakka Noodles is a popular Indo-Chinese dish of stir fried noodles, vegetables and sauces.</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>2 tbsp oil </li> 
                <li>2 clove garlic (finely chopped) </li> 
                <li>1 chilli (slit)</li> 
                <li>2 inch ginger (chopped)</li>
                <li>2 tbsp spring onion (chopped)</li>
                <li>1 onion (sliced)</li>
                <li>1 capsicum (sliced)</li>
                <li>1/2 cabbage (shredded)</li>
                <li>1 carrot (sliced)</li>
                <li>5 snap peas</li>
                <li>2 tbsp chilli sauce</li>
                <li>2 tbsp soy sauce</li>
                <li>2 tbsp tomato sauce</li>
                <li>1/2 tsp pepper powder</li>
                <li>1/2 tsp salt</li>
                <li>2 tbsp vinegar</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Firstly cook the noodles as per package instructions on the back</li>
                <li>In a large wok heat 2 tbsp oil and add 2 clove garlic, 1 chilli, 2 inch ginger and 2 tbsp spring onion.</li> 
                <li>Stir fry on high flame.</li>
                <li>Now add 1 onion, 1/2 capsicum, 1/2 cabbage, 1 carrot, 2 beans. stir fry until the vegetables shrink slightly</li>
                <li>Further add 2 tbsp chilli sauce, 2 tbsp soy sauce, 2 tbsp tomato sauce, ½ tsp salt and ½ tsp pepper powder.</li>
                <li>Stir fry until the sauces well combine.</li>
                <li>Now add boiled noodles, 2 tbsp vinegar and stir fry.</li>
                <li>Also add 6 pieces of snap peas and 2 tbsp spring onions. Stir fry on high flame.</li>
                <li>That's it, enjoy veggie hakka noodles garnished with more spring onions.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="hakkanoodle.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}

export default Hakkanoodle;