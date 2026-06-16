import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Bombaymasalasandwich extends Component {
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
          name="Bombay Masala Vegetable Sandwich"
          description="Bombay Masala Vegetable Sandwich, also known as Mumbai Street Style Sandwich, made with bread, spiced potato masala, green chutney, onions, capsicum, and aromatic Indian spices. A crispy and flavorful vegetarian sandwich perfect for breakfast, snacks, or tea time."
          image="https://fearlessvegetarian.netlify.app/masalasandwich.png"
          url="https://fearlessvegetarian.netlify.app/masalasandwich"
          prepTime="PT20M"
          cookTime="PT10M"
          totalTime="PT30M"
          recipeYield="1 Serving"
          ingredients={[
            "2 slices bread (white or brown)",
            "2 medium potatoes, boiled and mashed",
            "Butter for toasting",
            "1 small onion, sliced into rings",
            "1 small capsicum, sliced into rings",
            "1/2 teaspoon ginger-garlic paste",
            "1/2 cup fresh cilantro chutney",
            "1 green chili, finely chopped",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon red chili powder",
            "1/2 teaspoon garam masala",
            "1/2 teaspoon cumin seeds",
            "1 tablespoon oil",
            "Salt to taste",
            "Optional: cucumber slices",
            "Optional: tomato slices",
            "Optional: beetroot slices",
            "Optional: onion slices",
            "Optional: grated cheese"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bombay Masala Vegetable Sandwich Recipe – Irresistible Street-Style Delight</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/masalasandwich" />
          <meta
            name="description"
            content="Savor the authentic taste of Mumbai with this Bombay Masala Vegetable Sandwich recipe; a crispy, spicy, and flavorful street-style delight layered with chutney, veggies, and masala. Perfect for breakfast, snacks, or tea-time cravings!"
          />
          <meta
            name="keywords"
            content="Bombay sandwich, Street food, Indian sandwich, Spicy sandwich, Vegetarian sandwich, 
            Mumbai street food, Chutney sandwich, Bombay grilled sandwich, Indian snacks, Masala toast"
          />
          <meta property="og:title" content="Bombay Vegetable Sandwich: Irresistible Street-Style Delight" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/masalasandwich" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/masalasandwich.png" />
          <meta property="og:description" content="Savor the flavor of the streets with our Bombay Vegetable Sandwich. A delightful blend of vegetables and spices, bringing the street-style experience to your plate." />
        </Helmet>
        <h1>Vegetable Masala Sandwich also known as Bombay Sandwich, with Mint Chutney and loads of Vegetables stacked up</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>2 slices of bread (white or brown)</li>
          <li>2 medium potatoes (boiled & mashed)</li>
          <li>Butter for toasting</li>
          <li>1 small onion, sliced into rings.</li>
          <li>1 small capsicum, sliced into rings.</li>
          <li>1/2 tsp ginger-garlic paste</li>
          <li>1/2 cup fresh cilantro chutney (green chutney) </li>
          <li>1 green chili (finely chopped, optional)</li>
          <li>1/2 tsp turmeric powder</li>
          <li>1/2 tsp  red chili powder</li>
          <li>1/2 tsp  garam masala</li>
          <li>1/2 tsp cumin seeds</li>
          <li>1 tbsp oil</li>
          <li>Optional: sliced cucumber, tomato, onion, beetroot, grated cheese</li>
          <li>Salt to taste</li>
        </ol>
        <div className="ingredients">Instructions</div>
        <h3>Prepare the Masala Stuffing</h3>
        <ol>
          <li>Heat oil in a pan over medium heat and add cumin seeds.</li>
          <li>Add onions and ginger-garlic paste. Sauté until the onions turn golden brown.</li>
          <li>Add capsicum and green chili. Cook for 2–3 minutes.</li>
          <li>Mix in turmeric powder, red chili powder, garam masala, and salt.</li>
          <li>Add the boiled and mashed potatoes. Mix well and cook for 2–3 minutes.</li>
          <li>Garnish with chopped cilantro and allow the mixture to cool.</li>
        </ol>

        <h3>Assemble the Sandwich</h3>
        <ol>
          <li>Spread butter evenly on the bread slices.</li>
          <li>Spread a layer of green chutney over the buttered side.</li>
          <li>Add a generous layer of the prepared potato masala on one slice.</li>
          <li>Top with cucumber, tomato, onion, beetroot, or grated cheese if desired.</li>
          <li>Cover with the second bread slice, chutney side facing down.</li>
        </ol>

        <h3>Toast the Sandwich</h3>
        <ol>
          <li>Place the sandwich in a sandwich maker, grill pan, or toaster.</li>
          <li>Toast until golden brown, crisp, and heated through.</li>
          <li>Cut into halves or quarters and serve hot with ketchup or green chutney.</li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image
            src="masalasandwich.png"
            alt="Bombay Masala Vegetable Sandwich with green chutney, spiced potato filling, and fresh vegetables"
            thumbnail
            rounded
            fluid
          />
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image
            src="masalasandwich.png"
            alt="Bombay Masala Vegetable Sandwich with green chutney, spiced potato filling, and fresh vegetables"
            thumbnail
            rounded
            width="50%"
            height="50%"
            fluid
          />
        </MediaQuery>
        <div>
          <h2>Bombay Masala Sandwich Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="tzsISscoET0" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="tzsISscoET0" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            Looking for more vegetarian breakfast, snack, and street-food recipes?
            Try these flavorful and easy-to-make dishes that are perfect for lunch,
            tea time, meal prep, or a quick healthy meal.
          </p>

          <ul className="custom-list">
            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/avocado" className="recipe-link">
                Avocado Toast
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/potatosalad" className="recipe-link">
                Chukauni – Nepali Yogurt Potato Salad
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/couscousbalsamic" className="recipe-link">
                Middle Eastern Couscous Salad
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/couscousblackbeanbowl" className="recipe-link">
                Couscous Black Bean Bowl
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/quinoamoongdal" className="recipe-link">
                Quinoa Moong Dal Khichdi
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/yogurt" className="recipe-link">
                Homemade Instant Pot Yogurt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Bombaymasalasandwich;