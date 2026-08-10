import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Potatocapsicum extends Component {
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
            <div className="recipe-page">

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Creamy Potato Curry in Roasted Red Pepper Gravy | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/potatocapsicum"
                    />

                    <meta
                        name="description"
                        content="Make a flavorful creamy potato curry with roasted red bell pepper, tomatoes, and aromatic Indian spices. A delicious vegetarian Indian curry perfect for weeknight dinners."
                    />

                    <meta
                        name="keywords"
                        content="potato curry recipe, roasted red bell pepper curry, Indian vegetarian curry, aloo curry, creamy potato curry, Indian potato recipe, vegan Indian recipes, easy curry recipe, spicy potato curry, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Creamy Potato Curry in Roasted Red Pepper Gravy"
                    />

                    <meta
                        property="og:type"
                        content="website"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/potatocapsicum"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/potatocapsicum.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Make a flavorful creamy potato curry with roasted red bell pepper, tomatoes, and aromatic Indian spices. A delicious vegetarian Indian curry."
                    />
                </Helmet>

                {/* Recipe Title */}
                <h1>
                    Creamy Potato Curry in Roasted Red Pepper Gravy
                </h1>

                {/* Recipe Description */}
                <p className="lead recipe-description">
                    Make a flavorful creamy potato curry with roasted red
                    bell pepper, tomatoes, and aromatic Indian spices.
                    This delicious vegetarian Indian curry is perfect
                    for weeknight dinners or festive meals.
                </p>

                {/* Recipe Information */}
                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>{" "}
                        Yields: 1 Serving
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 60 minutes
                    </Col>
                </Row>

                {/* Ingredients */}
                <section className="ingredients">

                    <h2>
                        <FontAwesomeIcon icon={faCarrot} /> Ingredients
                    </h2>

                    <ul className="ingredient-list">

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 teaspoon onion powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 tablespoon coriander powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1/8 teaspoon turmeric powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1/8 teaspoon red chili powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 tablespoon curry powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 teaspoon cumin powder</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>
                                1 tablespoon Garam Masala spice, found in Indian grocery stores
                            </span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>4 whole potatoes</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>Salt to taste</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 onion</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>
                                1/8 teaspoon Amchoor Powder (Dried Mango Powder)
                            </span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>
                                1/2 teaspoon Kitchen King Masala, found in Indian grocery stores
                            </span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>5 whole cloves</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>2 small pieces of ginger, peeled</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>2 dried curry leaves</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>1 red bell pepper</span>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            <span>2 whole tomatoes</span>
                        </li>

                    </ul>

                </section>

                {/* Instructions */}
                <section className="instructions">

                    <h2>
                        <FontAwesomeIcon icon={faCarrot} /> Instructions
                    </h2>

                    <ol className="instruction-list">

                        <li>
                            Take some olive oil in a non-stick pan and heat it.
                        </li>

                        <li>
                            Add ginger, garlic, red bell pepper, tomatoes,
                            onion, and cloves to a mixer or food processor.
                            Blend into a fine puree.
                        </li>

                        <li>
                            Add the puree to the heated pan with oil.
                        </li>

                        <li>
                            Add the spices to the onion, tomato, and red pepper
                            puree: ginger powder, onion powder, coriander powder,
                            chili powder, turmeric powder, and curry powder.
                        </li>

                        <li>
                            Cover the pan with a lid and let it cook.
                        </li>

                        <li>
                            Let the spices cook for approximately 10 minutes.
                        </li>

                        <li>
                            Slice the potatoes vertically, then chop each slice
                            into small square pieces.
                        </li>

                        <li>
                            Add the potatoes to the pan.
                        </li>

                        <li>
                            Cook the potatoes for about 30 minutes, until they
                            become soft. Stir frequently so the potatoes combine
                            well with the onion, tomato, and red pepper gravy.
                        </li>

                        <li>
                            Add salt to taste.
                        </li>

                        <li>
                            Add a little Kitchen King Masala, Garam Masala powder,
                            and Amchoor powder. These spices can be found at
                            Indian grocery stores.
                        </li>

                        <li>
                            Your curry is ready! Enjoy it with Garlic Naan or
                            Roti. Roti is a lighter option compared with naan.
                        </li>

                    </ol>

                </section>

                {/* Final Product */}
                <section className="final-product">

                    <h2>Final Product</h2>
                    <Image
                        src="/potatocapsicum.jpg"
                        alt="Creamy potato curry with roasted red pepper and Indian spices"
                        fluid
                        rounded
                        thumbnail
                        loading="lazy"
                        className="recipe-image-potatocapsicum mx-auto d-block"
                    />

                </section>

                {/* Preparation Video */}
                <section className="recipe-video">

                    <h2>
                        Creamy Potato Curry in Roasted Red Pepper Gravy
                        Preparation Video
                    </h2>

                    <MediaQuery maxWidth={767}>
                        <YouTube
                            videoId="JgsJJjxUHqg"
                            opts={optsMobile}
                        />
                    </MediaQuery>

                    <MediaQuery minWidth={768}>
                        <YouTube
                            videoId="JgsJJjxUHqg"
                            opts={optsDesktop}
                        />
                    </MediaQuery>

                </section>

                {/* Related Recipes */}
                <section className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Creamy Potato Curry, you may also like these
                        delicious vegetarian recipes:
                    </p>

                    <Row className="g-4">

                        {/* Aloo Gobi */}
                        <Col xs={12} sm={6} md={3}>
                            <article className="related-recipe-card">
                                <Link to="/aloogobi" className="related-recipe-link">
                                    <Image
                                        src="/aloogobi.jpg"
                                        alt="Aloo Gobi"
                                        fluid
                                        rounded
                                    />

                                    <h3>Aloo Gobi</h3>

                                    <p>
                                        A flavorful Indian curry made with potatoes, cauliflower,
                                        and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Dal Makhani */}
                        <Col xs={12} sm={6} md={3}>
                            <article className="related-recipe-card">
                                <Link to="/dalmakhani" className="related-recipe-link">
                                    <Image
                                        src="/dalmakhani.jpg"
                                        alt="Dal Makhani"
                                        fluid
                                        rounded
                                    />

                                    <h3>Dal Makhani</h3>

                                    <p>
                                        A creamy and comforting lentil dish made with black
                                        lentils and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Saag Paneer */}
                        <Col xs={12} sm={6} md={3}>
                            <article className="related-recipe-card">
                                <Link to="/saagpaneer" className="related-recipe-link">
                                    <Image
                                        src="/saagpaneer.jpg"
                                        alt="Saag Paneer"
                                        fluid
                                        rounded
                                    />

                                    <h3>Saag Paneer</h3>

                                    <p>
                                        Creamy spinach cooked with tender paneer and flavorful
                                        Indian spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Besan Curry */}
                        <Col xs={12} sm={6} md={3}>
                            <article className="related-recipe-card">
                                <Link to="/besan" className="related-recipe-link">
                                    <Image
                                        src="/besan.jpg"
                                        alt="Besan Curry"
                                        fluid
                                        rounded
                                    />

                                    <h3>Besan Curry</h3>

                                    <p>
                                        A simple and flavorful vegetarian curry made with
                                        gram flour and Indian spices.
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

export default Potatocapsicum;