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
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class DalMakhani extends Component {
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
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 tablespoon Dal Makhani masala found in Indian store</li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 tablespoon Garam Masala spice found in Indian store</li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1 tablespoon Kitchen King Spice found in Indian Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 small piece of ginger peeled</li>
                    <li>2 Bay Leaves </li>
                    <li>2 green cardamoms</li>
                    <li>1 black cardamom </li>
                    <li>2 Whole Tomatoes </li>
                </ol>
                <div className="ingredients">Instruction</div>
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
                <h2>Final Product</h2>
                <Image src="/dalmakhani.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>DalMakhani Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="g4WcrkJKDKo" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="g4WcrkJKDKo" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this creamy Dal Makhani recipe, you may also like these healthy vegetarian recipes:
                    </p>

                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
                            <Link to="/paneer" className="recipe-link">Shahi Paneer</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
                            <Link to="/okra" className="recipe-link">Okra Delight</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
                            <Link to="/lentil" className="recipe-link">Masoor Dal (Red Lentil Curry)</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
                            <Link to="/blackeyedbeans" className="recipe-link">Black Eyed Peas Curry</Link>
                        </li>

                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
                            <Link to="/upma" className="recipe-link">South Indian Upma</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DalMakhani