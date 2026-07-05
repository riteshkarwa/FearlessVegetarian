import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class Masalachai extends Component {
  render() {
    const optsDesktop = {
      height: "800",
      width: "1000",
    };

    const optsMobile = {
      height: "550",
      width: "325",
    };

    return (
      <div>
        <RecipeSchema
          name="Indian Ginger Cardamom Masala Chai"
          description="Traditional Indian Masala Chai made with fresh ginger, green cardamom, milk, black tea, and aromatic spices. A comforting tea recipe perfect for any time of the day."
          image="https://fearlessvegetarian.netlify.app/masalachai.jpg"
          url="https://fearlessvegetarian.netlify.app/masalachai"
          prepTime="PT5M"
          cookTime="PT10M"
          totalTime="PT15M"
          recipeYield="2 Servings"
          recipeCategory="Beverage"
          recipeCuisine="Indian"
          keywords="masala chai, ginger chai, cardamom tea, Indian tea, chai recipe"
          video="https://www.youtube.com/watch?v=PeUuU8irV7A"
          ingredients={[
            "2 cups water",
            "1 cup whole milk",
            "2 teaspoons loose black tea or tea bags",
            "1-inch fresh ginger, grated",
            "4 green cardamom pods",
            "2 teaspoons sugar (or to taste)"
          ]}
          instructions={[
            "Boil water.",
            "Add ginger and crushed cardamom.",
            "Simmer for 3 minutes.",
            "Add tea leaves.",
            "Pour in milk.",
            "Add sugar.",
            "Boil for 2 to 3 minutes.",
            "Strain and serve hot."
          ]}
        />

        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Ginger Cardamom Masala Chai Recipe | Authentic Indian Milk Tea |
            Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/masalachai"
          />

          <meta
            name="description"
            content="Learn how to make authentic Indian Ginger Cardamom Masala Chai with black tea, fresh ginger, green cardamom, milk, and sugar. A warm and comforting homemade chai recipe."
          />

          <meta
            name="keywords"
            content="masala chai, chai recipe, ginger tea, cardamom tea, Indian tea, milk tea, homemade chai, Indian beverages, chai latte, Fearless Vegetarian"
          />

          <meta
            property="og:title"
            content="Indian Ginger Cardamom Masala Chai Recipe"
          />

          <meta
            property="og:description"
            content="Traditional Indian milk tea flavored with fresh ginger and green cardamom."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/masalachai.png"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/masalachai"
          />

          <meta property="og:type" content="article" />

          <meta name="robots" content="index,follow" />
        </Helmet>

        <h1>Authentic Indian Ginger Cardamom Masala Chai</h1>

        <p>
          Masala Chai is India's favorite tea. This homemade version combines
          black tea with fresh ginger, fragrant green cardamom, creamy milk, and
          just the right amount of sweetness. It is comforting, flavorful, and
          perfect for breakfast or an afternoon tea break.
        </p>

        <h2>Health Benefits</h2>

        <p>
          Fresh ginger may aid digestion and provide warming properties, while
          green cardamom adds a wonderful aroma and is traditionally used to
          support digestive health. Black tea contains antioxidants, making this
          chai both delicious and comforting.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">
              restaurant_menu
            </span>{" "}
            Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Cooking Time: 15 minutes
          </Col>
        </Row>

        <div className="ingredients">Ingredients</div>

        <ol>
          <li>2 cups water</li>
          <li>1 cup whole milk</li>
          <li>2 teaspoons loose black tea or 2 tea bags</li>
          <li>1-inch fresh ginger, grated</li>
          <li>4 green cardamom pods, lightly crushed</li>
          <li>2 teaspoons sugar (adjust to taste)</li>
        </ol>

        <div className="ingredients">Instructions</div>

        <ol>
          <li>Bring the water to a boil in a saucepan.</li>

          <li>
            Add the grated ginger and lightly crushed green cardamom pods.
            Simmer for 2–3 minutes.
          </li>

          <li>Add the tea leaves (or tea bags).</li>

          <li>Pour in the milk and stir well.</li>

          <li>Add sugar according to your taste.</li>

          <li>
            Allow the chai to come to a gentle boil for about 2–3 minutes.
          </li>

          <li>Reduce the heat and simmer for another minute.</li>

          <li>Strain the chai into serving cups.</li>

          <li>Serve immediately while hot.</li>
        </ol>

        <h2>Serving Suggestions</h2>

        <p>Enjoy Masala Chai with:</p>

        <ul className="custom-list">
          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Vegetable Pakoras
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Bombay Masala Sandwich
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Khaman Dhokla
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Avocado Toast
          </li>
        </ul>

        <h2>Final Product</h2>

        <MediaQuery maxWidth={767}>
          <Image
            src="/masalachai.png"
            alt="Authentic Indian ginger cardamom masala chai served hot in a tea cup"
            thumbnail
            rounded
            fluid
          />
        </MediaQuery>

        <MediaQuery minWidth={767}>
          <Image
            src="/masalachai.png"
            alt="Authentic Indian ginger cardamom masala chai served hot in a tea cup"
            thumbnail
            rounded
            fluid
            width="50%"
            height="50%"
          />
        </MediaQuery>

        <div>
          <h2>Masala Chai Preparation Video</h2>

          <MediaQuery maxWidth={767}>
            <YouTube videoId="PeUuU8irV7A" opts={optsMobile} />
          </MediaQuery>

          <MediaQuery minWidth={767}>
            <YouTube videoId="PeUuU8irV7A" opts={optsDesktop} />
          </MediaQuery>
        </div>

        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this homemade Masala Chai, you may also enjoy these
            delicious vegetarian recipes.
          </p>

          <ul className="custom-list">
            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/poha" className="recipe-link">
                Traditional Indian Poha
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/dhokla" className="recipe-link">
                Khaman Dhokla
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/masalasandwich" className="recipe-link">
                Bombay Masala Vegetable Sandwich
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

export default Masalachai;