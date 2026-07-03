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

class Aloogobi extends Component {
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
                    name="Aloo Gobi (Indian Potato and Cauliflower Curry)"
                    description="Classic North Indian potato and cauliflower curry."
                    image="https://fearlessvegetarian.netlify.app/aloogobi.jpg"
                    url="https://fearlessvegetarian.netlify.app/aloogobi"

                    prepTime="PT20M"
                    cookTime="PT40M"
                    totalTime="PT60M"

                    recipeYield="2 Servings"

                    recipeCategory="Main Course"
                    recipeCuisine="Indian"

                    keywords="Aloo Gobi, Indian Curry, Potato Curry, Cauliflower Curry"

                    video="https://www.youtube.com/watch?v=zCoLryH0mDk"

                    instructions={[
                        "Bake the potatoes and cauliflower.",
                        "Prepare onion tomato puree.",
                        "Cook the spices.",
                        "Add roasted vegetables.",
                        "Simmer for 10 minutes.",
                        "Serve hot."
                    ]}

                    nutrition={{
                        calories: "280 calories",
                        proteinContent: "8 g",
                        carbohydrateContent: "35 g",
                        fatContent: "11 g"
                    }}

                    ingredients={[
                        "1 large potato",
                        "1 lb cauliflower florets",
                        "1 onion",
                        "2 tomatoes",
                        "3 garlic cloves",
                        "2-inch piece ginger",
                        "1 teaspoon cumin seeds",
                        "1 tablespoon coriander powder",
                        "1/4 teaspoon turmeric powder",
                        "1/4 teaspoon red chili powder",
                        "1 tablespoon garam masala",
                        "2 cardamom pods",
                        "1/4 teaspoon amchoor powder",
                        "5 cloves",
                        "2 tablespoons olive oil",
                        "Salt to taste"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Aloo Gobi Recipe | Easy Indian Potato Cauliflower Curry
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/aloogobi"
                    />

                    <meta
                        name="description"
                        content="Learn how to make authentic Aloo Gobi, a classic Indian potato and cauliflower curry made with tomatoes, onions, and aromatic spices. A healthy vegetarian recipe perfect with roti, naan, or rice."
                    />

                    <meta
                        name="keywords"
                        content="aloo gobi recipe, potato cauliflower curry, Indian cauliflower recipe, Indian potato curry, vegan Indian recipes, vegetarian curry, Punjabi aloo gobi, cauliflower masala, healthy Indian recipes, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Aloo Gobi Recipe | Easy Indian Potato Cauliflower Curry"
                    />

                    <meta
                        property="og:description"
                        content="Classic North Indian Aloo Gobi made with potatoes, cauliflower, tomatoes, onions and aromatic spices."
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/aloogobi.jpg"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/aloogobi"
                    />

                    <meta property="og:type" content="article" />

                    <meta name="robots" content="index, follow" />
                </Helmet>
                <h1>Authentic Aloo Gobi Recipe (Indian Potato & Cauliflower Curry)</h1>
                <p>
                    Aloo Gobi is one of the most popular vegetarian dishes in Indian cuisine.
                    Made with tender potatoes, roasted cauliflower, tomatoes, onions, and
                    warming spices, this comforting curry is naturally vegan and pairs
                    perfectly with roti, naan, or steamed rice.
                </p>
                <h2>Health Benefits of Aloo Gobi</h2>

                <p>
                    Cauliflower is rich in fiber, vitamin C, and antioxidants, while potatoes
                    provide energy and important nutrients like potassium and vitamin B6.
                    Together they create a nutritious and satisfying vegetarian meal.
                </p>
                <h2>Why You'll Love This Recipe</h2>

                <p>
                    This Aloo Gobi is naturally vegan, gluten-free, and packed with bold Indian flavors. Roasting the potatoes and cauliflower before simmering them in the masala creates incredible texture and deeper flavor.
                </p>

                <h2>Serving Suggestions</h2>

                <p>
                    Serve with fresh roti, garlic naan, jeera rice, or plain basmati rice. Pair it with yogurt or cucumber raita for a complete meal.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 teaspoon onion powder </li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon tumeric powder</li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 teaspoon cumin seeds found in Indian Grocery store</li>
                    <li>1 tablespoon Garam Masala spice found in Indian Grocery store</li>
                    <li>1 whole potato big size or 2 potatoes small size </li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Grocery Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 whole cardamom pods </li>
                    <li>2 small piece of ginger peeled</li>
                    <li>2 dried curry leaves </li>
                    <li>3 garlic cloves, peeled </li>
                    <li>2 Whole Tomatoes </li>
                    <li>1 lb (450 g) Cauliflower florets (1 medium chopped into 1-inch florets )</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Preheat the oven to 425˚F and line a rimmed baking sheet with parchment paper for easier cleanup.</li>
                    <li>Slice the cauliflower into traditional florets.</li>
                    <li>Peel the potato and slice it into big square pieces. I use a food chopper saves some time.</li>
                    <li>Seasoning- Add the cauliflower florets and potatoes in a big bowl. Add some olive oil and butter, and toss to coat. Sprinkle 1 teaspoon of salt, garlic powder
                        and paprika.Mix it well so the cauliflower florets and potatoes gets coated with the oil and seasoning.</li>
                    <li>Bake cauliflower for 30  minutes, or until desired tenderness and golden at the edges. The baking time may vary depending on the size of your pieces.</li>
                    <li>Take some olive oil in a non stick pot and heat it up.</li>
                    <li>Add pieces of ginger, whole garlic, 2 tomatoes ,1 onion,  5 pieces of clove in a mixer or food processor and turn it
                        into a fine puree.</li>
                    <li>Add the puree to the non stick pan with oil heated up.</li>
                    <li>Simply squeeze the cardamom pods and remove the seeds. Place them in the mortar (bowl) and begin to grind the seeds with the pestle.
                        Continue grinding until the seeds are ground down to a fine powder and then add the powder to the non stick pot.</li>
                    <li>Add all the  spices to the onion tomato: ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder.</li>
                    <li>Cover the pan with a lid and let it cook.</li>
                    <li>Let the spices cook for around 10 min.</li>
                    <li>Add the baked potatoes and  cauliflower florets to the pot.</li>
                    <li>Cook the potatoes and cauliflower florets for about 10 minutes till they become soft. Constantly stir the potatoes and cauliflower florets to mix it well with onion tomato red pepper puree which
                        will act as a gravy for the curry.</li>
                    <li>Add salt as per taste.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan).</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/aloogobi.jpg" alt="A visually appealing dish of Potato Cauliflower (Aloo Gobi), featuring sautéed cauliflower and potatoes with tomatoes, cashews, onions, and a blend of Indian spices." thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/aloogobi.jpg" alt="A visually appealing dish of Potato Cauliflower (Aloo Gobi), featuring sautéed cauliflower and potatoes with tomatoes, cashews, onions, and a blend of Indian spices." thumbnail rounded fluid width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Aloo Gobi Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="zCoLryH0mDk" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="zCoLryH0mDk" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div>
                    <h2>Related Vegetarian Recipes</h2>
                    <p>
                        If you enjoyed this Aloo Gobi: Classic North Indian Potato and Cauliflower Curry, you may also like:
                    </p>
                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/couscous"
                                className="recipe-link"
                            >
                                Couscous Delight: Easy and Flavorful Mediterranean Magic!
                            </Link>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/potato"
                                className="recipe-link"
                            >
                                Any Time Potato
                            </Link>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/riceandbeans"
                                className="recipe-link"
                            >
                                Mexican Rice and Beans
                            </Link>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/saagpaneer"
                                className="recipe-link"
                            >
                                Saag Paneer
                            </Link>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "8px", color: "green" }} />
                            <Link
                                to="/cabbage"
                                className="recipe-link"
                            >
                                Cabbage Curry
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Aloogobi