import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class Okra extends Component {
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
        <h1>Okra Dish made by adding onions and tomato. This Okra Dish tastes great and has very unique flavors that come from caramelizing the onions 
            at the first stage and then frying more diced onions on a high heat at the second stage. </h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol> 
            <li>2 teaspoon olive oil</li> 
            <li>2 medium onion </li> 
            <li>1/2 teaspoon cumin seeds</li>
            <li>1 tablespoon coriander powder </li> 
            <li>1/8 teaspoon tumeric powder</li> 
            <li>1/8 teaspoon red chili powder</li> 
            <li>4 cloves of garlic</li>
            <li>5 pieces of cloves</li>
            <li>2 small piece of ginger peeled</li>
            <li>1 teaspoon cumin powder</li> 
            <li>1 teaspoon Garam Masala powder</li> 
            <li>Salt as per taste</li> 
            <li>1 teaspoon Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
            <li>1 teaspoon Amchur powder (dried mango powder) found in Indian store</li> 
            <li>2 whole tomato</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol> 
            <li>Rinse Okra under running water well and drain them. Wipe them dry with a clean kitchen cloth. Chop them to 3/4 to 1 inch pieces.</li> 
            <li>Pour 1 tablespoon of olive oil to a hot non-stick pan. Fry the okra on a medium high flame stirring often until they are half cooked.
            </li>
            <li>Keep stirring to fry them evenly. Reduce the flame if needed in between. Fry them until they are no more slimy and partially cooked. We don't need fully cooked okra. It took me exactly 6 minutes to cook down to this stage. 
                Transfer to a plate. </li> 
            <li>Pour 2 tablespoons oil to the same pan. Turn down the flame to low. Then add cumin.</li>
            <li>Add onions, ginger pieces, garlic cloves, tomato, pieces of cloves to a blender and turn it into a puree.</li>
            <li>Add the puree to the non stick pan and saute them </li>
            <li>Then add garam masala powder, salt, coriander powder, tumeric powder, chilli powder to the pan and mix it with the puree.</li>
            <li>Mix and saute this masala very well until a nice aroma comes out. This takes about 3 to 4 minutes.</li> 
            <li>Cover and cook on an medium heat until the masala cooks well and turns thick.</li> 
            <li>Add okra, amchur powder, and fenugreek leaves. Mix well. Crush the fenugreek leaves in ur hand before adding</li> 
            <li>When you are done cooking the okra, make the tempering in a different pan. Pour 1 tablespoon oil to another small pan. Keep the flame to high and add the onion layers.</li> 
            <li>Fry for 2 minutes until a nice aroma comes out. The onions must become transparent yet remain crunchy.</li>
            <li>Quickly pour this (onions along with oil) to the okra dish. Also add  coriander leaves. Give a gentle mix from the sides 
                Cover and turn off the stove.</li> 
            <li>Serve Okra dish  with rice or roti, mango pickle, veggie salad. </li>      
        </ol>
        <h2>Final Product</h2>
        <Image src="okra.jpg" thumbnail rounded fluid></Image>
        <div>
          <h2>Delicious and flavorful Okra Preparation Video</h2>
          <MediaQuery maxWidth={767}>
              <YouTube videoId="ZyAsSnUKUNI" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
              <YouTube videoId="ZyAsSnUKUNI" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}
 
export default Okra;