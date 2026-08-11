import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Potato extends Component {
  render() {
    return (
      <div>

        {/* ✅ SEO Schema */}
        <RecipeSchema
          name="Spiced Indian Potatoes"
          description="Easy Indian spiced potatoes cooked with aromatic spices, onions, and herbs. A quick vegan comfort food side dish."
          image="https://fearlessvegetarian.netlify.app/anytimepotato.jpg"
          url="https://fearlessvegetarian.netlify.app/potato"
          prepTime="PT10M"
          cookTime="PT30M"
          totalTime="PT40M"
          recipeYield="2 Servings"
          ingredients={[
            "4 medium potatoes, diced",
            "1/2 onion, chopped",
            "1 tablespoon coriander powder",
            "1 teaspoon cumin powder",
            "1 teaspoon ginger powder",
            "1 teaspoon onion powder",
            "1 tablespoon curry powder",
            "1/4 teaspoon turmeric powder",
            "1/4 teaspoon red chili powder",
            "Salt as per taste",
            "2 tablespoons olive oil"
          ]}
        />

        <Helmet>
          <meta charSet="utf-8" />
          <title>Spiced Indian Potatoes Recipe | Easy Vegan Comfort Food | Fearless Vegetarian</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potato" />

          <meta
            name="description"
            content="Easy Indian spiced potatoes cooked with aromatic spices and onions. A quick vegan comfort food perfect for any meal."
          />

          <meta
            name="keywords"
            content="spiced potatoes, Indian potato recipe, vegan potato curry, plant based potatoes, Indian spices, easy potato dish"
          />

          <meta property="og:title" content="Spiced Indian Potatoes – Easy Vegan Comfort Food" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/potato" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/anytimepotato.jpg" />
          <meta property="og:description" content="Quick and flavorful Indian spiced potatoes made with aromatic spices and onions." />
        </Helmet>

        <h1>Spiced Indian Potatoes (Easy Vegan Comfort Food)</h1>

        <p>
          These spiced Indian potatoes are a simple, flavorful, and comforting dish
          made with aromatic spices and onions. Perfect as a quick side or light meal.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">restaurant_menu</span>
            {" "}Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Cooking Time: 40 minutes
          </Col>
        </Row>

        <div className="ingredients">Ingredients</div>
        <ul className="ingredient-list">
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            4 medium potatoes, diced</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1/2 onion, finely chopped</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1 tablespoon coriander powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1 teaspoon cumin powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1 teaspoon ginger powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1 teaspoon onion powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1 tablespoon curry powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1/4 teaspoon turmeric powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            1/4 teaspoon red chili powder</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            Salt as per taste</li>
          <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
            2 tablespoons olive oil</li>
        </ul>

        <div className="ingredients"><h3>Instructions</h3>
          <ol>
            <li>Heat olive oil in a pan over medium heat.</li>
            <li>Add diced potatoes and sauté for 2–3 minutes.</li>
            <li>Cover and cook for 10–15 minutes until slightly soft.</li>
            <li>Add chopped onions and cook until translucent.</li>
            <li>Add all spices and mix well.</li>
            <li>Cook uncovered for 10–15 minutes, stirring occasionally.</li>
            <li>Adjust salt and seasoning.</li>
            <li>Serve hot with roti, rice, or as a side dish.</li>
          </ol>
        </div>

        <h2>Final Product</h2>

        <MediaQuery maxWidth={767}>
          <Image
            src="/anytimepotato.jpg"
            alt="Spiced Indian potatoes"
            thumbnail
            rounded
            fluid
          />
        </MediaQuery>

        <MediaQuery minWidth={767}>
          <Image
            src="/anytimepotato.jpg"
            alt="Spiced Indian potatoes"
            thumbnail
            rounded
            width="50%"
            height="50%"
          />
        </MediaQuery>
        {/* You May Also Like */}
        <section className="related-recipes">
          <h2>You May Also Like</h2>

          <p className="related-recipes-intro">
            Explore more comforting vegetarian recipes from Fearless Vegetarian.
            These flavorful and satisfying dishes are perfect for everyday meals.
          </p>

          <Row className="g-4">

            {/* Creamy Potato Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/potatocapsicum"
                  className="related-recipe-link"
                >
                  <Image
                    src="/potatocapsicum.jpg"
                    alt="Creamy Potato Curry in Cashew Pepper Gravy"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>
                    Creamy Potato Curry in Cashew Pepper Gravy
                  </h3>

                  <p>
                    Tender potatoes cooked in a rich and creamy cashew
                    pepper gravy with aromatic Indian spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Shahi Paneer */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/paneer"
                  className="related-recipe-link"
                >
                  <Image
                    src="/paneer.jpg"
                    alt="Shahi Paneer Creamy Indian Cottage Cheese Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>
                    Shahi Paneer – Creamy Indian Cottage Cheese Curry
                  </h3>

                  <p>
                    Soft paneer cooked in a rich, creamy, and mildly spiced
                    Indian gravy for a delicious vegetarian meal.
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
                    alt="Quinoa Moong Dal Khichdi"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Quinoa Moong Dal Khichdi</h3>

                  <p>
                    A wholesome one-pot meal made with nutritious quinoa,
                    protein-rich moong dal, and aromatic Indian spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Cabbage Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/cabbage"
                  className="related-recipe-link"
                >
                  <Image
                    src="/cabbage.jpg"
                    alt="Cabbage Curry Patta Gobi"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Cabbage Curry (Patta Gobi)</h3>

                  <p>
                    A simple and flavorful Indian cabbage curry cooked with
                    aromatic spices for an easy vegetarian side dish.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Mexican Rice with Black Beans */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/riceandbeans"
                  className="related-recipe-link"
                >
                  <Image
                    src="/ricebeans.jpg"
                    alt="Mexican Rice with Black Beans"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Mexican Rice with Black Beans</h3>

                  <p>
                    Flavorful Mexican-style rice combined with hearty black
                    beans and vegetables for a satisfying vegetarian meal.
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

export default Potato;