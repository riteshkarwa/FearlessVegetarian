import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Sagopearls extends Component {
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
          <title>Sabudana Khichdi – a pilaf/pulao made with sago pearls!</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/sagopearls" />
          <meta
            name="description"
            content="Savor Sabudana Khichdi, a pilaf/pulao crafted with sago pearls! This gluten-free and vegan dish is a festive favorite in India."
          />
          <meta
            name="keywords"
            content="Sabudana Khichdi, sago pearls, gluten-free, vegan, Indian festival, festive recipe, pilaf, pulao"
          />
          <meta property="og:title" content="Sabudana Khichdi – a pilaf/pulao made with sago pearls" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/sagopearls" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/sagopearls.jpg" />
          <meta property="og:description" content="Savor Sabudana Khichdi, a pilaf/pulao crafted with sago pearls! This gluten-free and vegan dish is a festive favorite in India" />
        </Helmet>
        <h1>Sabudana Khichdi – a pilaf/pulao made with sago pearls! This vegan and gluten-free dish is extremely popular in India during the fasting season </h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1 cup Sabudana (Tapioca Pearls)</li>
          <li>1-2 medium-sized Potatoes, peeled and diced</li>
          <li>1/2 cup Roasted Peanuts, coarsely ground</li>
          <li>1-2 Green Chilies, finely chopped</li>
          <li>1 teaspoon Cumin Seeds</li>
          <li>1 tablespoon Oil</li>
          <li>1/2 teaspoon Sugar</li>
          <li>Salt to taste</li>
          <li>Fresh Coriander leaves, chopped (for garnish)</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>Rinse the sabudana under cold water until the water runs clear. This helps remove excess starch.</li>
          <li>Soak the rinsed sabudana in enough water for at least 4-6 hours or overnight. The sabudana should be soaked well and become fluffy.</li>
          <li>Boil or steam the diced potatoes until they are just cooked but still firm. You can also parboil them.</li>
          <li>After soaking, fluff the sabudana gently with a fork. Make sure the pearls are separate and not sticking together.</li>
          <li>Dry roast the peanuts until they turn golden brown. Once cooled, coarsely grind them.</li>
          <li>Heat oil in a pan. Add cumin seeds and let them splutter.</li>
          <li>Add chopped green chilies and sauté for a minute.</li>
          <li>Add the boiled or steamed potatoes to the pan. Mix well.</li>
          <li>Add the soaked and fluffed sabudana to the pan. Mix gently to combine.</li>
          <li>Add salt and sugar. Mix well and cook on low heat for 5-7 minutes. Keep stirring to prevent sticking.</li>
          <li>Add the coarsely ground peanuts and mix well. Cook for an additional 2-3 minutes.</li>
          <li>Garnish with freshly chopped coriander leaves.Enjoy your delicious Sabudana Khichdi!</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="sagopearls.jpg" alt="Sabudana Khichdi – a pilaf/pulao made with sago pearls!" thumbnail rounded fluid></Image>
        <div>
          <h2>Sabudana Khichdi Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="VL3VDYQuspY" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="VL3VDYQuspY" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Sagopearls;