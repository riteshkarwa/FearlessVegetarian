import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class Riceandbeans extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Zesty Mexican Rice with Black Beans, Corn, and Peppers | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/riceandbeans" />
                    <meta
                        name="description"
                        content="Indulge in a culinary fiesta with our Zesty Mexican Rice recipe! A flavorful blend of black beans, corn, and peppers in every mouthful."
                    />
                    <meta
                        name="keywords"
                        content="Mexican rice, black beans, corn, peppers, zesty rice recipe, flavorful Mexican cuisine, easy Mexican rice, vegetarian Mexican dishes, vibrant side dishes, 
                        Mexican-inspired cooking, homemade rice and beans, fiesta-worthy recipes, Tex-Mex flavors, step-by-step cooking, delicious rice dishes, colorful and tasty,
                        Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Zesty Mexican Rice with Black Beans, Corn, and Peppers" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/riceandbeans" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/ricebeans.jpg" />
                    <meta property="og:description" content="Indulge in a culinary fiesta with our Zesty Mexican Rice recipe! A flavorful blend of black beans, corn, and peppers in every mouthful." />
                </Helmet>
                <h1>Zesty Mexican Rice with Black Beans, Corn, and Peppers: A Flavorful Fiesta in Every Bite Recipe</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 45 minutes</Col>
                </Row>
                <div className="ingredients"><h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 cup long-grain white rice</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 can black beans, drained and rinsed</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 cup corn (fresh or frozen)</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 red bell pepper, diced</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 green bell pepper, diced</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 small onion, finely chopped</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 cloves garlic, minced</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />2 tablespoons olive oil</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Fresh cilantro for garnish</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Green onion for garnish</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />1 teaspoon chili powder</li>
                        <li><FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />Salt and pepper to taste</li>
                    </ul>
                </div>
                <div className="ingredients"><h3>Instructions</h3>
                    <ol>
                        <li>Rinse the white rice under cold water until the water runs clear. This helps remove excess starch.</li>
                        <li>Discard the soaking water and rinse the Rajma again. In a stovetop pressure cooker, add the soaked black beans with fresh water.
                            Pour 1.5 cups of water and pressure cook for 3 whistles.
                            Cook the black beans with a pinch of salt until they are soft and well-cooked. This usually takes around 8 minutes after the first whistle on medium heat.
                            Cooking time may vary based on the type of pressure cooker.</li>
                        <li>In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add the chopped onion and garlic. Sauté until they become translucent.</li>
                        <li>Add the diced red and green bell peppers. Sauté for another 2-3 minutes until the peppers are slightly softened.</li>
                        <li>Stir in the pressure cooked black beans, corn, and diced tomatoes with green chilies. Mix everything well</li>
                        <li>Add the rinsed rice to the skillet. Stir and cook for 2-3 minutes until the rice is lightly toasted. Add cumin powder, chili powder, paprika, salt, and pepper. Mix well to coat the rice with the spices.</li>
                        <li>Pour 2 cups of water into the skillet. Bring the mixture to a boil, then reduce the heat to low, cover, and let it simmer for 15-20 minutes or until the rice is cooked and the liquid is absorbed.</li>
                        <li>Once the rice is cooked, fluff it with a fork. Garnish with fresh cilantro and green onion.</li>
                    </ol>
                </div>
                <h2>Final Product</h2>
                <Image
                    src="/ricebeans.jpg"
                    alt="Mexican Rice and Beans"
                    fluid
                    rounded
                    thumbnail
                    className="recipe-image-ricebeans mx-auto d-block"
                />
                {/* Preparation Video */}
                <section className="recipe-video">
                    <h2>Rice and Beans Preparation Video</h2>
                    <div className="ratio ratio-1x1 video-container">
                        <iframe
                            src="https://www.youtube.com/embed/azLCdgLpDjY"
                            title="Upma Preparation Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                {/* You May Also Like */}
                <section className="related-recipes">
                    <h2>You May Also Like</h2>

                    <p className="related-recipes-intro">
                        Try these delicious vegetarian recipes you may also enjoy:
                    </p>

                    <Row className="g-4">

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
                                        A nutritious and comforting one-pot meal made with quinoa,
                                        moong dal, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Cabbage Curry */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/cabbage" className="related-recipe-link">
                                    <Image
                                        src="/cabbage.jpg"
                                        alt="Cabbage Curry Patta Gobi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Cabbage Curry (Patta Gobi)</h3>

                                    <p>
                                        A simple and flavorful Indian cabbage curry made with
                                        aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Creamy Potato Curry */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/potatocapsicum" className="related-recipe-link">
                                    <Image
                                        src="/potatocapsicum.jpg"
                                        alt="Creamy Potato Curry in Roasted Red Pepper Cashew Gravy"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>
                                        Creamy Potato Curry in Roasted Red Pepper Cashew Gravy
                                    </h3>

                                    <p>
                                        A rich and creamy vegetarian potato curry with a flavorful
                                        roasted red pepper and cashew gravy.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Black Eyed Peas Curry */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/blackeyedbeans" className="related-recipe-link">
                                    <Image
                                        src="/blackeyedbeans.jpg"
                                        alt="Black Eyed Peas Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Black Eyed Peas Curry</h3>

                                    <p>
                                        A hearty and flavorful curry made with black-eyed peas and
                                        aromatic Indian spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* South Indian Upma */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/upma" className="related-recipe-link">
                                    <Image
                                        src="/upma.jpg"
                                        alt="South Indian Upma"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>South Indian Upma</h3>

                                    <p>
                                        A savory South Indian breakfast made with rava, vegetables,
                                        herbs, and aromatic spices.
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

export default Riceandbeans;