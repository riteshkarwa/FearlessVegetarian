import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

class Potatocapsicum extends Component {
    render() {
        return (
          <div>
            <h1>Potato Curry with Roasted Red Bell Pepper Sauce Seasoned with Indian Spices</h1>
            <div className="ingredients">Ingredients</div>
                <ol> 
                    <li>1 teaspoon ginger powder </li> 
                    <li>1 teaspoon onion powder </li> 
                    <li>1 tablespoon coriander powder </li> 
                    <li>1/8 teaspoon tumeric powder</li> 
                    <li>1/8 teaspoon red chili powder</li> 
                    <li>1 tablespoon curry powder</li> 
                    <li>1 teaspoon cumin powder</li> 
                    <li>1 tablespoon Garam Masala spice found in Indian store</li> 
                    <li>4 whole potatoes</li>
                    <li>Salt as per taste</li> 
                    <li>1 onion</li> 
                    <li>Amchoor Powder - Dried Mango Powder found in Indian Store</li>
                    <li>Kitchen King Spice found in Indian Store</li>
                    <li> 5 piece of cloves</li>
                    <li> 2 small piece of ginger peeled</li>
                    <li> 2 dried curry leaves </li>
                    <li> 1 Red Bell Pepper </li>
                    <li> 2 Whole Tomatoes </li>

                </ol>
            <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Take some olive oil in a non stick pan and heat it up</li> 
                    <li>Add pieces of ginger, whole garlic, red bell pepper, 2 tomatoes ,1 onion,  5 pieces of clove in a mixer or food processor and turn it 
                        into a fine puree
                    </li>
                    <li>Add the puree to the non stick pan with oil heated up</li>
                    <li>Add all the  spices to the onion tomato red pepper puree ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish, tumeric powder, curry powder</li>
                    <li>Cover the pan and let it cook this the gravy thickens up</li>
                    <li>Then use a food chopper to cut the potatoes into to small square pieces</li>
                    <li>Let the spices cook for 10 min. Cover the pan with a lid</li> 
                    <li>Using a food chopper cut potatoes into small square pieces</li>
                    <li>Add the potatoes in the pan</li> 
                    <li>Cook the potatoes for about 15 to 20 minutes till they become soft. Constantly stir the potatoes to mix it well with onion tomato red pepper puree which 
                        will act as a gravy for the curry</li> 
                    <li>Add salt as per taste</li>
                    <li>Add little bit of Kitchen King Spice and amchoor powder</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="potatocapsicum.jpg" thumbnail rounded width="40%" height="40%"></Image>
          </div>
        );
    }
}

export default Potatocapsicum;