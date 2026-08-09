import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class Couscous extends Component {
  render() {
    return (
      <div className="recipe-page">
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Couscous Delight: Easy and Flavorful Mediterranean Magic!
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/couscous"
          />

          <meta
            name="description"
            content="Experience culinary bliss with our easy and flavorful couscous recipe. A taste of Mediterranean magic in every bite!"
          />

          <meta
            name="keywords"
            content="couscous recipe, Mediterranean cuisine, easy and quick, flavorful dishes, wholesome recipes, balanced flavors, couscous ideas, healthy meals, culinary delights, quick cooking, Mediterranean-inspired, versatile grains, nutritious and delicious, simple cooking, recipes, cooking tutorial, Fearless Vegetarian, vegan"
          />

          <meta
            property="og:title"
            content="Couscous Delight: Easy and Flavorful Mediterranean Magic!"
          />

          <meta property="og:type" content="website" />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/couscous"
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/couscous.jpg"
          />

          <meta
            property="og:description"
            content="Experience culinary bliss with our easy and flavorful couscous recipe. A taste of Mediterranean magic in every bite!"
          />
        </Helmet>


        <h1>Easy and Flavorful Couscous Recipe</h1>

        <p>
          Couscous is a North African staple made from tiny steamed balls of
          semolina flour. Although it is often prepared and served like a grain,
          couscous is actually a type of pasta. Light, versatile, and delicious,
          it provides the perfect blank canvas for fresh vegetables, herbs, spices,
          and other flavorful ingredients.
        </p>


        {/* Recipe Information */}
        <section className="recipe-info">
          <Row className="cooktimerow">
            <Col>
              <span className="material-symbols-outlined">
                restaurant_menu
              </span>{" "}
              Yields: 1 Serving
            </Col>
          </Row>

          <Row className="cooktimerow">
            <Col>
              <FontAwesomeIcon icon={faClock} /> Cooking Time: 60 minutes
            </Col>
          </Row>
        </section>

        {/* Ingredients */}
        <section className="ingredients">
          <h3>Ingredients</h3>

          <ul className="ingredient-list">
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 cups of pearl couscous</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 cup of cherry tomatoes, cut in half</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 cup of feta</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />A handful of Kalamata olives</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 1/4 cups of water</li>
            <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />A few slices of onion</li>
          </ul>
        </section>

        {/* Instructions */}
        <section className="instructions">
          <h3>Instructions</h3>

          <ol>
            <li>Take some olive oil in a non-stick pan.</li>

            <li>Add tofu cut into small square pieces.</li>

            <li>
              Add some onion powder, garlic powder, and paprika, and pan-fry
              until crispy.
            </li>

            <li>
              To start making couscous, bring the cooking liquid, preferably a
              flavorful chicken or vegetable broth, to a boil in a medium pot.
              Add a drizzle of olive oil, a pat of butter, and a little salt.
            </li>

            <li>Next, add the couscous.</li>

            <li>Cook the couscous on a low flame for 10 minutes.</li>

            <li>
              Add cherry tomatoes, Kalamata olives, pan-fried tofu, and some
              feta to the couscous and mix well.
            </li>
          </ol>
        </section>

        {/* Final Product */}
        <h2>Final Product</h2>
        <Image
          src="/couscous.jpg"
          alt="Mediterranean Magic: Easy and Flavorful Couscous Recipe"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />

        {/* Preparation Video */}
        <section className="recipe-video">
          <h2>
            Mediterranean Magic: Easy and Flavorful Couscous Recipe Preparation
            Video
          </h2>
          <div className="youtube-container">
            <YouTube
              videoId="altlinYLUNA"
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
        {/* You May Also Like */}
        <section className="you-may-also-like">
          <h2>You May Also Like</h2>

          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="recipe-card">
                <Image
                  src="/hakkanoodle.jpg"
                  alt="Vegetable Hakka Noodles"
                  thumbnail
                  rounded
                  fluid
                />
                <h3>Vegetable Hakka Noodles</h3>
                <a href="/hakkanoodle" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <div className="recipe-card">
                <Image
                  src="/pavbhaji.jpg"
                  alt="Mumbai-style Pav Bhaji"
                  thumbnail
                  rounded
                  fluid
                />
                <h3>Pav Bhaji</h3>
                <a href="/pavbhaji" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <div className="recipe-card">
                <Image
                  src="/aloogobi.jpg"
                  alt="Aloo Gobi"
                  thumbnail
                  rounded
                  fluid
                />
                <h3>Aloo Gobi</h3>
                <a href="/aloogobi" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Couscous;