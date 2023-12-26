import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
 
class Potato extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Any Time Potato Delight: Indian Spiced Goodness with Vegan Sausage Perfection</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potato" />
          <meta 
            name="description"
            content="Savor the delicious fusion of Any Time Potato seasoned with authentic Indian spices, paired with flavorful Vegan Sausage. This mouthwatering dish offers a perfect blend of spices, textures, and plant-based goodness. Whether for breakfast, lunch, or dinner, indulge in a satisfying and aromatic culinary experience. Elevate your vegan dining with this delectable combination of seasoned potatoes and savory vegan sausage – a delightful feast for any time of the day!"
          />
          <meta
            name="keywords"
            content="Any Time Potato, Indian Spices, Vegan Sausage, plant-based cuisine, vegan recipes, versatile potato dishes, savory spiced potatoes, flavorful vegan sausage, vegan meal ideas, plant-based cooking, aromatic Indian spices, delicious vegan options, anytime dining, vegan comfort food"
          />
        </Helmet>
        <h1>Any Time Potato Seasoned with Indian Spices served with Vegan Sausage</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
            <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol> 
            <li>1 teaspoon ginger powder </li> 
            <li>1 teaspoon onion powder </li> 
            <li>1 tablespoon coriander powder </li> 
            <li>1/8 teaspoon tumeric powder</li> 
            <li>1/8 teaspoon red chili powder</li> 
            <li>1 tablespoon curry powder</li> 
            <li>1 teaspoon cumin powder</li> 
            <li>4 whole potatoes</li>
            <li>Salt as per taste</li> 
            <li>1/2 onion</li> 
        </ol>
        <div className="ingredients">Instruction</div>
        
        <ol> 
            <li>Take some olive oil in a non stick pan and heat it up</li> 
            <li>Slice the potatoes vertically</li>
            <li>Then use a food chopper to chop each potato slice into small square pieces</li>
            <li>Add 1 teaspoon cumin powder</li> 
            <li>Add the potatoes in the pan</li> 
            <li>Cook the potatoes for about 15 to 20 minutes till they get transparent. Constantly stir the potatoes so they do not stick to the bottom of the pan</li> 
            <li>Once the potatoes starts to turn transparent add finely chopped onions</li> 
            <li>Add all the spices ginger powder, onion powder, coriander powder, chili powder, tumeric powder, curry powder</li> 
            <li>Nicely stir the potatoes so the spices are nicely mixed </li> 
            <li>Add salt as per taste</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="anytimepotato.jpg" thumbnail rounded fluid></Image>
      </div>
    );
  }
}
 
export default Potato;