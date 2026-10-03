import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import RecipeSchema from "./RecipeSchema";

class SoojiHalwa extends Component {
    render() {
        const ingredients = [
            "1 cup sooji (semolina/rava)",
            "1/2 cup ghee",
            "1 cup sugar",
            "3 cups water",
            "1/4 teaspoon cardamom powder",
            "10–12 cashews",
            "10–12 raisins",
            "Pinch of saffron (optional)",
        ];

        return (
            <div>

                {/* Recipe Schema */}

                <RecipeSchema
                    name="Sooji Halwa"
                    description="Sooji Halwa is a traditional Indian dessert made with roasted semolina, ghee, sugar, cardamom, cashews, and raisins. Soft, aromatic, and comforting, it is perfect for festivals, celebrations, prasad, or a simple sweet craving."
                    image="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    url="https://fearlessvegetarian.netlify.app/soojihalwa"
                    prepTime="PT5M"
                    cookTime="PT15M"
                    totalTime="PT20M"
                    recipeYield="4 Servings"
                    ingredients={ingredients}
                />

                {/* SEO */}

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Sooji Halwa Recipe | Rava Sheera | Traditional Indian Dessert
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/soojihalwa"
                    />

                    <meta
                        name="description"
                        content="Learn how to make traditional Sooji Halwa, also known as Rava Sheera. This easy Indian dessert is made with roasted semolina, ghee, sugar, cardamom, cashews, and raisins."
                    />

                    <meta
                        name="keywords"
                        content="sooji halwa recipe, rava sheera recipe, semolina halwa, Indian dessert recipe, easy Indian sweets, vegetarian Indian dessert, traditional Indian dessert, prasad recipe, festival sweet, sooji ka halwa"
                    />

                    <meta
                        name="author"
                        content="Fearless Vegetarian"
                    />

                    {/* Open Graph */}

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:title"
                        content="Sooji Halwa Recipe | Traditional Indian Dessert"
                    />

                    <meta
                        property="og:description"
                        content="A traditional Indian Sooji Halwa made with roasted semolina, ghee, sugar, cardamom, cashews, and raisins. Easy, aromatic, and perfect for festivals or prasad."
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    />

                    <meta
                        property="og:image:alt"
                        content="Sooji Halwa with cashews and raisins"
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />

                    {/* Twitter */}

                    <meta
                        name="twitter:card"
                        content="summary_large_image"
                    />

                    <meta
                        name="twitter:title"
                        content="Sooji Halwa Recipe | Traditional Indian Dessert"
                    />

                    <meta
                        name="twitter:description"
                        content="Make soft and aromatic Sooji Halwa with roasted semolina, ghee, sugar, cardamom, cashews, and raisins."
                    />

                    <meta
                        name="twitter:image"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    />
                </Helmet>

                {/* Page Heading */}

                <h1>
                    Sooji Halwa Recipe – Traditional Indian Semolina Dessert
                </h1>

                <p>
                    Sooji Halwa, also known as Rava Sheera, is a classic Indian
                    dessert made with roasted semolina, ghee, sugar, and
                    cardamom. Soft, aromatic, and comforting, this easy
                    vegetarian Indian dessert is enjoyed during festivals,
                    celebrations, pujas, and as a delicious homemade sweet.
                </p>

                <p>
                    Garnished with cashews and raisins, Sooji Halwa is simple
                    to prepare and can be enjoyed warm as a comforting
                    traditional Indian sweet or offered as prasad.
                </p>

                {/* Recipe Information */}

                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>
                        {" "}Yields: 4 Servings
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} />
                        {" "}Cooking Time: 20 minutes
                    </Col>
                </Row>

                {/* Ingredients */}

                <div className="ingredients">
                    <h3>Ingredients</h3>

                    <ol>
                        {ingredients.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Instructions */}

                <div className="ingredients">
                    <h3>Instructions</h3>

                    <h2>Roast the Semolina</h2>

                    <ol>
                        <li>
                            Heat the ghee in a heavy-bottomed pan over
                            medium-low heat.
                        </li>

                        <li>
                            Add the cashews and raisins. Fry until the cashews
                            become lightly golden and the raisins puff up.
                        </li>

                        <li>
                            Remove the fried cashews and raisins from the pan
                            and set them aside.
                        </li>

                        <li>
                            Add the sooji to the same pan.
                        </li>

                        <li>
                            Roast the sooji over low heat, stirring frequently,
                            until it becomes aromatic and turns light golden.
                        </li>
                    </ol>

                    <h2>Make the Halwa</h2>

                    <ol>
                        <li>
                            In a separate pan, bring the water and sugar to a
                            boil.
                        </li>

                        <li>
                            Add the cardamom powder and saffron, if using.
                        </li>

                        <li>
                            Slowly pour the hot sugar water into the roasted
                            sooji while stirring continuously.
                        </li>

                        <li>
                            Continue stirring to prevent lumps from forming.
                        </li>

                        <li>
                            Cook until the sooji absorbs the liquid and the
                            halwa becomes soft and thick.
                        </li>

                        <li>
                            Continue cooking until the halwa starts to leave
                            the sides of the pan.
                        </li>
                    </ol>

                    <h2>Final Touch</h2>

                    <ol>
                        <li>
                            Add the fried cashews and raisins.
                        </li>

                        <li>
                            Mix everything together.
                        </li>

                        <li>
                            Serve the Sooji Halwa warm.
                        </li>
                    </ol>
                </div>

                {/* Final Product */}

                <section>
                    <h2>Final Product</h2>

                    <Image
                        src="/soojihalwa.jpg"
                        alt="Warm Sooji Halwa made with semolina, ghee, sugar, cashews, and raisins"
                        fluid
                        rounded
                        loading="lazy"
                        className="recipe-image"
                    />
                </section>

                {/* YouTube Video */}

                <section>
                    <h2>Sooji Halwa Preparation Video</h2>

                    <div className="youtube-container">
                        <YouTube
                            videoId="HRUICw6oGsM"
                            opts={{
                                width: "100%",
                                height: "500",
                                playerVars: {
                                    autoplay: 0,
                                },
                            }}
                        />
                    </div>
                </section>

                {/* Related Recipes */}

                <section className="related-recipes">

                    <h2>
                        Related Vegetarian Recipes
                    </h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Sooji Halwa, you may also enjoy
                        these delicious Indian vegetarian recipes:
                    </p>

                    <Row className="g-4">

                        {/* Curd Rice */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">

                                <Link
                                    to="/curdrice"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/curdrice.jpg"
                                        alt="Curd Rice South Indian Comfort Food"
                                        fluid
                                        rounded
                                        loading="lazy"
                                    />

                                    <h3>
                                        Curd Rice – South Indian Comfort Food
                                    </h3>

                                    <p>
                                        A cooling and comforting South Indian
                                        dish made with rice, yogurt, and a
                                        flavorful tempering of spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>

                            </article>
                        </Col>

                        {/* Khaman Dhokla */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">

                                <Link
                                    to="/dhokla"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/dhokla.jpg"
                                        alt="Khaman Dhokla Gujarati Steamed Snack"
                                        fluid
                                        rounded
                                        loading="lazy"
                                    />

                                    <h3>
                                        Khaman Dhokla
                                    </h3>

                                    <p>
                                        A soft and fluffy Gujarati steamed
                                        snack made with chickpea flour and
                                        flavorful spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>

                            </article>
                        </Col>

                        {/* Poha */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">

                                <Link
                                    to="/poha"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/poha.jpg"
                                        alt="Poha Flattened Rice Indian Breakfast"
                                        fluid
                                        rounded
                                        loading="lazy"
                                    />

                                    <h3>
                                        Poha – Flattened Rice Breakfast
                                    </h3>

                                    <p>
                                        A flavorful Indian breakfast made with
                                        flattened rice, vegetables, spices,
                                        and fresh herbs.
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
                                        alt="Bombay Masala Vegetable Sandwich with Mint Chutney"
                                        fluid
                                        rounded
                                        loading="lazy"
                                    />

                                    <h3>
                                        Bombay Masala Sandwich
                                    </h3>

                                    <p>
                                        A delicious Indian vegetarian sandwich
                                        layered with vegetables, spices, and
                                        refreshing mint chutney.
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

export default SoojiHalwa;