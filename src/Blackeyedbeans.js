import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Blackeyedbeans extends Component {
    render() {
        const optsDesktop = {
            height: '500',
            width: '700',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <RecipeSchema
                    name="Black Eyed Peas Curry (Lobia Masala)"
                    description="Black Eyed Peas Curry seasoned with Indian spices. A hearty and protein-rich vegetarian curry made with black eyed beans, tomatoes, onions, and aromatic spices."
                    image="https://fearlessvegetarian.netlify.app/blackeyedbeans.jpg"
                    url="https://fearlessvegetarian.netlify.app/blackeyedbeans"
                    prepTime="PT8H"
                    cookTime="PT1H"
                    totalTime="PT9H"
                    recipeYield="1 Serving"
                    ingredients={[
                        "2 cups black eyed beans",
                        "1 teaspoon coriander powder",
                        "1/4 teaspoon turmeric powder",
                        "1/4 teaspoon red chili powder",
                        "1 teaspoon garam masala",
                        "2 potatoes",
                        "1 onion",
                        "2 tomatoes",
                        "2 pieces ginger",
                        "3 to 4 dried curry leaves",
                        "1/4 teaspoon Kitchen King spice",
                        "Salt to taste"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Black Eyed Peas Curry (Lobia Masala) Recipe | Protein-Rich Indian Curry</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/blackeyedbeans" />
                    <meta
                        name="description"
                        content="Kickstart luck with our Black Eyed Peas Curry. A year-round delight, seasoned with Indian spices for prosperity."
                    />
                    <meta
                        name="keywords"
                        content="black eyed peas curry, Indian black eyed peas recipe, lobia curry, vegetarian curry recipe, new year black eyed peas recipe, healthy curry with legumes, 
                        Indian spice curry, easy lobia masala, black eyed beans curry, protein rich curry, gluten free curry recipe, vegan black eyed peas curry, Indian comfort food, 
                        Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/blackeyedbeans" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/blackeyedbeans.jpg" />
                    <meta property="og:description" content="Kickstart luck with our Black Eyed Peas Curry. A year-round delight, seasoned with Indian spices for prosperity." />
                </Helmet>
                <h1>Black Eyed Peas Curry (Lobia Masala) – Protein-Rich Indian Vegetarian Curry
                </h1>
                <p>
                    This Black Eyed Peas Curry (Lobia Masala) is a hearty North Indian dish made
                    with black eyed beans, potatoes, onions, tomatoes, and warming spices. Rich
                    in plant protein and fiber, it pairs perfectly with rice or roti.
                </p>
                <h2>Serving Suggestions</h2>

                <p>
                    Serve Black Eyed Peas Curry with:
                </p>

                <ul>
                    <li>Steamed Basmati Rice</li>
                    <li>Jeera Rice</li>
                    <li>Whole Wheat Roti</li>
                    <li>Garlic Naan</li>
                    <li>Fresh Cucumber Salad</li>
                </ul>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients"><h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon coriander powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/4 teaspoon tumeric powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/4 teaspoon red chili powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon Garam Masala spice found in Indian Grocery store</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 whole potatoes</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Salt as per taste</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 whole onion</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1/4 teaspoon Kitchen King Spice found in Indian Store</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 small piece of ginger peeled</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />3 to 4 dried curry leaves </li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 Whole Tomatoes </li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 cups of black eyed beans</li>
                    </ul>
                </div>
                <div className="ingredients"><h3>Instruction</h3>
                    <ol>
                        <li>Soak 2 cups of black eyed beans in a pot with water. Cover the beans with a few inches of water and leaving them on the counter. </li>
                        <li>Let the beans soak overnight.</li>
                        <li>Take some olive oil in a non stick pan and heat it up.</li>
                        <li>Add few cumin seeds and mustard seeds to the oil and let it crackle</li>
                        <li>Add pieces of ginger, whole garlic, red bell pepper, 2 tomatoes ,1 onion,  5 pieces of clove in a blender or food processor and turn it
                            into a fine puree.
                        </li>
                        <li>Add the puree to the non stick pan with oil heated up</li>
                        <li>Add all the  spices to the onion tomato red pepper puree ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                            little in the beginning and add more towards the end of the dish), tumeric powder, curry powder.</li>
                        <li>Cover the pan and let it cook.</li>
                        <li>Let the spices cook for 10 min.</li>
                        <li>Wash the black eyed beans thoroughly with water and add the beans to the pan.</li>
                        <li>Cook the black eyed beans for about 30 minutes till they become soft. Constantly stir the beans to mix it well with onion tomato puree which
                            will act as a gravy for the curry.</li>
                        <li>Add salt as per taste.</li>
                        <li>Add little bit of Kitchen King Spice, Garam Masala powder and Amchoor powder found in Indian Grocery Store.</li>
                        <li>That is it your curry is ready. You can enjoy it with White Rice.</li>
                    </ol>
                </div>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/blackeyedbeans.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/blackeyedbeans.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Black Eyed Peas Curry Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="yiKLvJ7gBMw" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="yiKLvJ7gBMw" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                {/* Related Recipes */}
                <section className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Black Eyed Peas Curry (Lobia Masala), you may
                        also like these delicious vegetarian recipes:
                    </p>

                    <Row className="g-4">

                        {/* Rajmah */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/rajmah" className="related-recipe-link">
                                    <Image
                                        src="/rajmah.jpg"
                                        alt="Rajmah Kidney Bean Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Rajmah (Kidney Bean Curry)</h3>

                                    <p>
                                        A hearty North Indian curry made with tender kidney beans
                                        simmered in a flavorful tomato and spice gravy.
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
                                <Link to="/dalmakhani" className="related-recipe-link">
                                    <Image
                                        src="/dalmakhani.jpg"
                                        alt="Dal Makhani Punjabi Lentils"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Dal Makhani – Slow-Cooked Punjabi Lentils</h3>

                                    <p>
                                        A rich and creamy Punjabi lentil dish made with black
                                        lentils and slow-cooked with aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Quinoa Moong Dal Khichdi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/quinoamoongdal" className="related-recipe-link">
                                    <Image
                                        src="/quinoamoongdal.jpg"
                                        alt="Quinoa Moong Dal Khichdi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Quinoa Moong Dal Khichdi</h3>

                                    <p>
                                        A wholesome one-pot meal combining protein-rich moong dal
                                        with nutritious quinoa and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Mexican Rice with Black Beans */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/riceandbeans" className="related-recipe-link">
                                    <Image
                                        src="/ricebeans.jpg"
                                        alt="Mexican Rice with Black Beans"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Mexican Rice with Black Beans</h3>

                                    <p>
                                        A flavorful and satisfying combination of Mexican-style
                                        rice and hearty black beans.
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
                                <Link to="/besan" className="related-recipe-link">
                                    <Image
                                        src="/besan.jpg"
                                        alt="Besan Curry Chickpea Flour Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Besan Curry (Chickpea Flour Curry)</h3>

                                    <p>
                                        A simple and flavorful Indian curry made with besan,
                                        aromatic spices, and a delicious savory gravy.
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


export default Blackeyedbeans;