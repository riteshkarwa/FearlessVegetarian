
import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

class Potatobhurji extends Component {
  render() {
    return (
      <div className="recipe-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Indian Spiced Potato Bhurji | Potato Scramble Recipe | Fearless Vegetarian</title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/potatobhurji"
          />

          <meta
            name="description"
            content="Make flavorful Indian spiced potatoes with aromatic seasonings and onions. This easy potato bhurji recipe can be enjoyed on its own or paired with an optional egg bhurji."
          />

          <meta
            name="keywords"
            content="Indian spiced potatoes, potato bhurji, Indian potato recipe, seasoned potatoes, spicy potato scramble, Indian breakfast recipes, easy potato recipes, cumin potatoes, coriander potatoes, homemade Indian food, Fearless Vegetarian"
          />

          <meta property="og:title" content="Indian Spiced Potato Bhurji | Fearless Vegetarian" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/potatobhurji"
          />
          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/potatobhurji.jpg"
          />
          <meta
            property="og:description"
            content="A flavorful Indian-style potato recipe seasoned with aromatic spices, onions, and herbs. Perfect for a comforting homemade meal."
          />
        </Helmet>

        <h1>Indian Spiced Potato Bhurji | Easy Potato Scramble Recipe</h1>

        <p>
          This Indian-style spiced potato recipe is a comforting and flavorful
          dish made with potatoes, onions, and a blend of aromatic Indian
          spices. The potatoes are chopped into small pieces and cooked until
          tender, then seasoned with cumin, coriander, turmeric, ginger, and
          curry powder. Enjoy these delicious seasoned potatoes for breakfast,
          lunch, or dinner with roti, paratha, or bread. You can also pair them
          with a separate egg bhurji if desired.
        </p>

        <h2>Indian Spiced Potatoes</h2>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">restaurant_menu</span>
            {" "}Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Cooking Time: 30-35 minutes
          </Col>
        </Row>

        <div className="ingredients">
          <h3>Ingredients</h3>

          <ol>
            <li>4 medium potatoes</li>
            <li>1/2 onion, finely chopped</li>
            <li>1 teaspoon ginger powder</li>
            <li>1 teaspoon onion powder</li>
            <li>1 tablespoon coriander powder</li>
            <li>1/8 teaspoon turmeric powder</li>
            <li>1/8 teaspoon red chili powder</li>
            <li>1 tablespoon curry powder</li>
            <li>1 teaspoon cumin powder</li>
            <li>Olive oil, as needed</li>
            <li>Salt to taste</li>
          </ol>
        </div>

        <div className="ingredients">
          <h3>Instructions</h3>

          <ol>
            <li>
              Wash and peel the potatoes. Slice them vertically and use a food
              chopper to cut them into small, evenly sized cubes.
            </li>
            <li>
              Heat olive oil in a nonstick pan over medium heat.
            </li>
            <li>
              Add the chopped potatoes and cumin powder. Stir well to coat
              the potatoes with the oil and cumin.
            </li>
            <li>
              Cook for approximately 15-20 minutes, stirring frequently to
              prevent the potatoes from sticking to the bottom of the pan.
            </li>
            <li>
              Once the potatoes begin to soften, add the finely chopped onions.
            </li>
            <li>
              Add ginger powder, onion powder, coriander powder, turmeric
              powder, red chili powder, and curry powder.
            </li>
            <li>
              Mix everything thoroughly so the spices are evenly distributed
              throughout the potatoes.
            </li>
            <li>
              Add salt to taste and continue cooking until the potatoes are
              completely tender and lightly browned.
            </li>
            <li>
              Serve hot and garnish with fresh cilantro if desired.
            </li>
          </ol>
        </div>

        <h2>Optional Egg Bhurji</h2>

        <p>
          Egg bhurji is an Indian-style scrambled egg dish prepared with
          onions, tomatoes, ginger, garlic, and aromatic spices. It is a
          flavorful and filling accompaniment that can be served alongside
          the seasoned potatoes.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">restaurant_menu</span>
            {" "}Yields: 1 Serving
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Cooking Time: 15-20 minutes
          </Col>
        </Row>

        <div className="ingredients">
          <h3>Ingredients</h3>

          <ol>
            <li>3 eggs</li>
            <li>1 large onion, finely chopped</li>
            <li>1 large tomato, finely chopped</li>
            <li>1 tablespoon freshly grated ginger</li>
            <li>1 teaspoon onion powder</li>
            <li>1 tablespoon coriander powder</li>
            <li>1/8 teaspoon turmeric powder</li>
            <li>1/8 teaspoon red chili powder</li>
            <li>1 tablespoon garlic powder</li>
            <li>1 teaspoon cumin powder</li>
            <li>2 tablespoons olive oil</li>
            <li>Green chilies, chopped, as desired</li>
            <li>Black pepper powder to taste</li>
            <li>Fresh lime juice, as desired</li>
            <li>Fresh cilantro leaves for garnish</li>
            <li>Salt to taste</li>
          </ol>
        </div>

        <div className="ingredients"><h3>Instructions</h3>

          <ol>
            <li>
              Heat approximately 2 tablespoons of olive oil in a nonstick
              pan over medium heat.
            </li>
            <li>
              Add cumin powder and chopped onions. Sprinkle a little salt
              over the onions to help them soften.
            </li>
            <li>
              Cook the onions for approximately 2-3 minutes, stirring
              occasionally, until they become translucent.
            </li>
            <li>
              Add chopped green chilies, turmeric powder, and chopped tomatoes.
            </li>
            <li>
              Cook until the tomatoes soften, then add red chili powder,
              coriander powder, onion powder, and garlic powder.
            </li>
            <li>
              Beat the eggs in a separate bowl with a little salt and black
              pepper.
            </li>
            <li>
              Pour the beaten eggs into the pan with the onion and tomato
              mixture.
            </li>
            <li>
              Add freshly grated ginger and gently stir the eggs over medium
              heat until they are fully cooked and scrambled.
            </li>
            <li>
              Add fresh lime juice and adjust the salt and spices to taste.
            </li>
            <li>
              Break the scrambled eggs into small pieces using a spatula
              and mix well with the masala.
            </li>
            <li>
              Garnish with fresh cilantro leaves.
            </li>
            <li>
              Serve the egg bhurji alongside the prepared spiced potatoes
              for a flavorful combination.
            </li>
          </ol>
        </div>

        <h2>Final Product</h2>

        <Image
          src="/potatobhurji.jpg"
          alt="Indian spiced potato bhurji served with scrambled egg bhurji"
          thumbnail
          rounded
          fluid
          loading="lazy"
          className="recipe-image"
        />
      </div>
    );
  }
}

export default Potatobhurji;
