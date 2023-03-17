import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

class Saagpaneer extends Component {
    render() {
        return (
          <div>
            <h1>Saag(Spinach) Panner is a popular vegetarian dish consisting of panner(Indian cheese) in a smooth, delicious and creamy Spinach gravy.</h1>
            <p className="serving"> <FontAwesomeIcon icon={faBowlFood} /> Yields: 2 Servings &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes
            </p>
            <div className="ingredients">Ingredients</div>
                <ol>  
                    <li>2 tablespoon olive oil</li> 
                    <li>1 tablespoon coriander powder </li> 
                    <li>1/8 teaspoon tumeric powder</li> 
                    <li>1/8 teaspoon red chili powder</li> 
                    <li>1 whole Swad Paneer packet</li> 
                    <li>1 teaspoon cumin powder</li> 
                    <li>1 tablespoon Garam Masala spice found in Indian store</li> 
                    <li>Salt as per taste</li> 
                    <li>1 onion</li> 
                    <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Store</li>
                    <li>1/2 teaspoon Kitchen King Spice found in Indian Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 small piece of ginger peeled</li>
                    <li>1 small box of baby spinach </li>
                    <li>2 cups of fresh cilantro levaes plucked</li>
                    <li>1 cup of mint leaves</li>
                    <li>2 Whole Tomatoes </li>
                </ol>
                <h2>All the ingredients ready to be put into a blender to make the gravy for the dish</h2>
                <Image src="saag_prep.jpg" thumbnail rounded fluid></Image>
            <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Take 2 tablespoon olive oil in a non stick pot and heat it up.</li> 
                    <li>Add pieces of ginger, whole garlic, cilantro leaves, Baby Spinach,  Mint leaves, 2 tomatoes, 1 onion,  5 pieces of clove in a mixer or food processor and turn it 
                        into a fine puree.
                    </li>
                    <li>Add the onion tomato spinach puree to the non stick pot with oil heated up.</li>
                    <li>Add all the  spices to the above  puree: ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, curry powder.</li>
                    <li>Cover the pot with a lid and let it cook.</li>
                    <li>Let the spices cook for around 10 min.</li> 
                    <li>Cut Paneer into small square pieces and add it to the pot</li> 
                    <li>Cook the P  aneer for about 10 minutes. Constantly stir the Paneer to mix it well with onion tomato spinach puree which 
                        will act as a gravy for the curry.</li> 
                    <li>Add salt as per taste.</li>
                    <li>Add little bit of Kitchen King Masala Spice, Garam Masala powder and Amchoor powder all of them can be found in Indian Grocery Store.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="saagpaneer.jpg" thumbnail rounded fluid></Image>
          </div>
        );
    }
}

export default Saagpaneer;