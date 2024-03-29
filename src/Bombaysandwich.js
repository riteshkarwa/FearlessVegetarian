import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";

class Bombaysandwich extends Component {
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
          <title>Bombay Vegetable Sandwich: Irresistible Street-Style Delight</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/sandwich" />
          <meta
            name="description"
            content="Savor the flavor of the streets with our Bombay Vegetable Sandwich. A delightful blend of vegetables and spices, bringing the street-style experience to your plate."
          />
          <meta
            name="keywords"
            content="Bombay sandwich, Street food, Indian sandwich, Spicy sandwich, Vegetarian sandwich, Mumbai street food, Chutney sandwich, Bombay grilled sandwich, Indian snacks, Masala toast"
          />
          <meta property="og:title" content="Bombay Vegetable Sandwich: Irresistible Street-Style Delight" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/sandwich" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/sandwich.jpg" />
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
          <li>3 slices of sourdough bread or regular white bread</li>
          <li>1 tablespoon butter, per sandwich </li>
          <li>2 tablespoon of mint chutney </li>
          <li>2 russet potatoes, boiled and thinly sliced</li>
          <li>1 whole cucumber, thinly sliced</li>
          <li>2 plum tomatoes, thinly sliced</li>
          <li>Chat Masala found in Indian Grocery Store</li>
          <li>1 whole potatoes big ones</li>
          <li>Pinch of salt</li>
          <li>3 slices of Onions</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>The trick to boiling potatoes is to peel and slice them vertically and then boil it in water for 10 minutes.</li>
          <li>All the ingredients chopped up and ready to be layered on piece of bread.</li>
          <li>Take 2 slices of white bread and toast it in a toaster. Spread a generous amount of butter on each slice of bread.</li>
          <li>Top with a layer of chutney.</li>
          <li>Top one slice of bread with potatoes followed by Chat Masala.</li>
          <li>Add a layer of tomatoes on top of the potatoes and sprinkle some Chat Masala and salt.</li>
          <li>Add a layer of beetroot on top of the potatoes and sprinkle some Chat Masala and salt.</li>
          <li>Add a slice of muenster cheese.</li>
          <li>Add a piece of bread with layer of butter applied to the bottom of the bread.</li>
          <li>Add Mint Chutney to the top of the bread.</li>
          <li>Add a layer of onions on top of the bread and sprinkle some Chat Masala and salt.</li>
          <li>Add a layer of cucumber on top of the onions and sprinkle some Chat Masala and salt.</li>
          <li>Add a piece of bread with layer of butter applied to the bottom of the bread to complete our sandwich.</li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="sandwich.jpg" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="sandwich.jpg" thumbnail rounded width="50%" height="50%"></Image>
        </MediaQuery>
        <div>
          <h2>Bombay Sandwich Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="CIFjZ4OwFjQ" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="CIFjZ4OwFjQ" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Bombaysandwich;