import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import RecipeSchema from "./RecipeSchema";
import { faCarrot, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Spinachbesan extends Component {
    render() {

        return (
            <div className="recipe-page">

                {/* Recipe Schema */}
                <RecipeSchema
                    name="Palak Besan Ki Sabji (Spinach Besan Curry)"
                    description="A flavorful Indian spinach curry made with fresh spinach, chickpea flour, onions, tomatoes, garlic, ginger, and aromatic spices."
                    image="https://fearlessvegetarian.netlify.app/spinachbesan.jpg"
                    url="https://fearlessvegetarian.netlify.app/spinachbesan"
                    prepTime="PT15M"
                    cookTime="PT45M"
                    totalTime="PT60M"
                    recipeYield="2 Servings"
                    recipeCuisine="Indian"
                    recipeCategory="Main Course"
                    ingredients={[
                        "300 grams spinach",
                        "1 onion, finely chopped",
                        "1 tomato, finely chopped",
                        "4 garlic cloves, minced",
                        "1 inch ginger, grated",
                        "2 green chilies, finely chopped",
                        "1 tablespoon besan (gram flour)",
                        "1 teaspoon hing (asafoetida)",
                        "1 teaspoon cumin seeds",
                        "1 teaspoon coriander powder",
                        "1/2 teaspoon turmeric powder",
                        "1/2 teaspoon red chili powder",
                        "1 teaspoon garam masala",
                        "1 teaspoon sugar",
                        "3/4 cup water",
                        "Salt to taste",
                        "Fresh coriander leaves for garnish"
                    ]}
                />

                {/* SEO Metadata */}
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Palak Besan Ki Sabji (Spinach Besan Curry) Recipe | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/spinachbesan"
                    />

                    <meta
                        name="description"
                        content="Learn how to make Palak Besan Ki Sabji, a flavorful Indian spinach curry made with fresh spinach, chickpea flour, onions, tomatoes, garlic, ginger, and aromatic spices."
                    />

                    <meta
                        name="keywords"
                        content="palak besan ki sabji, spinach besan curry, palak nu shaak, spinach chickpea flour curry, besan spinach recipe, Indian spinach curry, healthy vegetarian curry, Indian vegetarian recipes, spinach recipes, gluten free Indian recipes, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Palak Besan Ki Sabji (Spinach Besan Curry) Recipe"
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/spinachbesan"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/spinachbesan.jpg"
                    />

                    <meta
                        property="og:image:alt"
                        content="Indian-style Spinach Besan Curry made with spinach, chickpea flour, and aromatic spices"
                    />

                    <meta
                        property="og:description"
                        content="A flavorful Palak Besan Ki Sabji made with fresh spinach, chickpea flour, onions, tomatoes, garlic, ginger, and Indian spices."
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />
                </Helmet>

                {/* Recipe Introduction */}
                <h1>Palak Besan Ki Sabji (Spinach Besan Curry)</h1>

                <p>
                    Palak Besan Ki Sabji is a traditional Indian spinach curry
                    made with fresh spinach, chickpea flour (besan), onions,
                    tomatoes, garlic, ginger, and aromatic spices. This
                    flavorful vegetarian dish is nutritious, comforting, and
                    pairs perfectly with rice, roti, or naan.
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
                        Yields: 2 Servings
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

                {/* Why You'll Love This Recipe */}
                <section>
                    <h2>Why You'll Love This Recipe</h2>

                    <ul>
                        <li>
                            Packed with nutrients from fresh spinach
                        </li>
                        <li>
                            Chickpea flour adds plant-based protein and fiber
                        </li>
                        <li>
                            Easy one-pan vegetarian meal
                        </li>
                        <li>
                            Naturally gluten-free
                        </li>
                        <li>
                            Delicious with rice, naan, or roti
                        </li>
                    </ul>
                </section>

                {/* Health Benefits */}
                <section>
                    <h2>Health Benefits of Spinach and Besan</h2>

                    <p>
                        Spinach provides vitamins, minerals, and antioxidants,
                        while chickpea flour (besan) adds plant-based protein
                        and fiber. Together, they make this curry a flavorful
                        and satisfying vegetarian dish.
                    </p>
                </section>

                {/* Serving Suggestions */}
                <section>
                    <h2>Serving Suggestions</h2>

                    <p>
                        Serve this Spinach Besan Curry with:
                    </p>

                    <ul>
                        <li>Steamed Basmati Rice</li>
                        <li>Jeera Rice</li>
                        <li>Whole Wheat Roti</li>
                        <li>Garlic Naan</li>
                        <li>Cucumber Raita</li>
                    </ul>
                </section>

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
                            300 grams spinach, finely chopped
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 onion, finely chopped
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 tomato, finely chopped
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            4 garlic cloves, minced
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1-inch piece of ginger, grated
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            2 green chilies, finely chopped
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 tablespoon besan (gram flour)
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 teaspoon hing (asafoetida)
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 teaspoon cumin seeds
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 teaspoon coriander powder
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/2 teaspoon turmeric powder
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1/2 teaspoon red chili powder
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 teaspoon garam masala
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            1 teaspoon sugar
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            3/4 cup water
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            Salt to taste
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-icon"
                                aria-hidden="true"
                            />
                            Fresh coriander leaves for garnish
                        </li>

                    </ul>
                </section>

                {/* Instructions */}
                <section className="ingredients">
                    <h2>Instructions</h2>

                    <ol>
                        <li>
                            Wash the spinach thoroughly under running water.
                            Drain the excess water, finely chop the spinach,
                            and set it aside.
                        </li>

                        <li>
                            Place a pan over medium heat and allow it to dry
                            completely. Add 3 tablespoons of oil.
                        </li>

                        <li>
                            Once the oil is hot, add 1/2 teaspoon cumin seeds
                            and 1/2 teaspoon mustard seeds. Allow them to
                            crackle. Add 1 teaspoon hing (asafoetida) and
                            stir for a few seconds.
                        </li>

                        <li>
                            Add the minced garlic and sauté until lightly
                            golden.
                        </li>

                        <li>
                            Add the chopped onions and cook over medium heat
                            for 5–6 minutes, until soft and lightly golden.
                        </li>

                        <li>
                            Add the grated ginger and chopped green chilies.
                            Cook over low heat for another 2–3 minutes.
                        </li>

                        <li>
                            Add the chopped tomatoes and cover the pan.
                            Cook over low heat for 5–6 minutes, until the
                            tomatoes become soft and mushy.
                        </li>

                        <li>
                            Add 1 tablespoon besan (gram flour). Cook over
                            low heat for 3–4 minutes, stirring frequently,
                            until the raw smell disappears.
                        </li>

                        <li>
                            Add turmeric powder, red chili powder, and salt.
                            Mix well and cook over low heat for a couple of
                            minutes.
                        </li>

                        <li>
                            Add cumin powder and coriander powder. Mix well
                            and cook for another 2–3 minutes to allow the
                            spices to cook.
                        </li>

                        <li>
                            Increase the heat to high and add half of the
                            chopped spinach. Mix well, then add the remaining
                            spinach and stir until combined.
                        </li>

                        <li>
                            Cover the pan and cook over low heat for 7–8
                            minutes. Stir occasionally if needed.
                        </li>

                        <li>
                            Add 3/4 cup water and mix well to create the
                            desired gravy consistency.
                        </li>

                        <li>
                            Add 1 teaspoon sugar and stir well. Cover the pan
                            and cook over low heat for another 2–3 minutes.
                        </li>

                        <li>
                            Garnish with fresh coriander leaves and serve hot
                            with rice, roti, or naan.
                        </li>
                    </ol>
                </section>

                {/* Final Product */}
                <section className="recipe-final-product">
                    <h2>Final Product</h2>

                    <div className="recipe-image-wrapper">
                        <Image
                            src="/spinachbesan.jpg"
                            alt="Indian-style Spinach Besan Curry made with spinach, chickpea flour, and aromatic spices"
                            fluid
                            loading="lazy"
                            className="recipe-image"
                        />
                    </div>
                </section>

                {/* YouTube Video */}
                <section className="recipe-video">
                    <h2>Spinach Besan Preparation Video</h2>
                    <div className="youtube-container">
                        <YouTube
                            videoId="OLhTnVOkedk"
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
                {/* Related Recipes */}
                <section className="you-may-also-like">
                    <h2>You May Also Like</h2>

                    <p>
                        If you enjoyed this Spinach Besan Curry, you may also like
                        these delicious vegetarian Indian recipes.
                    </p>

                    <ul className="recipe-recommendations">
                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/besan">
                                Besan Curry – Flavorful Indian Chickpea Flour Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/aloogobi">
                                Aloo Gobi – Indian Potato and Cauliflower Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/cabbage">
                                Cabbage Curry (Patta Gobi)
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="recommendation-icon"
                                aria-hidden="true"
                            />

                            <Link to="/dalmakhani">
                                Dal Makhani – Creamy Indian Black Lentil Curry
                            </Link>
                        </li>
                    </ul>
                </section>

            </div>
        );
    }
}

export default Spinachbesan;