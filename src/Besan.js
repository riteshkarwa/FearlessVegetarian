import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class Besan extends Component {
  render() {
    const optsDesktop = {
      height: '500',
      width: '600',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };

    return (
      <div>
        <RecipeSchema
          name="Besan Curry (Chickpea Flour Curry)"
          description="Traditional Indian Besan Curry made with chickpea flour, onions, green chilies, and aromatic spices."
          image="https://fearlessvegetarian.netlify.app/besan.jpg"
          url="https://fearlessvegetarian.netlify.app/besan"
          prepTime="PT15M"
          cookTime="PT45M"
          totalTime="PT60M"
          recipeYield="1 Serving"
          ingredients={[
            "2 tbsp cooking oil",
            "1 cup gram flour (Besan)",
            "2 onions sliced",
            "1/4 cup spring onions",
            "2 green chilies",
            "Pinch asafoetida (hing)",
            "1 tsp cumin seeds",
            "1 tsp mustard seeds",
            "Salt to taste",
            "1/2 tsp turmeric powder",
            "1/2 tsp red chili powder",
            "2 tsp coriander powder",
            "4 cups boiling water"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Besan Curry Recipe | Chickpea Flour Curry (Besan Ki Sabzi) | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/besan"
          />

          <meta
            name="description"
            content="Easy Besan Curry (Chickpea Flour Curry) recipe made with gram flour, onions, green chilies, and aromatic Indian spices. A comforting vegetarian Indian dish that pairs perfectly with rice or roti."
          />

          <meta
            name="keywords"
            content="besan curry, chickpea flour curry, besan ki sabzi, gram flour curry, Indian curry recipe, vegetarian Indian recipes, vegan curry recipe, easy Indian curry, gluten free curry, Fearless Vegetarian"
          />

          <meta
            property="og:title"
            content="Besan Curry Recipe | Chickpea Flour Curry (Besan Ki Sabzi)"
          />

          <meta
            property="og:description"
            content="Traditional Besan Curry made with chickpea flour, onions, and Indian spices. A simple, protein-rich vegetarian recipe perfect for rice or roti."
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/besan"
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/besan.jpg"
          />

          <meta property="og:type" content="article" />

          <meta name="robots" content="index, follow, max-image-preview:large" />
        </Helmet>
        <h1>Besan Curry (Chickpea Flour Curry) – A Traditional Indian Comfort Food Made with Gram Flour and Aromatic Spices
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
          <Image src="/besan.jpg" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="/besan.jpg" thumbnail rounded width="50%" height="50%"></Image>
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
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this Besan Curry (Chickpea Flour Curry), you may also like:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/lentil">Masoor Dal (Lentil Soup Curry)</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/dalmakhani">Dal Makhani</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/rajmah">Rajmah (Kidney Bean Curry)</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/blackeyedbeans">Black Eyed Peas Curry</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
              <Link to="/quinoamoongdal">Quinoa Moong Dal Khichdi</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Besan;