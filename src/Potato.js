import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
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
        <ol>
          <li>4 medium potatoes, diced</li>
          <li>1/2 onion, finely chopped</li>
          <li>1 tablespoon coriander powder</li>
          <li>1 teaspoon cumin powder</li>
          <li>1 teaspoon ginger powder</li>
          <li>1 teaspoon onion powder</li>
          <li>1 tablespoon curry powder</li>
          <li>1/4 teaspoon turmeric powder</li>
          <li>1/4 teaspoon red chili powder</li>
          <li>Salt as per taste</li>
          <li>2 tablespoons olive oil</li>
        </ol>

        <div className="ingredients">Instructions</div>
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

        <div style={{ marginTop: "40px" }}>
          <h2>You May Also Like</h2>

          <p>
            Explore more comforting vegetarian recipes from Fearless Vegetarian.
          </p>

          <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
            <li style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: "#28a745", marginRight: "10px" }} />
              <Link to="/potatocapsicum" className="recipe-link">
                Creamy Potato Curry in Cashew Pepper Gravy
              </Link>
            </li>

            <li style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: "#28a745", marginRight: "10px" }} />
              <Link to="/paneer" className="recipe-link">
                Shahi Paneer – Creamy Indian Cottage Cheese Curry
              </Link>
            </li>

            <li style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: "#28a745", marginRight: "10px" }} />
              <Link to="/quinoamoongdal" className="recipe-link">
                Quinoa Moong Dal Khichdi
              </Link>
            </li>

            <li style={{ marginBottom: "12px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ color: "#28a745", marginRight: "10px" }} />
              <Link to="/cabbage" className="recipe-link">
                Cabbage Curry (Patta Gobi)
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faLeaf} style={{ color: "#28a745", marginRight: "10px" }} />
              <Link to="/riceandbeans" className="recipe-link">
                Mexican Rice with Black Beans
              </Link>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Potato;