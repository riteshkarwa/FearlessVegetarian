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
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Saagpaneer extends Component {
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
                    name="Saag Paneer Recipe"
                    description="Creamy North Indian spinach curry made with paneer, fresh spinach, cilantro, mint, and aromatic spices."
                    image="https://fearlessvegetarian.netlify.app/saagpaneer.jpg"
                    url="https://fearlessvegetarian.netlify.app/saagpaneer"
                    prepTime="PT20M"
                    cookTime="PT40M"
                    totalTime="PT60M"
                    recipeYield="2 Servings"
                    ingredients={[
                        "2 tablespoons olive oil",
                        "1 packet paneer",
                        "1 onion",
                        "2 tomatoes",
                        "1 box baby spinach",
                        "2 cups cilantro leaves",
                        "1 cup mint leaves",
                        "2 pieces ginger",
                        "5 cloves",
                        "1 tablespoon coriander powder",
                        "1 tablespoon garam masala",
                        "1 teaspoon cumin powder",
                        "1/2 teaspoon Kitchen King spice",
                        "Amchoor powder",
                        "Turmeric powder",
                        "Red chili powder",
                        "Salt"
                    ]}
                    instructions={[
                        "Blend spinach, cilantro, mint, tomatoes, onion, ginger, garlic, and cloves into a puree.",
                        "Heat oil in a pot and add the puree.",
                        "Add coriander powder, turmeric, chili powder, and other spices.",
                        "Cook for 10 minutes.",
                        "Cut paneer into cubes and add to the gravy.",
                        "Cook for another 10 minutes.",
                        "Add salt, garam masala, Kitchen King spice, and amchoor powder.",
                        "Serve hot with naan, roti, or rice."
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Saag Paneer Recipe (Indian Spinach & Paneer Curry) | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/saagpaneer"
                    />

                    <meta
                        name="description"
                        content="Easy Saag Paneer recipe made with fresh spinach, paneer, cilantro, mint, and aromatic Indian spices. This creamy North Indian spinach curry is perfect with naan, roti, or rice."
                    />

                    <meta
                        name="keywords"
                        content="saag paneer recipe, spinach paneer curry, Indian spinach curry, palak paneer recipe, North Indian recipes, homemade saag paneer, vegetarian Indian curry, paneer recipes, spinach and cheese curry, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Saag Paneer Recipe (Indian Spinach & Paneer Curry)"
                    />

                    <meta
                        property="og:description"
                        content="Creamy Saag Paneer made with spinach, paneer, cilantro, mint, and Indian spices. A classic North Indian vegetarian favorite."
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/saagpaneer.jpg"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/saagpaneer"
                    />

                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Fearless Vegetarian" />

                    <meta name="twitter:card" content="summary_large_image" />
                </Helmet>
                <h1>
                    Saag Paneer Recipe (Indian Spinach & Paneer Curry)
                </h1>
                <p>
                    Saag Paneer is a classic North Indian vegetarian dish made with fresh spinach,
                    paneer (Indian cottage cheese), cilantro, mint, and aromatic spices.
                    This creamy and nutritious curry is packed with flavor and pairs perfectly
                    with naan, roti, or steamed rice.
                </p>
                <h2>Health Benefits of Saag Paneer</h2>

                <p>
                    Spinach is rich in iron, vitamin K, folate, and antioxidants, while paneer
                    provides high-quality protein and calcium. Together, they create a nutritious
                    vegetarian meal that is both satisfying and flavorful.
                </p>
                <h2>What to Serve with Saag Paneer</h2>

                <p>
                    Saag Paneer tastes best with garlic naan, tandoori roti, whole wheat chapati,
                    jeera rice, or plain basmati rice. For a complete Indian meal, pair it with
                    Dal Makhani, cucumber raita, and a fresh salad.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 tablespoon olive oil</li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon tumeric powder</li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 whole Swad Paneer packet</li>
                    <li>1 teaspoon cumin powder</li>
                    <li>1 tablespoon Garam Masala spice found in Indian store</li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Store</li>
                    <li>1/2 teaspoon Kitchen King Spice found in Indian Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 small piece of ginger peeled</li>
                    <li>1 small box of baby spinach </li>
                    <li>2 cups of fresh cilantro levaes plucked</li>
                    <li>1 cup of mint leaves</li>
                    <li>2 Whole Tomatoes </li>
                </ol>
                <h2>All the ingredients ready to be put into a blender to make the gravy for the dish</h2>
                <Image src="/saag_prep.jpg" thumbnail rounded fluid></Image>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Take 2 tablespoon olive oil in a non stick pot and heat it up.</li>
                    <li>Add pieces of ginger, whole garlic, cilantro leaves, Baby Spinach,  Mint leaves, 2 tomatoes, 1 onion,  5 pieces of clove in a mixer or food processor and turn it
                        into a fine puree.
                    </li>
                    <li>Add the onion tomato spinach puree to the non stick pot with oil heated up.</li>
                    <li>Add all the  spices to the above  puree: ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, curry powder.</li>
                    <li>Cover the pot with a lid and let it cook.</li>
                    <li>Let the spices cook for around 10 min.</li>
                    <li>Cut Paneer into small square pieces and add it to the pot</li>
                    <li>Cook the Paneer for about 10 minutes. Constantly stir the Paneer to mix it well with onion tomato spinach puree which
                        will act as a gravy for the curry.</li>
                    <li>Add salt as per taste.</li>
                    <li>Add little bit of Kitchen King Masala Spice, Garam Masala powder and Amchoor powder all of them can be found in Indian Grocery Store.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="/saagpaneer.jpg" alt="Saag Paneer recipe made with spinach and Indian cottage cheese served in a bowl" thumbnail rounded fluid></Image>
                <div>
                    <h2>Saag Paneer Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Mo1BzUQcskM" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Mo1BzUQcskM" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Saag Paneer recipe, you may also like:
                    </p>

                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link to="/dalmakhani" className="recipe-link">
                                Dal Makhani
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link to="/aloogobi" className="recipe-link">
                                Aloo Gobi
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link to="/rajmah" className="recipe-link">
                                Rajmah (Kidney Bean Curry)
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link to="/besan" className="recipe-link">
                                Besan Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link to="/lentil" className="recipe-link">
                                Masoor Dal (Lentil Curry)
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Saagpaneer;