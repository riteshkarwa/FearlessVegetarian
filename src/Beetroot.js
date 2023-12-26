import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

class Beetroot extends Component {
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vibrant Beetroot Curry with Coconut Milk and Urad Dal: A Fusion of Colors and Flavors</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potatobhurji" />
          <meta
            name="description"
            content="Experience the exquisite blend of flavors with our Beetroot Curry featuring creamy coconut milk and nutritious lentils (Urad Dal). This vibrant and wholesome dish is a celebration of colors, textures, and aromatic spices. Elevate your culinary adventure with this delicious vegan curry, perfect for adding a burst of nutrition and taste to your dining table. Discover the joy of cooking with beetroots, coconut milk, and lentils in this unique and flavorful recipe that promises a delightful dining experience."
          />
          <meta
            name="keywords"
            content="beetroot curry, coconut milk, lentil recipes, Urad Dal, vegan curry, colorful dishes, nutritious beetroot, creamy coconut curry, plant-based cuisine, Indian-inspired recipes, flavorful vegan meals, wholesome lentil curry, exotic flavors, beetroot and lentil combination, vegetarian cooking"
          />
        </Helmet>
        <h1>Beetroot Curry with Coconut Milk and Lentils(Urad Dal). Beetroot is one of those wonder foods that can increase immunity, lower blood pressure and provide us with lot of essential vitamin and minerals.</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1 Beetroot, peeled and chopped</li>
          <li>1/2 big Jalapeno pepper</li>
          <li>1/4 teaspoon Turmeric powder</li>
          <li>1 Cinnamon Stick</li>
          <li>1 teaspoon Coriander Powder</li>
          <li>1 teaspoon Mustard seeds </li>
          <li>1 can of coconut milk</li>
          <li>1 tablespoon Urad Dal found in Indian store</li>
          <li>Salt as per taste</li>
          <li>1 dried Curry leave</li>
          <li>1 tablespoon cooking oil</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>To begin making beetroot curry boil the beetroot in a pressure cooker or pot till it gets tender.</li>
          <li>Once the beetroot is tender slice it vertically and use food chopper to chop each slice into small square pieces.</li>
          <li>Take 1 tablespoon olive oil in a non stick pan and heat it up.</li>
          <li>Add beetroot pieces to the non stick pan.</li>
          <li>Add chopped Jalapeno peppers, salt, tumeric powder, coriander powder and cinnamon stick.</li>
          <li>Pour a can of coconut milk.</li>
          <li>Stir the ingredients and cook it on medium flame for 10-15 min close the pan with a lid to speed up the cooking process.</li>
          <li>Heat a teaspoon of oil in a separate small pan.</li>
          <li>Add the mustard seeds and White Urad dal found in Indian Grocery Store. Allow it to crackle and roast for couple of minutes.</li>
          <li>Add salt as per taste.</li>
          <li>Your curry is ready, taste it to adjust spice level and salt. You can eat it with rice or Garlic Naan(Indian Bread) found in Indian Grocery Store.</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="beetroot.jpg" thumbnail rounded fluid></Image>
        <div>
          <h2>Beetroot Curry with Coconut Milk Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="jD0qJf4-c6Q" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="jD0qJf4-c6Q" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Beetroot;