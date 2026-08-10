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
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

class Poha extends Component {
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
          name="Traditional Indian Poha (Flattened Rice Breakfast)"
          description="Traditional Indian Poha made with flattened rice, potatoes, peanuts, curry leaves, onions, and aromatic spices. This quick, healthy, and flavorful vegetarian breakfast is ready in just 35 minutes."
          image="https://fearlessvegetarian.netlify.app/poha.jpg"
          url="https://fearlessvegetarian.netlify.app/poha"

          prepTime="PT15M"
          cookTime="PT20M"
          totalTime="PT35M"

          recipeYield="2 Servings"

          recipeCategory="Breakfast"
          recipeCuisine="Indian"

          keywords="Poha Recipe, Indian Breakfast, Flattened Rice Recipe, Kanda Poha, Maharashtrian Poha, Healthy Vegetarian Breakfast, Easy Indian Breakfast, Fearless Vegetarian"

          video="https://www.youtube.com/watch?v=2FO9-kIQs20"

          instructions={[
            "Rinse the thick poha gently in water and drain well.",
            "Dry roast the peanuts until crisp and set aside.",
            "Heat olive oil and sauté the diced potatoes until tender.",
            "Add mustard seeds and cumin seeds until they splutter.",
            "Add chopped onions and sauté until translucent.",
            "Add green chilies and curry leaves.",
            "Mix in the roasted peanuts.",
            "Add turmeric, salt, and sugar.",
            "Gently fold in the rinsed poha.",
            "Cover and steam on low heat for 2 minutes.",
            "Garnish with chopped cilantro.",
            "Serve hot with fresh lemon juice."
          ]}

          nutrition={{
            calories: "290 calories",
            carbohydrateContent: "42 g",
            proteinContent: "8 g",
            fatContent: "10 g",
            fiberContent: "5 g",
            sugarContent: "4 g",
            sodiumContent: "520 mg"
          }}

