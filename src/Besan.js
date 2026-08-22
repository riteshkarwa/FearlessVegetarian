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
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

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
        <h1>
          Besan Curry (Chickpea Flour Curry) – A Traditional Indian Comfort Food Made with Gram Flour and Aromatic Spices
        </h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 tablespoon cooking oil</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup gram flour (Besan) </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 medium sized onions, sliced</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/4 cup spring onions, chopped</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 small green chilies, chopped</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              A pinch of asafetida (hing)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon cumin seeds</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon mustard seeds</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Salt to taste</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 teaspoon turmeric powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 teaspoon red chili powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 teaspoons coriander powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              3 + 1 cups boiling hot water</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instruction</h3>
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
        </div>
        <h2>Final Product</h2>
        <Image
          src="/besan.jpg"
          alt="Indian-style Besan Curry made with chickpea flour, yogurt, and aromatic spices"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />
        <div>
          <h2>Chickpea Flour Curry, Besan Curry Preparation video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="VyEveOxhx7s" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="VyEveOxhx7s" opts={optsDesktop} />
          </MediaQuery>
        </div>
        {/* You May Also Like */}
        <section className="related-recipes">
          <h2>You May Also Like</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Besan Curry (Chickpea Flour Curry),
            you may also like these delicious vegetarian recipes:
          </p>

          <Row className="g-4">

            {/* Masoor Dal */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/lentil"
                  className="related-recipe-link"
                >
                  <Image
                    src="/lentil.jpg"
                    alt="Masoor Dal Lentil Soup Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Masoor Dal (Lentil Soup Curry)</h3>

                  <p>
                    A comforting and flavorful Indian lentil curry
                    made with red lentils and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Dal Makhani */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/dalmakhani"
                  className="related-recipe-link"
                >
                  <Image
                    src="/dalmakhani.jpg"
                    alt="Creamy Dal Makhani made with black lentils and kidney beans"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Dal Makhani</h3>

                  <p>
                    A rich and creamy North Indian lentil dish
                    made with black lentils, kidney beans, and spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Rajmah */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/rajmah"
                  className="related-recipe-link"
                >
                  <Image
                    src="/rajmah.jpg"
                    alt="Rajmah Kidney Bean Curry with aromatic Indian spices"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Rajmah (Kidney Bean Curry)</h3>

                  <p>
                    A hearty North Indian kidney bean curry
                    simmered in a flavorful tomato and spice-based sauce.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Black Eyed Peas Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/blackeyedbeans"
                  className="related-recipe-link"
                >
                  <Image
                    src="/blackeyedbeans.jpg"
                    alt="Indian Black Eyed Peas Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Black Eyed Peas Curry</h3>

                  <p>
                    A hearty vegetarian curry made with black eyed
                    peas, tomatoes, and aromatic Indian spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Quinoa Moong Dal Khichdi */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/quinoamoongdal"
                  className="related-recipe-link"
                >
                  <Image
                    src="/quinoamoongdal.jpg"
                    alt="Quinoa Moong Dal Khichdi with lentils and aromatic spices"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Quinoa Moong Dal Khichdi</h3>

                  <p>
                    A nutritious and comforting one-pot meal made
                    with quinoa, moong dal, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

          </Row>
        </section>
      </div>
    );
  }
}


export default Besan;