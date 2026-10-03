import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import RecipeSchema from "./RecipeSchema";

class MoongDalKhichdi extends Component {
  render() {
    return (
      <div>

        {/* Recipe Schema */}

        <RecipeSchema
          name="Moong Dal Khichdi"
          description="Moong Dal Khichdi is a healthy and comforting Indian one-pot meal made with rice, yellow moong dal, aromatic spices, and optional vegetables. Light, nutritious, and easy to digest."
          image="https://fearlessvegetarian.netlify.app/moongdalkhichdi.png"
          url="https://fearlessvegetarian.netlify.app/moongdalkhichdi"
          prepTime="PT10M"
          cookTime="PT25M"
          totalTime="PT35M"
          recipeYield="2 Servings"
          ingredients={[
            "1/2 cup yellow moong dal",
            "1/2 cup rice",
            "2 to 3 cups water",
            "1 tablespoon ghee or oil",
            "1/2 teaspoon cumin seeds",
            "1/4 teaspoon turmeric powder",
            "1/2 teaspoon grated ginger",
            "1 green chili (optional)",
            "Salt to taste",
            "Optional vegetables such as peas, carrot, or potato",
          ]}
        />

        {/* SEO Metadata */}

        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Moong Dal Khichdi Recipe | Healthy Indian Comfort Food | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/moongdalkhichdi"
          />

          <meta
            name="description"
            content="Learn how to make healthy Moong Dal Khichdi, a comforting Indian one-pot meal made with rice, yellow moong dal, spices, and optional vegetables. Light, nutritious, and easy to digest."
          />

          <meta
            name="keywords"
            content="moong dal khichdi, moong dal khichdi recipe, Indian khichdi, yellow moong dal khichdi, healthy Indian comfort food, rice and lentils, vegetarian khichdi, vegan khichdi"
          />

          <meta
            property="og:title"
            content="Moong Dal Khichdi Recipe | Healthy Indian Comfort Food"
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/moongdalkhichdi"
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/moongdalkhichdi.png"
          />

          <meta
            property="og:image:alt"
            content="Moong Dal Khichdi"
          />

          <meta
            property="og:site_name"
            content="Fearless Vegetarian"
          />

          <meta
            property="og:description"
            content="A simple, healthy, and comforting Indian one-pot meal made with rice, yellow moong dal, spices, and optional vegetables."
          />
        </Helmet>

        {/* Page Heading */}

        <h1>
          Moong Dal Khichdi – Healthy Indian Comfort Food
        </h1>

        <p>
          Moong Dal Khichdi is a simple, nutritious, and comforting
          Indian dish made with rice and yellow moong dal. Light on
          the stomach and easy to digest, it makes a wholesome meal
          for lunch or dinner.
        </p>

        <p>
          This one-pot vegetarian khichdi can be prepared with basic
          pantry ingredients and is delicious served with a little
          ghee, yogurt, pickle, or your favorite side dish.
        </p>

        {/* Recipe Information */}

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">
              restaurant_menu
            </span>
            {" "}Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} />
            {" "}Cooking Time: 35 minutes
          </Col>
        </Row>

        {/* Ingredients */}
        <div className="ingredients"><h3>Ingredients</h3>
          <ol>
            <li>1/2 cup yellow moong dal</li>
            <li>1/2 cup rice</li>
            <li>2 to 3 cups water</li>
            <li>1 tablespoon ghee or oil</li>
            <li>1/2 teaspoon cumin seeds</li>
            <li>1/4 teaspoon turmeric powder</li>
            <li>1/2 teaspoon grated ginger</li>
            <li>1 green chili, optional</li>
            <li>Salt to taste</li>
            <li>
              Optional vegetables such as peas, carrot, or potato
            </li>
          </ol>
        </div>
        {/* Instructions */}

        <div className="ingredients"><h3>Instructions</h3>

          <ol>
            <li>
              Wash the rice and yellow moong dal together until the
              water runs mostly clear.
            </li>

            <li>
              Heat ghee or oil in a pressure cooker over medium heat.
            </li>

            <li>
              Add the cumin seeds and allow them to sizzle.
            </li>

            <li>
              Add the grated ginger and green chili. Sauté for a few
              seconds.
            </li>

            <li>
              If using vegetables, add the peas, carrot, or potato
              and sauté for 2 to 3 minutes.
            </li>

            <li>
              Add the washed rice and moong dal to the cooker.
            </li>

            <li>
              Add turmeric powder and salt.
            </li>

            <li>
              Pour in 2 to 3 cups of water and mix everything well.
            </li>

            <li>
              Close the pressure cooker and cook for 2 to 3 whistles,
              or until the rice and dal are soft and well cooked.
            </li>

            <li>
              Allow the pressure to release naturally before opening
              the cooker.
            </li>

            <li>
              Mix the khichdi well and add more water if you prefer
              a softer or creamier consistency.
            </li>

            <li>
              Serve hot with a little ghee, yogurt, pickle, or your
              favorite side dish.
            </li>
          </ol>
        </div>

        {/* Moong Dal Khichdi Image */}

        <section>
          <h2>Moong Dal Khichdi</h2>

          <Image
            src="/moongdalkhichdi.png"
            alt="A bowl of hearty Moong Dal Khichdi, showcasing the rich blend of yellow moong dal, aromatic spices, and vibrant vegetables"
            fluid
            rounded
            loading="lazy"
            className="recipe-image"
          />
        </section>
        <section></section>

        {/* YouTube Video */}
        <section>
          <h2>Moong Dal Khichdi Preparation Video</h2>

          <div className="youtube-container">
            <YouTube
              videoId="m0X2l7osSUU"
              opts={{
                width: "100%",
                height: "500",
                playerVars: {
                  autoplay: 0
                }
              }}
            />
          </div>
        </section>

        {/* Related Recipes */}

        <section className="related-recipes">

          <h2>
            Related Vegetarian Recipes
          </h2>

          <p className="related-recipes-intro">
            If you enjoyed this Moong Dal Khichdi, you may also
            enjoy these comforting and flavorful Indian recipes:
          </p>

          <Row className="g-4">

            {/* Dal Makhani */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">

                <Link
                  to="/dalmakhani"
                  className="related-recipe-link"
                >
                  <Image
                    src="/dalmakhani.jpg"
                    alt="Authentic Dal Makhani"
                    fluid
                    rounded
                    loading="lazy"
                  />

                  <h3>
                    Authentic Dal Makhani
                  </h3>

                  <p>
                    A rich and creamy Punjabi lentil dish
                    made with black lentils and kidney
                    beans, slow-cooked with aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>

              </article>
            </Col>

            {/* Curd Rice */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">

                <Link
                  to="/curdrice"
                  className="related-recipe-link"
                >
                  <Image
                    src="/curdrice.jpg"
                    alt="Curd Rice South Indian Comfort Food"
                    fluid
                    rounded
                    loading="lazy"
                  />

                  <h3>
                    Curd Rice – South Indian Comfort Food
                  </h3>

                  <p>
                    A cooling and comforting South Indian
                    dish made with rice, yogurt, and
                    flavorful tempering.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>

              </article>
            </Col>

            {/* Upma */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">

                <Link
                  to="/upma"
                  className="related-recipe-link"
                >
                  <Image
                    src="/upma.jpg"
                    alt="South Indian Upma"
                    fluid
                    rounded
                    loading="lazy"
                  />

                  <h3>
                    South Indian Upma
                  </h3>

                  <p>
                    A quick and delicious South Indian
                    breakfast made with semolina,
                    vegetables, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>

              </article>
            </Col>

            {/* Rajma Masala */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">

                <Link
                  to="/rajmah"
                  className="related-recipe-link"
                >
                  <Image
                    src="/rajmah.jpg"
                    alt="Rajma Masala Kidney Bean Curry"
                    fluid
                    rounded
                    loading="lazy"
                  />

                  <h3>
                    Rajma Masala – Kidney Bean Curry
                  </h3>

                  <p>
                    A hearty North Indian kidney bean
                    curry simmered in a flavorful tomato
                    and spice-based gravy.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>

              </article>
            </Col>

            {/* Poha */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">

                <Link
                  to="/poha"
                  className="related-recipe-link"
                >
                  <Image
                    src="/poha.jpg"
                    alt="Poha Flattened Rice Breakfast"
                    fluid
                    rounded
                    loading="lazy"
                  />

                  <h3>
                    Poha – Flattened Rice Breakfast
                  </h3>

                  <p>
                    A flavorful and easy Indian breakfast
                    made with flattened rice, vegetables,
                    spices, and fresh herbs.
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

export default MoongDalKhichdi;