import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class Couscousblackbeanbowl extends Component {
  render() {
    const optsDesktop = {
      height: '600',
      width: '700',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };
    return (
      <div>
        <RecipeSchema
          name="Couscous Black Bean Bowl with Enchilada Sauce"
          description="A healthy vegetarian couscous bowl made with black beans, red bell peppers, enchilada sauce, and fresh cilantro. High in protein, fiber, and flavor."
          image="https://fearlessvegetarian.netlify.app/couscousblackbeanbowl.png"
          url="https://fearlessvegetarian.netlify.app/couscousblackbeanbowl"
          prepTime="PT10M"
          cookTime="PT15M"
          totalTime="PT25M"
          recipeYield="1 Serving"
          ingredients={[
            "1 cup couscous",
            "1 cup boiling water or vegetable broth",
            "2 tablespoons fresh cilantro",
            "2 tablespoons olive oil",
            "1 cup enchilada sauce",
            "1/2 teaspoon smoked paprika",
            "1/2 teaspoon cumin powder",
            "1 red bell pepper, sliced",
            "1 cup cooked black beans",
            "Salt and pepper to taste",
            "Lime juice for garnish"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Couscous Black Bean Bowl with Enchilada Sauce | Healthy Vegetarian Recipe | Fearless Vegetarian
          </title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/couscousblackbeanbowl" />
          <meta
            name="description"
            content="Healthy Couscous Black Bean Bowl made with enchilada sauce, black beans, red bell peppers, and fresh cilantro. A quick vegetarian meal packed with protein, fiber, and flavor."
          />
          <meta
            name="keywords"
            content="couscous black bean bowl, couscous with black beans, couscous enchilada recipe, vegetarian couscous bowl, healthy couscous recipe, 
            vegan couscous bowl, black bean couscous enchilada, easy couscous dinner, Mexican couscous bowl, high protein vegetarian bowl,
            recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegans"
          />
          <meta property="og:title" content="Couscous Black Bean Bowl with Enchilada Sauce & Red Pepper – Healthy & Flavorful Recipe" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/couscousblackbeanbowl" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/couscousblackbeanbowl.png" />
          <meta property="og:description" content="Try this delicious Couscous Black Bean Bowl with Enchilada Sauce & Red Pepper – a wholesome, protein-packed meal full of fiber, flavor, and nutrients. 
            Perfect for a quick, healthy lunch or dinner!" />
        </Helmet>
        <h1>Couscous Black Bean Bowl with Enchilada Sauce and Red Bell Pepper</h1>
        <p>
          This Couscous Black Bean Bowl combines fluffy couscous, protein-rich black beans,
          sweet red bell peppers, and flavorful enchilada sauce for a quick, healthy, and
          satisfying vegetarian meal. Perfect for lunch, dinner, or meal prep.
        </p>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 25 minutes</Col>
        </Row>
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup couscous</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup boiling water (or vegetable broth for extra flavor)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 tbsp fresh cilantro, chopped </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 tbsp olive oil </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup enchilada sauce (store-bought or homemade)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp smoked paprika</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              Salt & pepper to taste </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 tsp cumin powder </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 tbsp olive oil</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 red bell pepper, thinly sliced</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 cup cooked black beans (or canned, rinsed & drained)</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instructions</h3>
          <ol>
            <li>Cook couscous – In a bowl, add couscous and boiling water (or broth).
              Cover with a lid or plate and let sit for 5 minutes. Fluff with a fork.</li>
            <li>
              Prepare veggies – Heat olive oil in a skillet. Sauté red bell pepper until slightly softened. Add cumin, smoked paprika, salt, and pepper.
            </li>
            <li>
              Add beans – Stir in black beans. Cook for 2–3 minutes until warmed through.
            </li>
            <li>
              Combine with couscous – Add the sautéed veggies and beans to the couscous. Mix gently.
            </li>
            <li>
              Top with enchilada sauce – Pour enchilada sauce over the couscous mixture and stir lightly to coat
            </li>
            <li>Garnish & serve – Sprinkle with fresh cilantro, a squeeze of lime juice, and any optional toppings.</li>
          </ol>
        </div>
        <h2>Final Product</h2>
        <Image
          src="/couscousblackbeanbowl.png"
          alt="Couscous black bean bowl topped with enchilada sauce, red bell peppers, and fresh cilantro"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />
        <div>
          <h2>Couscous Black Bean Bowl with Enchilada Sauce & Red Pepper Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="lx_gZxfZSFg" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="lx_gZxfZSFg" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <section className="related-recipes">
          <h2>Related Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Couscous Black Bean Bowl, you may also
            enjoy these healthy vegetarian meals packed with flavor and
            nutrition:
          </p>

          <Row className="g-4">

            {/* Middle Eastern Couscous Salad */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/couscousbalsamic"
                  className="related-recipe-link"
                >
                  <Image
                    src="/couscousbalsamic.jpg"
                    alt="Middle Eastern Couscous Salad"
                    fluid
                    rounded
                  />

                  <h3>
                    Middle Eastern Couscous Salad
                  </h3>

                  <p>
                    A refreshing couscous salad with fresh vegetables
                    and a flavorful balsamic dressing.
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
                    A nutritious vegetarian meal combining quinoa,
                    moong dal, and aromatic Indian spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Avocado Toast */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/avocado"
                  className="related-recipe-link"
                >
                  <Image
                    src="/avocado.jpg"
                    alt="Avocado Toast"
                    fluid
                    rounded
                  />

                  <h3>
                    Avocado Toast
                  </h3>

                  <p>
                    Creamy avocado served on toasted bread for a
                    simple and nutritious vegetarian meal.
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
                <Link
                  to="/potatosalad"
                  className="related-recipe-link"
                >
                  <Image
                    src="/potatosalad.png"
                    alt="Chukauni Nepali Yogurt Potato Salad"
                    fluid
                    rounded
                  />

                  <h3>
                    Chukauni – Nepali Yogurt Potato Salad
                  </h3>

                  <p>
                    A refreshing Nepali potato salad made with
                    creamy yogurt and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Hearty Lentil Soup */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/lentil"
                  className="related-recipe-link"
                >
                  <Image
                    src="/lentil.jpg"
                    alt="Hearty Lentil Soup"
                    fluid
                    rounded
                  />

                  <h3>
                    Hearty Lentil Soup
                  </h3>

                  <p>
                    A warm and satisfying lentil soup packed with
                    plant-based protein and comforting flavors.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Creamy Broccoli Soup */}

            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/broccoli"
                  className="related-recipe-link"
                >
                  <Image
                    src="/broccoli.jpg"
                    alt="Creamy Broccoli Soup"
                    fluid
                    rounded
                  />

                  <h3>
                    Creamy Broccoli Soup
                  </h3>

                  <p>
                    A creamy and comforting vegetarian broccoli soup
                    made with simple wholesome ingredients.
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

export default Couscousblackbeanbowl