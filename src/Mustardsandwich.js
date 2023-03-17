import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {faBowlFood } from '@fortawesome/free-solid-svg-icons'

class Mustardsandwich extends Component {
    render() {
      return (
        <div>
            <h1>Refreshing Cheese mustard veggie sandwich with Broccoli sprouts</h1>
            <p className="serving"> <FontAwesomeIcon icon={faBowlFood} />  Yields: 1 Serving  &nbsp;  &nbsp;  &nbsp;  &nbsp;         
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes
            </p>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 Whole Avocado </li> 
                <li>2 tablespoons Dijon mustard</li> 
                <li>2 tablespoons mayonnaise</li> 
                <li>6 slices of Avocado</li>
                <li>4 slices of Tomato</li>
                <li>4 slices of Cucumber</li>
                <li>3 slices of Onions</li>
                <li>1 slice of Lettuce</li>
                <li>2 slices of 21 Whole Grains and Seeds - Dave's Killer Bread</li>
                <li>Chaat Masala found in Indian Grocery Store</li> 
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>For one sandwich, spread 1 tablespoon mustard on one Dave's Killer Bread toasted, 1 tablespoon mayonnaise on another toast. Top each with a slice of cheese.</li> 
                <li>Add a layer of cucumber slices on top of mayonnaise, then sprinkle some chaat masala salt.</li>
                <li>Add a layer of tomato slices on top of cucumber then sprinkle some chaat masala and salt.</li>
                <li>Add a layer of avocado slices on top of tomato then sprinkle some chaat masala and salt.</li>
                <li>Cover the cucumber slices with sprouts.</li>
                <li>Add onion slices on top of sprouts then sprinkle some chaat masala and salt.</li>
                <li>Add a slice of Lettuce on top of the onion layer</li>
                <li>Cover with a second piece of bread.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="mustardsandwich.jpg" thumbnail rounded fluid></Image>

        </div>
      );
    }
}

export default Mustardsandwich