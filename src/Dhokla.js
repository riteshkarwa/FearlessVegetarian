import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dhokla extends Component {
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
                <h1>Khaman Dhokla is a delectable and spongy snack that originates from the western part of India. It's made from chickpea flour 
                    and has a light, airy texture with a mildly tangy and slightly sweet flavor. The dish is often steamed, resulting in its 
                    distinctive softness, and is typically garnished with a tempering of mustard seeds, curry leaves, and green chilies, 
                    which adds a delightful crunch and a hint of spiciness. Khaman Dhokla is not only a popular tea-time treat in India but 
                    also a wonderful introduction to the country's rich culinary diversity for those new to Indian cuisine.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                    <ol>  
                        <li>1 cup Chickpea Flour (Besan)</li> 
                        <li>2 tablespoon cooking oil</li> 
                        <li>water 2 tbsp initially and then 1/2 cup later in the process</li>
                        <li>1 teaspoon citric acid</li> 
                        <li>3/4 teaspoon baking soda</li> 
                        <li>Salt as per taste</li> 
                        <li>1/4 teaspoon hing know as Asafoetida</li> 
                        <li>1/4 teaspoon turmeric powder</li>
                        <li>3 teaspoon sugar</li>
                        <li>1 inch piece of ginger peeled</li>
                        <li> </li>
                    </ol>
                <div className="ingredients">Instruction</div>
                <li>Add 2 tablespoon cooking oil to the blender.</li>
                <li>Next add 3 teaspoon sugar to the blender.</li>
                <li>Next add 1/4 teaspoon hing powder also know as Asafoetida to the blender.</li>
                <li>Next add 1/4 teaspoon turmeric powder.</li>
                <li>Next add 1 teaspoon citric acid to the blender.</li>
                <li>Next add 1 teaspoon citric acid to the blender.</li>
                <li>Chop 1.5 inch of ginger into pieces and add it to the blender</li>
                <li>Chop 1 whole or  1/2 green chile (depending on the spice tolerance) into pieces and add to the blender</li>
                <li>Blend all the ingredients in a blender.</li>
                <li>Add 1 cup chickpea flour (besan) in a mix. Do use gram flour which has a fine texture.</li>
                <li>Run the blender once again to mix the chickpea batter with other ingredients</li>
                <li>Next add 1/2 cup of water to the blender</li>
                <li>Add 1/4 teaspoon salt</li>
                <li>Run the blender once again to mix all the ingredients.</li>
                <li>Rest the batter for 10 minutes.</li>
                <div className="ingredients">Steaming the Dhokla</div>
                <li>Pour 2.5 to 3.5 cups of water to a pot or a steamer. Place a steel rack or a ring or a long legged trivet. Cover and bring 
                    the water to a rolling boil. (I pour about 4 cups as I use a large pot)</li>
                <li>Meanwhile grease a 8 inch pan or container with 1/2 to 1 teaspoon oil. I prefer using cooking spray.
                    Grease the sides as well.</li>
                <li>When the water in the steamer is ready. Add 3/4 teaspoon baking soda to the batter.</li>
                <li>After adding the baking soda to the blender run the blender to mix the baking soda with the batter.</li>
                <li>Immediately pour the chickpea batter to the greased pan. Even out the top with the whisk. 
                    Quickly place it in the steamer and cover it. Steam it for 15 mins on a moderately high flame. It has to
                    be steamed constantly for 15 mins. Once done, a knife inserted in the center should come out clean. Turn off the
                    stove and leave it covered in the pot for another 5 mins.</li>
                <div className="ingredients">Tempering the Dhokla</div>
                <li>Pour 2 tablespoon oil to a non stick pan and heat it. Add 1 tablespoon mustard seeds.</li>
                <li>When they begin to crackle, add curry leaves and sliced green chilies.</li>
                <li>Saute for awhile until the curry leaves turn crisp.</li>
                <li>Add 1 teaspoon sugar and 1/8 teaspoon salt. Pour 3/4 cup of water. Bring it to a rolling boil and turn off.</li>
                <li>Stir a few times to dissolve the sugar.</li>
                <li>Cover this and leave it to cool down a bit.</li>
                <li>Remove the dhokla pan from the steamer and cool it completely.</li>
                <li>After it cools down, using a knife to loosen the sides if needed.</li>
                <li>Keep a plate over the pan and invert the dhokla to the plate.</li>
                <li>Ensure the dhokla has cooled completely before removing it. Cut to squares.</li>
                <li>Spread the tempering mix all over the khaman dhokla. First pour half cup of the tempering water and wait for a while.</li>
                <li>Then pour the rest. All of the water will be absorbed by the dhokla.</li>
                <h2>Final Product</h2>
                <Image src="dhokla.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Yogurt Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                    <YouTube videoId="IZWRxGrtZF4" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                    <YouTube videoId="IZWRxGrtZF4" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>

        );
    }

}

export default Dhokla