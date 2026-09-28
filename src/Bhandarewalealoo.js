import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RecipeSchema from "./RecipeSchema";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

class BhandareWaleAloo extends Component {
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
            <div>
                <RecipeSchema
                    name="Temple-Style Potato Tomato Curry | Bhandare Wale Aloo"
                    description="Bhandare Wale Aloo is a simple temple-style Indian potato curry made with potatoes, tomatoes, ginger, and aromatic spices. This comforting vegetarian curry is commonly served at community feasts and religious gatherings."
                    image="https://fearlessvegetarian.netlify.app/bhandarewalealoo.jpg"
                    url="https://fearlessvegetarian.netlify.app/bhandarewalealoo"
                    prepTime="PT15M"
                    cookTime="PT30M"
                    totalTime="PT45M"
                    recipeYield="4 Servings"
                    recipeCategory="Main Course"
                    recipeCuisine="Indian"
                    keywords="Bhandare Wale Aloo, Bhandara Aloo, Temple Style Potato Curry, Potato Tomato Curry, Indian Potato Curry, Vegetarian Potato Curry"
                    instructions={[
                        "Boil and peel the potatoes.",
                        "Prepare the tomato and ginger mixture.",
                        "Heat oil and cook the whole spices.",
                        "Add the tomato mixture and ground spices.",
                        "Cook the masala until the oil begins to separate.",
                        "Add the potatoes and water.",
                        "Simmer until the curry reaches the desired consistency.",
                        "Garnish with fresh cilantro and serve hot."
                    ]}
                    nutrition={{
                        calories: "220 calories",
                        proteinContent: "5 g",
                        carbohydrateContent: "32 g",
                        fatContent: "8 g"
                    }}
                    ingredients={[
                        "6 medium potatoes",
                        "3 medium tomatoes",
                        "1-inch piece ginger",
                        "2 tablespoons vegetable oil",
                        "1 teaspoon cumin seeds",
                        "1/2 teaspoon asafoetida (hing)",
                        "1 teaspoon coriander powder",
                        "1/2 teaspoon turmeric powder",
                        "1/2 teaspoon red chili powder",
                        "1 teaspoon garam masala",
                        "1/2 teaspoon amchoor powder",
                        "1 teaspoon kasuri methi",
                        "2 cups water",
                        "Salt to taste",
                        "Fresh cilantro for garnish"
                    ]}
                />

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Bhandare Wale Aloo Recipe | Temple-Style Potato Tomato Curry
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/bhandarewalealoo"
                    />

                    <meta
                        name="description"
                        content="Learn how to make Bhandare Wale Aloo, a delicious temple-style Indian potato tomato curry made with boiled potatoes, tomatoes, ginger, and aromatic spices. A simple vegetarian curry perfect with puri, roti, or rice."
                    />

                    <meta
                        name="keywords"
                        content="Bhandare Wale Aloo, Bhandara Aloo, temple style potato curry, potato tomato curry, Indian potato curry, vegetarian potato recipes, Indian vegetarian recipes, temple food, bhandara food, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Bhandare Wale Aloo Recipe | Temple-Style Potato Tomato Curry"
                    />

                    <meta
                        property="og:description"
                        content="A comforting temple-style potato tomato curry made with boiled potatoes, tomatoes, ginger, and aromatic Indian spices."
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/bhandarewalealoo.jpg"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/bhandarewalealoo"
                    />

                    <meta property="og:type" content="article" />

                    <meta name="robots" content="index, follow" />
                </Helmet>

                <h1>
                    Temple-Style Potato Tomato Curry | Bhandare Wale Aloo
                </h1>

                <p>
                    Bhandare Wale Aloo is a simple and comforting Indian potato
                    curry often associated with bhandaras, temple gatherings, and
                    community meals. Unlike rich restaurant-style potato curries,
                    this dish uses simple ingredients such as boiled potatoes,
                    tomatoes, ginger, and aromatic spices to create a flavorful
                    curry that is hearty without being overly complicated.
                </p>

