import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';

class Blackeyedbeans extends Component {
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
        <h1>Black Eyed Peas Curry seasoned with Indian Spices. It is a tradition to eat them on 1st January for luck and prosperity. It doesn't
            have to be just 1st of January eat it all year long for more luck and prosperity.
        </h1>
        <Row className="cooktimerow">
            <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
            <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
            <ol>  
                <li>1 teaspoon coriander powder</li> 
                <li>1/4 teaspoon tumeric powder</li> 
                <li>1/4 teaspoon red chili powder</li> 
                <li>1 teaspoon Garam Masala spice found in Indian Grocery store</li> 
                <li>2 whole potatoes</li>
                <li>Salt as per taste</li> 
                <li>1 whole onion</li> 
                <li>1/4 teaspoon Kitchen King Spice found in Indian Store</li>
                <li>2 small piece of ginger peeled</li>
                <li>3 to 4 dried curry leaves </li>
                <li>2 Whole Tomatoes </li>
                <li>2 cups of black eyed beans</li>
            </ol>
        <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Soak 2 cups of black eyed beans in a pot with water. Cover the beans with a few inches of water and leaving them on the counter. </li>
                    <li>Let the beans soak overnight.</li>
                    <li>Take some olive oil in a non stick pan and heat it up.</li>
                    <li>Add few cumin seeds and mustard seeds to the oil and let it crackle</li>
                    <li>Add pieces of ginger, whole garlic, red bell pepper, 2 tomatoes ,1 onion,  5 pieces of clove in a blender or food processor and turn it 
                        into a fine puree.
                    </li>
                    <li>Add the puree to the non stick pan with oil heated up</li>
                    <li>Add all the  spices to the onion tomato red pepper puree ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, curry powder.</li>
                    <li>Cover the pan and let it cook.</li>
                    <li>Let the spices cook for 10 min.</li> 
                    <li>Wash the black eyed beans thoroughly with water and add the beans to the pan.</li> 
                    <li>Cook the black eyed beans for about 30 minutes till they become soft. Constantly stir the beans to mix it well with onion tomato puree which 
                        will act as a gravy for the curry.</li> 
                    <li>Add salt as per taste.</li>
                    <li>Add little bit of Kitchen King Spice, Garam Masala powder and Amchoor powder found in Indian Grocery Store.</li>
                    <li>That is it your curry is ready. You can enjoy it with White Rice.</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="blackeyedbeans.jpg" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="blackeyedbeans.jpg" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                <h2>Black Eyed Peas Curry Preparation Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="yiKLvJ7gBMw" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="yiKLvJ7gBMw" opts={optsDesktop} />
                </MediaQuery>
              </div>
        </div>
    );
  }
}


export default Blackeyedbeans;