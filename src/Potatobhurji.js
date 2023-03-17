import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
 
class Potatobhurji extends Component {
  render() {
    return (
      <div>
        <h1>Any Time Potato Seasoned with Indian Spices</h1>
        <p className="serving"> <FontAwesomeIcon icon={faBowlFood} /> Yields: 2 Servings  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;        
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes
        </p>
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
            <li>Take some olive oil in a non stick pan and heat it up.</li> 
            <li>Slice the potatoes vertically.</li>
            <li>Then use a food chopper to chop each potato slice into small square pieces.</li>
            <li>Add 1 teaspoon cumin powder.</li> 
            <li>Add the potatoes in the pan.</li> 
            <li>Cook the potatoes for about 15 to 20 minutes till they get transparent. Constantly stir the potatoes so they do not stick to the bottom of the pan.</li> 
            <li>Once the potatoes starts to turn transparent add finely chopped onions.</li> 
            <li>Add all the spices ginger powder, onion powder, coriander powder, chili powder, tumeric powder, curry powder.</li> 
            <li>Nicely stir the potatoes so the spices are nicely mixed.</li> 
            <li>Add salt as per taste.</li>
        </ol>

        <h1>Indian style scrambled eggs recipe is healthy, filling, very quick to make and extremely pleasing to Indian palates. The egg bhurji requires few ingredients and chances are you already have them in your kitchen. 
          egg bhurji also serves as a filling breakfast or thanks to its high protein content, is a perfect post-workout snack at any time of the day</h1>
        <p className="serving"> <span class="icon-spoon-knife"></span> Yields: 2 Servings  &nbsp;  &nbsp;  &nbsp;  &nbsp;         
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes
        </p>
        <div className="ingredients">Ingredients</div>
        <ol> 
            <li>1 tablespoon of fresh grated ginger</li> 
            <li>1 teaspoon onion powder </li> 
            <li>1 tablespoon coriander powder </li> 
            <li>1/8 teaspoon tumeric powder</li> 
            <li>1/8 teaspoon red chili powder</li> 
            <li>1 tablespoon garlic powder</li> 
            <li>1 teaspoon cumin powder</li> 
            <li>3 eggs</li>
            <li>Salt as per taste</li> 
            <li>1 whole big onion</li> 
            <li>1 whole big tomato</li> 
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
            <li>Add approximately 2 tablespoons of olive oil to a pan non stick pan, set it on a medium heat.</li>
            <li>Add cumin seeds, curry leaves, and onions. Sprinkle some salt on the onion so it cooks faster.</li>
            <li>Stir fry the onions till they turn translucent, it should take approximately 2 minutes.</li>
            <li>Next add chopped green chillies, turmeric powder and chopped tomatoes.</li>
            <li>Stir fry the tomatoes till they are slightly soft and add red chilli powder.</li>
            <li>Give that a quick stir.</li>
            <li>Break 3 eggs depending upon the amount of people eating the dish. Here I am considering serving amount to be one person.</li>
            <li>Add 1/8 teaspoon tumeric powder and sprinkle some salt.</li>
            <li>Hold the whisk firmly and begin to slowly whisk the egg whites. Use your other hand to hold onto the bowl. Use a circular motion and make about two rotations.</li>
            <li>Add the beaten eggs liquid to the pan, add in black pepper powder and fresh lime juice.</li>
            <li>Continue to stir the eggs till all the liquid evaporates.</li>
            <li>Add salt as needed and break up the egg chunks into smaller pieces with your spatula.</li>
            <li>Combine the two dishes anytime potato with scrambled eggs to make a combo.</li>
            <li>Garnish with cilantro leaves.</li>     
        </ol>
        <h2>Final Product</h2>
        <Image src="potatobhurji.jpg" thumbnail rounded fluid></Image>
      </div>
    );
  }
}
 
export default Potatobhurji;