import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';

class Brownlentils extends Component {
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
        <h1>Whole Masoor Dal is also popularly known as Brown Lentils or Sabut Masoor ki Dal. These are basically whole red lentils which are popular all over the world.</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
            <li>2 tablespoon olive oil</li>
            <li>1 teaspoon Cumin seeds</li> 
            <li>1 Green chili pepper</li> 
            <li>1 medium onion diced</li> 
            <li>3 cloves of Garlic minced</li>
            <li>1 inch of Ginger grated</li>
            <li>1 cup Brown lentils (Whole Masoor Dal) rinsed</li>
            <li>2.5 cups of water</li>
            <li>1 tablespoon Lime juice</li>
            <li>1/4 teaspoon Ground Turmeric (Haldi powder)</li>
            <li>1 tablespoon Coriander powder (Dhaniya powder)</li>
            <li>1/2 teaspoon Red Chili powder (Mirchi powder) adjust to taste</li>
            <li>1/2 teaspoon Garam Masala</li>
            <li>1 teaspoon Salt adjust to taste</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol> 
            <li>Start the pressure cooker in sauté mode and let it heat. Add oil and cumin seeds. Saute for 30 seconds.</li>
            <li>When the cumin seeds starts to splutter or change color, add green chili, onions, ginger and garlic. Sauté for 3 minutes 
                until the onions become golden brown while stirring frequently.</li>
            <li>Add the chopped tomatoes to the pan and cook it till the tomatoes becomes soft.</li>
            <li>Add all the spices one by one: 1/4 teaspoon tumeric powder, 1/2 teaspoon red chili powder, 1 tablespoon coriander powder.</li>
            <li>Add the lentils, water and stir well. Close the instant pot lid with vent in sealing position.</li>
            <li>Change the instant pot setting to manual or pressure cook mode at high pressure for 12 mins. After the instant pot beeps, let the pressure release naturally.</li>
            <li>Open the pot. Add the lime juice and stir the dal.</li>
            <li>Enjoy your lentil curry with Basmati Rice.</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="brownlentils.jpg" thumbnail rounded fluid></Image>
        <div>
          <h2>Brown Lentils Whole Masoor Dal Preparation video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="eL9iqpULMRk" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="eL9iqpULMRk" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}
 
export default Brownlentils;
