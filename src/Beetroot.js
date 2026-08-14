import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  faCarrot
} from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Beetroot extends Component {
  render() {
    const optsDesktop = {
      height: '720',
      width: '100%',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };
    return (
      <div>
        <RecipeSchema
          name="Beetroot Curry with Coconut Milk"
          description="A flavorful Indian beetroot curry made with coconut milk, urad dal, mustard seeds, and aromatic spices. A healthy vegan recipe that pairs perfectly with rice or naan."
          image="https://fearlessvegetarian.netlify.app/beetroot.jpg"
          url="https://fearlessvegetarian.netlify.app/beetroot"
          prepTime="PT15M"
          cookTime="PT45M"
          totalTime="PT60M"
          recipeYield="1 Serving"
          ingredients={[
            "1 beetroot, peeled and chopped",
            "1/2 jalapeno pepper",
            "1/4 teaspoon turmeric powder",
            "1 cinnamon stick",
            "1 teaspoon coriander powder",
            "1 teaspoon mustard seeds",
            "1 can coconut milk",
            "1 tablespoon urad dal",
            "1 dried curry leaf",
            "1 tablespoon oil",
            "Salt to taste"
          ]}
          instructions={[
            "Boil beetroot until tender.",
            "Chop beetroot into small cubes.",
            "Heat oil in a pan and add beetroot.",
            "Add jalapeno, turmeric, coriander powder, cinnamon stick, and salt.",
            "Pour coconut milk and cook for 10 to 15 minutes.",
            "Prepare tempering with mustard seeds and urad dal.",
            "Add tempering to curry.",
            "Adjust seasoning and serve with rice or naan."
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Beetroot Curry with Coconut Milk: Vibrant Fusion Delight</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/beetroot" />
          <meta
            name="description"
            content="Experience the vibrant fusion of beetroot, coconut milk, and Urad Dal in this flavorful curry. A delightful blend of colors and flavors awaits!"
          />
          <meta
            name="keywords"
            content="beetroot curry, coconut milk, lentil recipes, Urad Dal, vegan curry, colorful dishes, nutritious beetroot, creamy coconut curry, 
            plant-based cuisine, recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan, simple cooking,
            Indian-inspired recipes, flavorful vegan meals, wholesome lentil curry, exotic flavors, beetroot and lentil combination, vegetarian cooking"
          />
          <meta property="og:title" content="Beetroot Curry with Coconut Milk: Vibrant Fusion Delight" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/beetroot" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/beetroot.jpg" />
          <meta property="og:description" content="Experience the vibrant fusion of beetroot, coconut milk, and Urad Dal in this flavorful curry. A delightful blend of colors and flavors awaits!" />
        </Helmet>
        <h1>
          Beetroot Curry with Coconut Milk (Indian Beetroot Curry Recipe)
        </h1>
        <p>
          This Beetroot Curry with Coconut Milk combines tender beetroot, creamy coconut milk,
          and roasted urad dal for a delicious South Indian-inspired dish. Rich in fiber,
          antioxidants, vitamins, and minerals, beetroot is known for supporting heart health,
          immunity, and overall wellness. This vibrant curry pairs perfectly with rice,
          roti, or naan.
        </p>
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
              <span>1 Beetroot, peeled and chopped</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1/2 big Jalapeno pepper</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1/4 teaspoon Turmeric powder</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 Cinnamon Stick</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 teaspoon Coriander Powder</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 teaspoon Mustard seeds</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 can of coconut milk</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 tablespoon Urad Dal found in Indian store</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>Salt as per taste</span></li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 dried Curry leave</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              <span>1 tablespoon cooking oil</span>
            </li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instruction</h3>
          <ol>
            <li>To begin making beetroot curry, boil the beetroot in a pressure cooker or pot until it becomes tender.</li>
            <li>Once the beetroot is tender, slice it vertically, and use a food chopper to chop each slice into small square pieces.</li>
            <li>Take 1 tablespoon of olive oil in a non-stick pan and heat it up.</li>
            <li>Add the beetroot pieces to the non-stick pan.</li>
            <li>Add chopped jalapeño peppers, salt, turmeric powder, coriander powder, and a cinnamon stick.</li>
            <li>Pour a can of coconut milk.</li>
            <li>Stir the ingredients and cook it on medium flame for 10-15 min close the pan with a lid to speed up the cooking process.</li>
            <li>Heat a teaspoon of oil in a separate small pan.</li>
            <li>Add the mustard seeds and White Urad dal found in Indian Grocery Store. Allow it to crackle and roast for couple of minutes.</li>
            <li>Add salt as per taste.</li>
            <li>Your curry is ready. Taste it to adjust the spice level and salt. You can eat it with rice or Garlic Naan (Indian Bread), which can be found in an Indian Grocery Store.</li>
          </ol>
        </div>
        <h2>Final Product</h2>
        <Image
          src="/beetroot.jpg"
          alt="Vibrant Beetroot Curry with Coconut Milk and Urad Dal"
          fluid
          rounded
          loading="lazy"
          className="recipe-image"
        />
        <div>
          <h2>Beetroot Curry with Coconut Milk Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="veUNjVorUyk" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="veUNjVorUyk" opts={optsDesktop} />
          </MediaQuery>
        </div>
        {/* Related Vegetarian Recipes */}
        <section className="related-recipes">
          <h2>Related Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Beetroot Curry with Coconut Milk, you may also
            like these flavorful and comforting vegetarian recipes. Perfect for
            everyday meals and family dinners.
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
                    alt="Masoor Dal Lentil Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Masoor Dal (Lentil Curry)</h3>

                  <p>
                    A comforting red lentil curry cooked with tomatoes,
                    aromatic spices, and fresh herbs for a wholesome meal.
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
                    alt="Dal Makhani Creamy Punjabi Lentils"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Dal Makhani</h3>

                  <p>
                    Rich and creamy Punjabi-style lentils slow-cooked with
                    aromatic spices for a comforting vegetarian dish.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Saag Paneer */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/saagpaneer"
                  className="related-recipe-link"
                >
                  <Image
                    src="/saagpaneer.jpg"
                    alt="Saag Paneer Spinach and Paneer Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Saag Paneer</h3>

                  <p>
                    Creamy spinach cooked with soft paneer and aromatic
                    Indian spices for a flavorful vegetarian curry.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Besan Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/besan"
                  className="related-recipe-link"
                >
                  <Image
                    src="/besan.jpg"
                    alt="Besan Curry Chickpea Flour Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Besan Curry</h3>

                  <p>
                    A flavorful Indian curry made with chickpea flour,
                    yogurt, and aromatic spices for a comforting meal.
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
                <Link
                  to="/aloogobi"
                  className="related-recipe-link"
                >
                  <Image
                    src="/aloogobi.jpg"
                    alt="Aloo Gobi Potato Cauliflower Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Aloo Gobi</h3>

                  <p>
                    A classic Indian vegetarian curry made with potatoes,
                    cauliflower, and aromatic spices.
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
                    A wholesome one-pot meal made with quinoa, moong dal,
                    vegetables, and aromatic Indian spices.
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

export default Beetroot;