                <p>
                    The potatoes are gently simmered in a tangy tomato-based gravy,
                    allowing them to absorb the flavors of cumin, coriander,
                    turmeric, chili, and other Indian spices. The result is a
                    comforting vegetarian curry that tastes wonderful with hot
                    puris, roti, or rice.
                </p>

                <h2>What Are Bhandare Wale Aloo?</h2>

                <p>
                    "Bhandare Wale Aloo" translates roughly to "potatoes served at
                    a bhandara." A bhandara is a community meal traditionally
                    associated with religious or devotional gatherings in India.
                    The food is generally prepared in large quantities and is
                    designed to be simple, flavorful, and satisfying.
                </p>

                <p>
                    This style of potato curry is known for its rustic texture and
                    flavorful tomato gravy. The potatoes are often broken or
                    roughly cut rather than perfectly cubed, which helps thicken
                    the curry naturally.
                </p>

                <h2>Why You'll Love This Recipe</h2>

                <p>
                    This Bhandare Wale Aloo recipe uses everyday ingredients and
                    does not require a complicated cooking process. It is naturally
                    vegetarian and can easily be made vegan by using a plant-based
                    cooking oil.
                </p>

                <p>
                    The combination of tangy tomatoes, earthy spices, tender
                    potatoes, and ginger creates a comforting curry that works
                    equally well for an everyday meal or a festive gathering.
                </p>

                <h2>Serving Suggestions</h2>

                <p>
                    Bhandare Wale Aloo are traditionally delicious with hot puris,
                    but you can also serve them with roti, paratha, naan, or
                    steamed basmati rice.
                </p>

                <p>
                    For a complete Indian meal, serve this potato curry with
                    puris, yogurt or raita, pickle, and a simple vegetable side
                    dish.
                </p>

                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>{" "}
                        Yields: 4 Servings
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 45 minutes
                    </Col>
                </Row>

