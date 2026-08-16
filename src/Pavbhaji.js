import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
    faBowlFood
} from "@fortawesome/free-solid-svg-icons";

class Pavbhaji extends Component {
    render() {

        const recipe = {
            name: "Pav Bhaji",
            description:
                "Make delicious Mumbai-style Pav Bhaji at home with mashed vegetables, aromatic pav bhaji masala, butter, and toasted pav. This easy vegetarian Indian street food recipe is flavorful, comforting, and perfect for a family meal.",
            image:
                "https://fearlessvegetarian.netlify.app/pavbhaji.jpg",
            url:
                "https://fearlessvegetarian.netlify.app/pavbhaji",
            author: "Fearless Vegetarian",
            prepTime: "PT20M",
            cookTime: "PT60M",
            totalTime: "PT1H20M",
            recipeYield: "4 servings",
            recipeCategory: "Main Course",
            recipeCuisine: "Indian",
            keywords:
                "pav bhaji, pav bhaji recipe, Mumbai pav bhaji, street style pav bhaji, Indian street food, vegetarian pav bhaji, homemade pav bhaji"
        };

        const recipeSchema = {
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: recipe.name,
            image: [recipe.image],
            description: recipe.description,
            url: recipe.url,

            author: {
                "@type": "Organization",
                name: recipe.author,
                url: "https://fearlessvegetarian.netlify.app/"
            },

            publisher: {
                "@type": "Organization",
                name: "Fearless Vegetarian",
                url: "https://fearlessvegetarian.netlify.app/"
            },

            recipeCategory: recipe.recipeCategory,
            recipeCuisine: recipe.recipeCuisine,
            recipeYield: recipe.recipeYield,
            keywords: recipe.keywords,

            prepTime: recipe.prepTime,
            cookTime: recipe.cookTime,
            totalTime: recipe.totalTime,

            recipeIngredient: [
                "2 cups potatoes, peeled and cubed",
                "1 whole red bell pepper, chopped",
                "1/2 cup carrots, peeled and chopped",
                "1.5 cups cauliflower florets",
                "1 cup tomatoes, chopped",
                "1 cup onion, chopped",
                "1 teaspoon red chili powder",
                "1/4 cup finely chopped raw onion, for serving",
                "1 green chili, chopped",
                "3 cloves garlic",
                "Fresh ginger",
                "1/4 teaspoon turmeric powder",
                "2 heaping tablespoons pav bhaji masala",
                "3 tablespoons dried fenugreek leaves (kasuri methi)",
                "Fresh coriander leaves",
                "Lemon juice",
                "Butter",
                "Salt to taste"
            ],

            recipeInstructions: [
                {
                    "@type": "HowToStep",
                    text: "Rinse, peel, and cube the potatoes."
                },
                {
                    "@type": "HowToStep",
                    text: "Clean the cauliflower florets and rinse the green peas. Add carrots if desired."
                },
                {
                    "@type": "HowToStep",
                    text: "Chop the onion, tomatoes, bell pepper, and green chili."
                },
                {
                    "@type": "HowToStep",
                    text: "Prepare ginger-garlic paste and set aside."
                },
                {
                    "@type": "HowToStep",
                    text: "Add potatoes, cauliflower, peas, and carrots to a pressure cooker or Instant Pot. Add about 1.5 cups of water."
                },
                {
                    "@type": "HowToStep",
                    text: "Cook the vegetables until completely tender, then mash them well."
                },
                {
                    "@type": "HowToStep",
                    text: "Heat a non-stick pot and sauté the chopped onion until translucent."
                },
                {
                    "@type": "HowToStep",
                    text: "Soak the chopped red bell pepper in hot water for about 10 minutes."
                },
                {
                    "@type": "HowToStep",
                    text: "Blend the red bell pepper with garlic and ginger to make a smooth puree."
                },
                {
                    "@type": "HowToStep",
                    text: "Add the green chili and red pepper puree to the pot. Cook until fragrant."
                },
                {
                    "@type": "HowToStep",
                    text: "Add chili powder, turmeric powder, and pav bhaji masala. Mix well and cook for about 3 minutes."
                },
                {
                    "@type": "HowToStep",
                    text: "Add the boiled and mashed vegetables. Add water as needed to reach your desired consistency."
                },
                {
                    "@type": "HowToStep",
                    text: "Simmer the bhaji and adjust salt, chili powder, and pav bhaji masala to taste."
                },
                {
                    "@type": "HowToStep",
                    text: "Add dried fenugreek leaves and chopped coriander. Turn off the heat and add lemon juice."
                },
                {
                    "@type": "HowToStep",
                    text: "Slice the pav horizontally, leaving one edge intact."
                },
                {
                    "@type": "HowToStep",
                    text: "Heat butter on a tawa and toast the pav until lightly crisp and golden."
                },
                {
                    "@type": "HowToStep",
                    text: "Serve the hot pav bhaji with chopped onions, lemon wedges, coriander, and additional butter if desired."
                }
            ],

            video: {
                "@type": "VideoObject",
                name: "Pav Bhaji Preparation Video",
                description:
                    "Learn how to make delicious Mumbai-style Pav Bhaji at home.",
                thumbnailUrl:
                    "https://img.youtube.com/vi/XDmBE6aW3ZU/maxresdefault.jpg",
                uploadDate: "2026-01-01",
                contentUrl:
                    "https://www.youtube.com/watch?v=XDmBE6aW3ZU",
                embedUrl:
                    "https://www.youtube.com/embed/XDmBE6aW3ZU"
            }
        };

        return (
            <div className="recipe-page">

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Pav Bhaji Recipe | Mumbai Street-Style Pav Bhaji | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href={recipe.url}
                    />

                    <meta
                        name="description"
                        content={recipe.description}
                    />

                    <meta
                        name="keywords"
                        content={recipe.keywords}
                    />

                    {/* Open Graph */}
                    <meta
                        property="og:title"
                        content="Pav Bhaji Recipe | Mumbai Street-Style Pav Bhaji"
                    />

                    <meta
                        property="og:description"
                        content={recipe.description}
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content={recipe.url}
                    />

                    <meta
                        property="og:image"
                        content={recipe.image}
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />

                    {/* Recipe Schema */}
                    <script type="application/ld+json">
                        {JSON.stringify(recipeSchema)}
                    </script>
                </Helmet>

                <article>

                    <h1>
                        Pav Bhaji Recipe – Mumbai-Style Street Food
                    </h1>

                    <p className="lead">
                        Make delicious Mumbai-style Pav Bhaji at home with
                        flavorful mashed vegetables, aromatic pav bhaji masala,
                        butter, and toasted pav.
                    </p>

                    <Row className="cooktimerow">
                        <Col>
                            <span
                                className="material-symbols-outlined"
                                aria-hidden="true"
                            >
                                restaurant_menu
                            </span>{" "}
                            Yields: 4 Servings
                        </Col>
                    </Row>

                    <Row className="cooktimerow">
                        <Col>
                            <FontAwesomeIcon icon={faClock} />{" "}
                            Cooking Time: 60 minutes
                        </Col>
                    </Row>

                    <div className="ingredients">
                        <h3>Ingredients</h3>


                        <ul className="ingredient-list">
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                2 cups potatoes, peeled and cubed</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1 whole red bell pepper, chopped</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1/2 cup carrots, peeled and chopped</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1.5 cups cauliflower florets</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1 cup tomatoes, chopped</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1 cup onion, chopped</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1 teaspoon red chili powder</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1/4 cup finely chopped raw onion for serving
                            </li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1 green chili, chopped</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                3 cloves garlic</li>
                            <li>
                                <FontAwesomeIcon icon={faBowlFood} />
                                Fresh ginger</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                1/4 teaspoon turmeric powder</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                2 heaping tablespoons pav bhaji masala</li>
                            <li>
                                <FontAwesomeIcon icon={faBowlFood} />
                                1 teaspoon dried fenugreek leaves (kasuri methi)
                            </li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                Fresh coriander leaves</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                Lemon juice</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                Butter</li>
                            <li><FontAwesomeIcon icon={faBowlFood} />
                                Salt to taste</li>
                        </ul>
                    </div>

                    <div className="ingredients">
                        <h3>Instructions</h3>

                        <ol>
                            <li>
                                Rinse, peel, and cube the potatoes.
                            </li>

                            <li>
                                Clean the cauliflower florets and rinse the green
                                peas. Add carrots if desired.
                            </li>

                            <li>
                                Chop the onion, tomatoes, bell pepper, and green
                                chili.
                            </li>

                            <li>
                                Prepare ginger-garlic paste and set aside.
                            </li>

                            <li>
                                Add potatoes, cauliflower, peas, and carrots to a
                                pressure cooker or Instant Pot. Add about 1.5 cups
                                of water.
                            </li>

                            <li>
                                Cook the vegetables until completely tender, then
                                mash them well.
                            </li>

                            <li>
                                Heat a non-stick pot and sauté the chopped onion
                                until translucent.
                            </li>

                            <li>
                                Soak the chopped red bell pepper in hot water for
                                about 10 minutes.
                            </li>

                            <li>
                                Blend the red bell pepper with garlic and ginger
                                until smooth.
                            </li>

                            <li>
                                Add the green chili and red pepper puree to the
                                pot. Cook until fragrant.
                            </li>

                            <li>
                                Add chili powder, turmeric powder, and pav bhaji
                                masala. Mix well and cook for about 3 minutes.
                            </li>

                            <li>
                                Add the boiled and mashed vegetables. Add water as
                                needed to reach your desired consistency.
                            </li>

                            <li>
                                Simmer the bhaji and adjust salt, chili powder, and
                                pav bhaji masala to taste.
                            </li>

                            <li>
                                Add dried fenugreek leaves and chopped coriander.
                                Turn off the heat and add lemon juice.
                            </li>

                            <li>
                                Slice the pav horizontally, leaving one edge intact.
                            </li>

                            <li>
                                Heat butter on a tawa and toast the pav until
                                lightly crisp and golden.
                            </li>

                            <li>
                                Serve hot with chopped onions, lemon wedges,
                                coriander, and additional butter if desired.
                            </li>

                        </ol>
                    </div>

                    <section>
                        <h2>Pav Bhaji</h2>

                        <Image
                            src="/pavbhaji.jpg"
                            alt="Mumbai-style homemade Pav Bhaji served with toasted pav"
                            fluid
                            rounded
                            loading="lazy"
                            className="recipe-image"
                        />
                    </section>

                    <section>
                        <h2>Pav Bhaji Preparation Video</h2>

                        <div className="youtube-container">
                            <YouTube
                                videoId="XDmBE6aW3ZU"
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

                    {/* Related Vegetarian Recipes */}
                    <section
                        className="related-recipes"
                        style={{ marginTop: "40px" }}
                    >
                        <h2>Related Vegetarian Recipes</h2>

                        <p>
                            If you enjoyed this Mumbai-style Pav Bhaji, you may also like
                            these delicious vegetarian recipes:
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
                                            className="related-recipe-image"
                                        />

                                        <h3>Aloo Gobi</h3>

                                        <p>
                                            A classic Indian vegetarian dish made with potatoes,
                                            cauliflower, and aromatic spices.
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
                                            alt="Dal Makhani"
                                            fluid
                                            rounded
                                            className="related-recipe-image"
                                        />

                                        <h3>Dal Makhani</h3>

                                        <p>
                                            A rich and creamy Punjabi lentil curry made with
                                            black lentils, kidney beans, and aromatic spices.
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
                                            alt="Saag Paneer"
                                            fluid
                                            rounded
                                            className="related-recipe-image"
                                        />

                                        <h3>Saag Paneer</h3>

                                        <p>
                                            A flavorful North Indian curry combining creamy
                                            spinach with soft paneer and aromatic spices.
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
                                            alt="Besan Curry"
                                            fluid
                                            rounded
                                            className="related-recipe-image"
                                        />

                                        <h3>Besan Curry</h3>

                                        <p>
                                            A comforting vegetarian curry made with chickpea
                                            flour, yogurt, and traditional Indian spices.
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

export default Pavbhaji;