import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

class Couscous extends Component {
    render() {
      return (
        <div>
            <h1>
            Couscous is a North African dish made from tiny steamed balls of semolina flour. Though we think of it and cook it as a grain, it is actually a type of pasta. 
            Like rice, couscous is a blank canvas that can take on any flavors you want to add.
            </h1>
            <p className="serving"> <span class="material-symbols-sharp"> restaurant_menu </span> Yields: 1 Serving  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        
                <FontAwesomeIcon icon={faClock} />  Cooking Time: 180 minutes
            </p>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>2 cups of Pearl Couscous</li> 
                <li>1 cup of cherry tomatoes cut in half </li> 
                <li>1 cup of feta </li> 
                <li>Handful kalamata olives</li>
                <li>2 and 1/4 cup water </li>
                <li>Few slices of onions</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Take some olive oil in a non stick pan</li>
                <li>Add tofu cut into small square pieces</li>
                <li>Add some onion powder, garlic powder and paprika and pan fry until crispy.</li>
                <li>To start making couscous, bring the cooking liquid (preferably a flavorful chicken or vegetable broth) to a boil in a medium pot. Add a drizzle of olive oil, a pat of butter, and a little salt.</li> 
                <li>Next, add the couscous.</li>
                <li>Cooking the couscous on a low flame for 10 minutes.</li>
                <li>Add a cherry tomatoes, kalamata olives, pan fried tofu and some feta to the couscous and mix it </li>
            </ol>
            <h2>Final Product</h2>
            <Image src="couscous.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}

export default Couscous