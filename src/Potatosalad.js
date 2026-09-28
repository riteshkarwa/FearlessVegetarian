import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class Potatosalad extends Component {
    render() {
        const optsDesktop = {
            height: '800',
            width: '1000',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Chukauni (Nepali Yogurt & Potato Salad) – A Refreshing Himalayan Favorite | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potatosalad" />
                    <meta
                        name="description"
                        content="Discover how to make Chukauni, a classic Nepali yogurt and potato salad. Creamy, tangy, and perfectly spiced, this easy-to-follow recipe is a must-try for authentic Nepali flavors."
                    />
                    <meta
                        name="keywords"
                        content="Chukauni, Nepali potato salad, Nepali yogurt salad, Nepali recipes, traditional Chukauni recipe, potato salad recipe, yogurt potato salad, 
                    easy Nepali recipes, authentic Nepali salad, Chukauni salad, 
                    recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Chukauni—a traditional Nepali yogurt and potato salad" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/potatosalad" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/potatosalad.png" />
                    <meta property="og:description" content="Discover how to make Chukauni, a classic Nepali yogurt and potato salad. Creamy, tangy, and perfectly spiced, this easy-to-follow recipe is a must-try for authentic Nepali flavors." />
                </Helmet>
                <h1>Chukauni—a traditional Nepali yogurt and potato salad</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients"><h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />3 medium potatoes, boiled and diced</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 cup plain yogurt </li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 small onion, finely chopped</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1–2 green chilies, finely chopped (optional)</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 tsp mustard seeds</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 tsp cumin seeds</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 tsp turmeric powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1–2 tbsp oil</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Salt as per taste</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 tsp red chili powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1–2 tbsp oil</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Fresh cilantro, chopped (for garnish)</li>
                    </ul>
                </div>
                <div className="ingredients"><h3>Instructions</h3>
                    <ol>
                        <li>Prepare potatoes: Boil potatoes until tender, peel, and dice them. Set aside.</li>
                        <li>
                            Temper spices: Heat oil in a pan. Add mustard seeds and cumin seeds. Once they start to crackle,
                            add turmeric and chili powder. Stir quickly.
                        </li>
                        <li>Mix with vegetables: Add chopped onions and green chilies. Sauté for 2–3 minutes.</li>
                        <li>Combine: In a bowl, mix the boiled potatoes with the yogurt. Add the sautéed spice mixture and salt.
                            Mix gently until everything is well combined.</li>
                        <li>Garnish & Serve: Top with chopped cilantro. Serve chilled or at room temperature as a side dish.</li>
                    </ol>
                </div>
                <h2>Final Product</h2>
                <Image
                    src="/potatosalad.png"
                    alt="Chukauni Recipe – Traditional Nepali Yogurt & Potato Salad"
                    fluid
                    rounded
                    thumbnail
                    loading="lazy"
                    className="recipe-image"
                />
                <div>
                    <h2>Chukauni—a traditional Nepali yogurt and potato salad Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="8vA5-LZjNvg" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="8vA5-LZjNvg" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <section className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Chukauni (Nepali Yogurt & Potato Salad),
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
                                        A classic Indian potato and cauliflower curry
                                        made with aromatic spices.
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
                                    />

                                    <h3>
                                        Dal Makhani
                                    </h3>

                                    <p>
                                        A creamy and comforting Indian lentil dish
                                        cooked with aromatic spices.
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
                                    />

                                    <h3>
                                        Saag Paneer
                                    </h3>

                                    <p>
                                        Tender paneer cooked with leafy greens and
                                        flavorful Indian spices.
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
                                    />

                                    <h3>
                                        Besan Curry
                                    </h3>

                                    <p>
                                        A flavorful Indian curry made with gram flour,
                                        yogurt, and aromatic spices.
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

export default Potatosalad;