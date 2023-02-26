import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

class Blackeyedbeans extends Component {
  render() {
    return (
      <div>
        <h1>Black Eyed Beans Seasoned with Indian Spices. It is a tradition to eat them on 1st January for luck and prosperity. It doesn't
            have to be just 1st of January eat it all year long for more luck and prosperity.
        </h1>
        <div className="ingredients">Ingredients</div>
            <ol>  
                <li>1 teaspoon onion powder </li> 
                <li>1 tablespoon coriander powder </li> 
                <li>1/8 teaspoon tumeric powder</li> 
                <li>1/8 teaspoon red chili powder</li> 
                <li>1 tablespoon curry powder</li> 
                <li>1 teaspoon cumin powder</li> 
                <li>1 tablespoon Garam Masala spice found in Indian Grocery store</li> 
                <li>2 whole potatoes</li>
                <li>Salt as per taste</li> 
                <li>1 onion</li> 
                <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Grocery Store</li>
                <li>1/2 teaspoon Kitchen King Spice found in Indian Store</li>
                <li>5 piece of cloves</li>
                <li>2 small piece of ginger peeled</li>
                <li>2 dried curry leaves </li>
                <li>2 Whole Tomatoes </li>
                <li>2 cups of black eyed beans</li>
            </ol>
        <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Soak 2 cups of black eyed beans in a pot with water. Cover the beans with a few inches of water and leaving them on the counter. </li>
                    <li>Let the beans soak overnight </li>
                    <li>Take some olive oil in a non stick pan and heat it up</li>
                    <li>Add few cumin seeds and mustard seeds to the oil and let it crackle</li>
                    <li>Add pieces of ginger, whole garlic, red bell pepper, 2 tomatoes ,1 onion,  5 pieces of clove in a blender or food processor and turn it 
                        into a fine puree
                    </li>
                    <li>Add the puree to the non stick pan with oil heated up</li>
                    <li>Add all the  spices to the onion tomato red pepper puree ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, curry powder</li>
                    <li>Cover the pan and let it cook.</li>
                    <li>Let the spices cook for 10 min.</li> 
                    <li>Wash the black eyed beans thoroughly with water and add the beans to the pan</li> 
                    <li>Cook the black eyed beans for about 30 minutes till they become soft. Constantly stir the beans to mix it well with onion tomato puree which 
                        will act as a gravy for the curry</li> 
                    <li>Add salt as per taste</li>
                    <li>Add little bit of Kitchen King Spice, Garam Masala powder and Amchoor powder found in Indian Grocery Store</li>
                    <li>That is it your curry is ready. You can enjoy it with White Rice</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="blackeyedbeans.jpg" thumbnail rounded width="40%" height="40%"></Image>
      </div>
    );
  }
}


export default Blackeyedbeans;