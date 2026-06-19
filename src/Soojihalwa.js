import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import RecipeSchema from "./RecipeSchema";

class SoojiHalwa extends Component {
    render() {
        const optsDesktop = { height: "800", width: "1000" };
        const optsMobile = { height: "550", width: "325" };

        const ingredients = [
            "1 cup sooji (semolina/rava)",
            "1/2 cup ghee",
            "1 cup sugar",
            "3 cups water",
            "1/4 tsp cardamom powder",
            "10–12 cashews",
            "10–12 raisins",
            "Pinch of saffron (optional)"
        ];

        return (
            <div>
                {/* SEO */}
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>Sooji Halwa Recipe (Rava Sheera) – Soft & Rich Indian Dessert</title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/soojihalwa"
                    />

                    {/* Primary SEO */}
                    <meta
                        name="description"
                        content="Make soft and aromatic Sooji Halwa (Rava Sheera) at home with semolina, ghee, sugar, and cardamom. A quick and comforting Indian dessert perfect for festivals, prasad, or sweet cravings."
                    />

                    <meta
                        name="keywords"
                        content="sooji halwa recipe, rava sheera, semolina halwa, indian dessert, halwa recipe, easy sooji halwa, traditional indian sweets, festival sweets, prasad recipe, ghee halwa"
                    />

                    <meta name="author" content="Fearless Vegetarian" />

                    {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content="Sooji Halwa (Rava Sheera) – Soft & Delicious Indian Dessert"
                    />
                    <meta
                        property="og:description"
                        content="A quick and traditional Indian Sooji Halwa made with roasted semolina, ghee, sugar, and cardamom. Perfect festive sweet and comfort dessert."
                    />
                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa"
                    />
                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    />
                    <meta property="og:site_name" content="Fearless Vegetarian" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Sooji Halwa Recipe – Easy Indian Dessert"
                    />
                    <meta
                        name="twitter:description"
                        content="Soft, rich and aromatic Sooji Halwa made with semolina, ghee, sugar and cardamom."
                    />
                    <meta
                        name="twitter:image"
                        content="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    />
                </Helmet>

                {/* Recipe Schema */}
                <RecipeSchema
                    name="Sooji Halwa"
                    description="Classic Indian dessert made with semolina, ghee, sugar, and cardamom, garnished with cashews and raisins."
                    image="https://fearlessvegetarian.netlify.app/soojihalwa.jpg"
                    url="https://fearlessvegetarian.netlify.app/soojihalwa"
                    prepTime="PT5M"
                    cookTime="PT15M"
                    totalTime="PT20M"
                    recipeYield="4 Servings"
                    ingredients={ingredients}
                />

                {/* Title */}
                <h1>
                    Sooji Halwa is a traditional Indian dessert made with roasted semolina,
                    ghee, sugar, and cardamom. Soft, aromatic, and comforting.
                </h1>

                {/* Meta */}
                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">restaurant_menu</span>
                        {" "}Yields: 4 Servings
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 20 minutes
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

                <h2>Roasting Semolina</h2>
                <ol>
                    <li>Heat ghee in a pan and add cashews and raisins. Fry until golden.</li>
                    <li>Remove and add semolina (sooji) to the same pan.</li>
                    <li>Roast on low flame until aromatic and light golden.</li>
                </ol>

                <h2>Making Halwa</h2>
                <ol>
                    <li>In another pan, boil water and sugar together.</li>
                    <li>Add cardamom powder and saffron.</li>
                    <li>Slowly pour boiling water into roasted sooji while stirring.</li>
                    <li>Mix continuously to avoid lumps.</li>
                    <li>Cook until halwa thickens and leaves the pan.</li>
                </ol>

                <h2>Final Touch</h2>
                <ol>
                    <li>Add fried cashews and raisins.</li>
                    <li>Mix well and serve hot.</li>
                </ol>

                {/* Image */}
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image
                        src="/soojihalwa.jpg"
                        alt="Warm Sooji Halwa with cashews and raisins"
                        thumbnail
                        rounded
                        fluid
                    />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image
                        src="/soojihalwa.jpg"
                        alt="Warm Sooji Halwa with cashews and raisins"
                        thumbnail
                        rounded
                        fluid
                        width="60%"
                        height="60%"
                    />
                </MediaQuery>

                {/* Video */}
                <h2>Sooji Halwa Preparation Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="HRUICw6oGsM" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="HRUICw6oGsM" opts={optsDesktop} />
                </MediaQuery>

                {/* Related Recipes */}
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/curdrice" className="recipe-link">
                                Curd Rice
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/dhokla" className="recipe-link">
                                Khaman Dhokla
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/poha" className="recipe-link">
                                Poha Breakfast
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/masalasandwich" className="recipe-link">
                                Bombay Masala Sandwich
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SoojiHalwa;