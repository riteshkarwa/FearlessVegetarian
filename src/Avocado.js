import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCarrot, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RecipeSchema from "./RecipeSchema";

class Avocado extends Component {
    render() {
        return (
            <div className="recipe-page">

                {/* Recipe Schema */}
                <RecipeSchema
                    name="Avocado Toast with Tomato and Onion"
                    description="Easy and healthy avocado toast topped with fresh tomato, onion, Everything But The Bagel seasoning, and balsamic reduction."
                    image="https://fearlessvegetarian.netlify.app/avocado.jpg"
                    url="https://fearlessvegetarian.netlify.app/avocado"
                    prepTime="PT5M"
                    cookTime="PT10M"
                    totalTime="PT15M"
                    recipeYield="1 Serving"
                    recipeCuisine="American"
                    recipeCategory="Breakfast"
                    ingredients={[
                        "1 ripe avocado",
                        "2 slices Dave's Killer Bread 21 Whole Grains & Seeds",
                        "Everything But The Bagel Sesame Seasoning",
                        "Alessi Premium Balsamic Reduction",
                        "1/2 tomato, sliced",
                        "A few slices of onion"
                    ]}
                />

                {/* SEO Metadata */}
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Avocado Toast Recipe with Tomato &amp; Onion | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/avocado"
                    />

                    <meta
                        name="description"
                        content="Make this easy and healthy avocado toast topped with fresh tomato, onion, Everything But The Bagel seasoning, and balsamic reduction. A quick vegetarian breakfast ready in 10–15 minutes."
                    />

                    <meta
                        name="keywords"
                        content="avocado toast recipe, easy avocado toast, healthy breakfast, avocado toast with tomato, avocado toast with onion, vegetarian breakfast, quick breakfast recipe, healthy vegetarian recipes, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Avocado Toast Recipe with Tomato & Onion"
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/avocado"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/avocado.jpg"
                    />

                    <meta
                        property="og:image:alt"
                        content="Avocado toast topped with tomato, onion, Everything But The Bagel seasoning, and balsamic reduction"
                    />

                    <meta
                        property="og:description"
                        content="An easy and healthy avocado toast recipe topped with fresh tomato, onion, Everything But The Bagel seasoning, and balsamic reduction."
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />
                </Helmet>

                {/* Recipe Introduction */}
                <h1>Avocado Toast with Tomato &amp; Onion</h1>

                <p>
                    This easy avocado toast is a quick, healthy, and flavorful
                    vegetarian breakfast. Creamy avocado is spread over crispy
                    toast and topped with fresh tomato, onion, Everything But
                    The Bagel seasoning, and a drizzle of balsamic reduction.
                </p>

                {/* Recipe Information */}
                <Row className="cooktimerow">
                    <Col>
                        <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                        >
                            restaurant_menu
                        </span>{" "}
                        Yields: 1 Serving
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon
                            icon={faClock}
                            aria-hidden="true"
                        />{" "}
                        Cooking Time: 10–15 minutes
                    </Col>
                </Row>

                {/* Ingredients */}
                <section className="ingredients">
                    <h2>Ingredients</h2>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 ripe avocado
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            2 slices Dave's Killer Bread
                            (21 Whole Grains &amp; Seeds)
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            Everything But The Bagel Sesame Seasoning
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            Alessi Premium Balsamic Reduction
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/2 tomato, sliced
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            A few slices of onion
                        </li>
                    </ul>
                </section>

                {/* Instructions */}
                <section className="ingredients">
                    <h2>Instructions</h2>

                    <ol>
                        <li>
                            Toast the bread until golden brown and crispy.
                        </li>

                        <li>
                            Cut the avocado in half, remove the seed, and
                            scoop out the flesh. Mash it with a fork or slice
                            it, depending on your preference.
                        </li>

                        <li>
                            Spread the avocado evenly over the toasted bread.
                        </li>

                        <li>
                            Arrange the tomato slices on top of the avocado.
                        </li>

                        <li>
                            Add a few slices of onion for extra crunch and
                            flavor.
                        </li>

                        <li>
                            Drizzle with balsamic reduction.
                        </li>

                        <li>
                            Sprinkle Everything But The Bagel seasoning over
                            the top and serve immediately.
                        </li>
                    </ol>
                </section>

                {/* Final Product */}
                <section className="recipe-final-product">
                    <h2>Final Product</h2>

                    <div className="recipe-image-wrapper">
                        <Image
                            src="/avocado.jpg"
                            alt="Avocado toast topped with tomato, onion, Everything But The Bagel seasoning, and balsamic reduction"
                            fluid
                            loading="lazy"
                            className="recipe-image"
                        />
                    </div>
                </section>

                {/* Related Recipes */}
                <section className="you-may-also-like">
                    <h2>You May Also Like</h2>

                    <p>
                        If you enjoyed this easy avocado toast, try these
                        other delicious vegetarian recipes from Fearless
                        Vegetarian.
                    </p>

                    <ul className="recipe-recommendations">
                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/bombaymasalasandwich">
                                Bombay Masala Sandwich
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/upma">
                                Vegetable Upma
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/poha">
                                Indian Poha
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/pavbhaji">
                                Mumbai Pav Bhaji
                            </Link>
                        </li>
                    </ul>
                </section>

            </div>
        );
    }
}

export default Avocado;