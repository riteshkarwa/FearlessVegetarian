import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

class Bombaysandwich extends Component {
  render() {
    return (
      <div>
        <h1>Vegetable Sandwich with Mint Chutney and loads of Vegetables stacked up</h1>
        <div className="ingredients">Ingredients</div>
        <ol> 
            <li>3 slices sourdough bread</li> 
            <li>1 tablespoon butter, per sandwich </li> 
            <li>spoonful of mint chutney </li> 
            <li>2 russet potatoes, boiled & thinly sliced</li> 
            <li>1 cucumber, thinly sliced</li> 
            <li>2 plum tomatoes, thinly sliced</li> 
            <li>Chat Masala</li> 
            <li>4 whole potatoes</li>
            <li>Pinch of Salt</li> 
            <li>2 to 3 Slices of Onions</li> 
        </ol>
        <div className="ingredients">Instruction</div>
        <ol> 
            <li>The trick to boiling potatoes is to peel and slick them first and then boil it in water for 10 min</li>
            <li>All the ingredients chopped up and ready to be layered on piece of bread<br/>
                <Image src="sdplate.png" thumbnail rounded width="30%" height="30%"></Image>
            </li>
            <li>Take 2 slices of white bread and toast it in a toaster. Spread a generous amount of butter on each slice of bread.</li> 
            <li>Top with a layer of chutney.</li>
            <li>Top one slice of bread with potatoes followed by Chat Masala.</li>
            <li>Add a layer of tomatoes on top of the potatoes and sprinkle some Chat Masala and salt<br/>
              <Image src="sandwich_1.png" thumbnail rounded width="30%" height="30%"></Image>
            </li> 

            <li>Add a layer of beetroot on top of the potatoes and sprinkle some Chat Masala and salt</li> 
            <li>Add a slice of muenster cheese </li> 
            <li>Add a piece of bread with layer of butter applied to the bottom of the bread</li> 
            <li>Add Mint Chutney to the top of the bread</li> 
            <li>Add a layer of onions on top of the bread and sprinkle some Chat Masala and salt</li> 
            <li>Add a layer of cucumber on top of the onions and sprinkle some Chat Masala and salt</li> 
            <li>Add a piece of bread with layer of butter applied to the bottom of the bread. to complete our sandwich</li>  
        </ol>
        <h2>Final Product</h2>
            <Image src="sandwich.png" thumbnail rounded width="40%" height="40%"></Image>
      </div>
    );
  }
}
 
export default Bombaysandwich;