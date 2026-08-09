import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";

class Upma extends Component {
  render() {
    return (
      <div className="recipe-page">
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Upma Bliss: South Indian Breakfast | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/upma"
          />

          <meta
            name="description"
            content="Learn how to make flavorful South Indian Upma with rava, urad dal, cashews, onions, curry leaves, ginger, green chilies, and spices."
          />

          <meta
            name="keywords"
            content="upma, South Indian breakfast, rava upma, suji upma, semolina, cream of wheat, urad dal, cashews, curry leaves, savory breakfast, vegetarian breakfast, easy upma recipe, South Indian recipe, Fearless Vegetarian, vegan"
          />

          <meta
            property="og:title"
            content="Upma Bliss: South Indian Breakfast"
          />

          <meta property="og:type" content="website" />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/upma"
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/upma.jpg"
          />

          <meta
            property="og:description"
            content="Learn how to make flavorful South Indian Upma with rava, urad dal, cashews, onions, curry leaves, ginger, green chilies, and spices."
          />
        </Helmet>

        {/* Recipe Introduction */}
        <section className="recipe-intro">
          <h1>Easy and Flavorful South Indian Upma Recipe</h1>

          <p>
            Upma is a flavorful, savory, and popular South Indian breakfast
            made with rava, also known as semolina, suji, or cream of wheat.
            It is traditionally cooked with urad dal, cashews, onions, curry
            leaves, ginger, green chilies, and aromatic spices for a simple
            yet satisfying meal.
          </p>
        </section>

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

          <ol>
            <li>2 tablespoons olive oil</li>
            <li>1 teaspoon mustard seeds</li>
            <li>1 teaspoon cumin seeds</li>
            <li>8 to 10 curry leaves</li>
            <li>10 to 12 cashews</li>
            <li>1 teaspoon urad dal (hulled and split black gram)</li>
            <li>1 cup finely chopped onion</li>
            <li>1 teaspoon finely chopped green chilies</li>
            <li>
              1 cup rava, also called cream of wheat, farina, or semolina
              flour
            </li>
            <li>1 teaspoon finely chopped ginger</li>
            <li>2 1/2 cups water</li>
            <li>Salt to taste</li>
            <li>2 tablespoons chopped coriander leaves (cilantro)</li>
          </ol>
        </section>

        {/* Instructions */}
        <section className="instructions">
          <h3>Instructions</h3>

          <ol>
            <li>
              Heat a non-stick pan. Add 1 cup of rava, also known as cream of
              wheat, farina, or semolina flour.
            </li>

            <li>
              Roast the rava over medium-low heat, stirring often to ensure
              that it cooks evenly.
            </li>

            <li>
              Continue roasting until the rava becomes fragrant and starts to
              look dry, separate, and slightly crisp. Make sure the rava does
              not turn brown.
            </li>

            <li>
              Once the rava becomes fragrant and dry, turn off the heat.
              Transfer the roasted rava to a plate and set aside.
            </li>

            <li>
              In the same pan, heat 2 tablespoons of olive oil.
            </li>

            <li>
              Add 1 teaspoon of mustard seeds. When the seeds begin to crackle,
              they are ready.
            </li>

            <li>
              Add 1 teaspoon of cumin seeds and 1 teaspoon of urad dal.
            </li>

            <li>
              Stir frequently and fry until the urad dal begins to turn
              slightly brown.
            </li>

            <li>
              Immediately add 10 to 12 cashews and fry over low to medium-low
              heat until lightly golden.
            </li>

            <li>
              Add 1 cup of finely chopped onions.
            </li>

            <li>
              Sauté the onions until they become soft and translucent.
            </li>

            <li>
              Add 1 teaspoon of chopped green chilies, 1 teaspoon of chopped
              ginger, and 8 to 10 curry leaves.
            </li>

            <li>
              Mix well and sauté for a few seconds.
            </li>

            <li>
              Add 2 1/2 cups of water to the mixture.
            </li>

            <li>
              Add salt to taste. Mix well and check the seasoning. The water
              should taste slightly salty.
            </li>

            <li>
              Increase the heat to medium-high and bring the water to a rolling
              boil.
            </li>

            <li>
              Once the water reaches a rolling boil, reduce the heat to low.
              Add the roasted rava gradually in 4 to 5 batches, stirring after
              each addition.
            </li>

            <li>
              After adding each batch, stir immediately so that the rava mixes
              evenly with the water and does not form lumps.
            </li>

            <li>
              Continue adding the remaining rava in batches, stirring well
              after each addition.
            </li>

            <li>
              Once all the rava has been added, stir thoroughly. The rava will
              absorb the water, swell, and cook.
            </li>

            <li>
              Cover the pan and allow the upma to steam for 2 to 3 minutes over
              low heat.
            </li>

            <li>
              Turn off the heat and allow the upma to cool for about 5 minutes.
            </li>

            <li>
              Finally, add about 2 tablespoons of chopped coriander leaves.
              Add more if desired.
            </li>
          </ol>
        </section>

        {/* Final Product */}

        <h2>Final Product</h2>
        <Image
          src="/upma.jpg"
          alt="Flavorful South Indian Upma served as a savory breakfast"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />


        {/* Preparation Video */}
        <section className="recipe-video">
          <h2>Upma Preparation Video</h2>
          <div className="youtube-container">
            <YouTube
              videoId="_gl_nFzJYz0"
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
                  src="/couscous.jpg"
                  alt="Easy and flavorful Couscous"
                  thumbnail
                  rounded
                  fluid
                />

                <h3>Couscous</h3>

                <a href="/couscous" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <div className="recipe-card">
                <Image
                  src="/aloogobi.jpg"
                  alt="Indian Aloo Gobi"
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

export default Upma;