import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Lentil extends Component {
  render() {
    return (
      <div>
        <RecipeSchema
          name="Masoor Dal Delight: Lentil Soup Curry"
          description="A comforting Indian lentil soup made with Masoor Dal, Toor Dal, and Chana Dal, seasoned with aromatic spices and served with rice or roti."
          image="https://fearlessvegetarian.netlify.app/lentil.jpg"
          url="https://fearlessvegetarian.netlify.app/lentil"
          prepTime="PT15M"
          cookTime="PT45M"
          totalTime="PT60M"
          recipeYield="2 Servings"
          ingredients={[
            "1 cup Masoor Dal",
            "1 cup Toor Dal",
            "1 cup Chana Dal",
            "1 onion",
            "1 tomato",
            "1 teaspoon cumin powder",
            "1 tablespoon coriander powder",
            "1 teaspoon garam masala",
            "Turmeric powder",
            "Red chili powder",
            "Kasoori Methi",
            "Salt"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Masoor Dal Recipe (Indian Red Lentil Curry) | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/lentil"
          />

          <meta
            name="description"
            content="Easy Masoor Dal recipe made with red lentils, aromatic Indian spices, onions, and tomatoes. This healthy Indian lentil curry is protein-rich, vegan-friendly, comforting, and perfect with rice or roti."
          />

          <meta
            name="keywords"
            content="masoor dal recipe, red lentil curry, Indian lentil soup, vegan dal recipe, healthy vegetarian curry, protein rich vegetarian meal, Indian comfort food, dal tadka, lentil curry with rice, Fearless Vegetarian"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Masoor Dal Recipe (Indian Red Lentil Curry)"
          />

          <meta
            property="og:description"
            content="A comforting Indian Masoor Dal recipe made with red lentils, onions, tomatoes, and aromatic spices. Easy, nutritious, and perfect with rice or roti."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/lentil.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/lentil"
          />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Fearless Vegetarian" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Masoor Dal Recipe (Indian Red Lentil Curry)"
          />
          <meta
            name="twitter:description"
            content="Healthy and flavorful Masoor Dal made with red lentils and Indian spices. Perfect comfort food served with rice or roti."
          />
          <meta
            name="twitter:image"
            content="https://fearlessvegetarian.netlify.app/lentil.jpg"
          />
        </Helmet>
        <h1>Masoor Dal Recipe (Indian Red Lentil Curry) – Healthy, Protein-Rich Comfort Food</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon ginger powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon onion powder </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 tablespoon coriander powder </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/8 teaspoon tumeric powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/8 teaspoon red chili powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 tablespoon curry powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon cumin powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon Garam Masala powder</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup of Masoor Dal (Red Lentil) found in Indian Store</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup of Toor Dal (Red Lentil) found in Indian Store</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup of Chana Dal (Red Lentil) found in Indian Store</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Salt as per taste</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 whole onion</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 whole tomato</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instructions</h3>

          <ol>
            <li>Take 1 cup each of Masoor dal, Toor dal, and Chana dal, and mix them together. Add the mixed dals to a pot or pressure cooker.
              Rinse it well a few times. Drain the water completely.</li>
            <li>Add 5 cups of water and pressure cook it for 10 min. Make sure the lentils turns soft. Press down few lentils between your thumb and fore fingers.
              They should get mashed easily. Heat the lentils a little more if the lentils are not soft.
            </li>
            <li>Heat 2 tbsp olive oil on a medium heat in a non stick pot. </li>
            <li>Add one after the other - 1/2 teaspoon cumin seeds, 2 chopped garlic cloves and 1 to 2 broken dried red chilies. You can also add a bay leaf
              or a sprig of curry leaves (pat dry).</li>
            <li>Add chopped onions and tomato and let it cook for 5 minutes.</li>
            <li>When the garlic turns slightly golden, turn the heat to low (or turn off if the pan is too hot). </li>
            <li>Add 1 pinch hing (Asafoetida) found in the Indian Grocery store, 1/4 teaspoon turmeric and 1/4 to 1/2 teaspoon red chili powder
              (adjust to taste). </li>
            <li>Add a pinch of Garam Masala found in the Indian Grocery store. Chili powder tends to burn quickly so pour this immediately to the
              pressure cooked lentil. </li>
            <li>Add the pressure cooked lentil to the pot and 1 cup of water.</li>
            <li>Constantly stir the potatoes so they do not stick to the bottom of the pan</li>
            <li>Add salt as per taste and Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
            <li>You can garnish the lentil soup by sprinkling some finely chopped coriander leaves & lemon juice.</li>
            <li>Serve Masoor Dal with rice or roti, mango pickle, veggie salad. </li>
          </ol>
        </div>
        <section>
          <h2>Lentil Soup</h2>

          <Image
            src="/lentil.jpg"
            alt="A bowl of hearty Masoor Dal Lentil Soup, showcasing the rich blend of red lentils, aromatic spices, and vibrant vegetables"
            fluid
            rounded
            loading="lazy"
            className="recipe-image"
          />
        </section>
        <section>
          <h2>Lentil Soup / Tadka Daal Preparation Video</h2>

          <div className="youtube-container">
            <YouTube
              videoId="f-x2SV3xbko"
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
        <section className="related-recipes">
          <h2>Related Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Masoor Dal (Lentil Soup Curry), you may also
            enjoy these comforting and flavorful vegetarian recipes:
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
                    alt="Dal Makhani Slow-Cooked Punjabi Lentils"
                    fluid
                    rounded
                  />

                  <h3>
                    Dal Makhani – Slow-Cooked Punjabi Lentils
                  </h3>

                  <p>
                    A rich and creamy Punjabi lentil dish made with
                    black lentils and kidney beans, slow-cooked with
                    aromatic spices.
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
                    alt="Rajmah Kidney Bean Curry"
                    fluid
                    rounded
                  />

                  <h3>
                    Rajmah (Kidney Bean Curry)
                  </h3>

                  <p>
                    A hearty North Indian kidney bean curry simmered
                    in a flavorful tomato and spice-based gravy.
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
                    alt="Black Eyed Peas Curry Lobia Masala"
                    fluid
                    rounded
                  />

                  <h3>
                    Black Eyed Peas Curry (Lobia Masala)
                  </h3>

                  <p>
                    A flavorful Indian curry made with tender black
                    eyed peas, tomatoes, onions, and aromatic spices.
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
                  />

                  <h3>
                    Quinoa Moong Dal Khichdi
                  </h3>

                  <p>
                    A wholesome vegetarian meal combining nutritious
                    quinoa and moong dal with aromatic Indian spices.
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
                  />

                  <h3>
                    Besan Curry (Chickpea Flour Curry)
                  </h3>

                  <p>
                    A comforting Indian curry made with chickpea flour,
                    yogurt, and aromatic spices for a flavorful meal.
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

export default Lentil;