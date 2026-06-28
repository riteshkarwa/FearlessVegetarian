import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";

class MoongDalKhichdi extends Component {
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

        <RecipeSchema
          name="Moong Dal Khichdi"
          description="Moong Dal Khichdi is a healthy Indian one-pot meal made with rice, yellow moong dal, spices, and optional vegetables. Light, nutritious, and comforting."
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
            "Salt as per taste",
            "Optional vegetables: peas, carrot, potato"
          ]}
        />

        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Moong Dal Khichdi Recipe | Healthy Indian Comfort Food | Fearless Vegetarian
          </title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/moongdalkhichdi" />
          <meta
            name="description"
            content="Make healthy Moong Dal Khichdi – a comforting one-pot Indian meal made with rice, lentils, and spices. Light, nutritious, and easy to digest."
          />
          <meta
            name="keywords"
            content="moong dal khichdi, indian khichdi, healthy one pot meal, rice and lentils, vegetarian comfort food, vegan khichdi"
          />
          <meta property="og:title" content="Moong Dal Khichdi – Healthy Indian Comfort Food" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/moongdalkhichdi" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/moongdalkhichdi.png" />
          <meta property="og:description" content="A simple, healthy, and comforting Indian one-pot meal made with rice and moong dal." />
        </Helmet>

        <h1>Moong Dal Khichdi – Healthy Indian Comfort Food</h1>

        <p>
          Moong Dal Khichdi is a simple, nutritious, and comforting Indian dish made
          with rice and yellow moong dal. It is light on the stomach, easy to digest,
          and perfect for lunch or dinner.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">restaurant_menu</span>
            {" "}Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Cooking Time: 35 minutes
          </Col>
        </Row>

        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1/2 cup yellow moong dal</li>
          <li>1/2 cup rice</li>
          <li>1 tablespoon ghee or oil</li>
          <li>1/2 teaspoon cumin seeds</li>
          <li>1/4 teaspoon turmeric powder</li>
          <li>1/2 teaspoon grated ginger</li>
          <li>1 green chili (optional)</li>
          <li>Salt as per taste</li>
          <li>2 to 3 cups water</li>
          <li>Optional vegetables (peas, carrot, potato)</li>
        </ol>

        <div className="ingredients">Instruction</div>
        <ol>
          <li>Wash rice and moong dal together until water runs clear.</li>
          <li>Heat ghee or oil in a pressure cooker.</li>
          <li>Add cumin seeds and let them splutter.</li>
          <li>Add ginger and green chili and sauté for a few seconds.</li>
          <li>Add optional vegetables and cook for 2–3 minutes.</li>
          <li>Add washed rice and dal mixture.</li>
          <li>Add turmeric and salt.</li>
          <li>Add water and mix well.</li>
          <li>Pressure cook for 2–3 whistles or cook until soft and mushy.</li>
          <li>Mix well and adjust consistency as needed.</li>
          <li>Serve hot with ghee, pickle, or yogurt.</li>
        </ol>

        <h2>Final Product</h2>

        <MediaQuery maxWidth={767}>
          <Image
            src="/moongdalkhichdi.png"
            alt="Moong Dal Khichdi"
            thumbnail
            rounded
            fluid
          />
        </MediaQuery>

        <MediaQuery minWidth={767}>
          <Image
            src="/moongdalkhichdi.png"
            alt="Moong Dal Khichdi"
            thumbnail
            rounded
            width="50%"
            height="50%"
          />
        </MediaQuery>

        <div>
          <h2>Moong Dal Khichdi Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="m0X2l7osSUU" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="m0X2l7osSUU" opts={optsDesktop} />
          </MediaQuery>
        </div>

        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this Moong Dal Khichdi, try more comforting Indian meals:
          </p>

          <ul className="custom-list">

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/dalmakhani" className="recipe-link">
                Authentic Dal Makhani
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/curdrice" className="recipe-link">
                Curd Rice – South Indian Comfort Food
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/upma" className="recipe-link">
                South Indian Upma
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/rajmah" className="recipe-link">
                Rajma Masala – Kidney Bean Curry
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/poha" className="recipe-link">
                Poha – Flattened Rice Breakfast
              </Link>
            </li>

          </ul>
        </div>

      </div>
    );
  }
}

export default MoongDalKhichdi;