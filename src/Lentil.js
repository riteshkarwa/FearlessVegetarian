import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class Lentil extends Component {
  render() {
    return (
      <div>
        <h1>Lentil Soup served with White Rice. Lentils are easy on your tummy and good source of Protein</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol> 
            <li>1 teaspoon ginger powder</li> 
            <li>1 teaspoon onion powder </li> 
            <li>1 tablespoon coriander powder </li> 
            <li>1/8 teaspoon tumeric powder</li> 
            <li>1/8 teaspoon red chili powder</li> 
            <li>1 tablespoon curry powder</li> 
            <li>1 teaspoon cumin powder</li> 
            <li>1 teaspoon Garam Masala powder</li> 
            <li>2 cups of Masoor Dal (Red Lentil) found in Indian Store</li>
            <li>Salt as per taste</li> 
            <li>Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
            <li>1 whole onion</li> 
            <li>1 whole tomato</li>
        </ol>
        <div className="ingredients">Instruction</div>
        
        <ol> 
            <li>Add 2 cups of Masoor dal to a pot or pressure cooker. Rinse it well a few times. Drain the water completely.</li> 
            <li>Add 5 cups of water and pressure cook it for 10 min. Make sure the lentils turns soft. Press down few lentils between your thumb and fore fingers.
                They should get mashed easily. Heat the lentils a little more if the lentils are not soft.
            </li>
            <li>Heat 2 tbsp olive oil on a medium heat in a non stick pot. </li> 
            <li>Add one after the other - 1⁄2 teaspoon cumin seeds, 2 chopped garlic cloves and 1 to 2 broken dried red chilies. You can also add a bay leaf or a sprig of curry leaves (pat dry).</li>
            <li>Add chopped onions and tomato and let it cook for 5 minutes.</li>
            <li>When the garlic turns slightly golden, turn the heat to low (or turn off if the pan is too hot). </li>
            <li>Add 1 pinch hing (Asafoetida) found in the Indian Grocery store, 1⁄4 teaspoon turmeric and 1⁄4 to 1⁄2 teaspoon red chili powder (adjust to taste). </li>
            <li>Add a pinch of Garam Masala found in the Indian Grocery store. Chili powder tends to burn quickly so pour this immediately to the pressure cooked lentil. </li> 
            <li>Add the pressure cooked lentil to the pot and 1 cup of water.</li> 
            <li>Constantly stir the potatoes so they do not stick to the bottom of the pan</li> 
            <li>Add salt as per taste and Rani Fenugreek Leaves Dried (Kasoori Methi)</li> 
            <li>You can garnish the lentil soup by sprinkling some finely chopped coriander leaves & lemon juice.</li> 
            <li>Serve Masoor Dal with rice or roti, mango pickle, veggie salad. </li> 
             
        </ol>
        <h2>Final Product</h2>
        <Image src="lentil.jpg" thumbnail rounded fluid></Image>
      </div>
    );
  }
}
 
export default Lentil;