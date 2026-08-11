import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class DalMakhani extends Component {
    render() {
        return (
            <div>
                <RecipeSchema
                    name="Dal Makhani Recipe (Punjabi Black Lentil Curry)"
                    description="Authentic Dal Makhani made with whole black lentils (urad dal), kidney beans, butter, and aromatic Indian spices. This rich and creamy Punjabi curry is slow-cooked for deep flavor and pairs perfectly with naan or rice."
                    image="https://fearlessvegetarian.netlify.app/dalmakhani.jpg"
                    url="https://fearlessvegetarian.netlify.app/dalmakhani"
                    prepTime="PT8H"
                    cookTime="PT2H"
                    totalTime="PT10H"
                    recipeYield="2 Servings"
                    ingredients={[
                        "1 cup whole black gram (urad dal)",
                        "1/4 cup red kidney beans (rajma)",
                        "2 tablespoons Dal Makhani masala",
                        "1 tablespoon coriander powder",
                        "1 tablespoon garam masala",
                        "1 tablespoon Kitchen King spice",
                        "1 teaspoon cumin seeds",
                        "1 onion",
                        "2 tomatoes",
                        "2 pieces ginger",
                        "2 bay leaves",
                        "2 green cardamoms",
                        "1 black cardamom",
                        "5 cloves",
                        "Salt to taste",
                        "Butter",
                        "Kasuri methi (dried fenugreek leaves)"
                    ]}
                    instructions={[
                        "Soak urad dal and rajma for 8 hours or overnight.",
                        "Pressure cook the soaked lentils and beans until soft.",
                        "Prepare onion, tomato, ginger, garlic, and clove puree.",
                        "Heat oil and sauté cumin seeds, bay leaves, cardamoms, and onions.",
                        "Add tomato puree and cook until oil separates.",
                        "Add Dal Makhani masala, coriander powder, garam masala, and Kitchen King spice.",
                        "Add cooked lentils and beans to the masala.",
                        "Simmer on low heat for 60 minutes, stirring occasionally.",
                        "Add butter, kasuri methi, and more water if needed.",
                        "Cook for another 60 minutes for rich flavor.",
                        "Serve hot with naan, roti, or rice."
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Dal Makhani Recipe (Punjabi Black Lentil Curry) | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/dalmakhani"
                    />

                    <meta
                        name="description"
                        content="Authentic Dal Makhani recipe made with whole black lentils (urad dal), kidney beans, butter, and aromatic Indian spices. This rich Punjabi curry is slow-cooked for deep flavor and pairs perfectly with naan or rice."
                    />

                    <meta
                        name="keywords"
                        content="dal makhani recipe, Punjabi dal makhani, black lentil curry, urad dal recipe, kidney bean curry, restaurant style dal makhani, Indian lentil curry, vegetarian Indian recipes, North Indian food, dal makhani with rice, dal makhani with naan, Fearless Vegetarian"
                    />

                    {/* Open Graph */}
                    <meta
                        property="og:title"
                        content="Dal Makhani Recipe (Punjabi Black Lentil Curry)"
                    />

                    <meta
                        property="og:description"
                        content="Learn how to make authentic Dal Makhani with whole black lentils, kidney beans, butter, and Indian spices. A rich and creamy Punjabi favorite."
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/dalmakhani"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/dalmakhani.jpg"
                    />

                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Fearless Vegetarian" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />

                    <meta
                        name="twitter:title"
                        content="Dal Makhani Recipe (Punjabi Black Lentil Curry)"
                    />

                    <meta
                        name="twitter:description"
                        content="Rich, creamy, and slow-cooked Dal Makhani made with black lentils and kidney beans. A classic Punjabi comfort food recipe."
                    />

                    <meta
                        name="twitter:image"
                        content="https://fearlessvegetarian.netlify.app/dalmakhani.jpg"
                    />
                </Helmet>
                <h1>
                    Dal Makhani Recipe (Punjabi Black Lentil Curry) – Rich, Creamy & Slow-Cooked
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients"><h3>Ingredients</h3>
                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 tablespoon Dal Makhani masala found in Indian store</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 tablespoon coriander powder </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/8 teaspoon red chili powder</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon cumin seeds</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 tablespoon Garam Masala spice found in Indian store</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            Salt as per taste</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 onion</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 tablespoon Kitchen King Spice found in Indian Store</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            5 piece of cloves</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 small piece of ginger peeled</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 Bay Leaves </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 green cardamoms</li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 black cardamom </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 Whole Tomatoes </li>
                    </ul>
                </div>
                <div className="ingredients"><h3>Instructions</h3>
                    <ol>
                        <li>Add 1 cup Urad dal (black lentils) & 1⁄4 cup rajma (red kidney beans) to
                            a large pot and rinse thoroughly a few times. Drain the water and pour 3 to 4 cups fresh water.
                            Soak them for at least 6 to 8 hours. I usually soak them overnight.</li>
                        <li>After they are soaked well, drain the water and pour 4 cups fresh water. Pressure cook on a medium heat for about 35 to 40 mins. </li>
                        <li>When the pressure releases naturally, open the lid and check if the dal is well cooked.
                            Both Red kidney beans and urad dal have to be softened. Press down a rajma and few urad dal in between your thumb and fore finger. They should get mashed very well easily.
                        </li>
                        <li>Add 1 tablespoon of olive oil in a non stick pan and heat it up.</li>
                        <li>Add pieces of ginger, whole garlic, 2 tomatoes, 1 onion,  5 pieces of clove in a mixer or food processor and turn it
                            into a fine puree.
                        </li>
                        <li>Add the puree to the non stick pan with oil heated up.</li>
                        <li>Add 1 bay leaf, 1 black cardamom crushed in mortar and pestle, 2 green cardamoms crushed in mortar and pestle  and 1 tablespoon of cumin seeds to the pan. </li>
                        <li>Saute them for half a minute. Then add 1 medium onion finely chopped. Saute until golden or light brown.</li>
                        <li>Add tomato puree to the pan.</li>
                        <li>Add 1 tablespoon chilli powder ,1 tablespoon garam masala, 1 tablespoon coriander powder, 1 tablespoon Kitchen King Masala
                            (found in Indian store) to the pan
                        </li>
                        <li>Mix all the contents in the pan.</li>
                        <li>Cover the pan with a lid and cook it for 10 minutes.</li>
                        <li>Mash the cooked lentils slightly and transfer to the pan.</li>
                        <li>Stir well and add 1 cup of water.</li>
                        <li>Cook the lentils for 60 minute on low flame. Keep stiring the contents of the pan in between.</li>
                        <li>Taste the dal makhani. Add more salt as needed. Take 1⁄2 teaspoon kasuri methi (dried fenugreek leaves) and crush it in between your palms. Then add it. This brings out the flavor.</li>
                        <li>Add 1 cup of water, some butter and cook the lentils for another 60 minutes.</li>
                        <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                    </ol>
                </div>
                <h2>Final Product</h2>
                <Image
                    src="/dalmakhani.jpg"
                    alt="Traditional Indian Dal Makhani made with black lentils, kidney beans, butter, and aromatic spices"
                    fluid
                    thumbnail
                    rounded
                    loading="lazy"
                    className="recipe-image"
                />
                <div>
                    <h2>DalMakhani Preparation Video</h2>
                    <div className="youtube-container">
                        <YouTube
                            videoId="g4WcrkJKDKo"
                            opts={{
                                width: "100%",
                                height: "500",
                                playerVars: {
                                    autoplay: 0
                                }
                            }}
                        />
                    </div>
                </div>
                {/* Related Vegetarian Recipes */}
                <section className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this creamy Dal Makhani recipe, you may also like
                        these flavorful and comforting vegetarian recipes. Perfect for
                        everyday meals and family dinners.
                    </p>

                    <Row className="g-4">

                        {/* Shahi Paneer */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/paneer"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/paneer.jpg"
                                        alt="Shahi Paneer"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Shahi Paneer</h3>

                                    <p>
                                        Soft paneer cooked in a rich, creamy, and mildly spiced
                                        Indian gravy for a delicious vegetarian curry.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Okra Delight */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/okra"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/okra.jpg"
                                        alt="Okra Delight"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Okra Delight</h3>

                                    <p>
                                        Tender okra cooked with aromatic spices for a flavorful
                                        and easy vegetarian side dish.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Masoor Dal */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/lentil"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/lentil.jpg"
                                        alt="Masoor Dal Red Lentil Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Masoor Dal (Red Lentil Curry)</h3>

                                    <p>
                                        A comforting red lentil curry cooked with tomatoes,
                                        aromatic spices, and fresh herbs.
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
                                <Link
                                    to="/blackeyedbeans"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/blackeyedbeans.jpg"
                                        alt="Black Eyed Peas Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Black Eyed Peas Curry</h3>

                                    <p>
                                        Hearty black eyed peas simmered in a flavorful Indian
                                        gravy with aromatic spices and herbs.
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
                                <Link
                                    to="/upma"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/upma.jpg"
                                        alt="South Indian Upma"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>South Indian Upma</h3>

                                    <p>
                                        A comforting South Indian breakfast made with semolina,
                                        vegetables, aromatic spices, and fresh herbs.
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
                                <Link
                                    to="/quinoamoongdal"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/quinoamoongdal.jpg"
                                        alt="Quinoa Moong Dal Khichdi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Quinoa Moong Dal Khichdi</h3>

                                    <p>
                                        A wholesome one-pot meal made with quinoa, moong dal,
                                        vegetables, and aromatic Indian spices.
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

export default DalMakhani