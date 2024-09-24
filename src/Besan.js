import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";

class Besan extends Component {
  render() {
    const optsDesktop = {
      height: '500',
      width: '500',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chickpea Flour Curry also known as Besan</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/besan" />
          <meta
            name="description"
            content="Savor the rich flavors of Chickpea Flour Curry, popularly known as Besan Curry, in this delightful and aromatic Indian dish."
          />
          <meta
            name="keywords"
            content="Chickpea Flour Curry, Besan Curry, Indian dish, Vegetarian Curry, Besan Recipes, Aromatic Curry, Flavorful Vegan Dish, Indian Cuisine"
          />
          <meta property="og:title" content="Chickpea Flour Curry also known as Besan" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/besan" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/besan.jpg" />
          <meta property="og:description" content="Savor the rich flavors of Chickpea Flour Curry, popularly known as Besan Curry, in this delightful and aromatic Indian dish." />
        </Helmet>
        <h1>Chickpea Flour also known as Besan is a spicy Indian side dish which goes well with any type of rice or Naan Bread.
        </h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>2 tablespoon cooking oil</li>
          <li>1 cup gram flour (Besan) </li>
          <li>2 medium sized onions, sliced</li>
          <li>1/4 cup spring onions, chopped</li>
          <li>2 small green chilies, chopped</li>
          <li>A pinch of asafetida (hing)</li>
          <li>1 teaspoon cumin seeds</li>
          <li>1 teaspoon mustard seeds</li>
          <li>Salt to taste</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>2 teaspoons coriander powder</li>
          <li>3 + 1 cups boiling hot water</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>Heat 2 tablespoons oil in a pan. When the oil is hot enough add asafetida, cumin seeds, and mustard seeds. </li>
          <li>When the cumin and mustard seeds start to crackle add sliced onions and sauté for 3-4 minutes or till
            the onions are slightly golden brown.</li>
          <li>Now add chopped spring onions, chopped green chilies and sauté the mixture for another 3 minutes.</li>
          <li>Add 1 cup Chickpea Flour and roast with onions for 3-4 minutes.</li>
          <li>Now add coriander powder, red chili powder, salt and mix well.</li>
          <li>Now slowly add 3 cups of boiled water and keep stirring constantly.</li>
          <li>When the mixture turns slightly thick then add turmeric powder and 1 cup of boiling hot water.</li>
          <li>Keep stirring consistently to avoid any lumps.</li>
          <li>Turn the heat to medium-low. Cover and cook this Chickpea Flour for 7-8 minutes. Stir occasionally..</li>
          <li>Transfer it to a serving bowl and garnish with spring onions.</li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="besan.jpg" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="besan.jpg" thumbnail rounded width="50%" height="50%"></Image>
        </MediaQuery>
        <div>
          <h2>Chickpea Flour Curry, Besan Curry Preparation video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="VyEveOxhx7s" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="VyEveOxhx7s" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}


export default Besan;