
import React, { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class ChickpeaLentilCurry extends Component {
    render() {
        return (
            <div className="recipe-page">
                <Helmet>
                    <title>
                        Creamy Chickpea & Lentil Curry with Methi | Fearless Vegetarian
                    </title>

                    <meta
                        name="description"
                        content="Make creamy chickpea and lentil curry with methi in a rich cashew tomato gravy. This comforting Indian vegetarian curry is packed with protein, lentils, chickpeas, and aromatic spices."
                    />

                    <meta
                        name="keywords"
                        content="chickpea lentil curry, creamy chickpea curry, methi curry, Indian vegetarian curry, cashew tomato gravy, chickpea and brown lentil recipe, healthy Indian vegetarian recipes"
                    />

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/chickpealentilcurry"
                    />

                    <meta
                        property="og:title"
                        content="Creamy Chickpea & Lentil Curry with Methi"
                    />

                    <meta
                        property="og:description"
                        content="A comforting Indian vegetarian curry made with chickpeas, brown lentils, methi, and a creamy cashew tomato gravy."
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/chickpealentilcurry.jpg"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/chickpealentilcurry"
                    />

                    <meta property="og:type" content="article" />
                </Helmet>

                <h1>
                    Creamy Chickpea & Lentil Curry with Methi | Cashew Tomato Gravy
                </h1>

                <p>
                    Enjoy a delicious and comforting Indian vegetarian curry made
                    with protein-rich chickpeas, wholesome brown lentils, and
                    flavorful methi (fenugreek leaves). This curry features a rich
                    and creamy tomato gravy prepared with cashews, ginger, and
                    garlic, creating a smooth texture and wonderful depth of
                    flavor. Aromatic Indian spices, including Kitchen King masala,
                    garam masala, and amchoor, bring everything together for a
                    satisfying homemade meal. Serve this hearty chickpea and lentil
                    curry with roti, naan, paratha, or steamed rice.
                </p>

                <Row className="cooktimerow">
                    <Col xs={6} md={4}>
                        <FontAwesomeIcon icon={faClock} /> Prep Time:
                        <br />
                        8 hours (soaking)
                    </Col>

                    <Col xs={6} md={4}>
                        <FontAwesomeIcon icon={faClock} /> Cook Time:
                        <br />
                        45 minutes
                    </Col>

                    <Col xs={12} md={4}>
                        <FontAwesomeIcon icon={faClock} /> Total Time:
                        <br />
                        8 hours 45 minutes
                    </Col>
                </Row>

                <h2>Ingredients for Chickpea & Lentil Curry</h2>

                <p>
                    The following ingredients make approximately 4 servings.
                </p>

                <h3>For the Chickpeas and Lentils</h3>

                <ul className="ingredients">
                    <li>1/2 cup dried chickpeas (kabuli chana)</li>
                    <li>1/2 cup whole brown lentils (sabut masoor dal)</li>
                    <li>Water, for soaking and pressure cooking</li>
                    <li>1/2 teaspoon salt, or to taste</li>
                    <li>1/4 teaspoon turmeric powder</li>
                </ul>

                <h3>For the Cashew Tomato Gravy</h3>

                <ul className="ingredients">
                    <li>2 medium tomatoes, roughly chopped</li>
                    <li>1 medium onion, roughly chopped</li>
                    <li>10-12 cashews</li>
                    <li>1 tablespoon ginger, chopped</li>
                    <li>4-5 garlic cloves</li>
                    <li>1 green chili, optional</li>
                    <li>2 tablespoons cooking oil or ghee</li>
                    <li>1/2 teaspoon cumin seeds</li>
                    <li>1/4 teaspoon asafoetida (hing), optional</li>
                </ul>

                <h3>Spices and Seasonings</h3>

                <ul className="ingredients">
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon red chili powder, adjust to taste</li>
                    <li>1 teaspoon Kitchen King masala</li>
                    <li>1/2 teaspoon garam masala</li>
                    <li>1/2 teaspoon amchoor (dry mango powder)</li>
                    <li>Salt to taste</li>
                    <li>1/2 teaspoon kasuri methi (dried fenugreek leaves), optional</li>
                </ul>

                <h3>For the Methi and Garnish</h3>

                <ul className="ingredients">
                    <li>1/2 cup fresh methi leaves or 1 frozen methi cube</li>
                    <li>2 tablespoons chopped fresh cilantro</li>
                    <li>1 tablespoon cream, optional</li>
                    <li>Water as needed to adjust gravy consistency</li>
                </ul>

                <h2>How to Make Creamy Chickpea & Lentil Curry</h2>

                <h3>Step 1: Soak the Chickpeas and Lentils</h3>

                <ol>
                    <li>
                        Rinse the dried chickpeas and brown lentils separately
                        under running water.
                    </li>
                    <li>
                        Soak them in plenty of water overnight, preferably for
                        8 hours or longer.
                    </li>
                    <li>
                        Drain the soaking water and rinse them again before
                        cooking.
                    </li>
                </ol>

                <h3>Step 2: Pressure Cook the Chickpeas and Lentils</h3>

                <ol>
                    <li>
                        Add the soaked chickpeas and brown lentils to a pressure
                        cooker.
                    </li>
                    <li>
                        Add fresh water, turmeric powder, and salt. Make sure
                        there is enough water to cover the legumes comfortably.
                    </li>
                    <li>
                        Pressure cook for approximately 5 whistles, then allow
                        the pressure to release naturally.
                    </li>
                    <li>
                        Check that both the chickpeas and lentils are completely
                        tender. If they are still firm, cook them for a little
                        longer.
                    </li>
                    <li>
                        Reserve some of the cooking liquid for the curry gravy.
                    </li>
                </ol>

                <h3>Step 3: Prepare the Cashew Tomato Paste</h3>

                <ol>
                    <li>
                        Soak the cashews in warm water for about 15 minutes to
                        soften them.
                    </li>
                    <li>
                        Add the chopped tomatoes, onion, ginger, garlic, green
                        chili, and soaked cashews to a blender.
                    </li>
                    <li>
                        Blend everything into a smooth and creamy paste. Add a
                        little water if needed.
                    </li>
                    <li>
                        Keep the prepared paste aside.
                    </li>
                </ol>

                <h3>Step 4: Prepare the Curry Gravy</h3>

                <ol>
                    <li>
                        Heat oil or ghee in a deep pan over medium heat.
                    </li>
                    <li>
                        Add cumin seeds and allow them to crackle. Add asafoetida
                        if using.
                    </li>
                    <li>
                        Carefully add the prepared cashew tomato paste and mix
                        well.
                    </li>
                    <li>
                        Cook for approximately 8-10 minutes, stirring regularly,
                        until the gravy thickens and the raw smell of the
                        ingredients disappears.
                    </li>
                    <li>
                        Add coriander powder, turmeric powder, red chili powder,
                        Kitchen King masala, and salt.
                    </li>
                    <li>
                        Mix well and cook for another 2-3 minutes so the spices
                        blend into the gravy.
                    </li>
                </ol>

                <h3>Step 5: Add Methi and Cook the Curry</h3>

                <ol>
                    <li>
                        Add the fresh methi leaves or frozen methi cube to the
                        prepared gravy.
                    </li>
                    <li>
                        Mix and cook for 3-4 minutes until the methi is combined
                        with the masala.
                    </li>
                    <li>
                        Add the cooked chickpeas and brown lentils along with
                        some reserved cooking liquid.
                    </li>
                    <li>
                        Stir gently and bring the curry to a gentle simmer.
                    </li>
                    <li>
                        Add amchoor and garam masala. Mix everything well.
                    </li>
                    <li>
                        Simmer for another 8-10 minutes, allowing the chickpeas
                        and lentils to absorb the flavors of the gravy.
                    </li>
                    <li>
                        Adjust the consistency by adding a little more water if
                        the curry becomes too thick.
                    </li>
                </ol>

                <h3>Step 6: Finish and Garnish</h3>

                <ol>
                    <li>
                        Crush the kasuri methi between your palms and sprinkle
                        it over the curry, if using.
                    </li>
                    <li>
                        Add chopped cilantro and gently mix.
                    </li>
                    <li>
                        For extra creaminess, stir in a tablespoon of cream
                        before turning off the heat.
                    </li>
                    <li>
                        Let the curry rest for a few minutes before serving.
                    </li>
                </ol>

                <h2>Serving Suggestions</h2>

                <p>
                    Serve this creamy chickpea and lentil curry hot with
                    steamed basmati rice, jeera rice, roti, chapati, naan, or
                    paratha. The rich cashew tomato gravy pairs beautifully
                    with freshly prepared Indian bread and rice.
                </p>

                <h2>Recipe Tips</h2>

                <ul>
                    <li>
                        <strong>Soak properly:</strong> Soaking chickpeas and
                        lentils overnight helps them cook more evenly.
                    </li>
                    <li>
                        <strong>Check tenderness:</strong> Pressure cooker
                        cooking times can vary. Make sure the chickpeas are
                        completely soft before adding them to the gravy.
                    </li>
                    <li>
                        <strong>Make it creamy:</strong> Cashews give the gravy
                        a naturally rich and creamy texture without requiring
                        heavy cream.
                    </li>
                    <li>
                        <strong>Adjust the spice:</strong> Reduce the green
                        chili and red chili powder for a milder curry.
                    </li>
                    <li>
                        <strong>Fresh or frozen methi:</strong> Both work well
                        in this recipe. If using fresh methi, wash and chop
                        the leaves before adding them.
                    </li>
                    <li>
                        <strong>Vegan option:</strong> Use oil instead of ghee
                        and skip the optional cream.
                    </li>
                </ul>

                <h2>Why You'll Love This Chickpea & Lentil Curry</h2>

                <p>
                    This homemade Indian curry brings together chickpeas,
                    brown lentils, and methi in a flavorful cashew tomato
                    gravy. It is filling, comforting, and made with everyday
                    Indian spices. The combination of legumes provides
                    plant-based protein and fiber, while the cashews give
                    the gravy a deliciously smooth texture. It is a wonderful
                    vegetarian meal for lunch or dinner.
                </p>

                <Image
                    src="/chickpealentilcurry.jpg"
                    alt="Creamy chickpea and brown lentil curry with methi in cashew tomato gravy"
                    fluid
                    rounded
                    thumbnail
                    loading="lazy"
                    className="recipe-image"
                />
                {/* Preparation Video */}
                <section className="recipe-video">
                    <h2>Chickpea and Lentil Curry Preparation Video</h2>
                    <div className="ratio ratio-1x1 video-container">
                        <iframe
                            src="https://www.youtube.com/embed/UoBYbWHnc90"
                            title="Chickpea and Lentil Curry Preparation Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <div className="related-recipes">
                    <h2>Related Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Creamy Chickpea & Lentil Curry with Methi,
                        you may also like these delicious and healthy vegetarian recipes:
                    </p>

                    <Row className="g-4">

                        {/* Dal Makhani */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/dalmakhani" className="related-recipe-link">
                                    <Image
                                        src="/dalmakhani.jpg"
                                        alt="Dal Makhani - Creamy Punjabi Lentils"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Dal Makhani – Creamy Punjabi Lentils</h3>

                                    <p>
                                        A rich and creamy Punjabi lentil curry made with
                                        black lentils, kidney beans, and aromatic spices.
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
                                <Link to="/lentil" className="related-recipe-link">
                                    <Image
                                        src="/lentil.jpg"
                                        alt="Masoor Dal - Red Lentil Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Masoor Dal (Red Lentil Curry)</h3>

                                    <p>
                                        A comforting red lentil curry prepared with
                                        tomatoes, onions, and traditional Indian spices.
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
                                <Link to="/blackeyedbeans" className="related-recipe-link">
                                    <Image
                                        src="/blackeyedbeans.jpg"
                                        alt="Black Eyed Peas Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Black Eyed Peas Curry</h3>

                                    <p>
                                        A hearty Indian curry made with protein-rich
                                        black-eyed peas, tomatoes, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Rajma */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/rajmah" className="related-recipe-link">
                                    <Image
                                        src="/rajmah.jpg"
                                        alt="Rajma - Punjabi Kidney Bean Curry"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Rajma (Kidney Bean Curry)</h3>

                                    <p>
                                        A popular North Indian curry featuring tender
                                        kidney beans simmered in a flavorful tomato gravy.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Traditional Moong Dal Khichdi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link to="/khichdi" className="related-recipe-link">
                                    <Image
                                        src="/khichdi.jpg"
                                        alt="Traditional Moong Dal Khichdi"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Traditional Moong Dal Khichdi</h3>

                                    <p>
                                        A wholesome one-pot Indian comfort food made
                                        with rice, yellow moong dal, and mild spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default ChickpeaLentilCurry;