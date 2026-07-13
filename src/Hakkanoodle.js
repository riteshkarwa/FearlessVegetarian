import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Hakkanoodle extends Component {
    render() {
        const optsDesktop = {
            height: '800',
            width: '1000',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
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
                    Hakka Noodles is a popular Indo-Chinese dish made with stir-fried
                    noodles, crunchy vegetables, and bold sauces.
                </h1>
                <p>
                    This quick and flavorful street-style recipe combines perfectly cooked noodles
                    with garlic, ginger, soy sauce, and fresh vegetables like cabbage, carrots,
                    and capsicum. It’s a versatile dish that can be enjoyed as a light lunch,
                    dinner, or even a spicy evening snack.
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
                <div className="ingredients">Ingredients</div>
                <ol>
                    {ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>

                {/* Instructions */}
                <div className="ingredients">Instructions</div>

                <h2>Cook Noodles</h2>
                <ol>
                    <li>Boil noodles as per package instructions.</li>
                    <li>Drain and toss with a little oil to prevent sticking.</li>
                </ol>

                <h2>Stir Fry Vegetables</h2>
                <ol>
                    <li>Heat oil in a wok on high flame.</li>
                    <li>Add garlic, ginger, chili, and spring onions.</li>
                    <li>Add all vegetables and stir fry quickly.</li>
                </ol>

                <h2>Add Sauces</h2>
                <ol>
                    <li>Add soy sauce, chili sauce, tomato sauce, salt, and pepper.</li>
                    <li>Mix well on high heat.</li>
                </ol>

                <h2>Combine</h2>
                <ol>
                    <li>Add boiled noodles and vinegar.</li>
                    <li>Toss everything on high flame until well combined.</li>
                    <li>Garnish with spring onions and serve hot.</li>
                </ol>

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
                <div>
                    <h2>Hakka Noodle Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="hD3aiKO9DVU" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="hD3aiKO9DVU" opts={optsDesktop} />
                    </MediaQuery>
                </div>

                {/* Related Recipes */}
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Recipes</h2>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/couscousblackbeanbowl" className="recipe-link">
                                Couscous Black Bean Bowl
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
                                Mushroom Masala Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/poha" className="recipe-link">
                                Poha Breakfast
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Hakkanoodle;