import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class TawaPulao extends Component {
    render() {
        return (
            <div>
                <RecipeSchema
                    name="Mumbai Tawa Pulao"
                    description="A spicy Mumbai street-style vegetable rice recipe made with cooked rice, green peas, vegetables, tomatoes, capsicum, and aromatic pav bhaji masala."
                    image="https://fearlessvegetarian.netlify.app/tawapulao.jpg"
                    url="https://fearlessvegetarian.netlify.app/tawapulao"
                    prepTime="PT15M"
                    cookTime="PT25M"
                    totalTime="PT40M"
                    recipeYield="2-3 Servings"
                    ingredients={[
                        "1 cup rice",
                        "1.5 cups water",
                        "1/2 cup green peas",
                        "1/4 teaspoon turmeric powder",
                        "1 teaspoon ghee or butter",
                        "Salt to taste",
                        "2 tablespoons cooking oil",
                        "1 tablespoon butter (optional)",
                        "1 teaspoon cumin seeds",
                        "1 medium onion, finely chopped",
                        "1 green chili, finely chopped",
                        "1 teaspoon ginger-garlic paste",
                        "1 medium capsicum, chopped",
                        "2 medium tomatoes, finely chopped",
                        "1/2 teaspoon red chili powder",
                        "1/2 teaspoon coriander powder",
                        "1.5 teaspoons pav bhaji masala",
                        "1/4 teaspoon garam masala",
                        "1 tablespoon lemon juice",
                        "Fresh coriander leaves for garnish"
                    ]}
                />

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Mumbai Tawa Pulao Recipe | Spicy Street-Style Vegetable Rice |
                        Fearless Vegetarian
                    </title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/tawapulao"
                    />

                    <meta
                        name="description"
                        content="Make delicious Mumbai Tawa Pulao at home with this easy street-style vegetable rice recipe. Prepared with peas, capsicum, tomatoes, cooked rice, and flavorful pav bhaji masala."
                    />

                    <meta
                        name="keywords"
                        content="Mumbai tawa pulao, tawa pulao recipe, street style tawa pulao, Mumbai street food, vegetable pulao, pav bhaji masala rice, spicy vegetable rice, Indian rice recipes, vegetarian rice recipes, easy pulao recipe, homemade tawa pulao, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Mumbai Tawa Pulao Recipe | Spicy Street-Style Vegetable Rice"
                    />

                    <meta
                        property="og:description"
                        content="Enjoy authentic Mumbai street-style Tawa Pulao made with vegetables, cooked rice, and aromatic pav bhaji masala."
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/tawapulao"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/tawapulao.jpg"
                    />

                    <meta property="og:type" content="article" />

                    <meta
                        name="robots"
                        content="index, follow, max-image-preview:large"
                    />
                </Helmet>

                <h1>
                    Mumbai Tawa Pulao Recipe - Spicy Street-Style Vegetable Rice
                </h1>

                <p>
                    Mumbai Tawa Pulao is a popular Indian street food known for its
                    vibrant colors, spicy flavor, and delicious aroma. This flavorful
                    vegetable rice is prepared on a large flat tawa using cooked rice,
                    green peas, capsicum, onions, tomatoes, and aromatic Indian spices.
                </p>

                <p>
                    The secret to its delicious street-style flavor is pav bhaji masala,
                    which gives the rice its signature taste. The vegetables are cooked
                    with butter, spices, and tomatoes before being combined with fluffy
                    rice to create a delicious and satisfying meal.
                </p>

                <p>
                    This easy homemade Mumbai Tawa Pulao is perfect for lunch, dinner,
                    or when you want to enjoy the flavors of Mumbai street food at home.
                    Serve it hot with yogurt, raita, or a squeeze of fresh lemon juice.
                </p>

                <Row className="cooktimerow">
                    <Col>
                        <span className="material-symbols-outlined">
                            restaurant_menu
                        </span>{" "}
                        Yields: 2-3 Servings
                    </Col>
                </Row>

                <Row className="cooktimerow">
                    <Col>
                        <FontAwesomeIcon icon={faClock} /> Cooking Time: 40 minutes
                    </Col>
                </Row>

                <div className="ingredients">
                    <h3>Ingredients</h3>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 cup rice
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1.5 cups water
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 cup green peas
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/4 teaspoon turmeric powder
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon ghee or butter
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            Salt to taste
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 tablespoons cooking oil
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 tablespoon butter (optional)
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon cumin seeds
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 medium onion, finely chopped
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 green chili, finely chopped
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 teaspoon ginger-garlic paste
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 medium capsicum, chopped
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            2 medium tomatoes, finely chopped
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 teaspoon red chili powder
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/2 teaspoon coriander powder
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1.5 teaspoons pav bhaji masala
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1/4 teaspoon garam masala
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            1 tablespoon lemon juice
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
                            Fresh coriander leaves for garnish
                        </li>
                    </ul>
                </div>

                <div className="ingredients">
                    <h3>Instructions</h3>

                    <ol>
                        <li>
                            <strong>Prepare the Rice:</strong> Take 1 cup of rice and add
                            1.5 cups of water, green peas, turmeric powder, ghee or butter,
                            and salt. Cook until the rice is fluffy and the grains are
                            separate. Set aside.
                        </li>

                        <li>
                            Heat 2 tablespoons of cooking oil in a large tawa or wide pan.
                            Add cumin seeds and let them crackle.
                        </li>

                        <li>
                            Add the finely chopped onion and green chili. Sauté until the
                            onion becomes soft and translucent.
                        </li>

                        <li>
                            Add ginger-garlic paste and cook for about a minute until
                            fragrant.
                        </li>

                        <li>
                            Add the chopped capsicum and sauté for 2-3 minutes, keeping it
                            slightly crunchy.
                        </li>

                        <li>
                            Add the chopped tomatoes and cook until they soften and become
                            slightly mushy.
                        </li>

                        <li>
                            Add red chili powder, coriander powder, pav bhaji masala,
                            garam masala, and salt to taste. Mix well and cook until the
                            spices are fragrant.
                        </li>

                        <li>
                            Add a little water if needed to help the masala cook and form
                            a flavorful mixture.
                        </li>

                        <li>
                            Add the cooked rice and peas to the tawa. Gently mix everything
                            together so the rice is evenly coated with the masala.
                        </li>

                        <li>
                            Add butter if desired and toss the rice gently for 2-3 minutes
                            over medium heat.
                        </li>

                        <li>
                            Add lemon juice and freshly chopped coriander leaves. Mix
                            gently.
                        </li>

                        <li>
                            Serve hot Mumbai Tawa Pulao with yogurt, raita, or lemon wedges.
                            Enjoy!
                        </li>
                    </ol>
                </div>

                <h2>Final Product</h2>

                <Image
                    src="/tawapulao.jpg"
                    alt="Mumbai Tawa Pulao spicy street-style vegetable rice with peas, capsicum, tomatoes, and pav bhaji masala"
                    fluid
                    thumbnail
                    rounded
                    loading="lazy"
                    className="recipe-image"
                />

                {/* Preparation Video */}
                <section className="recipe-video">
                    <h2>Mumbai Tawa Pulao Preparation Video</h2>
                    <div className="ratio ratio-1x1 video-container">
                        <iframe
                            src="https://www.youtube.com/embed/TEnfDsNPTzM"
                            title="Mumbai Tawa Pulao Preparation Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* You May Also Like */}
                <section className="related-recipes">
                    <h2>You May Also Like</h2>

                    <p className="related-recipes-intro">
                        If you enjoyed this Mumbai Tawa Pulao, you may also like
                        these delicious homemade vegetarian recipes:
                    </p>

                    <Row className="g-4">
                        {/* Pav Bhaji */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/pavbhaji" className="related-recipe-link">
                                    <Image
                                        src="/pavbhaji.jpg"
                                        alt="Mumbai-style Pav Bhaji with buttery vegetable curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Pav Bhaji</h3>

                                    <p>
                                        A popular Mumbai street food made with mashed
                                        vegetables and aromatic pav bhaji masala.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Aloo Gobi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/aloogobi" className="related-recipe-link">
                                    <Image
                                        src="/aloogobi.jpg"
                                        alt="Indian Aloo Gobi potato and cauliflower curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Aloo Gobi</h3>

                                    <p>
                                        A comforting Indian vegetable dish made with
                                        potatoes, cauliflower, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Saag Paneer */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/paneer" className="related-recipe-link">
                                    <Image
                                        src="/paneer.jpg"
                                        alt="Indian-style Saag Paneer with spinach and paneer"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Saag Paneer</h3>

                                    <p>
                                        A flavorful North Indian curry made with spinach,
                                        paneer, and traditional Indian spices.
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

export default TawaPulao;