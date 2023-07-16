import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cabbage extends Component {
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
            <h1>Cabbage is an excellent vegetable to use in cooking as it becomes wonderfully tender when cooked, allowing it to absorb 
                the delicious flavors of the other ingredients. Despite this tenderness, the chopped cabbage leaves still provide a delightful 
                chewiness to the dish. I truly enjoy the harmonious combination of flavors that comes together in this Cabbage Curry.</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 tablespoon olive oil</li> 
                <li>1 teaspoon salt (adjust to taste)</li> 
                <li>1 tablespoon coriander powder</li> 
                <li>1 teaspoon tumeric powder</li> 
                <li>1/2 teaspoon red chili powder (adjust to taste)</li> 
                <li>1 teaspoon cumin seeds</li>
                <li>1 teaspoon mustard seeds</li> 
                <li>1 teaspoon Garam Masala spice found in Indian Grocery store</li> 
                <li>1 cup green peas </li>
                <li>1 medium or large onion (finely chopped)</li> 
                <li>1 medium tomato (finely chopped)</li> 
                <li>3 cloves of garlic minced</li>
                <li>1 inch of ginger minced </li>
                <li>4 cups of cabbage shredded</li>
                <li>1 teaspoon kasuri methi / dry fenugreek leaves</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>In a large non stick pan heat 3 tsp oil and saute 1 tsp cumin seed and 1 tsp mustard seeds till they turn aromatic</li>
                <li>Add 1 onion followed by minced ginger, and minced garlic. Saute the onion till they turn translucent.</li>
                <li>Add 1 tomato and saute until they turn soft and mushy.</li>
                <li>Add 1 teaspoon turmeric, 1/2 teaspoon chilli powder, 1 tablespoon coriander powder and 1 teaspoon salt to the pan and saute all
                    the ingredients well.</li> 
                <li>Add 4 cups of cabbage and 1 cup of green peas.</li>
                <li>Stir gently to combine all the ingredients. Cook for a few minutes until the cabbage is cooked and the peas are tender.</li>
                <li>Now add 1 teaspoon garam masala powder and mix well.</li>
                <li>Cook the ingredients in the pan for 5 minutes.</li>
                <li>Serve the cabbage curry with Indian bread.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="cabbage.jpg" thumbnail rounded fluid></Image>
            <div>
                <h2>Aloo Gobi Preparation Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="sh0Td6f1JO4" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="sh0Td6f1JO4" opts={optsDesktop} />
                </MediaQuery>
            </div>
        </div>
      );
    }
}
     
export default Cabbage