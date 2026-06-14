import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class Mushroom extends Component {
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
                    name="Punjabi Mushroom Masala Curry"
                    description="Punjabi Mushroom Masala Curry made with white button mushrooms, onions, tomatoes, yogurt, and aromatic Indian spices. A rich and flavorful vegetarian curry that pairs perfectly with naan, roti, or rice."
                    image="https://fearlessvegetarian.netlify.app/mushroom.jpg"
                    url="https://fearlessvegetarian.netlify.app/mushroom"
                    prepTime="PT15M"
                    cookTime="PT45M"
                    totalTime="PT1H"
                    recipeYield="2 Servings"
                    ingredients={[
                        "500g white button mushrooms",
                        "2 onions",
                        "2 tomatoes",
                        "2 cloves garlic",
                        "1-inch ginger",
                        "2 green chilies",
                        "1 teaspoon cumin seeds",
                        "1 teaspoon coriander powder",
                        "1/2 teaspoon turmeric powder",
                        "1/2 teaspoon red chili powder",
                        "1 teaspoon garam masala",
                        "4 tablespoons plain yogurt",
                        "Salt to taste",
                        "Fresh coriander leaves"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Punjabi Mushroom Masala Curry Recipe | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/mushroom" />
                    <meta
                        name="description"
                        content="Mushroom Masala Curry is a delightful Indian curry that tantalizes
                        the taste buds with its blend of savory spices and tender mushrooms. Simmered in tomato gravy & yogurt, 
                        it's bursting with aromatic spices."
                    />
                    <meta
                        name="keywords"
                        content="Punjab, flavors, one-pot, mushroom curry, tomato gravy, yogurt, aromatic spices, comfort food, white button mushrooms, creamy yogurt, traditional, 
                        comforting, easy to make, satisfying, Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                </Helmet>
                <h1>Punjabi Mushroom Masala Curry</h1>
                <p>
                    This Mushroom Masala is a flavorful Punjabi-style one-pot curry
                    made with tender white button mushrooms cooked in a spiced
                    onion-tomato gravy. The addition of creamy yogurt creates a rich
                    and satisfying dish that pairs perfectly with naan, roti, or rice.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>500g white button mushrooms, cleaned and sliced</li>
                    <li>2 onions, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1-inch ginger, grated</li>
                    <li>2 green chilies, finely chopped</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1/2 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>4 tablespoons plain yogurt</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li>

                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Heat oil in a deep pan or skillet over medium heat. Add cumin seeds and let them splutter.</li>
                    <li>Add chopped onions and sauté until they turn golden brown.</li>
                    <li>Add minced garlic, grated ginger, and chopped green chilies. Sauté for another 2 minutes.</li>
                    <li>Stir in chopped tomatoes and cook until they soften and oil starts to separate.</li>
                    <li>Add coriander powder, turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.</li>
                    <li>Add sliced mushrooms to the pan and mix until they are coated with the spice mixture.</li>
                    <li>Cover the pan and let the mushrooms cook for 5-7 minutes, stirring occasionally.</li>
                    <li>Once the mushrooms are cooked and tender, add plain yogurt to the pan and mix well.</li>
                    <li>Sprinkle garam masala over the curry and mix again.</li>
                    <li>Garnish with fresh coriander leaves and serve hot with rice or naan bread.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="/mushroom.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Mushroom Curry Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="UcMZg6QjnuQ" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="UcMZg6QjnuQ" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Punjabi-style Mushroom Masala Curry, you may also
                        enjoy these flavorful vegetarian recipes:
                    </p>

                    <ul className="custom-list">
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
                            <Link to="/aloogobi" className="recipe-link">
                                Aloo Gobi (Potato Cauliflower Curry)
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
                            <Link to="/couscousbalsamic" className="recipe-link">
                                Middle Eastern-inspired Couscous Salad
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

export default Mushroom;