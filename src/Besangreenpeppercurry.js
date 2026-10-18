
import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class BesanGreenPepperCurry extends Component {
  render() {
    return (
      <div>
        <RecipeSchema
          name="Besan Green Pepper Curry with Yogurt"
          description="A comforting Indian vegetarian curry made with green bell peppers, besan (gram flour), yogurt, onions, and aromatic spices. Perfect with roti, chapati, paratha, or rice."
          image="https://fearlessvegetarian.netlify.app/besan-green-pepper-curry.jpg"
          url="https://fearlessvegetarian.netlify.app/besan-green-pepper-curry"
          prepTime="PT15M"
          cookTime="PT25M"
          totalTime="PT40M"
          recipeYield="4 Servings"
          ingredients={[
            "2 medium green bell peppers (capsicum), chopped",
            "1 medium onion, finely chopped",
            "4 tablespoons besan (gram flour)",
            "1/2 cup plain yogurt, whisked",
            "1/2 cup water, or as needed",
            "3 tablespoons cooking oil",
            "1 teaspoon cumin seeds",
            "1/2 teaspoon turmeric powder",
            "1 teaspoon coriander powder",
            "1/2 teaspoon red chili powder",
            "1 teaspoon ginger-garlic paste",
            "1/2 teaspoon garam masala",
            "1/2 teaspoon kasuri methi (dried fenugreek leaves)",
            "Salt to taste",
            "Fresh coriander leaves for garnish"
          ]}
        />

        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Besan Green Pepper Curry with Yogurt | Indian Vegetarian Recipe | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/besan-green-pepper-curry"
          />

          <meta
            name="description"
            content="Make delicious besan green pepper curry with yogurt, gram flour, capsicum, onions, and Indian spices. This comforting vegetarian curry pairs perfectly with roti, chapati, paratha, or rice."
          />

          <meta
            name="keywords"
            content="besan green pepper curry, besan curry, gram flour curry, yogurt besan curry, capsicum besan curry, green bell pepper curry, Indian vegetarian recipes, vegetarian curry, Fearless Vegetarian"
          />

          <meta
            property="og:title"
            content="Besan Green Pepper Curry with Yogurt | Fearless Vegetarian"
          />

          <meta property="og:type" content="website" />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/besan-green-pepper-curry"
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/besan-green-pepper-curry.jpg"
          />

          <meta
            property="og:description"
            content="Enjoy a flavorful Indian vegetarian curry made with green bell peppers, roasted besan, yogurt, onions, and aromatic spices."
          />
        </Helmet>

        <h1>Besan Green Pepper Curry with Yogurt</h1>

        <p>
          Besan Green Pepper Curry is a comforting Indian vegetarian dish
          made with green bell peppers, gram flour (besan), creamy yogurt,
          onions, and aromatic spices. Roasted besan gives the curry a
          rich texture, while yogurt adds a gentle tangy flavor.
        </p>

        <p>
          This homemade capsicum besan curry is easy to prepare using
          everyday ingredients. Serve it hot with roti, chapati, paratha,
          or steamed rice for a delicious lunch or dinner.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">
              restaurant_menu
            </span>{" "}
            Yields: 4 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} />{" "}
            Preparation Time: 15 minutes
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} />{" "}
            Cooking Time: 25 minutes
          </Col>
        </Row>

        <div className="ingredients">
          <h3>Ingredients</h3>

          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              2 medium green bell peppers (capsicum), chopped
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1 medium onion, finely chopped
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              4 tablespoons besan (gram flour)
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 cup plain yogurt, whisked
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 cup water, or as needed
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              3 tablespoons cooking oil
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1 teaspoon cumin seeds
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 teaspoon turmeric powder
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1 teaspoon coriander powder
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 teaspoon red chili powder, adjust to taste
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1 teaspoon ginger-garlic paste
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 teaspoon garam masala
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              1/2 teaspoon kasuri methi (dried fenugreek leaves)
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              Salt to taste
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="ingredient-icon"
              />
              Fresh coriander leaves for garnish
            </li>
          </ul>
        </div>

        <div className="ingredients">
          <h3>Instructions</h3>

          <ol>
            <li>
              <strong>Prepare the Vegetables:</strong>{" "}
              Wash and chop the green bell peppers into bite-sized
              pieces. Finely chop the onion and whisk the yogurt
              until smooth.
            </li>

            <li>
              <strong>Sauté the Green Peppers and Onion:</strong>{" "}
              Heat 1 tablespoon of oil in a pan over medium heat.
              Add the chopped green peppers, half of the onion,
              and a little salt. Sauté for 3–4 minutes until the
              peppers soften slightly but retain their shape.
              Transfer them to a plate.
            </li>

            <li>
              <strong>Cook the Spices and Besan:</strong>{" "}
              In the same pan, heat the remaining 2 tablespoons
              of oil. Add the cumin seeds and let them sizzle.
              Add the remaining onion and cook until translucent.
              Stir in the ginger-garlic paste, turmeric powder,
              coriander powder, and red chili powder. Add the
              besan and roast over low to medium heat for 3–4
              minutes, stirring continuously to remove the raw
              flour taste.
            </li>

            <li>
              <strong>Add the Yogurt Carefully:</strong>{" "}
              Lower the heat. Gradually add the whisked yogurt,
              stirring continuously to keep the mixture smooth.
              Add the water a little at a time and mix well to
              form a creamy curry sauce. Keep the heat low to
              help prevent the yogurt from curdling.
            </li>

            <li>
              <strong>Simmer the Curry:</strong>{" "}
              Cook the besan and yogurt mixture for about 5–7
              minutes, stirring frequently. If the curry becomes
              too thick, add a little more water until you reach
              your preferred consistency.
            </li>

            <li>
              <strong>Add the Peppers and Finish:</strong>{" "}
              Return the sautéed green peppers and onion to the
              pan. Mix well and simmer for another 3–4 minutes.
              Add garam masala and crush the kasuri methi between
              your palms before adding it to the curry. Taste
              and adjust the salt and spices.
            </li>

            <li>
              <strong>Garnish and Serve:</strong>{" "}
              Turn off the heat and garnish with freshly chopped
              coriander leaves. Serve hot with roti, chapati,
              paratha, or steamed rice.
            </li>
          </ol>
        </div>

        <h2>Final Product</h2>

        <Image
          src="/besangreenpeppercurry.png"
          alt="Homemade besan green pepper curry with yogurt, gram flour, and Indian spices"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />
        {/* Preparation Video */}
        <section className="recipe-video">
          <h2>Besan Green Pepper Curry with Yogurt Preparation Video</h2>
          <div className="ratio ratio-1x1 video-container">
            <iframe
              src="https://youtube.com/embed/1pRCF41fK7Q?si=C1hVIaHXAOnItnlT"
              title="Besan Green Pepper Curry Preparation Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="ingredients">
          <h2>Tips for Making the Best Besan Curry</h2>

          <ul>
            <li>
              Roast the besan thoroughly to remove its raw taste,
              but do not let it burn.
            </li>

            <li>
              Whisk the yogurt until smooth and add it over low
              heat while stirring to reduce the chance of curdling.
            </li>

            <li>
              Add water gradually to control the thickness of
              the gravy.
            </li>

            <li>
              Keep the green peppers slightly firm for better
              texture and flavor.
            </li>

            <li>
              For a vegan variation, use unsweetened plant-based
              yogurt suitable for cooking.
            </li>
          </ul>
        </div>

        <div className="ingredients">
          <h2>Frequently Asked Questions</h2>

          <h3>Is besan the same as gram flour?</h3>
          <p>
            Besan is flour made from split Bengal gram. It is
            commonly used in Indian curries, snacks, and savory
            dishes.
          </p>

          <h3>Can I use green bell peppers for this recipe?</h3>
          <p>
            Yes. Green bell peppers are also called capsicum in
            many countries and work well in this curry.
          </p>

          <h3>How do I prevent yogurt from curdling?</h3>
          <p>
            Whisk the yogurt until smooth, reduce the heat, and
            add it gradually while stirring. Avoid boiling the
            curry vigorously after adding yogurt.
          </p>

          <h3>What can I serve with besan green pepper curry?</h3>
          <p>
            This curry tastes delicious with roti, chapati,
            paratha, or steamed basmati rice.
          </p>
        </div>
        {/* Related Vegetarian Recipes */}
        <section className="related-recipes">
          <h2>Related Indian Vegetarian Recipes</h2>

          <p className="related-recipes-intro">
            Enjoyed this Besan Green Pepper Curry with Yogurt?
            Explore these delicious Indian vegetarian recipes, from
            traditional potato curries to flavorful paneer dishes.
            These homemade recipes are perfect for everyday lunch
            and dinner.
          </p>

          <Row className="g-4">

            {/* Homemade Paneer Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/paneer" className="related-recipe-link">
                  <Image
                    src="/paneer.jpg"
                    alt="Homemade Indian Paneer Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Homemade Paneer Curry</h3>

                  <p>
                    A flavorful Indian curry featuring soft paneer
                    cooked in a delicious gravy with aromatic spices.
                    Serve with roti, naan, or steamed rice.
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
                    alt="Aloo Gobi Potato and Cauliflower Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Aloo Gobi – Potato and Cauliflower Curry</h3>

                  <p>
                    A classic North Indian dish made with potatoes,
                    cauliflower, and aromatic spices. Enjoy this
                    comforting vegetarian curry with roti or paratha.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Bhandare Wale Aloo */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/bhandarewalealoo"
                  className="related-recipe-link"
                >
                  <Image
                    src="/bhandarewalealoo.jpg"
                    alt="Bhandare Wale Aloo Temple-Style Potato Tomato Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>
                    Bhandare Wale Aloo – Temple-Style Potato Curry
                  </h3>

                  <p>
                    A traditional temple-style potato curry prepared
                    with boiled potatoes, tomatoes, ginger, and
                    aromatic Indian spices. Delicious with puri or roti.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Aloo Tamatar Pyaz */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link
                  to="/alootamatarpyaz"
                  className="related-recipe-link"
                >
                  <Image
                    src="/alootamatarpyaz.jpg"
                    alt="Aloo Tamatar Pyaz Indian Potato Tomato Onion Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Aloo Tamatar Pyaz Curry</h3>

                  <p>
                    A comforting Indian potato curry featuring
                    tomatoes, onions, and traditional spices.
                    A delicious choice for a simple homemade meal.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Mushroom Masala Curry */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/mushroom" className="related-recipe-link">
                  <Image
                    src="/mushroom.jpg"
                    alt="Indian Mushroom Masala Curry"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Mushroom Masala Curry</h3>

                  <p>
                    Tender mushrooms cooked with onions, tomatoes,
                    and aromatic Indian spices create a hearty
                    vegetarian curry. Serve with rice or chapati.
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
                <Link
                  to="/couscousbalsamic"
                  className="related-recipe-link"
                >
                  <Image
                    src="/couscousbalsamic.jpg"
                    alt="Middle Eastern Couscous Salad"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Middle Eastern Couscous Salad</h3>

                  <p>
                    A colorful couscous salad with fresh vegetables
                    and herbs. Enjoy this refreshing vegetarian dish
                    alongside your favorite curry or as a light meal.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

          </Row>
        </section>

        <div className="ingredients">
          <h2>Thank You for Visiting Fearless Vegetarian!</h2>

          <p>
            Thank you for trying this besan green pepper curry
            recipe. We hope you enjoy its creamy texture and
            comforting Indian flavors. Visit Fearless Vegetarian
            for more homemade vegetarian recipes and cooking
            inspiration.
          </p>

          <p>
            <Link to="/recipe" className="recipe-link">
              Explore More Vegetarian Recipes
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BesanGreenPepperCurry;