                <div className="ingredients">
                    <h3>Ingredients</h3>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            6 medium potatoes, boiled and peeled
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            3 medium tomatoes
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1-inch piece of fresh ginger, peeled
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            2 tablespoons vegetable oil
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1 teaspoon cumin seeds
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1/2 teaspoon asafoetida (hing)
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1 teaspoon coriander powder
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1/2 teaspoon turmeric powder
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1/2 teaspoon red chili powder
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1 teaspoon garam masala
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1/2 teaspoon amchoor powder
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            1 teaspoon kasuri methi
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            2 cups water
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            Salt to taste
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faBowlFood} />
                            Fresh cilantro for garnish
                        </li>
                    </ul>
                </div>

                <div className="ingredients">
                    <h3>Instructions</h3>

                    <ol>
                        <li>
                            Boil the potatoes until they are tender but still hold
                            their shape. Allow them to cool, peel them, and cut
                            them into large pieces. You can also gently break some
                            of the potatoes by hand for a more rustic texture.
                        </li>

                        <li>
                            Add the tomatoes and ginger to a blender and blend
                            until you have a smooth tomato-ginger puree.
                        </li>

                        <li>
                            Heat the vegetable oil in a large pot over medium heat.
                        </li>

                        <li>
                            Add the cumin seeds and allow them to sizzle for a few
                            seconds.
                        </li>

                        <li>
                            Add the asafoetida and quickly stir it into the oil.
                        </li>

                        <li>
                            Carefully add the tomato and ginger puree to the pot.
                            Stir well.
                        </li>

                        <li>
                            Add coriander powder, turmeric powder, red chili
                            powder, and salt. Mix everything together.
                        </li>

                        <li>
                            Cover the pot and allow the tomato mixture to cook for
                            about 10 to 12 minutes. Stir occasionally so the masala
                            does not stick to the bottom.
                        </li>

                        <li>
                            When the tomato mixture has thickened and the raw
                            tomato smell has cooked away, add the boiled potatoes.
                        </li>

                        <li>
                            Gently mix the potatoes with the masala. Avoid
                            stirring too aggressively because you want some potato
                            pieces to remain intact.
                        </li>

                        <li>
                            Add approximately 2 cups of water and mix well. Adjust
                            the amount of water depending on how thick you want
                            your curry.
                        </li>

                        <li>
                            Cover the pot and simmer the curry for about 10
                            minutes. This allows the potatoes to absorb the
                            tomato and spice flavors.
                        </li>

                        <li>
                            Add garam masala, amchoor powder, and kasuri methi.
                            Mix gently.
                        </li>

                        <li>
                            Simmer uncovered for another 3 to 5 minutes until the
                            curry reaches your desired consistency.
                        </li>

                        <li>
                            Taste and adjust the salt and spices as needed.
                        </li>

                        <li>
                            Garnish with fresh cilantro and serve hot with puri,
                            roti, paratha, naan, or rice.
                        </li>
                    </ol>
                </div>

                <h2>Final Product</h2>

                <MediaQuery maxWidth={767}>
                    <Image
                        src="/bhandarewalealoo.jpg"
                        alt="Temple-style Bhandare Wale Aloo potato tomato curry with aromatic Indian spices"
                        thumbnail
                        rounded
                        fluid
                    />
                </MediaQuery>

                <MediaQuery minWidth={767}>
                    <Image
                        src="/bhandarewalealoo.jpg"
                        alt="Temple-style Bhandare Wale Aloo potato tomato curry with aromatic Indian spices"
                        thumbnail
                        rounded
                        fluid
                        width="50%"
                        height="50%"
                    />
                </MediaQuery>

                <div>
                    <h2>Bhandare Wale Aloo Preparation Video</h2>

                    <MediaQuery maxWidth={767}>
                        <YouTube
                            videoId="MCQF_JRPKKA"
                            opts={optsMobile}
                        />
                    </MediaQuery>

                    <MediaQuery minWidth={767}>
                        <YouTube
                            videoId="MCQF_JRPKKA"
                            opts={optsDesktop}
                        />
                    </MediaQuery>
                </div>

                {/* Related Recipes */}

                <section className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed these Temple-Style Bhandare Wale Aloo,
                        you may also like these delicious vegetarian recipes:
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
                                        alt="Aloo Gobi"
                                        fluid
                                        rounded
                                    />

                                    <h3>
                                        Aloo Gobi
                                    </h3>

                                    <p>
                                        A classic Indian potato and cauliflower
                                        curry made with aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Pav Bhaji */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/pavbhaji"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/pavbhaji.jpg"
                                        alt="Pav Bhaji"
                                        fluid
                                        rounded
                                    />

                                    <h3>
                                        Pav Bhaji
                                    </h3>

                                    <p>
                                        A flavorful Indian vegetable curry
                                        served with toasted pav.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Paneer */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/paneer"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/paneer.jpg"
                                        alt="Paneer Curry"
                                        fluid
                                        rounded
                                    />

                                    <h3>
                                        Paneer Curry
                                    </h3>

                                    <p>
                                        Tender paneer cooked in a flavorful
                                        Indian-style gravy.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Black Eyed Beans */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/blackeyedbeans"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/blackeyedbeans.jpg"
                                        alt="Black Eyed Beans Curry"
                                        fluid
                                        rounded
                                    />

                                    <h3>
                                        Black Eyed Beans Curry
                                    </h3>

                                    <p>
                                        A hearty vegetarian curry made with
                                        nutritious black eyed beans and spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Mushroom Curry */}

                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/mushroom"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/mushroom.jpg"
                                        alt="Mushroom Curry"
                                        fluid
                                        rounded
                                    />

                                    <h3>
                                        Mushroom Curry
                                    </h3>

                                    <p>
                                        A flavorful mushroom curry prepared
                                        with aromatic Indian spices.
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

export default BhandareWaleAloo;