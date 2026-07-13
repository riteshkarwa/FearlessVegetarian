import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RecipeSchema from "./RecipeSchema";

class Dhokla extends Component {
    render() {
        const optsDesktop = { height: "720", width: "100%" };
        const optsMobile = { height: "550", width: "325" };

        const ingredients = [
            "1 cup Chickpea Flour (Besan)",
            "2 tbsp cooking oil",
            "1 tsp citric acid",
            "3/4 tsp baking soda",
            "Salt to taste",
            "1/4 tsp hing (asafoetida)",
            "1/4 tsp turmeric powder",
            "3 tsp sugar",
            "1–1.5 inch ginger",
            "1 green chili"
        ];

        return (
            <div>
                {/* SEO */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Khaman Dhokla Recipe – Spongy Steamed Chickpea Snack</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/dhokla" />
                    <meta
                        name="description"
                        content="Soft and spongy Khaman Dhokla made from chickpea flour, steamed and tempered with mustard seeds, curry leaves and green chilies."
                    />
                    <meta
                        name="keywords"
                        content="dhokla recipe, khaman dhokla, indian snacks, besan dhokla, steamed chickpea cake"
                    />
                </Helmet>

                {/* Recipe Schema */}
                <RecipeSchema
                    name="Spongy Khaman Dhokla"
                    description="Soft and spongy steamed chickpea flour dhokla tempered with mustard seeds, curry leaves, and green chilies."
                    image="https://fearlessvegetarian.netlify.app/dhokla.jpg"
                    url="https://fearlessvegetarian.netlify.app/dhokla"
                    prepTime="PT15M"
                    cookTime="PT30M"
                    totalTime="PT45M"
                    recipeYield="2 Servings"
                    ingredients={ingredients}
                />

                {/* Title */}
                <h1>
                    Khaman Dhokla is a soft, fluffy, and spongy steamed chickpea snack from Gujarat, India.
                </h1>

                <p>
                    Made from fermented chickpea flour (besan), this light and healthy snack has a mildly tangy flavor and airy texture.
                    It is typically steamed and finished with a fragrant tempering of mustard seeds, curry leaves, and green chilies,
                    making it a perfect tea-time or breakfast dish.
                </p>

                {/* Meta Info */}
                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">restaurant_menu</span>{" "}
                        Yields: 2 Servings
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 45 minutes
                    </Col>
                </Row>

                {/* Ingredients */}
                <div className="ingredients">Ingredients</div>
                <ol>
                    {ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>

                {/* Instructions */}
                <div className="ingredients">Instructions</div>

                <h2>Prepare Batter</h2>
                <ol>
                    <li>Mix oil, sugar, turmeric, hing, ginger, and chili in a blender.</li>
                    <li>Add chickpea flour and water, blend into smooth batter.</li>
                    <li>Rest batter for 10 minutes.</li>
                    <li>Add baking soda just before steaming and mix quickly.</li>
                </ol>

                <h2>Steam</h2>
                <ol>
                    <li>Pour batter into greased tray.</li>
                    <li>Steam for 15–20 minutes until set.</li>
                    <li>Cool completely before cutting.</li>
                </ol>

                <h2>Tempering</h2>
                <ol>
                    <li>Heat oil, add mustard seeds and curry leaves.</li>
                    <li>Add green chilies and water with salt & sugar.</li>
                    <li>Pour over cut dhokla pieces.</li>
                </ol>

                {/* Final Image */}
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image
                        src="/dhokla.jpg"
                        alt="Soft spongy Khaman Dhokla"
                        thumbnail
                        rounded
                        fluid
                    />

                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image
                        src="/dhokla.jpg"
                        alt="Soft spongy Khaman Dhokla"
                        thumbnail
                        rounded
                        fluid
                        width="50%"
                        height="50%"
                    />
                </MediaQuery>

                {/* Video */}
                <h2>Dhokla Preparation Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="QLktjdbHpWs" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="QLktjdbHpWs" opts={optsDesktop} />
                </MediaQuery>

                {/* Related Recipes */}
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/poha" className="recipe-link">
                                Poha Breakfast
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/curdrice" className="recipe-link">
                                Curd Rice
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/masalasandwich" className="recipe-link">
                                Bombay Masala Sandwich
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/mushroom" className="recipe-link">
                                Mushroom Masala
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dhokla;