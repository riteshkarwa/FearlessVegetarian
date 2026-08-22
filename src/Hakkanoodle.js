import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';


class Hakkanoodle extends Component {
    render() {

        const ingredients = [
            "2 tbsp oil",
            "2 cloves garlic (finely chopped)",
            "1 green chili (slit)",
            "2-inch ginger (chopped)",
            "2 tbsp spring onion",
            "1 onion (sliced)",
            "1 capsicum (sliced)",
            "1/2 cabbage (shredded)",
            "1 carrot (sliced)",
            "5 snap peas",
            "2 tbsp chili sauce",
            "2 tbsp soy sauce",
            "2 tbsp tomato sauce",
            "1/2 tsp pepper powder",
            "1/2 tsp salt",
            "2 tbsp vinegar",
            "Hakka noodles (boiled)"
        ];

        return (
            <div>
                {/* SEO */}
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>Hakka Noodles Recipe – Easy Indo-Chinese Veg Stir Fry | Fearless Vegetarian</title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/hakkanoodle"
                    />

                    <meta
                        name="description"
                        content="Make restaurant-style Hakka Noodles at home with this easy Indo-Chinese recipe. Stir-fried noodles tossed with fresh vegetables, soy sauce, and bold street-style flavors."
                    />

                    <meta
                        name="keywords"
                        content="hakka noodles recipe, indo chinese noodles, vegetable hakka noodles, stir fry noodles, street style noodles, chinese noodles recipe, veg noodles, quick noodles recipe, easy dinner recipe, Asian noodles"
                    />

                    {/* Open Graph */}
                    <meta property="og:title" content="Hakka Noodles Recipe – Easy Indo-Chinese Stir Fry" />
                    <meta property="og:description" content="Restaurant-style veg Hakka Noodles made at home with simple ingredients and bold Indo-Chinese flavors." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/hakkanoodle" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/hakkanoodle.jpg" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Hakka Noodles Recipe – Easy Indo-Chinese Stir Fry" />
                    <meta name="twitter:description" content="Quick and delicious veg Hakka Noodles with street-style Indo-Chinese flavors." />
                    <meta name="twitter:image" content="https://fearlessvegetarian.netlify.app/hakkanoodle.jpg" />
                </Helmet>

                {/* Recipe Schema */}
                <RecipeSchema
                    name="Hakka Noodles"
                    description="Indo-Chinese stir-fried noodles made with fresh vegetables, garlic, ginger, and flavorful sauces."
                    image="https://fearlessvegetarian.netlify.app/hakkanoodle.jpg"
                    url="https://fearlessvegetarian.netlify.app/hakkanoodle"
                    prepTime="PT10M"
                    cookTime="PT20M"
                    totalTime="PT30M"
                    recipeYield="2 Servings"
                    ingredients={ingredients}
                />

                {/* Title */}
                <h1>
                    Restaurant-Style Veg Hakka Noodles Recipe
                </h1>
                <p>
                    Veg Hakka Noodles is a popular Indo-Chinese street food recipe
                    made with stir-fried noodles, crunchy vegetables, garlic,
                    ginger, and flavorful sauces. This quick vegetarian noodle
                    recipe is perfect for lunch, dinner, or a delicious evening snack.
                </p>

                {/* Meta */}
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
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 30 minutes
                    </Col>
                </Row>

                {/* Ingredients */}
                <div className="ingredients"><h3>Ingredients</h3>
                    <ol>
                        {ingredients.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ol>
                </div>

                {/* Instructions */}
                <div className="ingredients"><h3>Instructions</h3>

                    <h3>1. Cook Noodles</h3>
                    <ol>
                        <li>Boil noodles as per package instructions.</li>
                        <li>Drain and toss with a little oil to prevent sticking.</li>
                    </ol>

                    <h3>2. Stir Fry Vegetables</h3>
                    <ol>
                        <li>Heat oil in a wok on high flame.</li>
                        <li>Add garlic, ginger, chili, and spring onions.</li>
                        <li>Add all vegetables and stir fry quickly.</li>
                    </ol>

                    <h3>3. Add Sauces</h3>
                    <ol>
                        <li>Add soy sauce, chili sauce, tomato sauce, salt, and pepper.</li>
                        <li>Mix well on high heat.</li>
                    </ol>

                    <h3>4. Combine</h3>
                    <ol>
                        <li>Add boiled noodles and vinegar.</li>
                        <li>Toss everything on high flame until well combined.</li>
                        <li>Garnish with spring onions and serve hot.</li>
                    </ol>
                </div>

                {/* Final Image */}
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image
                        src="/hakkanoodle.jpg"
                        alt="Delicious Hakka Noodles"
                        thumbnail
                        rounded
                        fluid
                    />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image
                        src="/hakkanoodle.jpg"
                        alt="Delicious Hakka Noodles"
                        thumbnail
                        rounded
                        fluid
                        width="50%"
                        height="50%"
                    />
                </MediaQuery>
                {/* Preparation Video */}
                <section className="recipe-video">
                    <h2>Hakka Noodle  Preparation Video</h2>
                    <div className="ratio ratio-1x1 video-container">
                        <iframe
                            src="https://www.youtube.com/embed/hD3aiKO9DVU"
                            title="Upma Preparation Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* You May Also Like */}
                <section className="related-recipes">
                    <h2>You May Also Like</h2>

                    <p className="related-recipes-intro">
                        Try these delicious vegetarian recipes you may also enjoy:
                    </p>

                    <Row className="g-4">

                        {/* Couscous Black Bean Bowl */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/couscousblackbeanbowl"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/couscousblackbeanbowl.png"
                                        alt="Couscous Black Bean Bowl with vegetables and black beans"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Couscous Black Bean Bowl</h3>

                                    <p>
                                        A wholesome and flavorful vegetarian bowl made with
                                        couscous, black beans, fresh vegetables, and spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Bombay Masala Sandwich */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/masalasandwich"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/masalasandwich.png"
                                        alt="Bombay Masala Sandwich with spiced potatoes and vegetables"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Bombay Masala Sandwich</h3>

                                    <p>
                                        A popular Indian street-food sandwich filled with
                                        spiced potatoes, vegetables, chutney, and flavorful
                                        seasonings.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Mushroom Masala Curry */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/mushroom"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/mushroom.jpg"
                                        alt="Mushroom Masala Curry with aromatic Indian spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Mushroom Masala Curry</h3>

                                    <p>
                                        A flavorful vegetarian mushroom curry cooked with
                                        tomatoes, onions, and aromatic Indian spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Poha Breakfast */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/poha"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/poha.jpg"
                                        alt="Indian Poha breakfast made with flattened rice and vegetables"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Poha Breakfast</h3>

                                    <p>
                                        A light and flavorful Indian breakfast made with
                                        flattened rice, vegetables, peanuts, and aromatic spices.
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

export default Hakkanoodle;