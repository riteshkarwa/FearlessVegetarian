import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class Onion extends Component {
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
                <RecipeSchema
                    name="Easy Onion Curry (Pyaz Masala)"
                    description="A quick and flavorful Indian onion curry made with caramelized onions, cumin seeds, mustard seeds, Indian spices, and dried fenugreek leaves."
                    image="https://fearlessvegetarian.netlify.app/onion.jpg"
                    url="https://fearlessvegetarian.netlify.app/onion"
                    prepTime="PT10M"
                    cookTime="PT50M"
                    totalTime="PT1H"
                    recipeYield="2 Servings"
                    ingredients={[
                        "1 tablespoon cooking oil",
                        "2 medium onions",
                        "1/2 teaspoon cumin seeds",
                        "1/2 teaspoon mustard seeds",
                        "1 teaspoon coriander powder",
                        "1/4 teaspoon asafoetida",
                        "1/2 teaspoon red chili powder",
                        "1/2 teaspoon turmeric powder",
                        "1/2 tablespoon garam masala",
                        "1/2 teaspoon curry powder",
                        "1/2 teaspoon kitchen king masala",
                        "1/4 teaspoon dried fenugreek leaves",
                        "1 green chili",
                        "Salt to taste"
                    ]}
                />
                <Helmet>
                    <title>Easy Onion Curry Recipe (Pyaz Masala) | Fearless Vegetarian</title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/onion"
                    />

                    <meta
                        name="description"
                        content="Easy Onion Curry (Pyaz Masala) made with caramelized onions, Indian spices, and dried fenugreek leaves. A quick vegetarian recipe that pairs perfectly with roti, rice, or dal."
                    />

                    <meta
                        name="keywords"
                        content="onion curry, pyaz masala, onion sabzi, Indian onion curry, vegetarian curry, easy Indian recipes, onion masala recipe, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Easy Onion Curry Recipe (Pyaz Masala)"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/onion"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/onion.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Quick and flavorful Onion Curry made with caramelized onions and aromatic Indian spices."
                    />
                </Helmet>
                <h1>
                    Easy Onion Curry Recipe (Indian Pyaz Masala)
                </h1>
                <p>
                    Onion Curry is a quick and flavorful Indian side dish made with caramelized onions,
                    aromatic spices, and dried fenugreek leaves. This easy vegetarian recipe pairs
                    perfectly with roti, naan, rice, or dal and is ideal for busy weeknights.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <h2 className="ingredients">Ingredients</h2>
                <ol>
                    <li>1 tablespoon cooking oil</li>
                    <li>2 whole medium size onion</li>
                    <li>1/2 teaspoon Cumin seeds (Jeera)</li>
                    <li>1/2 teaspoon Mustard seeds</li>
                    <li>1 teaspoon Coriander Powder (Dhania)</li>
                    <li>1/4 teaspoon Asafoetida (hing)</li>
                    <li>1/2 teaspoon Red Chilli powder</li>
                    <li>1/2 teaspoon Tumeric powder</li>
                    <li>1/2 tablespoon Garam Masala spice found in Indian Grocery store</li>
                    <li>1/2 teaspoon Curry powder found in Indian Grocery Store</li>
                    <li>1/2 teaspoon Kitchen King Masala found in Indian Grocery Store</li>
                    <li>1/4 teaspoon fenugreek leaves for garnishing</li>
                    <li>1 whole green chiles chopped</li>
                    <li>Salt, to taste </li>
                </ol>
                <h2 className="ingredients">Instructions</h2>
                <ol>
                    <li>Heat a tablespoon of oil in a large pan, add the asafoetida, cumin seeds and mustard seeds. Allow them to crackle.</li>
                    <li>Once they crackle, add the onions, sprinkle some salt and cook the onions on medium heat until they are well roasted, gets a caramelized color and softened as well.</li>
                    <li>Once the onions have a good color and has cooked through, add the remaining masalas: coriander powder, red chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, garam masala powder, kitchen king masala, curry
                        powder.</li>
                    <li>Toss the onions until all the masalas get well coated on it.</li>
                    <li>Once done, check the salt and spice levels and adjust to suit your taste. Turn off the heat and transfer the Onion Curry into a serving bowl.</li>
                    <li>Crush the dried fenugreek leaves between your palms to release their aroma and flavor.</li>
                    <li>Sprinkle the crushed leaves into the curry.</li>
                    <li>That is it your Onion curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan).</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image
                        src="/onion.jpg"
                        alt="Indian onion curry made with caramelized onions and aromatic spices"
                        thumbnail
                        rounded
                        fluid
                    />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image
                        src="/onion.jpg"
                        alt="Indian onion curry made with caramelized onions and aromatic spices"
                        thumbnail
                        rounded
                        width="50%"
                        height="50%"
                        fluid
                    />
                </MediaQuery>
                <div>
                    <h2>Onion Curry Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="HOjKlXrKBGY" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="HOjKlXrKBGY" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Onion Curry recipe, you may also enjoy these flavorful
                        vegetarian dishes:
                    </p>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/aloogobi" className="recipe-link">
                                Aloo Gobi (Potato Cauliflower Curry)
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/mushroom" className="recipe-link">
                                Punjabi Mushroom Masala Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/paneer" className="recipe-link">
                                Shahi Paneer
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/saagpaneer" className="recipe-link">
                                Saag Paneer
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/quinoamoongdal" className="recipe-link">
                                Quinoa Moong Dal Khichdi
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/lentil" className="recipe-link">
                                Hearty Lentil Soup
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Onion