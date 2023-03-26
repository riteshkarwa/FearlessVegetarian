import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Alooparatha extends Component {
    render() {
      return (
        <div>
            <h1>Aloo Paratha potato stuffed flatbread is an unleavened whole wheat flatbread stuffed with a savory, spiced, mashed potato filling.</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 8 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 90 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>4 medium potatoes – boiled and mashed</li> 
                <li>1 green chilies – chopped finely </li> 
                <li>1/4 teaspoon kashmiri red chilli powder or cayenne pepper or paprika, optional</li> 
                <li>1/4 teaspoon Garam Masala</li> 
                <li>1/8 teaspoon red chili powder</li> 
                <li>1/4 teaspoon dry mango powder Amchoor masala found in Indian Grocery Store</li> 
                <li>1/2 teaspoon cumin powder</li>
                <li>1 tablespoon grated ginger</li> 
                <li>2 cups all purpose  flour </li>
                <li>1/2 teaspoon salt or add as required</li> 
                <li>1 tablespoon oil</li> 
                <li>water as required for kneading</li>
                <li>1 cup plain yogurt</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Boil the potatoes and peel them. Boil the potato in instant pot for 15 min with 1 cup water.</li>
                <li>Chop and then mash the potatoes with a potato masher.</li>
                <li>The potatoes should be mashed very well. There should be no lumps or small pieces in it.</li>
                <li>Saute finely chopped green chillies in a non stick pan for 5 min</li>
                <li>Saute finely chopped onion in a non stick pan for 5 min</li>
                <li>Now add the sauteed  onion and green chilies, garam masala powder, red chili powder, dry mango powder and salt to the mashed potato.</li>
                <li>Mix the spice powders and green chilies with the mashed potatoes very well. Check the taste and add more salt or red chili powder or dry mango powder as per your taste.</li> 
                <li>In another bowl or pan, take all purpose flour</li>
                <li>Make a well in the center. Add salt, oil and about half of the water.</li>
                <li>Bring the mixture together and knead into a smooth soft dough.</li>
                <li>Cover and keep the dough aside for 30 minutes.</li>
                <li>Pinch two small balls from the dough. Flatten them and dust with whole wheat flour.</li>
                <li>With a rolling pin, roll them into about 4 to 5 inches diameter rounds. Try making both the rounds of the same size.</li> 
                <li>On one of the rolled dough circle, place the potato stuffing in the center and keep about 1 inch empty space from the sides.</li> 
                <li>Gently place the second circle on top.</li> 
                <li>Press and seal the edges with your fingertips.</li>
                <li>Dust some flour on the stuffed paratha and roll into a round of about 7 to 8 inches in diameter or about the size of a normal roti or chapati.</li>
                <li>On a hot tava (tawa or skillet or griddle) place the rolled paratha.</li>
                <li>The tawa or skillet be hot and not at a low temperature. Cooking parathas at a low flame will harden them. Parathas ideally are crisp as well as soft.</li>
                <li>When the base is partly cooked, flip the alu paratha using a spatula or tongs.</li>
                <li>Spread some butter on the partly cooked part.</li>
                <li>Flip again and this time this side has to be cooked more than the previous side. You will see brown spots on the paratha.</li>
                <li>Spread some ghee on this side too. A well made and well roasted aloo ka paratha will puff up.</li>
                <li>Flip again once or twice till both the sides of aloo paratha are cooked properly. You should see crisp brown spots on the paratha. </li>
                <li>You can also press the paratha edges with a spatula or spoon, so that they are fried well. As some time, the paratha edges are not cooked well so keep this point in mind</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="paratha.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}
     
export default Alooparatha