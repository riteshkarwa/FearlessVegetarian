import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBowlFood, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import MediaQuery from "react-responsive";

class AlooTamatarPyaz extends Component {
    render() {
        const optsDesktop = {
            height: "800",
            width: "450",
        };

        const optsMobile = {
            height: "550",
            width: "309",
        };

        return (
            <div className="recipe-page">
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Aloo Tamatar Pyaz Ki Sabji | Easy Potato Tomato Onion Curry |
                        Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/alootamatarpyaz"
                    />

                    <meta
                        name="description"
                        content="Aloo Tamatar Pyaz Ki Sabji is a simple and flavorful Indian potato, tomato, and onion curry cooked in a delicious spiced gravy. An easy vegetarian comfort food for everyday meals."
                    />

                    <meta
                        name="keywords"
                        content="aloo tamatar pyaz ki sabji, aloo tamatar pyaz, aloo tamatar sabji, potato tomato onion curry, aloo curry, Indian potato curry, gravy sabji, rasawali sabji, Indian vegetarian recipe, easy Indian curry, vegetarian curry, vegan curry, everyday Indian food, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Aloo Tamatar Pyaz Ki Sabji | Easy Potato Tomato Onion Curry"
                    />

                    <meta property="og:type" content="website" />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/alootamatarpyaz"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/alootamatarpyaz.jpg"
                    />

                    <meta
                        property="og:description"
                        content="A simple and flavorful Aloo Tamatar Pyaz Ki Sabji made with potatoes, tomatoes, onions, and aromatic Indian spices in a delicious gravy."
                    />

                    <meta property="og:type" content="article" />
                    <meta name="robots" content="index, follow" />
                </Helmet>

                {/* Recipe Introduction */}
                <section className="recipe-intro">
                    <h1>Aloo Tamatar Pyaz Ki Sabji</h1>

                    <p>
                        Aloo Tamatar Pyaz Ki Sabji is a comforting North Indian-style
                        potato curry made with potatoes, tomatoes, onions, and aromatic
                        Indian spices. This simple rasawali sabji has a flavorful,
                        slightly tangy gravy that pairs beautifully with roti, paratha,
                        puri, or steamed rice.
                    </p>
                </section>

                {/* Recipe Information */}
                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Prep Time: 15 Minutes
                    </Col>

                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 30 Minutes
                    </Col>

                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Total Time: 45 Minutes
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>{" "}
                        Yields: 4 Servings
                    </Col>
                </Row>

                {/* Recipe Highlights */}
                <section className="recipe-highlights">
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-orange"
                            />
                            Easy everyday Indian curry
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-green"
                            />
                            Made with simple ingredients
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-aqua"
                            />
                            Flavorful and comforting
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-purple"
                            />
                            Perfect with roti or rice
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-red"
                            />
                            Naturally vegetarian
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="highlight-icon icon-teal"
                            />
                            Vegan-friendly
                        </li>
                    </ul>
                </section>

                {/* Ingredients */}
                <section className="ingredients">
                    <h3>Ingredients</h3>

                    <ul className="ingredient-list">
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />4 medium potatoes, peeled and cut into medium pieces</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 medium tomatoes, finely chopped</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 large onion, finely chopped</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 tablespoons vegetable oil</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon cumin seeds</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/4 teaspoon asafoetida (hing)</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon grated ginger</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 green chilies, finely chopped</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/2 teaspoon turmeric powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon red chili powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon coriander powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/2 teaspoon cumin powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/2 teaspoon garam masala</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/2 teaspoon amchur powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Salt to taste</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 1/2 cups water</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 tablespoons chopped fresh coriander leaves</li>
                    </ul>
                </section>

                {/* Instructions */}
                <section className="instructions">
                    <h3>Instructions</h3>

                    <ol>
                        <li>
                            Peel the potatoes and cut them into medium-sized pieces. Rinse
                            them well and set aside.
                        </li>

                        <li>
                            Heat 2 tablespoons of vegetable oil in a heavy-bottomed pan over
                            medium heat.
                        </li>

                        <li>
                            Add cumin seeds and let them crackle for a few seconds.
                        </li>

                        <li>
                            Add a small pinch of asafoetida and immediately add the chopped
                            onions.
                        </li>

                        <li>
                            Sauté the onions over medium heat until they become soft and
                            lightly golden.
                        </li>

                        <li>
                            Add grated ginger and chopped green chilies. Sauté for another
                            minute.
                        </li>

                        <li>
                            Add the chopped tomatoes and cook until they become soft and
                            begin to break down.
                        </li>

                        <li>
                            Add turmeric powder, red chili powder, coriander powder, cumin
                            powder, and salt.
                        </li>

                        <li>
                            Mix the spices well with the tomato and onion mixture. Cook until
                            the tomatoes become soft and the oil begins to separate from the
                            masala.
                        </li>

                        <li>
                            Add the chopped potatoes and mix well so that the potatoes are
                            coated evenly with the masala.
                        </li>

                        <li>
                            Add approximately 2 1/2 cups of water and mix well.
                        </li>

                        <li>
                            Bring the curry to a boil over medium-high heat.
                        </li>

                        <li>
                            Reduce the heat to medium-low, cover the pan, and cook until the
                            potatoes become tender.
                        </li>

                        <li>
                            Stir occasionally and add a little more water if needed to
                            maintain a delicious gravy consistency.
                        </li>

                        <li>
                            Once the potatoes are completely cooked, lightly mash a few
                            pieces against the side of the pan. This helps naturally thicken
                            the gravy.
                        </li>

                        <li>
                            Add garam masala and amchur powder. Mix gently and cook for
                            another 2 to 3 minutes.
                        </li>

                        <li>
                            Taste the gravy and adjust the salt and spices as needed.
                        </li>

                        <li>
                            Turn off the heat and garnish with freshly chopped coriander
                            leaves.
                        </li>

                        <li>
                            Serve hot with roti, paratha, puri, or steamed rice.
                        </li>
                    </ol>
                </section>

                {/* Final Product */}

                <h2>Final Product</h2>
                <Image
                    src="/alootamatarpyaz.jpg"
                    alt="Homemade Moong Dal Khichdi served in a bowl with rice, lentils, vegetables, and Indian spices"
                    fluid
                    rounded
                    thumbnail
                    loading="lazy"
                    className="recipe-image"
                />

                {/* Preparation Video */}
                <section className="recipe-video">
                    <h2>Aloo Tamatar Pyaz Ki Sabji Preparation Video</h2>

                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="okyWt_bGJI0" opts={optsMobile} />
                    </MediaQuery>

                    <MediaQuery minWidth={768}>
                        <YouTube videoId="okyWt_bGJI0" opts={optsDesktop} />
                    </MediaQuery>
                </section>

                {/* You May Also Like */}
                <section className="you-may-also-like">
                    <h2>You May Also Like</h2>

                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <div className="recipe-card">
                                <Image
                                    src="/pavbhaji.jpg"
                                    alt="Mumbai-style Pav Bhaji"
                                    thumbnail
                                    rounded
                                    fluid
                                />

                                <h3>Pav Bhaji</h3>

                                <a href="/pavbhaji" className="btn btn-primary">
                                    View Recipe
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={4}>
                            <div className="recipe-card">
                                <Image
                                    src="/upma.jpg"
                                    alt="South Indian Upma"
                                    thumbnail
                                    rounded
                                    fluid
                                />

                                <h3>Upma</h3>

                                <a href="/upma" className="btn btn-primary">
                                    View Recipe
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={4}>
                            <div className="recipe-card">
                                <Image
                                    src="/aloogobi.jpg"
                                    alt="Aloo Gobi"
                                    thumbnail
                                    rounded
                                    fluid
                                />

                                <h3>Aloo Gobi</h3>

                                <a href="/aloogobi" className="btn btn-primary">
                                    View Recipe
                                </a>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default AlooTamatarPyaz;