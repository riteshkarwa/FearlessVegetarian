import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

class Beetroot extends Component {
  render() {
    return (
      <div>
        <h1>Beetroot curry with coconut milk and lentils</h1>
        <ol> 
            <li>1 Beetroot, peeled and chopped </li> 
            <li>1/2 big Jalapeno pepper </li> 
            <li>1 Cinnamon Stick</li> 
            <li>1 teaspoon Coriander Powder</li> 
            <li>1 teaspoon Mustard seeds </li> 
            <li>1 can of coconut mill</li>
            <li>1 tablespoon Masoor Dal(Spiced Red lentils) found in Indian store</li> 
            <li>Salt as per taste</li>
            <li>1 dried Curry leave</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol> 
            <li>To begin making coconut curry boil the beetroot in a pot till it gets tender</li> 
            <li>Once the beetroot is tender slice it up into circle and use food chopper to cut it into small square piece</li>
            <li>Take some olive oil in a non stick pan and heat it up</li>
            <li>Add beetroot pieces to the non stick pan</li> 
            <li>Add chopped Jalapeno peppers, salt, tumeric powder, coriander powder and Cinnamon stick</li> 
            <li>Pour a can of coconut milk</li> 
            <li>Stir the ingredients and cook it on medium flame for 10-15 min close the pan with a lid to speed up the cooking</li> 
            <li>Heat a teaspoon of oil in a separate small pan.</li> 
            <li>Add the mustard seeds and Masoor dal. Allow it to crackle and roast until for couple of minutes </li> 
            <li>Add salt as per taste</li>
            <li>Your curry is ready taste it to add any spices. You can eat it with rice or Garlic Naan(Indian Bread) found in Indian Grocery Store</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="beetroot.jpg" thumbnail rounded width="40%" height="40%"></Image>

      </div>
    );
  }
}
   
export default Beetroot;