          ingredients={[
            "1.5 cups thick poha (flattened rice)",
            "2 tablespoons olive oil",
            "1 large potato, diced",
            "2 tablespoons peanuts",
            "1 onion, finely chopped",
            "1 teaspoon chopped green chilies",
            "8–9 curry leaves",
            "1/2 teaspoon mustard seeds",
            "1/2 teaspoon cumin seeds",
            "1/4 teaspoon turmeric powder",
            "1 teaspoon sugar",
            "1 teaspoon salt",
            "2–3 tablespoons chopped cilantro",
            "Fresh lemon juice for serving"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Poha Recipe | Easy Indian Flattened Rice Breakfast | Fearless Vegetarian
          </title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/poha" />
          <meta
            name="description"
            content="Experience a quick and wholesome breakfast with our flavorful Poha Delight recipe! Perfect for a delicious start to your day."
          />
          <meta
            name="keywords"
            content="poha, breakfast recipe, Indian breakfast, quick and wholesome, flattened rice, 
            nutritious morning meal, aromatic spices, easy breakfast, flavorful poha, Indian cuisine, 
            breakfast delight, simple and tasty, morning comfort food, vegetarian breakfast, 
            Indian culinary delight, Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
          />
          <meta property="og:title" content="Poha Delight: Quick Wholesome Breakfast Recipe!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/poha" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/poha.jpg" />
          <meta property="og:description" content="Experience a quick and wholesome breakfast with our flavorful Poha Delight recipe! Perfect for a delicious start to your day." />
        </Helmet>
        <h1>Traditional Indian Poha Recipe (Flattened Rice Breakfast)</h1>

        <p>
          Poha is a popular Indian breakfast dish made with flattened rice, potatoes,
          peanuts, curry leaves, and aromatic spices. This quick, nutritious, and
          flavorful recipe is perfect for busy mornings and can be prepared in under an hour.
        </p>
        <p>
          Poha is one of India's most beloved breakfast dishes because it is quick to prepare, light yet filling, and packed with comforting flavors.
          Whether you're making it for a weekday breakfast or a leisurely weekend brunch, this traditional recipe is sure to become a family favorite.
        </p>
        <h2>Health Benefits of Poha</h2>

        <p>
          Poha is naturally light, easy to digest, and provides a good source of carbohydrates for sustained energy. Peanuts add healthy fats and protein,
          while potatoes and curry leaves contribute vitamins, minerals, and dietary fiber, making Poha a nutritious breakfast choice.
        </p>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 35 minutes</Col>
        </Row>
        <div className="ingredients"><h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1.5 cups (Poha) thick variety flattened rice easily found in Indian Grocery Store</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon sugar or as required</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon salt </li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/4 teaspoon turmeric powder (ground turmeric)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 tablespoons peanuts</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 teaspoon mustard seeds</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1/2 teaspoon cumin seeds</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 whole potato big size or 2 potatoes small size chopped into square cubes</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 teaspoon green chilies – finely chopped or 1 to 2 green chillies</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              1 onion finely chopped</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              8 to 9 curry leaves (medium to large sized)</li>
            <li>
              <FontAwesomeIcon icon={faCarrot} className="ingredient-icon" />
              2 to 3 tablespoons coriander leaves – chopped (cilantro)</li>
          </ul>
        </div>
        <div className="ingredients"><h3>Instructions</h3>
          <ol>
            <li>Take 1.5 cups of thick or medium-thick Poha (thick variety flattened rice) first. Rinse them in clean running water in a strainer or colander thrice.
              Rinsing in fresh clean water softens them as they absorb water. Make sure not to overdo the rinsing. This will make them mushy and pasty.</li>
            <li>Dry roast 2 tablespoons peanuts in a heavy pan on medium-low heat until they become crunchy. Stir often for even cooking of the peanuts.
              The peanuts should be roasted well and must not have any rawness in them. Roast till they become crunchy and have a few blisters on their skins.</li>
            <li>Peel 1 medium to large size potato and chop into small cubes. In the same heavy non stick pan, heat 2 to 2.5 tablespoons olive oil.
              Saute the potatoes in medium hot oil. Make sure to cut them in small cubes or else they will take more time to cook.</li>
            <li>In the same pan, there will be some oil left. Add 1/2 teaspoon mustard seeds to the hot oil. If there is no oil, add 1 tablespoon olive oil and heat it gently.</li>
            <li>When the mustard seeds splutter, add 1/2 teaspoon cumin seeds.</li>
            <li>When the cumin seeds splutter, add ⅓ cup finely chopped onions. Sauté the onions until they soften and become translucent.</li>
            <li>Now, add 8 to 9 curry leaves (medium to large size), 1 teaspoon chopped green chilies and the roasted peanuts. Mix well on low heat.</li>
            <li>Add the Poha (thick variety flattened rice).</li>
            <li>Mix gently with the rest of the ingredients.</li>
            <li>Add the potatoes and mix very well. Cover the pan tightly with a lid and steam the Poha(thick variety flattened rice) for about 2 minutes on low heat. Remove the lid and check the taste. If required, add more salt and sugar.</li>
            <li>Garnish with 2 to 3 tablespoons chopped coriander.</li>
            <li>Mix gently.</li>
            <li>Your Poha (thick variety flattened rice) is now ready. Squeeze some lemon juice before eating your Poha (thick variety flattened rice).</li>
          </ol>
        </div>
        <h2>Final Product</h2>
        <Image
          src="/poha.jpg"
          alt="Traditional Indian poha made with flattened rice, potatoes, peanuts, and curry leaves"
          fluid
          thumbnail
          rounded
          loading="lazy"
          className="recipe-image"
        />
        <div>
          <h2>Poha Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="2FO9-kIQs20" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="2FO9-kIQs20" opts={optsDesktop} />
          </MediaQuery>
        </div>
        {/* Related Vegetarian Breakfast Recipes */}
        <section className="related-recipes">
          <h2>Related Vegetarian Breakfast Recipes</h2>

          <p className="related-recipes-intro">
            If you enjoyed this Poha recipe, you may also enjoy these delicious
            vegetarian breakfast and healthy meal ideas:
          </p>

          <Row className="g-4">

            {/* Avocado Toast */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/avocado" className="related-recipe-link">
                  <Image
                    src="/avocado.jpg"
                    alt="Avocado Toast"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Avocado Toast</h3>

                  <p>
                    Creamy avocado spread over crispy toast for a simple,
                    nutritious, and satisfying vegetarian breakfast.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Bombay Masala Vegetable Sandwich */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/masalasandwich" className="related-recipe-link">
                  <Image
                    src="/masalasandwich.png"
                    alt="Bombay Masala Vegetable Sandwich"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Bombay Masala Vegetable Sandwich</h3>

                  <p>
                    A flavorful Indian-style vegetable sandwich filled with
                    spiced potatoes and fresh vegetables.
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
                <Link to="/quinoamoongdal" className="related-recipe-link">
                  <Image
                    src="/quinoamoongdal.jpg"
                    alt="Quinoa Moong Dal Khichdi"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Quinoa Moong Dal Khichdi</h3>

                  <p>
                    A wholesome one-pot meal made with nutritious quinoa,
                    protein-rich moong dal, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Middle Eastern Couscous Salad */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/couscousbalsamic" className="related-recipe-link">
                  <Image
                    src="/couscousbalsamic.jpg"
                    alt="Middle Eastern Couscous Salad"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Middle Eastern Couscous Salad</h3>

                  <p>
                    A fresh and colorful couscous salad packed with vegetables,
                    herbs, and Mediterranean-inspired flavors.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Chukauni */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/potatosalad" className="related-recipe-link">
                  <Image
                    src="/potatosalad.png"
                    alt="Chukauni Nepali Yogurt Potato Salad"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Chukauni – Nepali Yogurt Potato Salad</h3>

                  <p>
                    A refreshing Nepali potato salad made with creamy yogurt,
                    potatoes, herbs, and aromatic spices.
                  </p>

                  <span className="related-recipe-button">
                    View Recipe
                  </span>
                </Link>
              </article>
            </Col>

            {/* Homemade Instant Pot Yogurt */}
            <Col xs={12} sm={6} md={4}>
              <article className="related-recipe-card">
                <Link to="/yogurt" className="related-recipe-link">
                  <Image
                    src="/yogurt.jpg"
                    alt="Homemade Instant Pot Yogurt"
                    fluid
                    rounded
                    className="related-recipe-image"
                  />

                  <h3>Homemade Instant Pot Yogurt</h3>

                  <p>
                    Creamy, smooth, and homemade yogurt prepared easily using
                    an Instant Pot.
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

export default Poha