import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";


class Curdrice extends Component {
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
                    name="South Indian Curd Rice"
                    description="Traditional South Indian curd rice made with cooked rice, yogurt, ginger, curry leaves, mustard seeds, chana dal, urad dal, and cashews. A cooling, comforting, and probiotic-rich vegetarian dish."
                    image="https://fearlessvegetarian.netlify.app/curdrice.jpg"
                    url="https://fearlessvegetarian.netlify.app/curdrice"
                    prepTime="PT10M"
                    cookTime="PT20M"
                    totalTime="PT30M"
                    recipeYield="1 Serving"
                    ingredients={[
                        "1/2 cup rice",
                        "1 cup plain yogurt",
                        "1 green chili, finely chopped",
                        "1 teaspoon oil",
                        "1/2 teaspoon mustard seeds",
                        "1/2 teaspoon cumin seeds",
                        "1 teaspoon chana dal",
                        "1 teaspoon urad dal",
                        "1/4 teaspoon asafoetida (hing)",
                        "1/2 teaspoon ginger, minced",
                        "8 roasted cashews",
                        "Curry leaves",
                        "Salt to taste"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>South Indian Curd Rice Recipe | Easy Yogurt Rice | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta
                        name="description"
                        content="Traditional South Indian Curd Rice made with yogurt, rice, ginger, curry leaves, mustard seeds, and lentils. A cooling, comforting, and gut-friendly vegetarian recipe perfect for summer."
                    />
                    <meta
                        name="keywords"
                        content="curd rice, South Indian dish, Indian yogurt, precooked rice, herbs, tempering spices, South Indian cuisine, traditional recipes, comfort food, cooling dish, easy-to-follow recipe, flavorful curd rice, Indian culinary delight, vegetarian dishes, fresh and aromatic"
                    />
                    <meta
                        property="og:title"
                        content="South Indian Curd Rice Recipe | Easy Yogurt Rice"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/curdrice.jpg" />
                    <meta property="og:description" content="Curd Rice Delight: Enjoy South Indian comfort with this dish made with precooked rice, yogurt, herbs, and tempering spices." />
                </Helmet>
                <h1>South Indian Curd Rice (Yogurt Rice)</h1>

                <p>
                    Curd Rice is a classic South Indian comfort food made with cooked rice,
                    creamy yogurt, and a flavorful tempering of mustard seeds, curry leaves,
                    ginger, and lentils. This cooling, probiotic-rich dish is perfect for
                    summer meals and supports digestive health.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1/2 cup rice</li>
                    <li>1 green chilies – chopped finely </li>
                    <li>1 teaspoon oil</li>
                    <li>1/2 teaspoon mustard seeds</li>
                    <li>1/2 teaspoon cumin seeds</li>
                    <li>1 teaspoon chana dal found in Indian Grocery Store</li>
                    <li>1 teaspoon Urad dal found in Indian Grocery Store</li>
                    <li>1/4 teaspoon hing (asafoetida) </li>
                    <li>1/2 teaspoon ginger minced</li>
                    <li>8 cashews roasted</li>
                    <li>1 cup plain yogurt</li>
                </ol>
                <div className="ingredients">Instructions</div>
                <ol>
                    <li>Add rice to a bowl and rinse it well a few times. Then pour 1.5 cups water and 0.5 teaspoon salt. Keep it in a pressure cooker.
                        Pressure cook rice for 3 whistles until soft. You can also cook the rice directly in the cooker for 2 whistles.
                        When the pressure releases, remove the rice & mash it lightly. You can also fluff up & use if you do not like mushy rice.
                        If you prefer to use milk, ad 1/4 cup hot milk. Cool it completely.</li>
                    <li>Add curd to cooled rice. Mix well until combined. If you have cooked the rice without salt, then add it now.</li>
                    <li>Stir in coriander leaves, grated carrots and cucumbers to the curd rice. Taste the curd rice & add more salt if needed.</li>
                    <li>Heat oil in a pan. Then add cumin & mustard. When they begin to splutter, add red chilli, chana dal, urad dal and cashews
                        if using. Fry until the dal turns golden.</li>
                    <li>Add ginger, green chili and curry leaves.</li>
                    <li>When the curry leaves turn crisp, add hing and turn off the stove. If using bottle gourd, add it to the hot seasoning and stir.</li>
                    <li>Pour the curd rice mixture into the pan and mix all the ingredients well</li>
                    <li>I prefer hot curd rice so I cook the mixture in the pan for 5 minutes till it gets hot.</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/curdrice.jpg" alt="South Indian curd rice made with yogurt, rice, mustard seeds, curry leaves, ginger, and roasted cashews" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/curdrice.jpg" alt="South Indian curd rice made with yogurt, rice, mustard seeds, curry leaves, ginger, and roasted cashews" thumbnail rounded fluid width="50%" height="50%"></Image>
                </MediaQuery>
                
                <div>
                    <h2>Curd Rice Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Y_QJdaanMzg" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Y_QJdaanMzg" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related South Indian & Healthy Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this South Indian Curd Rice recipe, you may also
                        enjoy these wholesome vegetarian dishes:
                    </p>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/poha" className="recipe-link">
                                Poha – Indian Flattened Rice Breakfast
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
                            <Link to="/yogurt" className="recipe-link">
                                Homemade Instant Pot Yogurt
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/couscousbalsamic" className="recipe-link">
                                Middle Eastern Couscous Salad
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/broccoli" className="recipe-link">
                                Creamy Broccoli Soup
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

export default Curdrice