import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLeaf, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

class RajgiraHalwa extends Component {
    render() {
        const recommendations = [
            {
                path: "/quinoamoongdal",
                name: "Quinoa Moong Dal Khichdi",
            },
            {
                path: "/paneer",
                name: "Shahi Paneer – Creamy Indian Cottage Cheese Curry",
            },
            {
                path: "/potato",
                name: "Any Time Potato with Indian Spices",
            },
            {
                path: "/cabbage",
                name: "Cabbage Curry (Patta Gobi)",
            },
            {
                path: "/riceandbeans",
                name: "Zesty Mexican Rice with Black Beans",
            },
        ];

        return (
            <div className="recipe-page">
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Rajgira Halwa Recipe | Amaranth Flour Dessert for Fasting
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/rajgirahalwa"
                    />

                    <meta
                        name="description"
                        content="Learn how to make Rajgira Halwa, a delicious Indian dessert made with amaranth flour, ghee, milk, and jaggery. Perfect for Navratri, fasting (vrat), and festive occasions."
                    />

                    <meta
                        name="keywords"
                        content="rajgira halwa recipe, rajgira halwa, amaranth flour dessert, rajgira flour halwa, vrat recipes, fasting sweets, Navratri recipes, Indian desserts, jaggery halwa, gluten free Indian dessert, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Rajgira Halwa Recipe | Amaranth Flour Dessert for Fasting"
                    />

                    <meta property="og:type" content="article" />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/rajgirahalwa"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/rajgirahalwa.jpg"
                    />

                    <meta
                        property="og:image:alt"
                        content="Traditional Indian Rajgira Halwa made with amaranth flour"
                    />

                    <meta
                        property="og:description"
                        content="A delicious Rajgira Halwa recipe made with amaranth flour, ghee, milk, and jaggery. Perfect for Navratri fasting and festive occasions."
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />
                </Helmet>

                <h1>Rajgira Halwa Recipe</h1>

                <p>
                    Rajgira Halwa is a traditional Indian sweet made from
                    amaranth flour, commonly enjoyed during Navratri fasting.
                    Rich in nutrients and naturally gluten-free, this
                    comforting dessert is easy to prepare and makes a
                    delicious festive treat.
                </p>

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
                        Cooking Time: 60 minutes
                    </Col>
                </Row>

                <section className="ingredients">
                    <h2>Ingredients</h2>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/2 cup rajgira flour (amaranth flour)
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            3–4 tbsp ghee (clarified butter)
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/2 cup milk or water
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/3 cup jaggery or sugar, adjusted to taste
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            2–3 cardamom pods, crushed, or 1/2 tsp
                            cardamom powder
                        </li>
                    </ul>
                </section>

                <section className="ingredients">
                    <h2>Instructions</h2>

                    <ol>
                        <li>
                            Heat ghee in a heavy-bottomed pan. Add rajgira
                            flour and roast over low to medium heat for
                            5–7 minutes, stirring constantly, until aromatic
                            and slightly golden.
                        </li>

                        <li>
                            In a separate saucepan, warm the milk or water
                            and dissolve the jaggery or sugar in it. Keep
                            the mixture hot but do not bring it to a boil.
                        </li>

                        <li>
                            Slowly pour the hot milk-jaggery mixture into
                            the roasted flour while stirring continuously
                            to prevent lumps. Cook over low heat until the
                            mixture thickens and begins to leave the sides
                            of the pan.
                        </li>

                        <li>
                            Add cardamom powder, chopped nuts, and raisins.
                            Mix well and cook for another 1–2 minutes.
                        </li>
                    </ol>
                </section>

                <section className="recipe-final-product">
                    <h2>Final Product</h2>

                    <div className="recipe-image-wrapper">
                        <Image
                            src="/rajgirahalwa.jpg"
                            alt="Traditional Indian Rajgira Halwa made with amaranth flour, ghee, and jaggery"
                            fluid
                            loading="lazy"
                            className="recipe-image"
                        />
                    </div>
                </section>

                <section className="recipe-video">
                    <h2>Rajgira Halwa Preparation Video</h2>
                    <div className="youtube-container">
                        <YouTube
                            videoId="F6twlcz2W7g"
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

                <section className="you-may-also-like">
                    <h2>You May Also Like</h2>

                    <p>
                        If you enjoyed this Rajgira Halwa recipe, you may
                        also like these wholesome vegetarian dishes and
                        traditional Indian recipes.
                    </p>

                    <ul className="recipe-recommendations">
                        {recommendations.map((recipe) => (
                            <li key={recipe.path}>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="recommendation-icon"
                                    aria-hidden="true"
                                />

                                <Link to={recipe.path}>
                                    {recipe.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        );
    }
}

export default RajgiraHalwa;