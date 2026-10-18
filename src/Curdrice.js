import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";


class Curdrice extends Component {
    render() {
        return (
            <div>
                <RecipeSchema
                    name="South Indian Curd Rice"
                    description="Traditional South Indian curd rice made with cooked rice, yogurt, ginger, curry leaves, mustard seeds, chana dal, urad dal, and cashews. A cooling, comforting, and probiotic-rich vegetarian dish."
                    image="https://fearlessvegetarian.netlify.app/curdrice.jpg"
                    url="https://fearlessvegetarian.netlify.app/curdrice"
                    prepTime="PT10M"
                    cookTime="PT20M"
                    totalTime="PT30M"
                    recipeYield="1 Serving"
                    ingredients={[
                        "1/2 cup rice",
                        "1 cup plain yogurt",
                        "1 green chili, finely chopped",
                        "1 teaspoon oil",
                        "1/2 teaspoon mustard seeds",
                        "1/2 teaspoon cumin seeds",
                        "1 teaspoon chana dal",
                        "1 teaspoon urad dal",
                        "1/4 teaspoon asafoetida (hing)",
                        "1/2 teaspoon ginger, minced",
                        "8 roasted cashews",
                        "Curry leaves",
                        "Salt to taste"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>South Indian Curd Rice Recipe | Easy Yogurt Rice | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta
                        name="description"
                        content="Traditional South Indian Curd Rice made with yogurt, rice, ginger, curry leaves, mustard seeds, and lentils. A cooling, comforting, and gut-friendly vegetarian recipe perfect for summer."
                    />
                    <meta
                        name="keywords"
                        content="curd rice, South Indian dish, Indian yogurt, precooked rice, herbs, tempering spices, South Indian cuisine, traditional recipes, comfort food, cooling dish, easy-to-follow recipe, flavorful curd rice, Indian culinary delight, vegetarian dishes, fresh and aromatic"
                    />
                    <meta
                        property="og:title"
                        content="South Indian Curd Rice Recipe | Easy Yogurt Rice"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/curdrice.jpg" />
                    <meta property="og:description" content="Curd Rice Delight: Enjoy South Indian comfort with this dish made with precooked rice, yogurt, herbs, and tempering spices." />
                </Helmet>
                <h1>South Indian Curd Rice (Yogurt Rice)</h1>

                <p>
                    Curd Rice is a classic South Indian comfort food made with cooked rice,
                    creamy yogurt, and a flavorful tempering of mustard seeds, curry leaves,
                    ginger, and lentils. This cooling, probiotic-rich dish is perfect for
                    summer meals and supports digestive health.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
                </Row>
                <div className="ingredients"><h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 cup rice</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 green chilies – chopped finely </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon oil</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 teaspoon mustard seeds</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 teaspoon cumin seeds</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon chana dal found in Indian Grocery Store</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon Urad dal found in Indian Grocery Store</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/4 teaspoon hing (asafoetida) </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 teaspoon ginger minced</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            8 cashews roasted</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 cup plain yogurt</li>
                    </ul>
                </div>
                <div className="ingredients"><h3>Instructions</h3>
                    <ol>
                        <li>Add rice to a bowl and rinse it well a few times. Then pour 1.5 cups water and 0.5 teaspoon salt. Keep it in a pressure cooker.
                            Pressure cook rice for 3 whistles until soft. You can also cook the rice directly in the cooker for 2 whistles.
                            When the pressure releases, remove the rice & mash it lightly. You can also fluff up & use if you do not like mushy rice.
                            If you prefer to use milk, ad 1/4 cup hot milk. Cool it completely.</li>
                        <li>Add curd to cooled rice. Mix well until combined. If you have cooked the rice without salt, then add it now.</li>
                        <li>Stir in coriander leaves, grated carrots and cucumbers to the curd rice. Taste the curd rice & add more salt if needed.</li>
                        <li>Heat oil in a pan. Then add cumin & mustard. When they begin to splutter, add red chilli, chana dal, urad dal and cashews
                            if using. Fry until the dal turns golden.</li>
                        <li>Add ginger, green chili and curry leaves.</li>
                        <li>When the curry leaves turn crisp, add hing and turn off the stove. If using bottle gourd, add it to the hot seasoning and stir.</li>
                        <li>Pour the curd rice mixture into the pan and mix all the ingredients well</li>
                        <li>I prefer hot curd rice so I cook the mixture in the pan for 5 minutes till it gets hot.</li>
                    </ol>
                </div>
                <h2>Final Product</h2>
                <Image
                    src="/curdrice.jpg"
                    alt="South Indian curd rice made with yogurt, rice, mustard seeds, curry leaves, ginger, and roasted cashews"
                    fluid
                    thumbnail
                    rounded
                    loading="lazy"
                    className="recipe-image"
                />
                <div>
                    <h2>Curd Rice Preparation Video</h2>
                    <div className="youtube-container">
                        <YouTube
                            videoId="Y_QJdaanMzg"
                            opts={{
                                width: "100%",
                                height: "500",
                                playerVars: {
                                    autoplay: 0
                                }
                            }}
                        />
                    </div>
                </div>
                {/* Related South Indian & Healthy Vegetarian Recipes */}
                <section className="related-recipes">
                    <h2>Related South Indian & Healthy Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this South Indian Curd Rice recipe, explore
                        these wholesome vegetarian recipes. From easy Indian
                        breakfasts to comforting soups and refreshing salads,
                        these dishes are perfect for everyday meals.
                    </p>

                    <Row className="g-4">

                        {/* Poha */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/poha" className="related-recipe-link">
                                    <Image
                                        src="/poha.jpg"
                                        alt="Poha Indian Flattened Rice Breakfast"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Poha – Indian Flattened Rice Breakfast</h3>

                                    <p>
                                        A light and flavorful Indian breakfast made
                                        with flattened rice, onions, and aromatic
                                        spices. Perfect for a quick homemade meal.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Quinoa Moong Dal Khichdi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/quinoamoongdal"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/quinoamoongdal.jpg"
                                        alt="Healthy Quinoa Moong Dal Khichdi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Quinoa Moong Dal Khichdi</h3>

                                    <p>
                                        A wholesome one-pot vegetarian meal made
                                        with quinoa, moong dal, and Indian spices.
                                        A comforting option for lunch or dinner.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Homemade Instant Pot Yogurt */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/yogurt" className="related-recipe-link">
                                    <Image
                                        src="/yogurt.jpg"
                                        alt="Homemade Instant Pot Yogurt"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Homemade Instant Pot Yogurt</h3>

                                    <p>
                                        Learn how to make creamy homemade yogurt
                                        using an Instant Pot. Enjoy it with Indian
                                        meals, rice dishes, or fresh fruit.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Couscous Salad */}
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
                                        A refreshing vegetarian salad featuring
                                        couscous, fresh vegetables, and a flavorful
                                        dressing. Enjoy it as a light meal or side dish.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Creamy Broccoli Soup */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/broccoli" className="related-recipe-link">
                                    <Image
                                        src="/broccoli.jpg"
                                        alt="Creamy Homemade Broccoli Soup"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Creamy Broccoli Soup</h3>

                                    <p>
                                        A comforting soup made with broccoli and
                                        creamy ingredients. This warming vegetarian
                                        dish is ideal for a light lunch or dinner.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Hearty Lentil Soup */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/lentil" className="related-recipe-link">
                                    <Image
                                        src="/lentil.jpg"
                                        alt="Hearty Homemade Lentil Soup"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Hearty Lentil Soup</h3>

                                    <p>
                                        A nourishing vegetarian soup made with
                                        lentils and flavorful seasonings. Enjoy
                                        this satisfying dish on its own or with bread.
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

export default Curdrice