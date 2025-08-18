import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";

class Bombaymasalasandwich extends Component {
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
          <title>Bombay Masala Vegetable Sandwich Recipe – Irresistible Street-Style Delight</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/masalasandwich" />
          <meta
            name="description"
            content="Savor the authentic taste of Mumbai with this Bombay Masala Vegetable Sandwich recipe; a crispy, spicy, and flavorful street-style delight layered with chutney, veggies, and masala. Perfect for breakfast, snacks, or tea-time cravings!"
          />
          <meta
            name="keywords"
            content="Bombay sandwich, Street food, Indian sandwich, Spicy sandwich, Vegetarian sandwich, 
            Mumbai street food, Chutney sandwich, Bombay grilled sandwich, Indian snacks, Masala toast"
          />
          <meta property="og:title" content="Bombay Vegetable Sandwich: Irresistible Street-Style Delight" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/masalasandwich" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/masalasandwich.png" />
          <meta property="og:description" content="Savor the flavor of the streets with our Bombay Vegetable Sandwich. A delightful blend of vegetables and spices, bringing the street-style experience to your plate." />
        </Helmet>
        <h1>Vegetable Sandwich also known as Bombay Sandwich, with Mint Chutney and loads of Vegetables stacked up</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
            <li>2 slices of bread (white or brown)</li>
            <li>2 medium potatoes (boiled & mashed)</li>
            <li>Butter for toasting</li>
            <li>1 small onion, sliced into rings.</li>
            <li>1 small capsicum, sliced into rings.</li>
            <li>1/2 tsp ginger-garlic paste</li>
            <li>1/2 cup fresh cilantro chutney (green chutney) </li>
            <li>1 green chili (finely chopped, optional)</li>
            <li>1/2 tsp turmeric powder</li>
            <li>1/2 tsp  red chili powder</li>
            <li>1/2 tsp  garam masala</li>
            <li>1/2 tsp cumin seeds</li>
            <li>1 tbsp oil</li>
            <li>Optional: sliced cucumber, tomato, onion, beetroot, grated cheese</li>
            <li>Salt to taste</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
            <h2>Prepare the masala stuffing:</h2>
            <li>Heat oil in a pan, add cumin seeds.</li>
            <li>Add onions, ginger-garlic paste, and sauté until golden.</li>
            <li>Add capsicum, green chili, and cook for 2–3 minutes.</li>
            <li>Mix in turmeric, red chili powder, garam masala, and salt.</li>
            <li>Add boiled, mashed potatoes and mix well. Cook for 2–3 minutes.</li>
            <li>Garnish with chopped cilantro and let the mixture cool.</li>
            <h2>Assemble the sandwich:</h2>
            <li>Spread butter on bread slices.</li>
            <li>Spread green chutney on top of the buttered side.</li>
            <li>Place a generous layer of the prepared potato masala on one slice.</li>
            <li>Add optional veggie slices and grated cheese if desired.</li>
            <li>Cover with another bread slice (chutney side down).</li>
            <h2>Toast the sandwich:</h2>
            <li>Place in a sandwich toaster or grill until golden brown and crisp.</li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="masalasandwich.png" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="masalasandwich.png" thumbnail rounded width="50%" height="50%"></Image>
        </MediaQuery>
        <div>
          <h2>Bombay Masala Sandwich Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="tzsISscoET0" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="tzsISscoET0" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Bombaymasalasandwich;