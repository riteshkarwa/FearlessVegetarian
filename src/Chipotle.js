import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Chipotle extends Component {
    render() {
      return (
        <div>
            <h1>Chipotle Bowl super easy to make and taste so much better than actual Chipotle Restaurant</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <ol> 
                <li>5 Whole Avocado </li> 
                <li>2 whole Tomato </li> 
                <li>2 whole Onion</li>
                <li>2 Red and 2 Yellow peppers</li> 
                <li>1 pot of Rice cooked</li>
                <li>2 spoonful of sour cream</li>
                <li>Bag of Mexican style 4 cheese Kraft Natural Cheese</li>
                <li>Bottle of Mild Pace Salsa</li>
                <li>Can of vegetarian Pinto Beans</li>
                <li>Iceberg Lettuce chopped to add to the Chipotle Bowl</li>
            </ol>
            <div className="ingredients">Instruction</div>
                <h2>Roasting peppers and onions</h2>
                <ol> 
                    <li>Preheat your oven to 400 degrees Fahrenheit's</li> 
                    <li>Start slicing the bell peppers and onions. The onions will shrivel up more than the peppers. 
                        If you want them more tender and not crispy you’ll want to cut them a bit larger so they can cook at the same time as the peppers.</li>
                    <li>Once the vegetables are sliced we place them onto a baking sheet and toss with oil and Fajita mix seasoning. Bake the peppers in a single layer for 20 minutes</li>
                    <li>Toss after 20 minutes and then roast for another 10 minutes</li>
                </ol>
                <h2>Guacamole Mix</h2>
                <ol> 
                    <li>In a large bowl, combine the avocados, onion and tomatoes finely chopped, lime juice, salt, little mild pace salsa. </li> 
                    <li>Stir well</li> 
                </ol>
                <h2>Rice</h2>
                <ol> 
                    <li>Use the Rice cooker to cook Rice, 2 cups of rice and 3 cups of water. Serves 4 people.</li>  
                </ol>
                <h2>All the ingredients prepared and ready to make the Chipotle Bowl</h2>
                <Image src="chipotle.jpg" thumbnail rounded fluid></Image>
                <h2>Final step making the Chipotle Bowl</h2>
                <ol> 
                    <li>Add all the contents in a bowl: Rice, Guacamole Mix, Fajita Veggies(Roasted Onion and Peppers), Sour Cream, 4 cheese blend, vegetarian
                        pinto beans and you have a delicious Chipotle bowl
                    </li>     
                    <Image src="chipotle_1.jpg" thumbnail rounded fluid></Image>   
                </ol>


        </div>
        );
    }
}
     
export default Chipotle;
