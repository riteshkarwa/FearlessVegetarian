import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faCarrot,
    faLeaf,
    faUtensils,
    faBowlFood
} from "@fortawesome/free-solid-svg-icons";

class Shakshuka extends Component {
    render() {
        const optsDesktop = {
            height: "600",
            width: "900",
        };

        const optsMobile = {
            height: "500",
            width: "325",
        };

        return (
            <div className="recipe-page">

                {/* =========================
                    SEO / HELMET
                ========================== */}
                <Helmet>

                    <title>
                        Chickpea Shakshuka Recipe | Easy Vegetarian Shakshuka
                    </title>

                    <meta
                        name="description"
                        content="Make this hearty Chickpea Shakshuka with chickpeas simmered in a flavorful tomato sauce, bell peppers, garlic, and aromatic spices. An easy and satisfying vegetarian recipe."
                    />

                    <meta
                        name="keywords"
                        content="chickpea shakshuka, vegetarian shakshuka, vegan shakshuka, chickpea recipe, vegetarian breakfast, tomato chickpea curry, easy vegetarian recipe"
                    />

                    <meta
                        property="og:title"
                        content="Chickpea Shakshuka Recipe | Fearless Vegetarian"
                    />

                    <meta
                        property="og:description"
                        content="A hearty vegetarian Chickpea Shakshuka made with chickpeas, tomatoes, bell peppers, garlic, and aromatic spices."
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/chickpeashakshuka"
                    />

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/chickpeashakshuka"
                    />

                </Helmet>


                {/* =========================
                    RECIPE INTRODUCTION
                ========================== */}
                <section className="recipe-intro">

                    <h1>
                        Chickpea Shakshuka
                    </h1>

                    <p>
                        Shakshuka is a popular dish believed to have originated
                        in North Africa and later became widely enjoyed
                        throughout the Middle East.
                    </p>

                    <p>
                        Traditional shakshuka is typically made with eggs
                        simmered in a flavorful tomato-based sauce. This
                        vegetarian version replaces the eggs with hearty
                        chickpeas, creating a satisfying and protein-rich meal.
                    </p>

                    <p>
                        Chickpeas are simmered with tomatoes, bell peppers,
                        garlic, and aromatic spices to create a flavorful
                        one-pan dish that can be enjoyed for breakfast, lunch,
                        or dinner.
                    </p>

                </section>


                {/* =========================
                    RECIPE IMAGE
                ========================== */}
                <section className="recipe-image-section">

                    <Image
                        src="/shakshuka.jpg"
                        alt="Vegetarian Chickpea Shakshuka made with chickpeas, tomatoes, bell peppers, and spices"
                        fluid
                        rounded
                        className="recipe-image d-block mx-auto shadow"
                        style={{
                            width: "100%",
                            maxWidth: "750px",
                            height: "auto"
                        }}
                    />

                </section>


                {/* =========================
                    RECIPE INFORMATION
                ========================== */}
                <section className="recipe-info">

                    <Row className="cooktimerow">

                        <Col xs={12} sm={6}>
                            <span className="material-symbols-outlined">
                                restaurant_menu
                            </span>

                            <strong>
                                Yields:
                            </strong>{" "}
                            2 Servings
                        </Col>

                        <Col xs={12} sm={6}>

                            <FontAwesomeIcon icon={faClock} />

                            <strong>
                                Cooking Time:
                            </strong>{" "}
                            60 minutes

                        </Col>

                    </Row>

                </section>


                {/* =========================
                    INGREDIENTS
                ========================== */}
                <section className="ingredients-section">

                    <h2>
                        <FontAwesomeIcon
                            icon={faCarrot}
                            className="section-icon"
                        />

                        Ingredients
                    </h2>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 tablespoon olive or avocado oil
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1/2 cup diced white onion or shallot
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1/2 medium red bell pepper, chopped
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            5 garlic cloves, minced
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            2 medium tomatoes, diced or pureed
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            4 tablespoons tomato paste
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 teaspoon ground cumin
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            2 teaspoons chili powder
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            2 teaspoons paprika
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 pinch cayenne pepper
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 pinch ground coriander
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 pinch ground cardamom
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            3 cups cooked chickpeas
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1/2 cup olives, optional
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            1 teaspoon coconut sugar, optional
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="bullet-icon"
                            />
                            Salt to taste
                        </li>

                    </ul>

                </section>


                {/* =========================
                    COOKING INSTRUCTIONS
                ========================== */}
                <section className="instructions-section">

                    <h2>
                        <FontAwesomeIcon
                            icon={faUtensils}
                            className="section-icon"
                        />

                        Instructions
                    </h2>

                    <ol className="instructions-list">

                        <li>
                            If using dried chickpeas, soak them overnight
                            in plenty of cold water. The chickpeas will expand
                            significantly, so make sure there is enough water
                            to cover them by several inches.
                        </li>

                        <li>
                            Drain and rinse the soaked chickpeas before cooking.
                        </li>

                        <li>
                            Place the chickpeas in a large pot and cover them
                            with several inches of fresh water. Bring to a boil,
                            then reduce the heat and simmer for approximately
                            60–90 minutes, or until tender.
                        </li>

                        <li>
                            Drain the cooked chickpeas and set them aside.
                        </li>

                        <li>
                            Heat a large skillet over medium heat. Add the
                            olive or avocado oil, followed by the onion and
                            red bell pepper.
                        </li>

                        <li>
                            Sauté for 4–5 minutes, stirring frequently, until
                            the vegetables become soft.
                        </li>

                        <li>
                            Add the minced garlic and cook for another
                            30–60 seconds until fragrant.
                        </li>

                        <li>
                            Add the tomatoes, tomato paste, cumin, paprika,
                            chili powder, coriander, cardamom, and cayenne
                            pepper.
                        </li>

                        <li>
                            Stir everything together and allow the tomato
                            mixture to simmer for 2–3 minutes.
                        </li>

                        <li>
                            Add the cooked chickpeas and optional olives.
                            Stir well to combine.
                        </li>

                        <li>
                            Reduce the heat to medium-low and simmer for
                            15–20 minutes, allowing the chickpeas to absorb
                            the flavors of the tomato sauce and spices.
                        </li>

                        <li>
                            Taste and adjust the seasoning. Add more paprika
                            or cumin for additional depth, cayenne for heat,
                            or salt to taste.
                        </li>

                        <li>
                            If desired, add a small amount of coconut sugar
                            to balance the acidity of the tomatoes.
                        </li>

                        <li>
                            Serve hot with toasted bread, rice, pasta, or
                            your favorite side dish.
                        </li>

                    </ol>

                </section>


                {/* =========================
                    SERVING SUGGESTIONS
                ========================== */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className="section-icon"
                        />

                        How to Serve Chickpea Shakshuka
                    </h2>

                    <p>
                        Chickpea Shakshuka is hearty enough to enjoy on its
                        own, but it pairs beautifully with a variety of sides.
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Crusty toasted bread
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Warm naan or roti
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Steamed basmati rice
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Quinoa
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fresh salad
                        </li>

                    </ul>

                </section>


                {/* =========================
                    VEGETARIAN / VEGAN NOTE
                ========================== */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />

                        Is Chickpea Shakshuka Vegan?
                    </h2>

                    <p>
                        Yes! This Chickpea Shakshuka can easily be made
                        completely vegan. The recipe uses chickpeas instead
                        of the eggs traditionally used in shakshuka and
                        contains no dairy ingredients.
                    </p>

                    <p>
                        Make sure any bread or other side dishes you serve
                        alongside the shakshuka are also free from dairy,
                        eggs, or other animal-derived ingredients if you
                        follow a strict vegan diet.
                    </p>

                </section>


                {/* =========================
                    NUTRITION / BENEFITS
                ========================== */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />

                        Why You'll Love This Recipe
                    </h2>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Packed with plant-based protein from chickpeas
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Rich in fiber and satisfying
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Made with vegetables and aromatic spices
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Naturally vegetarian and easily vegan
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Perfect for breakfast, lunch, or dinner
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Great for meal preparation
                        </li>

                    </ul>

                </section>


                {/* =========================
                    FINAL PRODUCT
                ========================== */}
                <section className="final-product-section">

                    <h2>
                        Chickpea Shakshuka
                    </h2>

                    <Image
                        src="/shakshuka.jpg"
                        alt="Finished vegetarian Chickpea Shakshuka served with chickpeas in tomato sauce"
                        fluid
                        rounded
                        className="recipe-image d-block mx-auto shadow"
                        style={{
                            width: "100%",
                            maxWidth: "750px",
                            height: "auto"
                        }}
                    />

                </section>


                {/* =========================
                    VIDEO
                ========================== */}
                <section className="recipe-video">

                    <h2>
                        Chickpea Shakshuka Recipe Video
                    </h2>

                    <div className="youtube-container">

                        <MediaQuery maxWidth={767}>

                            <YouTube
                                videoId="BLWyNboLlXI"
                                opts={optsMobile}
                            />

                        </MediaQuery>

                        <MediaQuery minWidth={768}>

                            <YouTube
                                videoId="BLWyNboLlXI"
                                opts={optsDesktop}
                            />

                        </MediaQuery>

                    </div>

                </section>


                {/* =========================
                    YOU MAY ALSO LIKE
                ========================== */}
                <section className="related-recipes">

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />

                        You May Also Like
                    </h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Chickpea Shakshuka, try these
                        delicious vegetarian recipes from Fearless Vegetarian:
                    </p>

                    <Row className="g-4">

                        {/* Besan Curry */}
                        <Col xs={12} sm={6} md={4}>

                            <article className="related-recipe-card">

                                <Link
                                    to="/besan"
                                    className="related-recipe-link"
                                >

                                    <Image
                                        src="/besan.jpg"
                                        alt="Besan Curry made with chickpea flour, yogurt, and aromatic Indian spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>
                                        Besan Curry
                                    </h3>

                                    <p>
                                        A flavorful Indian curry made with chickpea flour,
                                        yogurt, and aromatic spices for a comforting vegetarian meal.
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
                                        alt="Creamy vegetarian Dal Makhani"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>
                                        Dal Makhani
                                    </h3>

                                    <p>
                                        A rich and creamy lentil dish made
                                        with black lentils, kidney beans,
                                        and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>

                                </Link>

                            </article>

                        </Col>


                        {/* Rajma */}
                        <Col xs={12} sm={6} md={4}>

                            <article className="related-recipe-card">

                                <Link
                                    to="/rajmah"
                                    className="related-recipe-link"
                                >

                                    <Image
                                        src="/rajmah.jpg"
                                        alt="Indian vegetarian Rajma kidney bean curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>
                                        Rajma
                                    </h3>

                                    <p>
                                        A comforting kidney bean curry
                                        cooked in a flavorful tomato-based
                                        Indian masala.
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
                                        alt="Quinoa Moong Dal Khichdi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>
                                        Quinoa Moong Dal Khichdi
                                    </h3>

                                    <p>
                                        A nutritious and comforting one-pot
                                        meal made with quinoa, moong dal,
                                        and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>

                                </Link>

                            </article>

                        </Col>

                    </Row>

                </section>


                {/* =========================
                    THANK YOU
                ========================== */}
                <section className="article-footer">

                    <h2>
                        Thank You for Visiting Fearless Vegetarian
                    </h2>

                    <p>
                        We hope you enjoy this hearty and flavorful Chickpea
                        Shakshuka recipe. If you make it at home, we'd love
                        for you to explore more vegetarian recipes on
                        Fearless Vegetarian.
                    </p>

                    <p className="closing-message">
                        <strong>
                            Happy cooking and enjoy your meal!
                        </strong>
                    </p>

                </section>

            </div>
        );
    }
}

export default Shakshuka;