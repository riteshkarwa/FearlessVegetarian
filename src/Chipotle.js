import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Chipotle extends Component {
    render() {
        const recipeSchema = {
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": "Homemade Chipotle Bowl",
            "description":
                "Easy homemade Chipotle-style bowl with rice, roasted vegetables, guacamole, beans, salsa, and cheese. A healthy and flavorful Mexican-inspired meal.",
            "image": "https://fearlessvegetarian.netlify.app/chipotle.jpg",
            "prepTime": "PT20M",
            "cookTime": "PT40M",
            "totalTime": "PT1H",
            "recipeYield": "4 servings",
            "recipeCategory": "Main Course",
            "recipeCuisine": "Mexican-inspired",
            "recipeIngredient": [
                "Avocados",
                "Tomatoes",
                "Onions",
                "Red bell peppers",
                "Yellow bell peppers",
                "Rice",
                "Pinto beans",
                "Salsa",
                "Sour cream",
                "Cheese blend",
                "Lettuce"
            ]
        };

        return (
            <div>
                {/* ✅ SEO */}
                <Helmet>
                    <title>Homemade Chipotle Bowl Recipe – Easy & Healthy Burrito Bowl</title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/chipotle"
                    />

                    <meta
                        name="description"
                        content="Make a delicious homemade Chipotle bowl with rice, roasted vegetables, guacamole, beans, and salsa. Healthy, easy, and better than restaurant style."
                    />

                    <meta
                        name="keywords"
                        content="chipotle bowl, burrito bowl recipe, mexican bowl, vegetarian chipotle bowl, healthy rice bowl, guacamole bowl, easy dinner recipe"
                    />

                    <meta property="og:title" content="Homemade Chipotle Bowl Recipe" />
                    <meta
                        property="og:description"
                        content="Healthy and flavorful Chipotle-style bowl made at home with fresh ingredients."
                    />
                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/chipotle.jpg"
                    />
                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/chipotle"
                    />

                    {/* ✅ Recipe Schema */}
                    <script type="application/ld+json">
                        {JSON.stringify(recipeSchema)}
                    </script>
                </Helmet>

                {/* ✅ H1 + Paragraph */}
                <h1>Easy Homemade Chipotle Bowl – Better Than Restaurant Style</h1>

                <p>
                    This homemade Chipotle bowl is packed with roasted vegetables, creamy
                    guacamole, seasoned rice, beans, and fresh toppings. A healthy,
                    customizable, and flavor-packed meal perfect for lunch or dinner.
                </p>

                {/* ✅ Cook Time + Yield */}
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
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 60 minutes
                    </Col>
                </Row>

                {/* ✅ Ingredients */}
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>5 Whole Avocados</li>
                    <li>2 Tomatoes</li>
                    <li>2 Onions</li>
                    <li>2 Red & 2 Yellow Bell Peppers</li>
                    <li>Cooked Rice (1 pot)</li>
                    <li>Sour Cream</li>
                    <li>Mexican 4 Cheese Blend</li>
                    <li>Mild Salsa</li>
                    <li>Pinto Beans (1 can)</li>
                    <li>Iceberg Lettuce</li>
                </ol>

                {/* ✅ Instructions */}
                <div className="ingredients">Instruction</div>

                <h2>Roasting Peppers and Onions</h2>
                <ol>
                    <li>Preheat oven to 400°F (200°C).</li>
                    <li>Slice peppers and onions evenly.</li>
                    <li>Toss with oil and fajita seasoning.</li>
                    <li>Roast for 20 minutes, toss, then roast another 10 minutes.</li>
                </ol>

                <h2>Guacamole Mix</h2>
                <ol>
                    <li>Combine mashed avocados, onions, tomatoes, lime juice, salt, and salsa.</li>
                    <li>Mix until smooth and creamy.</li>
                </ol>

                <h2>Rice</h2>
                <ol>
                    <li>Cook 2 cups rice with 3 cups water in rice cooker.</li>
                </ol>

                <h2>Final Assembly</h2>
                <ol>
                    <li>Add rice, beans, guacamole, roasted veggies, lettuce, sour cream, and cheese to a bowl.</li>
                    <li>Mix gently and serve fresh.</li>
                </ol>

                {/* ✅ Images */}
                <h2>Final Dish</h2>
                <Image src="/chipotle.jpg" thumbnail rounded fluid />

                <h2>Plated Bowl</h2>
                <Image src="/chipotle_1.jpg" thumbnail rounded fluid />

                {/* ✅ Related Links */}
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/couscousblackbeanbowl" className="recipe-link">
                                Couscous Black Bean Bowl
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils}  className="bullet-icon"/>{" "}
                            <Link to="/quinoamoongdal" className="recipe-link">Quinoa Moong Dal Khichdi</Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon"/>{" "}
                            <Link to="/dhokla" className="recipe-link">Khaman Dhokla</Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />{" "}
                            <Link to="/couscousbalsamic" className="recipe-link">Couscous Salad</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Chipotle;