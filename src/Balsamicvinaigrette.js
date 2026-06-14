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
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class BalsamicVinaigretteDish extends Component {
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
                    name="Middle Eastern Couscous Salad with Balsamic Vinaigrette"
                    description="A fresh and colorful Middle Eastern-inspired couscous salad made with cucumber, red bell pepper, purple cabbage, red onion, parsley, toasted walnuts, and fluffy couscous tossed in a tangy balsamic vinaigrette. Perfect for meal prep, lunch, or a healthy vegetarian dinner."
                    image="https://fearlessvegetarian.netlify.app/couscousbalsamic.jpg"
                    url="https://fearlessvegetarian.netlify.app/couscousbalsamic"
                    prepTime="PT20M"
                    cookTime="PT10M"
                    totalTime="PT30M"
                    recipeYield="4 Servings"
                    ingredients={[
                        "1.5 cups cucumber, diced",
                        "1 cup red bell pepper, diced",
                        "1 cup purple cabbage, shredded",
                        "3/4 cup red onion, finely chopped",
                        "1/2 cup green onion, chopped",
                        "1/2 cup fresh parsley, chopped",
                        "90g toasted walnuts, chopped",
                        "1 cup dry couscous, cooked and cooled",
                        "3 tablespoons balsamic vinegar",
                        "2 tablespoons extra virgin olive oil",
                        "1 teaspoon Dijon mustard",
                        "1 teaspoon maple syrup (optional)",
                        "1/2 teaspoon ground cumin",
                        "Salt to taste",
                        "Black pepper to taste"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Middle Eastern Couscous Salad with Balsamic Vinaigrette | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/couscousbalsamic" />
                    <meta
                        name="description"
                        content="Fresh and colorful Middle Eastern Couscous Salad made with cucumber, bell pepper, cabbage, parsley, toasted walnuts, and a tangy balsamic vinaigrette. Perfect for meal prep, lunch, or a healthy vegetarian dinner."
                    />
                    <meta
                        name="keywords"
                        content="Middle Eastern couscous salad, couscous recipe, vegan couscous salad, vegetarian couscous, healthy couscous recipe, Mediterranean salad, balsamic vinaigrette salad, plant based meal, vegetable couscous salad, 
                        walnut couscous salad, parsley couscous, easy vegan lunch, healthy vegetarian dinner, meal prep salad, 
                        colorful vegetable salad, cucumber couscous, red bell pepper salad, cabbage salad recipe, vegan Mediterranean recipe, Fearless Vegetarian"
                    />
                    <meta property="og:title" content="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/couscousbalsamic" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/couscousbalsamic.jpg" />
                    <meta property="og:description" content="Enjoy a vibrant Middle Eastern-inspired couscous salad made with cucumber, red bell pepper, purple cabbage, red onion, fresh parsley, green onions, and toasted walnuts. Tossed in a tangy balsamic vinaigrette, this healthy vegetarian and vegan recipe is perfect for lunch, dinner, or meal prep" />
                </Helmet>
                <h1>Middle Eastern Couscous Salad with Balsamic Vinaigrette</h1>
                <p>
                    This colorful Middle Eastern-inspired couscous salad combines fluffy
                    couscous, crisp vegetables, fresh parsley, and toasted walnuts tossed in
                    a tangy balsamic vinaigrette. Perfect for meal prep, healthy lunches,
                    picnics, or a light vegetarian dinner.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 20 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1.5 cups (225g) cucumber, diced</li>
                    <li>1 cup (150g) red bell pepper, diced</li>
                    <li>1 cup (100g) purple cabbage, shredded</li>
                    <li>3/4 cup (100g) red onion, finely chopped</li>
                    <li>1/2 cup (25g) green onion, chopped</li>
                    <li>1/2 cup (25g) fresh parsley, chopped</li>
                    <li>90g toasted walnuts, chopped</li>
                    <li>1 cup dry couscous, cooked and cooled</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>
                        Prepare the couscous according to the package instructions. Fluff with a fork and allow it to cool completely.
                    </li>
                    <li>
                        Toast the walnuts in a dry skillet over medium heat for 3–4 minutes until fragrant. Let them cool, then roughly chop.</li>
                    <li>
                        In a large mixing bowl, combine the cucumber, red bell pepper, purple cabbage, red onion, green onion, and parsley.</li>
                    <li>
                        Add the cooled couscous and toasted walnuts to the bowl.</li>
                    <li>
                        In a small bowl or jar, whisk together the balsamic vinegar, olive oil, Dijon mustard, maple syrup (if using), cumin, salt, and black pepper until well combined.
                    </li>
                    <li>
                        Pour the vinaigrette over the couscous mixture</li>
                    <li>
                        Toss gently until all ingredients are evenly coated with the dressing.</li>
                    <li>
                        Taste and adjust seasoning with additional salt, pepper, or balsamic vinegar if desired.</li>
                    <li>
                        Refrigerate for 15–30 minutes before serving to allow the flavors to meld together.</li>
                    <li>
                        Serve chilled or at room temperature and enjoy.
                    </li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/couscousbalsamic.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/couscousbalsamic.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Middle Eastern Couscous Salad Video Recipe</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Nbi0LcFISjI" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Nbi0LcFISjI" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Middle Eastern Couscous Salad, you may also like
                        these healthy vegetarian recipes:
                    </p>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/couscousblackbeanbowl" className="recipe-link">
                                Couscous Black Bean Bowl
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
                            <Link to="/potatosalad" className="recipe-link">
                                Chukauni – Nepali Yogurt Potato Salad
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/avocado" className="recipe-link">
                                Avocado Toast
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
export default BalsamicVinaigretteDish;