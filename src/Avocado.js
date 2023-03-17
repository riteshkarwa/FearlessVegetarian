import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

class Avocado extends Component {
    render() {
      return (
        <div>
            <h1>Avocado Toast super easy to make and good for breakfast</h1>
            <p className="serving"> <FontAwesomeIcon icon={faBowlFood} />  Yields: 2 Servings  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;         
              <FontAwesomeIcon icon={faClock} />  Cooking Time: 15 minutes
            </p>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 Whole Avocado </li> 
                <li>Everything but the Bagel Sesame Seasoning </li> 
                <li>Alessi Premium Balsamic Reduction, Traditional Balsamic</li> 
                <li>2 slices of 21 Whole Grains and Seeds - Dave's Killer Bread</li>
                <li>1/2 Tomato depending on the size</li>
                <li>Few slices of onions</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Tost the slices of 21 Whole Grains and Seeds - Dave's Killer Bread.</li> 
                <li>Cut the the avocado and spread it over the bread.</li>
                <li>Add a layer of tomato slices.</li>
                <li>Add a layer of onion slices.</li>
                <li>Add some Balsamic Reduction on the top.</li>
                <li>Sprinkle Everything but the Bagel Sesame Seasoning on the avocado spread.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="avocado.jpg" thumbnail rounded fluid></Image>
        </div>
      );
    }
}
     
export default Avocado;
