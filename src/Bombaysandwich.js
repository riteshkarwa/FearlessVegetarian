import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Bombaysandwich extends Component {
  render() {
    return (
      <div>
        <RecipeSchema
          name="Bombay Vegetable Sandwich"
          description="Street-style Bombay Vegetable Sandwich loaded with potatoes, cucumber, tomatoes, onions, mint chutney, and chat masala."
          image="https://fearlessvegetarian.netlify.app/sandwich.jpg"
          url="https://fearlessvegetarian.netlify.app/sandwich"
          prepTime="PT20M"
          cookTime="PT10M"
          totalTime="PT30M"
          recipeYield="1 Serving"
          ingredients={[
            "3 slices sourdough bread",
            "1 tablespoon butter",
            "2 tablespoons mint chutney",
            "2 russet potatoes",
            "1 cucumber",
            "2 tomatoes",
            "Chat masala",
            "Salt",
            "Onion slices"
          ]}
        />
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
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />3 slices of sourdough bread or regular white bread</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 tablespoon butter, per sandwich </li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 tablespoon of mint chutney </li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 russet potatoes, boiled and thinly sliced</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 whole cucumber, thinly sliced</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 plum tomatoes, thinly sliced</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Chat Masala found in Indian Grocery Store</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 whole potatoes big ones</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Pinch of salt</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />3 slices of Onions</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instruction</h3>
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
        </div>
        <h2>Final Product</h2>
        <Image
          src="/sandwich.jpg"
          alt="Mumbai-style Bombay Sandwich with vegetables and chutney"
          fluid
          rounded
          thumbnail
          loading="lazy"
          className="recipe-image mx-auto d-block"
        />
        <section>
          <h2>Bombay Sandwich Video</h2>
          <div className="ratio ratio-1x1 video-container">
            <iframe
              src="https://www.youtube.com/embed/CIFjZ4OwFjQ"
              title="Upma Preparation Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        {/* Related Vegetarian Recipes */}
        <section className="related-recipes">
          <h2>Related Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Bombay Vegetable Sandwich with Mint Chutney,
            you may also like these flavorful and easy-to-make vegetarian recipes.
            Perfect for breakfast, lunch, snacks, or a quick and satisfying meal.
          </p>

          <Row className="g-4">

            {/* South Indian Upma */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/upma" className="related-recipe-link">
                  <Image
                    src="/upma.jpg"
                    alt="South Indian Upma"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>South Indian Upma</h3>

                  <p>
                    A comforting South Indian breakfast made with semolina,
                    vegetables, aromatic spices, and fresh herbs.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Any Time Potato */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/potato" className="related-recipe-link">
                  <Image
                    src="/potato.png"
                    alt="Any Time Potato"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Any Time Potato</h3>

                  <p>
                    A flavorful and versatile potato recipe seasoned with
                    aromatic Indian spices for an easy everyday side dish.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Mexican Rice and Beans */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/riceandbeans" className="related-recipe-link">
                  <Image
                    src="/ricebeans.jpg"
                    alt="Mexican Rice and Beans"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Mexican Rice and Beans</h3>

                  <p>
                    A hearty and flavorful vegetarian meal combining seasoned
                    rice, protein-rich beans, vegetables, and Mexican spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Aloo Gobi */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/aloogobi" className="related-recipe-link">
                  <Image
                    src="/aloogobi.jpg"
                    alt="Aloo Gobi"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Aloo Gobi</h3>

                  <p>
                    A classic Indian vegetarian dish made with potatoes,
                    cauliflower, and aromatic spices.
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
                <Link to="/cabbage" className="related-recipe-link">
                  <Image
                    src="/cabbage.jpg"
                    alt="Cabbage Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Cabbage Curry</h3>

                  <p>
                    A simple and delicious Indian cabbage curry cooked with
                    aromatic spices for a wholesome vegetarian side dish.
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

export default Bombaysandwich;