import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Kesarpeda extends Component {
  render() {
    const optsDesktop = {
      height: '600',
      width: '700',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };
    return (
      <div>
        <RecipeSchema
          name="Kesar Peda (Saffron Milk Fudge)"
          description="Easy homemade Kesar Peda made with milk powder, condensed milk, saffron, cardamom, and ghee. A quick Indian festival sweet."
          image="https://fearlessvegetarian.netlify.app/kesarpeda.jpg"
          url="https://fearlessvegetarian.netlify.app/kesarpeda"
          prepTime="PT10M"
          cookTime="PT15M"
          totalTime="PT25M"
          recipeYield="12 Pedas"
          ingredients={[
            "1 cup milk powder",
            "1/2 cup sweetened condensed milk",
            "2 tbsp warm milk",
            "8-10 saffron strands",
            "2 tbsp ghee",
            "1/2 tsp cardamom powder",
            "Pistachios for garnish",
            "Almonds for garnish"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kesar Peda Recipe - Easy Saffron Milk Fudge with Milk Powder and Condensed Milk</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/kesarpeda" />
          <meta
            name="description"
            content="Learn how to make rich and flavorful Kesar Peda at home with saffron, milk powder, and condensed milk. A quick 15-minute Indian sweet recipe that’s soft, aromatic, and perfect for festivals or celebrations."
          />
          <meta
            name="keywords"
            content="kesar peda recipe, kesar peda with milk powder, instant kesar peda, saffron milk fudge, Indian sweets recipe, peda with condensed milk, easy Indian desserts, quick Diwali sweets, festival sweets recipe, 
            saffron peda recipe, homemade peda recipe, kesar peda mithai, saffron milk powder fudge, recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
          />
          <meta property="og:title" content="Kesar Peda Recipe - Easy Saffron Milk Fudge with Milk Powder and Condensed Milk" />
          <meta property="og:type" content="article" />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/kesarpeda" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/kesarpeda.jpg" />
          <meta property="og:description" content="Learn how to make rich and flavorful Kesar Peda at home with saffron, milk powder, and condensed milk. A quick 15-minute Indian sweet recipe that’s soft, aromatic, and perfect for festivals or celebrations." />
        </Helmet>
        <h1>
          Kesar Peda Recipe (Saffron Milk Fudge) – Easy Indian Sweet Made with Milk Powder and Condensed Milk
        </h1>
        <h2>What is Kesar Peda?</h2>

        <p>
          Kesar Peda is a traditional Indian sweet made with milk solids,
          saffron, cardamom, and ghee. Popular during Diwali, Holi,
          Raksha Bandhan, Janmashtami, and other festive occasions,
          these soft and aromatic saffron pedas are loved throughout India.
        </p>

        <h2>Serving Suggestions</h2>

        <p>
          Serve Kesar Peda as a festive dessert after meals or alongside
          masala chai. These saffron-flavored milk sweets also make an
          excellent homemade gift during celebrations and holidays.
        </p>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1 cup milk powder</li>
          <li>1/2 cup sweetened condensed milk </li>
          <li>2 tbsp milk (warm) </li>
          <li>8–10 strands of saffron (kesar)</li>
          <li>2 tbsp ghee (clarified butter)</li>
          <li>1/2 teaspoon cardamom powder</li>
          <li>Chopped pistachios/almonds (for garnish)</li>
        </ol>
        <div className="ingredients">Instruction</div>

        <ol>
          <li>Infuse saffron:</li>
          <ul>
            <li>Soak saffron strands in 2 tbsp warm milk. Set aside</li>
          </ul>
          <li>Cook base mixture:</li>
          <ul>
            <li>Heat a non-stick pan on low flame, add ghee.</li>
            <li>Add condensed milk and milk powder. Stir continuously to avoid lumps.</li>
          </ul>
          <li>Flavoring:</li>
          <ul>
            <li>Add saffron milk and cardamom powder. Mix well.</li>
            <li>Keep stirring until mixture thickens and starts leaving the sides of the pan (about 6–8 minutes).</li>
          </ul>
          <li>Cool & shape:</li>
          <ul>
            <li>Transfer mixture to a greased plate and let it cool slightly (warm but manageable).</li>
            <li>Grease your palms with ghee, take small portions, and shape into round pedas.</li>
          </ul>
          <li>Garnish:</li>
          <ul>
            <li>Press gently in the center and decorate with chopped pistachios, almonds, or a saffron strand.</li>
          </ul>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="/kesarpeda.jpg" alt="Kesar Peda Recipe - Easy Saffron Milk Fudge with Milk Powder and Condensed Milk" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="/kesarpeda.jpg" alt="Kesar Peda Recipe - Easy Saffron Milk Fudge with Milk Powder and Condensed Milk" thumbnail rounded width="60%" height="60%"></Image>
        </MediaQuery>
        <div>
          <br />
          <h2>Kesar Peda (Saffron Milk Fudge) Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="USLhOjZ4ZX4" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="USLhOjZ4ZX4" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this Kesar Peda recipe, you may also like:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/mango-lassi">
                Mango Lassi
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/bombaysandwich">
                Bombay Vegetable Sandwich
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/saagpaneer">
                Saag Paneer
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/dalmakhani">
                Dal Makhani
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/lentil">
                Masoor Dal (Lentil Soup)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Kesarpeda;