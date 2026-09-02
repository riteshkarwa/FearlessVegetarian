import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import RecipeSchema from "./RecipeSchema";

const Mushroom = () => {
    const youtubeOptions = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
        },
    };

    return (
        <div className="container recipe-page">

            {/* Recipe Schema */}
            <RecipeSchema
                name="Punjabi Mushroom Masala Curry"
                description="Punjabi Mushroom Masala Curry made with white button mushrooms, onions, tomatoes, yogurt, and aromatic Indian spices. A rich and flavorful vegetarian curry that pairs perfectly with naan, roti, or rice."
                image="https://fearlessvegetarian.netlify.app/mushroom.jpg"
                url="https://fearlessvegetarian.netlify.app/mushroom"
                prepTime="PT15M"
                cookTime="PT45M"
                totalTime="PT1H"
                recipeYield="2 Servings"
                ingredients={[
                    "500g white button mushrooms",
                    "2 onions",
                    "2 tomatoes",
                    "2 cloves garlic",
                    "1-inch ginger",
                    "2 green chilies",
                    "1 teaspoon cumin seeds",
                    "1 teaspoon coriander powder",
                    "1/2 teaspoon turmeric powder",
                    "1/2 teaspoon red chili powder",
                    "1 teaspoon garam masala",
                    "4 tablespoons plain yogurt",
                    "Salt to taste",
                    "Fresh coriander leaves",
                ]}
            />

            {/* SEO Metadata */}
            <Helmet>
                <meta charSet="utf-8" />

                <title>
                    Punjabi Mushroom Masala Curry Recipe | Fearless Vegetarian
                </title>

                <link
                    rel="canonical"
                    href="https://fearlessvegetarian.netlify.app/mushroom/"
                />

                <meta
                    name="description"
                    content="Make Punjabi Mushroom Masala Curry with tender white button mushrooms simmered in a flavorful onion-tomato gravy with yogurt and aromatic Indian spices. An easy and comforting vegetarian curry."
                />

                <meta
                    name="keywords"
                    content="Punjabi mushroom curry, mushroom masala curry, mushroom curry, Indian mushroom recipe, vegetarian curry, mushroom masala, Punjabi recipes, tomato gravy, yogurt curry, Indian vegetarian recipes, Fearless Vegetarian"
                />

                <meta
                    property="og:title"
                    content="Punjabi Mushroom Masala Curry Recipe | Fearless Vegetarian"
                />

                <meta
                    property="og:description"
                    content="A flavorful Punjabi-style Mushroom Masala Curry made with white button mushrooms, onions, tomatoes, yogurt, and aromatic Indian spices."
                />

                <meta
                    property="og:type"
                    content="article"
                />

                <meta
                    property="og:url"
                    content="https://fearlessvegetarian.netlify.app/mushroom"
                />

                <meta
                    property="og:image"
                    content="https://fearlessvegetarian.netlify.app/mushroom.jpg"
                />
            </Helmet>

            {/* Recipe Header */}
            <header className="recipe-header">

                <h1>Punjabi Mushroom Masala Curry</h1>

                <p>
                    This Punjabi Mushroom Masala Curry is a flavorful,
                    comforting vegetarian dish made with tender white button
                    mushrooms cooked in a spiced onion-tomato gravy.
                    Creamy yogurt adds richness and balances the aromatic
                    Indian spices.
                </p>

                <p>
                    Serve this delicious mushroom curry with naan, roti,
                    jeera rice, or steamed basmati rice for a satisfying meal.
                </p>

            </header>

            {/* Recipe Information */}
            <section className="recipe-info">

                <Row className="cooktimerow">

                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>{" "}
                        Yields: 2 Servings
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <FontAwesomeIcon icon={faClock} />{" "}
                        Cooking Time: 60 minutes
                    </Col>

                </Row>

            </section>

            {/* Ingredients */}
            <section>

                <h2 className="ingredients">Ingredients</h2>

                <ol className="recipe-list">

                    <li>
                        500g white button mushrooms, cleaned and sliced
                    </li>

                    <li>
                        2 onions, finely chopped
                    </li>

                    <li>
                        2 tomatoes, finely chopped
                    </li>

                    <li>
                        2 cloves garlic, minced
                    </li>

                    <li>
                        1-inch ginger, grated
                    </li>

                    <li>
                        2 green chilies, finely chopped
                    </li>

                    <li>
                        1 teaspoon cumin seeds
                    </li>

                    <li>
                        1 teaspoon coriander powder
                    </li>

                    <li>
                        1/2 teaspoon turmeric powder
                    </li>

                    <li>
                        1/2 teaspoon red chili powder, adjusted to taste
                    </li>

                    <li>
                        1 teaspoon garam masala
                    </li>

                    <li>
                        4 tablespoons plain yogurt
                    </li>

                    <li>
                        Salt to taste
                    </li>

                    <li>
                        Fresh coriander leaves for garnish
                    </li>

                </ol>

            </section>

            {/* Instructions */}
            <section>

                <h2 className="ingredients">Instructions</h2>

                <ol className="recipe-list">

                    <li>
                        Heat oil in a deep pan or skillet over medium heat.
                        Add cumin seeds and let them sizzle for a few seconds.
                    </li>

                    <li>
                        Add the chopped onions and sauté until they become
                        golden brown.
                    </li>

                    <li>
                        Add minced garlic, grated ginger, and chopped green
                        chilies. Sauté for about 2 minutes until fragrant.
                    </li>

                    <li>
                        Add the chopped tomatoes and cook until they soften
                        and the oil begins to separate from the mixture.
                    </li>

                    <li>
                        Add coriander powder, turmeric powder, red chili
                        powder, and salt. Mix well and cook for another
                        2 minutes.
                    </li>

                    <li>
                        Add the sliced mushrooms and stir well until they are
                        completely coated with the spice mixture.
                    </li>

                    <li>
                        Cover the pan and cook the mushrooms for 5 to 7
                        minutes, stirring occasionally.
                    </li>

                    <li>
                        Once the mushrooms are tender, reduce the heat and
                        add the plain yogurt. Mix gently until well combined.
                    </li>

                    <li>
                        Sprinkle garam masala over the curry and mix well.
                        Allow it to simmer for another minute or two.
                    </li>

                    <li>
                        Garnish with fresh coriander leaves and serve hot with
                        rice, naan, or roti.
                    </li>

                </ol>

            </section>

            {/* Final Dish */}
            <section>

                <h2>Punjabi Mushroom Masala Curry</h2>

                <Image
                    src="/mushroom.jpg"
                    alt="Punjabi Mushroom Masala Curry made with white button mushrooms in a spiced tomato yogurt gravy"
                    thumbnail
                    rounded
                    fluid
                    loading="lazy"
                />

            </section>

            {/* YouTube Video */}
            <section className="recipe-video">

                <h2>Mushroom Curry Preparation Video</h2>

                <div className="youtube-responsive">

                    <YouTube
                        videoId="UcMZg6QjnuQ"
                        opts={youtubeOptions}
                        className="youtube-player"
                    />

                </div>

            </section>

            {/* Related Recipes */}
            <section className="related-recipes">

                <h2>Related Vegetarian Recipes</h2>

                <p>
                    If you enjoyed this Punjabi-style Mushroom Masala Curry,
                    you may also enjoy these flavorful vegetarian recipes:
                </p>

                <Row className="g-4">

                    {/* Shahi Paneer */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/paneer.jpg"
                                alt="Shahi Paneer"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Shahi Paneer</h3>

                            <p>
                                A rich and creamy Indian curry made with soft paneer,
                                tomatoes, aromatic spices, and a flavorful gravy.
                            </p>

                            <Link
                                to="/paneer"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                    {/* Saag Paneer */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/saagpaneer.jpg"
                                alt="Saag Paneer"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Saag Paneer</h3>

                            <p>
                                Tender paneer cooked with nutritious leafy greens
                                and aromatic Indian spices for a comforting curry.
                            </p>

                            <Link
                                to="/saagpaneer"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                    {/* Aloo Gobi */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/aloogobi.jpg"
                                alt="Aloo Gobi"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Aloo Gobi</h3>

                            <p>
                                A classic Indian vegetable curry made with potatoes,
                                cauliflower, and fragrant spices.
                            </p>

                            <Link
                                to="/aloogobi"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                    {/* Quinoa Moong Dal Khichdi */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/quinoamoongdal.jpg"
                                alt="Quinoa Moong Dal Khichdi"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Quinoa Moong Dal Khichdi</h3>

                            <p>
                                A wholesome and comforting one-pot meal made with
                                quinoa, moong dal, vegetables, and Indian spices.
                            </p>

                            <Link
                                to="/quinoamoongdal"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                    {/* Couscous Salad */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/couscousbalsamic.jpg"
                                alt="Middle Eastern-inspired Couscous Salad"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Middle Eastern-inspired Couscous Salad</h3>

                            <p>
                                A fresh and colorful couscous salad packed with
                                vegetables and bright balsamic flavors.
                            </p>

                            <Link
                                to="/couscousbalsamic"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                    {/* Lentil Soup */}
                    <Col xs={12} sm={6} md={4}>
                        <article className="recipe-card">

                            <Image
                                src="/lentil.jpg"
                                alt="Hearty Lentil Soup"
                                fluid
                                rounded
                                loading="lazy"
                            />

                            <h3>Hearty Lentil Soup</h3>

                            <p>
                                A nourishing and flavorful lentil soup made with
                                wholesome ingredients and aromatic spices.
                            </p>

                            <Link
                                to="/lentil"
                                className="btn btn-success"
                            >
                                View Recipe
                            </Link>

                        </article>
                    </Col>

                </Row>

            </section>

        </div>
    );
};

export default Mushroom;