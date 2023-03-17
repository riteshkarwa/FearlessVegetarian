import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';


class Upma extends Component {
    render() {
      return (
        <div>
            <h1>Upma is a flavorful, tasty, savory and popular South Indian breakfast that is made with cream of wheat or semolina flour (called rava or suji), Urad dal, nuts, herbs and spices.</h1>
            <p className="serving"> <FontAwesomeIcon icon={faBowlFood} /> Yields: 2 Servings  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    
                <FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes
            </p>
            <div className="ingredients">Ingredients</div>
                <ol>  
                    <li>2 tablespoon olive oil</li> 
                    <li>8 to 10 curry leaves</li> 
                    <li>10 to 12 cashews</li> 
                    <li>1 teaspoon urad dal (hulled and split black gram)</li> 
                    <li>1 cup finely chopped onion</li> 
                    <li>1 tablespoon green chillies</li> 
                    <li>1 cup Rava also called cream of wheat or farina or semolina flour found in Indian store</li> 
                    <li>1 teaspoon finely chopped ginger</li>
                    <li>Salt as per taste</li> 
                </ol>
            <div className="ingredients">Instruction</div>
                <ol>
                    <li>Heat a non stick pan. Add 1 cup Rava(also called cream of wheat or farina or semolina flour).</li>
                    <li>Roast the rava on non stick pan. Stir often while roasting the rava.</li>
                    <li>The rava  grains should become fragrant and start to look dry, separate and crisp. Make sure rava 
                        does not turn brown.</li>
                    <li>Once the rava becomes fragrant and starts to look dry and crisp, switch off the flame and put the roasted rava on a plate and set aside.</li> 
                    <li>In a non stick pan, heat 2 tablespoons of olive oil.</li> 
                    <li>Add 1 teaspoon mustard seeds. When you hear the crackling sound of mustard seeds, it means they are getting fried.</li> 
                    <li>Now add the following ingredients:1 teaspoon cumin seeds, 1 teaspoon urad dal (husked and split black gram).</li> 
                    <li>Stirring often fry until the urad dal begin to brown a bit</li> 
                    <li>Immediately add 10 to 12 cashews and begin to fry on a low to medium-low heat.</li> 
                    <li>Now add the 1 cup of finely chopped onions.</li>
                    <li>Sauté the onions until they soften and become translucent on a low to medium-low heat.</li> 
                    <li>Then add 1 teaspoon chopped green chillies, 1 teaspoon chopped ginger and 8 to 10 curry leaves.</li> 
                    <li>Mix well and sauté for a few seconds.</li>
                    <li> Then add 2.5 cups water to this mixture</li>
                    <li>Add salt as required. Mix well and check the taste of water. It should be a bit salty but not too much.</li>
                    <li>On a medium to high flame, heat the water and let it come to a rolling boil.</li>
                    <li>When the water comes to a rolling boil, lower the flame to its lowest. Then add the rava in 4 to 5 batches with a spoon.</li>
                    <li> Once you add the first batch of rava, stir and mix immediately so that the roasted rava gets mixed evenly with the water.</li>
                    <li>Then add the next batch of rava. Mix and stir again very well ensuring that the batch of rava is mixed evenly in water.</li>
                    <li>Continue to add and stir the rava up to the last batch.</li>
                    <li>Quickly stir and mix very well. The rava grains will absorb water, swell and get cooked.</li>
                    <li>Cover and allow the rava upma to steam for 2 to 3 minutes on a low heat.</li>
                    <li>Your rava is done allow the rava to coll down for 5 minutes.</li>
                    <li>Lastly add about 2 tablespoons chopped coriander leaves (cilantro). You can add more coriander leaves if you like.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="upma.jpg" thumbnail rounded fluid></Image> 
        </div>
      );
    }
}

export default Upma