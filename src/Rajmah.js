import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Rajmah extends Component {
    render() {
        const optsDesktop = {
            height: '600',
            width: '600',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <RecipeSchema
                    name="Rajma Masala (Indian Kidney Bean Curry)"
                    description="Authentic Punjabi Rajma Masala made with red kidney beans, onions, tomatoes, garlic, ginger, and aromatic Indian spices. A healthy vegetarian curry served with rice or naan."
                    image="https://fearlessvegetarian.netlify.app/rajmah.jpg"
                    url="https://fearlessvegetarian.netlify.app/rajmah"

                    prepTime="PT15M"
                    cookTime="PT45M"
                    totalTime="PT60M"

                    recipeYield="2 Servings"

                    recipeCategory="Main Course"
                    recipeCuisine="Indian"

                    keywords="Rajma Masala, Kidney Bean Curry, Punjabi Rajma, Indian Curry, Vegetarian Dinner"

                    video="https://www.youtube.com/watch?v=QROugaifSsE"

                    instructions={[
                        "Soak rajma overnight.",
                        "Pressure cook until soft.",
                        "Prepare onion tomato masala.",
                        "Add spices and cooked rajma.",
                        "Simmer for 15 minutes.",
                        "Serve hot with rice."
                    ]}

                    nutrition={{
                        calories: "330 calories",
                        proteinContent: "15 g",
                        carbohydrateContent: "45 g",
                        fatContent: "9 g"
                    }}

                    ingredients={[
                        "1 cup dried kidney beans",
                        "2 tablespoons oil",
                        "1 onion",
                        "2 tomatoes",
                        "2 teaspoons ginger garlic paste",
                        "2 green chilies",
                        "1 teaspoon cumin seeds",
                        "1 teaspoon coriander powder",
                        "1/2 teaspoon turmeric",
                        "1 teaspoon red chili powder",
                        "1 teaspoon garam masala",
                        "Salt",
                        "Fresh cilantro"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Rajma Masala Recipe | Authentic Punjabi Kidney Bean Curry | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/rajmah"
                    />

                    <meta
                        name="description"
                        content="Learn how to make authentic Punjabi Rajma Masala with kidney beans, onions, tomatoes, ginger, garlic, and Indian spices. An easy vegetarian comfort food recipe served with rice or naan."
                    />

                    <meta
                        name="keywords"
                        content="rajma recipe, rajma masala, kidney bean curry, Punjabi rajma, Indian curry recipe, vegetarian Indian recipes, healthy kidney beans, Fearless Vegetarian"
                    />

                    <meta property="og:title"
                        content="Rajma Masala Recipe | Authentic Punjabi Kidney Bean Curry"
                    />

                    <meta property="og:type" content="article" />

                    <meta property="og:url"
                        content="https://fearlessvegetarian.netlify.app/rajmah"
                    />

                    <meta property="og:image"
                        content="https://fearlessvegetarian.netlify.app/rajmah.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Authentic Punjabi Rajma Masala made with kidney beans simmered in a rich onion tomato gravy and aromatic Indian spices."
                    />

                    <meta name="robots" content="index, follow" />
                </Helmet>
                <h1>Rajma Masala (Punjabi Kidney Bean Curry)</h1>
                <p>
                    Rajma Masala is one of North India's most loved comfort foods.
                    Made with protein-rich kidney beans simmered in a flavorful onion,
                    tomato, ginger, garlic, and spice gravy, this hearty vegetarian curry
                    pairs perfectly with steamed basmati rice, jeera rice, roti, or naan.
                </p>
                <h2>Health Benefits of Rajma</h2>

                <p>
                    Kidney beans are packed with plant-based protein, fiber, iron,
                    magnesium, potassium, and antioxidants. Rajma is a filling,
                    nutritious meal that supports digestion, heart health, and
                    steady energy levels.
                </p>
                <h2>Serving Suggestions</h2>

                <p>
                    Rajma Masala tastes even better when served with:
                </p>

                <ul className="custom-list">
                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Steamed Basmati Rice
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Jeera Rice
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Fresh Roti
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Butter Naan
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Onion Salad
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLeaf} className="bullet-icon" />
                        Mango Pickle
                    </li>
                </ul>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 cup dried Rajma (Red Kidney Beans)</li>
                    <li>Water for soaking and cooking</li>
                    <li>2 tablespoons oil or ghee</li>
                    <li>1 large onion, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>2 teaspoons ginger-garlic paste</li>
                    <li>1-2 green chilies, finely chopped (adjust to taste)</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li>

                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Rinse 1 cup of Rajma thoroughly under cold water. Soak the Rajma in enough water overnight or for at least 8 hours.
                        This helps in reducing the cooking time.</li>
                    <li>Discard the soaking water and rinse the Rajma again. In a stovetop pressure cooker, add the soaked Rajma with fresh water.
                        Pour 1.5 cups of water and pressure cook for 5 whistles.
                        Cook the Rajma with a pinch of salt until they are soft and well-cooked. This usually takes around 15-20 minutes after the first whistle on medium heat.
                        Cooking time may vary based on the type of pressure cooker and the size of Rajma.</li>
                    <li>In a separate pan, heat oil or ghee. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown.</li>
                    <li>Add ginger-garlic paste and sauté until the raw smell disappears. Add finely chopped tomatoes and cook until they are soft and oil starts separating from the masala.</li>
                    <li>Add turmeric powder, red chili powder, coriander powder, and garam masala. Sauté the spices until the oil separates.</li>
                    <li>Transfer the prepared masala to the cooked Rajma in the pressure cooker. Mix well and simmer for 10-15 minutes, allowing the flavors to meld. Adjust salt and spices according to taste.</li>
                    <li>Garnish with fresh coriander leaves and serve the Rajma with steamed rice or Indian bread (roti/naan).</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/rajmah.jpg" alt="Authentic Punjabi Rajma Masala made with kidney beans in a rich tomato onion gravy" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/rajmah.jpg" alt="Authentic Punjabi Rajma Masala made with kidney beans in a rich tomato onion gravy" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Rajmah Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="QROugaifSsE" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="QROugaifSsE" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>More Indian Curry Recipes You'll Love</h2>
                    <p>
                        If you enjoyed this hearty Rajmah (Kidney Bean Curry), you may also like:
                    </p>

                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/dalmakhani"
                                className="recipe-link"
                            >
                                Dal Makhani – Slow-Cooked Punjabi Lentils
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/quinoamoongdal"
                                className="recipe-link"
                            >
                                Quinoa Moong Dal Khichdi
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/blackeyedpeas"
                                className="recipe-link"
                            >
                                Black Eyed Peas Curry
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/besan"
                                className="recipe-link"
                            >
                                Besan Curry (Chickpea Flour Curry)
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/riceandbeans"
                                className="recipe-link"
                            >
                                Mexican Rice with Black Beans
                            </Link>
                        </li>
                    </ul>
                </div>
                <p>
                    Rajma Masala is a classic Punjabi comfort food that's easy to prepare and full of flavor. Whether served with steamed rice, jeera rice, roti, or naan, this protein-rich kidney bean curry makes a satisfying vegetarian meal for lunch or dinner.
                </p>

            </div>
        );
    }
}

export default Rajmah;