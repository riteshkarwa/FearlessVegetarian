import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';



class Peanutsd extends Component {
    render() {
      return (
        <div>
            <h1>PeanutButter Apple Sandwich with Cinnamon Sugar</h1>
            <p className="serving"> <FontAwesomeIcon icon={faBowlFood} /> Yields: 1 Serving  &nbsp;  &nbsp;  &nbsp;  &nbsp;         
            <FontAwesomeIcon icon={faClock} />  Cooking Time: 20 minutes
            </p>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 slice of 21 Whole Grains and Seeds - Dave's Killer Bread</li>
                <li>1 whole apple cut into thin slices</li>
                <li>Few tablespoon PeanutButter</li>
                <li>Cinnamon Sugar to Sprinkle over Apple</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol>
                <li>Get a slice of Whole Grains and Seeds - Dave's Killer Bread and spread PeanutButter on it</li>
                <li>Chop some apple slices and place it on the bread</li>
                <li>Sprinkle some Cinnamon Sugar on the apple slices and that's it your yummy sandwich is ready for you to enjoy!!</li> 
            </ol>
            <h2>Final Product</h2>
            <MediaQuery maxWidth={767}>
              <Image src="peanutsd.jpg" thumbnail rounded fluid></Image>
            </MediaQuery>
            <MediaQuery minWidth={767}>
              <Image src="peanutsd.jpg" thumbnail rounded width="40%" height="40%"></Image>
            </MediaQuery>
        </div>
      );
    }
}

export default Peanutsd;