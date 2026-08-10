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
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
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
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 slices of bread (white or brown)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 medium potatoes (boiled & mashed)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Butter for toasting</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 small onion, sliced into rings.</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 small capsicum, sliced into rings.</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp ginger-garlic paste</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 cup fresh cilantro chutney (green chutney) </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 green chili (finely chopped, optional)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp turmeric powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp  red chili powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp  garam masala</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp cumin seeds</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 tbsp oil</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Optional: sliced cucumber, tomato, onion, beetroot, grated cheese</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Salt to taste</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instruction</h3>
          <h3>Prepare the Masala Stuffing</h3>
          <ol>
            <li>Heat oil in a pan over medium heat and add cumin seeds.</li>
            <li>Add onions and ginger-garlic paste. Sauté until the onions turn golden brown.</li>
            <li>Add capsicum and green chili. Cook for 2–3 minutes.</li>
            <li>Mix in turmeric powder, red chili powder, garam masala, and salt.</li>
            <li>Add the boiled and mashed potatoes. Mix well and cook for 2–3 minutes.</li>
            <li>Garnish with chopped cilantro and allow the mixture to cool.</li>
          </ol>
        </div>

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
        {/* Related Vegetarian Recipes */}
        <section className="related-recipes">
          <h2>Related Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            Looking for more vegetarian breakfast, snack, and street-food recipes?
            Try these flavorful and easy-to-make dishes that are perfect for lunch,
            tea time, meal prep, or a quick healthy meal.
          </p>

          <Row className="g-4">

            {/* Avocado Toast */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/avocado" className="related-recipe-link">
                  <Image
                    src="/avocado.jpg"
                    alt="Avocado Toast"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Avocado Toast</h3>

                  <p>
                    Creamy avocado spread over crispy toast for a simple,
                    nutritious, and satisfying vegetarian meal.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Chukauni */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/potatosalad" className="related-recipe-link">
                  <Image
                    src="/potatosalad.jpg"
                    alt="Chukauni Nepali Yogurt Potato Salad"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Chukauni – Nepali Yogurt Potato Salad</h3>

                  <p>
                    A refreshing Nepali potato salad made with creamy yogurt,
                    herbs, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Middle Eastern Couscous Salad */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/couscousbalsamic" className="related-recipe-link">
                  <Image
                    src="/couscousbalsamic.jpg"
                    alt="Middle Eastern Couscous Salad"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Middle Eastern Couscous Salad</h3>

                  <p>
                    A fresh and colorful couscous salad packed with vegetables,
                    herbs, and Mediterranean-inspired flavors.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Couscous Black Bean Bowl */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/couscousblackbeanbowl"
                  className="related-recipe-link"
                >
                  <Image
                    src="/couscousblackbeanbowl.jpg"
                    alt="Couscous Black Bean Bowl"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Couscous Black Bean Bowl</h3>

                  <p>
                    A wholesome and satisfying bowl combining fluffy couscous,
                    hearty black beans, and fresh vegetables.
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
                <Link to="/quinoamoongdal" className="related-recipe-link">
                  <Image
                    src="/quinoamoongdal.jpg"
                    alt="Quinoa Moong Dal Khichdi"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Quinoa Moong Dal Khichdi</h3>

                  <p>
                    A wholesome one-pot meal made with quinoa, protein-rich
                    moong dal, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Homemade Instant Pot Yogurt */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/yogurt" className="related-recipe-link">
                  <Image
                    src="/yogurt.jpg"
                    alt="Homemade Instant Pot Yogurt"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Homemade Instant Pot Yogurt</h3>

                  <p>
                    Creamy, smooth, and homemade yogurt prepared easily using
                    an Instant Pot.
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

export default Bombaymasalasandwich;