import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

class Beetroot extends Component {
  render() {
    return (
      <div>
        <h1>Beetroot Curry with Coconut Milk and Lentils(Urad Dal). Beetroot is one of those wonder foods that can increase immunity, lower blood pressure and provide us with lot of essential vitamin and minerals.</h1>
        <p className="serving"> <FontAwesomeIcon icon={faBowlFood} /> Yields: 2 Servings  &nbsp;  &nbsp;  &nbsp;  &nbsp;         
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 45 minutes
        </p>
        <ol> 
            <li>1 Beetroot, peeled and chopped </li> 
            <li>1/2 big Jalapeno pepper </li> 
            <li>1 Cinnamon Stick</li> 
            <li>1 teaspoon Coriander Powder</li> 
            <li>1 teaspoon Mustard seeds </li> 
            <li>1 can of coconut milk</li>
            <li>1 tablespoon Urad Dal found in Indian store</li> 
            <li>Salt as per taste</li>
            <li>1 dried Curry leave</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol> 
            <li>To begin making beetroot curry boil the beetroot in a pressure cooker or pot till it gets tender.</li> 
            <li>Once the beetroot is tender slice it vertically and use food chopper to chop each slice into small square pieces.</li>
            <li>Take some olive oil in a non stick pan and heat it up.</li>
            <li>Add beetroot pieces to the non stick pan.</li> 
            <li>Add chopped Jalapeno peppers, salt, tumeric powder, coriander powder and Cinnamon stick.</li> 
            <li>Pour a can of coconut milk.</li> 
            <li>Stir the ingredients and cook it on medium flame for 10-15 min close the pan with a lid to speed up the cooking process.</li> 
            <li>Heat a teaspoon of oil in a separate small pan.</li> 
            <li>Add the mustard seeds and White Urad dal found in Indian Grocery Store. Allow it to crackle and roast for couple of minutes.</li> 
            <li>Add salt as per taste.</li>
            <li>Your curry is ready, taste it to adjust spice level and salt. You can eat it with rice or Garlic Naan(Indian Bread) found in Indian Grocery Store.</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="beetroot.jpg" thumbnail rounded fluid></Image>
      </div>
    );
  }
}
   
export default Beetroot;