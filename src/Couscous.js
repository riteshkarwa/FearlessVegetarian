import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Couscous extends Component {
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
          <title>Mediterranean Magic: Easy and Flavorful Couscous Recipe for Culinary Bliss!</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/couscous" />
          <meta
            name="description"
            content="Explore the world of culinary delight with our Couscous Recipe. This meta description invites you to discover the perfect balance of flavors and textures in a quick and easy-to-make couscous dish. Elevate your dining experience with this wholesome recipe, ideal for busy days or special occasions. Dive into the heart of Mediterranean-inspired cuisine and savor a symphony of tastes that will leave your taste buds wanting more."
          />
          <meta
            name="keywords"
            content="couscous recipe, Mediterranean cuisine, easy and quick, flavorful dishes, wholesome recipes, balanced flavors, couscous ideas, healthy meals, culinary delights, quick cooking, Mediterranean-inspired, versatile grains, nutritious and delicious, simple cooking, international cuisine"
          />
        </Helmet>
        <h1>
          Couscous is a North African dish made from tiny steamed balls of semolina flour. Though we think of it and cook it as a grain, it is actually a type of pasta.
          Like rice, couscous is a blank canvas that can take on any flavors you want to add.
        </h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>2 cups of Pearl Couscous</li>
          <li>1 cup of cherry tomatoes cut in half </li>
          <li>1 cup of feta </li>
          <li>Handful kalamata olives</li>
          <li>2 and 1/4 cup water </li>
          <li>Few slices of onions</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>Take some olive oil in a non stick pan</li>
          <li>Add tofu cut into small square pieces</li>
          <li>Add some onion powder, garlic powder and paprika and pan fry until crispy.</li>
          <li>To start making couscous, bring the cooking liquid (preferably a flavorful chicken or vegetable broth) to a boil in a medium pot. Add a drizzle of olive oil, a pat of butter, and a little salt.</li>
          <li>Next, add the couscous.</li>
          <li>Cooking the couscous on a low flame for 10 minutes.</li>
          <li>Add a cherry tomatoes, kalamata olives, pan fried tofu and some feta to the couscous and mix it </li>
        </ol>
        <h2>Final Product</h2>
        <Image src="couscous.jpg" alt="Mediterranean Magic: Easy and Flavorful Couscous Recipe for Culinary Bliss!" thumbnail rounded fluid></Image>
        <div>
          <h2>Curd Rice Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="altlinYLUNA" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="altlinYLUNA" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Couscous