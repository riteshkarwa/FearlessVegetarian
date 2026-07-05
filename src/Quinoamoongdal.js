import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import RecipeSchema from "./RecipeSchema";

class Quinoamoongdal extends Component {
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
                    name="Quinoa Moong Dal Khichdi"
                    description="Healthy Quinoa Moong Dal Khichdi made with quinoa, yellow moong dal, vegetables, and Indian spices. A protein-rich, gluten-free one-pot vegetarian meal."
                    image="https://fearlessvegetarian.netlify.app/quinoamoongdal.jpg"
                    url="https://fearlessvegetarian.netlify.app/quinoamoongdal"
                    prepTime="PT15M"
                    cookTime="PT45M"
                    totalTime="PT60M"
                    recipeYield="2 Servings"
                    recipeCategory="Main Course"
                    recipeCuisine="Indian"
                    keywords="quinoa khichdi, moong dal khichdi, quinoa recipes, healthy Indian recipes"

                    video="https://www.youtube.com/watch?v=8pqdHWd3Pys"

                    ingredients={[
                        "1/2 cup quinoa",
                        "1/2 cup yellow moong dal",
                        "1/2 cup green moong dal",
                        "1 onion",
                        "1 tomato",
                        "1 green chili",
                        "2 garlic cloves",
                        "1/2 teaspoon cumin seeds",
                        "1/2 teaspoon turmeric",
                        "1/2 teaspoon coriander powder",
                        "2 tablespoons ghee or oil",
                        "Salt",
                        "Fresh coriander"
                    ]}

                    instructions={[
                        "Wash quinoa and lentils.",
                        "Soak for 20 minutes.",
                        "Pressure cook quinoa and lentils.",
                        "Prepare onion tomato tempering.",
                        "Add vegetables and spices.",
                        "Combine everything.",
                        "Simmer for 5 minutes.",
                        "Garnish with cilantro."
                    ]}

                    nutrition={{
                        calories: "310 calories",
                        proteinContent: "15 g",
                        carbohydrateContent: "42 g",
                        fatContent: "8 g"
                    }}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Quinoa Moong Dal Khichdi Recipe | Healthy High-Protein Indian One-Pot Meal</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/quinoamoongdal" />
                    <meta
                        name="description"
                        content="Learn how to make Quinoa Moong Dal Khichdi with quinoa, yellow moong dal, vegetables, 
                        and Indian spices. This healthy, protein-rich, gluten-free one-pot vegetarian meal is perfect for lunch or dinner."
                    />
                    <meta
                        name="keywords"
                        content="quinoa moong dal khichdi, quinoa khichdi recipe, healthy Indian khichdi, moong dal quinoa recipe, 
                        vegetarian protein meal, Indian comfort food, gluten free khichdi, Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Quinoa Moong Dal Khichdi Recipe: Healthy & Comforting One-Pot Meal" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/quinoamoongdal" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/quinoamoongdal.jpg" />
                    <meta property="og:type" content="article" />
                    <meta name="robots" content="index, follow" />
                    <meta property="article:author" content="Fearless Vegetarian" />
                    <meta property="article:section" content="Recipes" />
                    <meta property="og:description" content="Learn how to make Quinoa Moong Dal Khichdi—a wholesome, protein-rich, and comforting Indian dish made with quinoa, yellow moong dal, 
                    spices, and vegetables. Perfect for a light lunch or dinner" />
                </Helmet>
                <h1>
                    Quinoa Moong Dal Khichdi (Healthy High-Protein Indian One-Pot Meal)
                </h1>
                <p>
                    Quinoa Moong Dal Khichdi is a healthy twist on traditional Indian khichdi.
                    Made with protein-rich quinoa, yellow moong dal, vegetables, and aromatic
                    Indian spices, this comforting one-pot meal is naturally gluten-free,
                    easy to digest, and perfect for lunch or dinner.
                </p>
                <h2>Health Benefits</h2>

                <p>
                    Quinoa is a complete protein packed with essential amino acids, while
                    moong dal provides fiber, plant protein, and important vitamins.
                    Combined together, they create a wholesome meal that's filling,
                    nutritious, and easy on digestion.
                </p>
                <h2>Serving Suggestions</h2>

                <p>
                    Serve Quinoa Moong Dal Khichdi with:
                </p>

                <ul className="custom-list">

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Plain yogurt
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Pickle
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Papad
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Fresh cucumber salad
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        A drizzle of ghee
                    </li>

                </ul>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1/2 cup quinoa</li>
                    <li>1/2 cup yellow moong dal</li>
                    <li>1/2 cup green moong dal</li>
                    <li>1 small onion (chopped)</li>
                    <li>1 small tomato (chopped)</li>
                    <li>1 green chili (slit)</li>
                    <li>1–2 garlic cloves (chopped)</li>
                    <li>1/2 tsp cumin seeds</li>
                    <li>1/2 tsp turmeric powder</li>
                    <li>1/2 tsp coriander powder</li>
                    <li>1–2 tbsp ghee or oil</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Rinse and soak: Wash quinoa and moong dal thoroughly. Soak for 15–20 minutes, then drain.</li>
                    <li>Pressure cook quinoa and dal: Add quinoa, moong dal, salt, turmeric, and 2.5–3 cups water to a pressure cooker.</li>
                    <li>Cook for 2–3 whistles (or until both are soft and mushy). Set aside.</li>
                    <li>Prepare tempering: Heat ghee or oil in a pressure cooker or heavy pot.</li>
                    <li>Add cumin seeds, let them splutter.</li>
                    <li>Add onion, ginger, garlic, and green chili. Sauté until golden.</li>
                    <li>Add chopped tomato, carrot, beans, and peas.</li>
                    <li>Stir in coriander powder and cook until veggies soften.</li>
                    <li>Add the cooked quinoa-dal mixture into the pan with the vegetables and tempering.
                    </li>
                    <li>Mix well and simmer for 2–3 minutes. Adjust consistency with hot water if needed</li>
                    <li>Garnish with fresh coriander and a drizzle of ghee.</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/quinoamoongdal.jpg" alt="Quinoa Moong Dal Khichdi served in a bowl" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/quinoamoongdal.jpg" alt="Quinoa Moong Dal Khichdi served in a bowl" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Quinoa Moong Dal Khichdi Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="8pqdHWd3Pys" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="8pqdHWd3Pys" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Quinoa Moong Dal Khichdi, you may also like these healthy vegetarian recipes:
                    </p>

                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10px" }} />
                            <Link to="/khichdi" className="recipe-link">Traditional Moong Dal Khichdi</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10px" }} />
                            <Link to="/dalmakhani" className="recipe-link">Dal Makhani – Creamy Punjabi Lentils</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10px" }} />
                            <Link to="/lentil" className="recipe-link">Masoor Dal (Red Lentil Curry)</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10px" }} />
                            <Link to="/blackeyedbeans" className="recipe-link">Black Eyed Peas Curry</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10px" }} />
                            <Link to="/upma" className="recipe-link">South Indian Upma</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Quinoamoongdal