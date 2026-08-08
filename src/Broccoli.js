import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCarrot, faLeaf } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import RecipeSchema from "./RecipeSchema";

class Broccoli extends Component {
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
            <div className="recipe-page">
                {/* Recipe Schema */}
                <RecipeSchema
                    name="Creamy Broccoli Soup"
                    description="A creamy and comforting broccoli soup made with fresh broccoli, potatoes, onions, garlic, milk, and simple seasonings. Perfect for a healthy lunch or light dinner."
                    image="https://fearlessvegetarian.netlify.app/broccoli.jpg"
                    url="https://fearlessvegetarian.netlify.app/broccoli"
                    prepTime="PT15M"
                    cookTime="PT30M"
                    totalTime="PT45M"
                    recipeYield="2 Servings"
                    ingredients={[
                        "1 large head of broccoli, chopped into florets",
                        "1 onion, diced",
                        "1 tablespoon minced garlic",
                        "1 medium potato, peeled and diced",
                        "1 cup milk or dairy-free alternative",
                        "2 cups water",
                        "Salt to taste",
                        "Black pepper to taste",
                        "Corn flour",
                        "Butter",
                    ]}
                />

                {/* SEO */}
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Creamy Broccoli Soup Recipe | Healthy Homemade Soup |
                        Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/broccoli"
                    />

                    <meta
                        name="description"
                        content="Make creamy homemade broccoli soup with fresh broccoli, potatoes, onions, garlic, milk, and simple seasonings. This easy vegetarian soup is comforting, flavorful, and perfect for lunch or a light dinner."
                    />

                    <meta
                        name="keywords"
                        content="broccoli soup, creamy broccoli soup, vegetarian soup, healthy soup recipe, homemade broccoli soup, broccoli potato soup, easy vegetarian soup, healthy comfort food, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Creamy Broccoli Soup Recipe | Healthy Homemade Soup"
                    />

                    <meta property="og:type" content="article" />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/broccoli"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/broccoli.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Make creamy homemade broccoli soup with fresh broccoli, potatoes, onions, garlic, milk, and simple seasonings. An easy and comforting vegetarian soup recipe."
                    />

                    <meta
                        property="og:site_name"
                        content="Fearless Vegetarian"
                    />
                </Helmet>

                <article>
                    {/* Recipe Title */}
                    <h1>Creamy Broccoli Soup Recipe</h1>

                    {/* Recipe Description */}
                    <p className="lead recipe-description">
                        Make delicious creamy broccoli soup at home with fresh
                        broccoli, potatoes, onions, garlic, milk, and simple
                        seasonings. This comforting vegetarian soup is perfect
                        for a healthy lunch or light dinner.
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
                            <FontAwesomeIcon icon={faClock} />{" "}
                            Cooking Time: 30 minutes
                        </Col>
                    </Row>

                    {/* Ingredients */}
                    <section className="ingredients">
                        <h2>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-heading-icon"
                            />{" "}
                            Ingredients
                        </h2>

                        <ul className="ingredient-list">
                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 large head of broccoli, chopped into
                                    florets
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 onion, diced</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>1 tablespoon minced garlic</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 medium potato, peeled and diced
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>
                                    1 cup milk or dairy-free alternative
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>2 cups water</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>Salt to taste</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>Black pepper to taste</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>Corn flour</span>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faCarrot}
                                    className="ingredient-icon"
                                />
                                <span>Butter</span>
                            </li>
                        </ul>
                    </section>

                    {/* Instructions */}
                    <section className="instructions">
                        <h2>
                            <FontAwesomeIcon
                                icon={faCarrot}
                                className="ingredient-heading-icon"
                            />{" "}
                            Instructions
                        </h2>

                        <h3>Prepare the White Sauce</h3>

                        <ol className="instruction-list">
                            <li>
                                In a saucepan, combine the milk, corn flour,
                                and butter. Turn on the heat and stir
                                continuously to prevent lumps from forming.
                            </li>

                            <li>
                                Once the mixture begins to thicken, continue
                                stirring for another 2 minutes. Remove from the
                                heat and set aside.
                            </li>
                        </ol>

                        <h3>Prepare the Broccoli Soup</h3>

                        <ol className="instruction-list">
                            <li>
                                Wash and chop the broccoli into florets. Peel
                                and dice the potato, finely chop the onion, and
                                mince the garlic.
                            </li>

                            <li>
                                In a large pot, combine the onion, garlic,
                                potato, and 2 cups of water. Bring to a boil
                                and cook for about 10 minutes.
                            </li>

                            <li>
                                Add the broccoli florets and stir gently. Add
                                more water if needed.
                            </li>

                            <li>
                                Cover the pot and cook for 4–5 minutes, or until
                                the broccoli is tender.
                            </li>

                            <li>
                                Turn off the heat and allow the vegetables to
                                cool for 10–15 minutes.
                            </li>

                            <li>
                                Using a blender, blend the vegetables and
                                cooking liquid into a smooth puree.
                            </li>

                            <li>
                                Return the puree to the pot and stir in the
                                prepared white sauce.
                            </li>

                            <li>
                                Mix well and bring the soup to a gentle boil.
                            </li>

                            <li>
                                Season with salt and black pepper to taste.
                            </li>

                            <li>
                                Serve hot and enjoy your creamy homemade
                                broccoli soup.
                            </li>
                        </ol>
                    </section>

                    {/* Final Product */}
                    <section className="final-product">
                        <h2>Final Product</h2>

                        <Image
                            src="/broccoli.jpg"
                            alt="Creamy broccoli soup made with fresh broccoli, potatoes, garlic, and milk"
                            thumbnail
                            rounded
                            fluid
                            loading="lazy"
                            className="final-product-image"
                        />
                    </section>

                    {/* Preparation Video */}
                    <section className="recipe-video">
                        <h2>Creamy Broccoli Soup Preparation Video</h2>

                        <MediaQuery maxWidth={767}>
                            <YouTube
                                videoId="64gHB7n5cBw"
                                opts={optsMobile}
                            />
                        </MediaQuery>

                        <MediaQuery minWidth={768}>
                            <YouTube
                                videoId="64gHB7n5cBw"
                                opts={optsDesktop}
                            />
                        </MediaQuery>
                    </section>

                    {/* Related Recipes */}
                    <section
                        className="related-recipes"
                        style={{ marginTop: "40px" }}
                    >
                        <h2>Related Vegetarian Recipes</h2>

                        <p>
                            If you enjoyed this creamy Broccoli Soup, you may
                            also enjoy these healthy vegetarian recipes:
                        </p>

                        <ul className="related-recipe-list">
                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/lentil"
                                    className="recipe-link"
                                >
                                    Hearty Lentil Soup
                                </Link>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/quinoamoongdal"
                                    className="recipe-link"
                                >
                                    Quinoa Moong Dal Khichdi
                                </Link>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/couscousbalsamic"
                                    className="recipe-link"
                                >
                                    Middle Eastern Couscous Salad
                                </Link>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/mushroom"
                                    className="recipe-link"
                                >
                                    Punjabi Mushroom Masala Curry
                                </Link>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/aloogobi"
                                    className="recipe-link"
                                >
                                    Aloo Gobi (Potato Cauliflower Curry)
                                </Link>
                            </li>

                            <li>
                                <FontAwesomeIcon
                                    icon={faLeaf}
                                    className="related-recipe-icon"
                                />

                                <Link
                                    to="/yogurt"
                                    className="recipe-link"
                                >
                                    Homemade Instant Pot Yogurt
                                </Link>
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        );
    }
}

export default Broccoli;