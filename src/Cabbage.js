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

class Cabbage extends Component {
    render() {
        const optsDesktop = {
            height: "600",
            width: "700",
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
                        Cabbage Curry Recipe | Indian-Style Cabbage Curry |
                        Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/cabbage"
                    />

                    <meta
                        name="description"
                        content="Make flavorful Indian-style Cabbage Curry with shredded cabbage, green peas, onions, tomatoes, and aromatic Indian spices. An easy and delicious vegetarian recipe."
                    />

                    <meta
                        name="keywords"
                        content="cabbage curry, Indian cabbage curry, cabbage recipe, cabbage and peas curry, vegetarian cabbage recipe, vegan curry, Indian vegetarian recipes, patta gobi, cabbage sabzi, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Cabbage Curry Recipe | Indian-Style Cabbage Curry"
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/cabbage"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/cabbage.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Make flavorful Indian-style Cabbage Curry with shredded cabbage, green peas, onions, tomatoes, and aromatic Indian spices."
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />
                </Helmet>

                <article>
                    <h1>
                        Cabbage Curry Recipe – Indian-Style Patta Gobi
                    </h1>

                    <p className="lead recipe-description">
                        Make delicious Indian-style Cabbage Curry with
                        tender shredded cabbage, green peas, onions,
                        tomatoes, and aromatic spices. This simple
                        vegetarian curry is flavorful, comforting, and
                        easy to prepare at home.
                    </p>

                    <Row className="cooktimerow">
                        <Col>
                            <span
                                className="material-symbols-outlined"
                                aria-hidden="true"
                            >
                                restaurant_menu
                            </span>{" "}
                            Yields: 2 Servings
                        </Col>
                    </Row>

                    <Row className="cooktimerow">
                        <Col>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            Cooking Time: 60 minutes
                        </Col>
                    </Row>

                    <section className="ingredients">
                        <h2>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-heading-icon"
                            />{" "}
                            Ingredients
                        </h2>

                        <ul className="ingredient-list">
                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 tablespoon olive oil</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 teaspoon salt, adjusted to taste
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 tablespoon coriander powder
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 teaspoon turmeric powder
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1/2 teaspoon red chili powder,
                                    adjusted to taste
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 teaspoon cumin seeds</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 teaspoon mustard seeds</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 teaspoon garam masala</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 cup green peas</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 medium or large onion,
                                    finely chopped
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 medium tomato, finely chopped
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>3 cloves garlic, minced</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 inch ginger, minced</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>4 cups cabbage, shredded</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 teaspoon kasuri methi
                                    (dried fenugreek leaves)
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="instructions">
                        <h2>
                            Instructions
                        </h2>

                        <ol className="instruction-list">
                            <li>
                                In a large non-stick pan, heat 3 teaspoons
                                of oil. Add the cumin seeds and mustard
                                seeds and sauté until aromatic.
                            </li>

                            <li>
                                Add the onion, minced ginger, and minced
                                garlic. Sauté until the onion becomes
                                translucent.
                            </li>

                            <li>
                                Add the tomato and sauté until soft and
                                mushy.
                            </li>

                            <li>
                                Add turmeric powder, red chili powder,
                                coriander powder, and salt. Mix well and
                                sauté the spices with the vegetables.
                            </li>

                            <li>
                                Add the shredded cabbage and green peas.
                            </li>

                            <li>
                                Stir gently to combine all the ingredients.
                                Cook until the cabbage is tender and the
                                peas are cooked through.
                            </li>

                            <li>
                                Add the garam masala and mix well.
                            </li>

                            <li>
                                Cook for another 5 minutes, allowing the
                                flavors to combine.
                            </li>

                            <li>
                                Sprinkle kasuri methi over the curry and
                                mix gently.
                            </li>

                            <li>
                                Serve the cabbage curry hot with Indian
                                bread.
                            </li>
                        </ol>
                    </section>

                    <section className="final-product">
                        <h2>Final Product</h2>
                        <div className="recipe-image-wrapper">
                            <Image
                                src="/cabbage.jpg"
                                alt="Indian-style cabbage curry with green peas and aromatic spices"
                                rounded
                                fluid
                                loading="lazy"
                                className="recipe-image"
                            />
                        </div>
                    </section>

                    <section className="recipe-video">
                        <h2>
                            Cabbage Curry (Patta Gobi) Preparation Video
                        </h2>

                        <MediaQuery maxWidth={767}>
                            <YouTube
                                videoId="4Kw-8PPg8Zs"
                                opts={optsMobile}
                            />
                        </MediaQuery>

                        <MediaQuery minWidth={768}>
                            <YouTube
                                videoId="4Kw-8PPg8Zs"
                                opts={optsDesktop}
                            />
                        </MediaQuery>
                    </section>
                    {/* Related Vegetarian Recipes */}
                    <section className="related-recipes">
                        <h2>Related Vegetarian Recipes</h2>

                        <p className="related-recipes-intro">
                            If you enjoyed this Cabbage Curry, you may also like these
                            flavorful and comforting vegetarian recipes. Perfect for
                            everyday meals and family dinners.
                        </p>

                        <Row className="g-4">

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

                                        <h3>Aloo Gobi (Potato Cauliflower Curry)</h3>

                                        <p>
                                            A classic Indian vegetarian curry made with tender
                                            potatoes, cauliflower, and aromatic spices.
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

                                        <h3>Saag Paneer – Spinach and Paneer Curry</h3>

                                        <p>
                                            Creamy spinach cooked with soft paneer and aromatic
                                            Indian spices for a wholesome vegetarian curry.
                                        </p>

                                        <span className="related-recipe-button">
                                            View Recipe
                                        </span>
                                    </Link>
                                </article>
                            </Col>

                            {/* Creamy Potato Curry */}
                            <Col xs={12} sm={6} md={4}>
                                <article className="related-recipe-card">
                                    <Link
                                        to="/potatocapsicum"
                                        className="related-recipe-link"
                                    >
                                        <Image
                                            src="/potatocapsicum.jpg"
                                            alt="Creamy Potato Curry in Roasted Red Pepper Gravy"
                                            fluid
                                            rounded
                                            className="related-recipe-image"
                                        />

                                        <h3>
                                            Creamy Potato Curry in Roasted Red Pepper Gravy
                                        </h3>

                                        <p>
                                            Tender potatoes simmered in a rich and creamy roasted
                                            red pepper gravy with flavorful spices.
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

                                        <h3>Dal Makhani – Creamy Punjabi Lentils</h3>

                                        <p>
                                            Rich and creamy Punjabi-style lentils slow-cooked with
                                            aromatic spices for a comforting vegetarian meal.
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
                                            alt="Chickpea Flour Curry Besan Curry"
                                            fluid
                                            rounded
                                            className="related-recipe-image"
                                        />

                                        <h3>Chickpea Flour Curry (Besan Curry)</h3>

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

                        </Row>
                    </section>
                </article>
            </div>
        );
    }
}

export default Cabbage;