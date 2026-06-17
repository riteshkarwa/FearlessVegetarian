import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

class Broccoli extends Component {
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
                    name="Creamy Broccoli Soup"
                    description="A creamy and comforting broccoli soup made with fresh broccoli, potatoes, onions, garlic, milk, and simple seasonings. Perfect for a healthy lunch or light dinner."
                    image="https://fearlessvegetarian.netlify.app/broccoli.jpg"
                    url="https://fearlessvegetarian.netlify.app/broccoli"
                    prepTime="PT15M"
                    cookTime="PT30M"
                    totalTime="PT45M"
                    recipeYield="2 Servings"
                    ingredients={[
                        "1 large head broccoli",
                        "1 onion diced",
                        "1 tablespoon minced garlic",
                        "1 medium potato peeled and diced",
                        "1 cup milk",
                        "2 cups water",
                        "Salt to taste",
                        "Black pepper to taste",
                        "Corn flour",
                        "Butter"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Creamy Broccoli Soup Recipe | Healthy Homemade Soup | Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/broccoli"
                    />

                    <meta
                        name="description"
                        content="Creamy homemade broccoli soup made with fresh broccoli, potatoes, onions, garlic, and milk. A healthy vegetarian comfort food recipe that is easy to prepare and packed with flavor."
                    />

                    <meta
                        name="keywords"
                        content="broccoli soup, creamy broccoli soup, vegetarian soup, healthy soup recipe, homemade soup, broccoli potato soup, comfort food, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Creamy Broccoli Soup Recipe | Healthy Homemade Soup"
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/broccoli"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/broccoli.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Healthy homemade broccoli soup made with broccoli, potatoes, onions, garlic, and milk for a rich and comforting meal."
                    />
                </Helmet>
                <h1>Delicious homemade broccoli soup recipe.This broccoli soup is a perfect balance of nutritious ingredients and indulgent flavor, providing a comforting experience that soothes the soul. </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 large head of broccoli, chopped into florets</li>
                    <li>1 onion, diced</li>
                    <li>1 tablespoon garlic minced</li>
                    <li>1 medium potato, peeled and diced</li>
                    <li>1 cup milk (or a dairy-free alternative)</li>
                    <li>2 Cups Water</li>
                    <li>Salt and pepper to taste</li>
                </ol>
                <h2 className="ingredients">Instructions</h2>

                <h3>Prepare the White Sauce</h3>
                <ol>
                    <li>
                        In a saucepan, combine milk, corn flour, and butter. Turn on the heat and stir continuously to prevent lumps from forming.
                    </li>
                    <li>
                        Once the mixture begins to thicken, continue stirring for another 2 minutes, then remove it from the heat and set aside.
                    </li>
                </ol>

                <h3>Prepare the Broccoli Soup</h3>
                <ol>
                    <li>
                        Wash and chop the broccoli into florets. Peel and dice the potato, finely chop the onion, and mince the garlic.
                    </li>
                    <li>
                        In a large pot, combine the onion, garlic, potato, and 2 cups of water. Bring to a boil and cook for 10 minutes.
                    </li>
                    <li>
                        Add the broccoli florets and stir gently. Add more water if needed.
                    </li>
                    <li>
                        Cover the pot and cook for 4–5 minutes, or until the broccoli is tender.
                    </li>
                    <li>
                        Turn off the heat and allow the vegetables to cool for 10–15 minutes.
                    </li>
                    <li>
                        Using a blender, blend the vegetables and cooking liquid into a smooth puree.
                    </li>
                    <li>
                        Return the puree to the pot and stir in the prepared white sauce.
                    </li>
                    <li>
                        Mix well and bring the soup to a gentle boil.
                    </li>
                    <li>
                        Season with salt and black pepper to taste.
                    </li>
                    <li>
                        Serve hot and enjoy your creamy homemade broccoli soup.
                    </li>
                </ol>
                <h2>Final Product</h2>
                <Image src="/broccoli.jpg" alt="Creamy broccoli soup made with fresh broccoli, potatoes, garlic, and milk" thumbnail rounded fluid></Image>
                <div>
                    <h2>Broccoli Soup Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="64gHB7n5cBw" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="64gHB7n5cBw" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this creamy Broccoli Soup, you may also enjoy these
                        healthy vegetarian recipes:
                    </p>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/lentil" className="recipe-link">
                                Hearty Lentil Soup
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
                                Middle Eastern Couscous Salad
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/mushroom" className="recipe-link">
                                Punjabi Mushroom Masala Curry
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
                            <Link to="/yogurt" className="recipe-link">
                                Homemade Instant Pot Yogurt
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Broccoli;