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
          name="Traditional Indian Poha"
          description="Traditional Indian Poha made with flattened rice, potatoes, peanuts, curry leaves, onions, and aromatic spices. A quick and healthy vegetarian breakfast recipe."
          image="https://fearlessvegetarian.netlify.app/poha.jpg"
          url="https://fearlessvegetarian.netlify.app/poha"
          prepTime="PT15M"
          cookTime="PT20M"
          totalTime="PT35M"
          recipeYield="2 Servings"
          ingredients={[
            "1.5 cups thick poha (flattened rice)",
            "1 teaspoon sugar",
            "1 teaspoon salt",
            "1/4 teaspoon turmeric powder",
            "2 tablespoons peanuts",
            "1/2 teaspoon mustard seeds",
            "1/2 teaspoon cumin seeds",
            "1 large potato, diced",
            "1 teaspoon green chilies, chopped",
            "1 onion, finely chopped",
            "8 to 9 curry leaves",
            "2 to 3 tablespoons coriander leaves",
            "2 tablespoons olive oil",
            "Lemon juice for serving"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Traditional Poha Recipe | Easy Indian Flattened Rice Breakfast | Fearless Vegetarian
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
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 35 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1.5 cups (Poha) thick variety flattened rice easily found in Indian Grocery Store</li>
          <li>1 teaspoon sugar or as required</li>
          <li>1 teaspoon salt </li>
          <li>1/4 teaspoon turmeric powder (ground turmeric)</li>
          <li>2 tablespoons peanuts</li>
          <li>1/2 teaspoon mustard seeds</li>
          <li>1/2 teaspoon cumin seeds</li>
          <li>1 whole potato big size or 2 potatoes small size chopped into square cubes</li>
          <li>1 teaspoon green chilies – finely chopped or 1 to 2 green chillies</li>
          <li>1 onion finely chopped</li>
          <li>8 to 9 curry leaves (medium to large sized)</li>
          <li>2 to 3 tablespoons coriander leaves – chopped (cilantro)</li>
        </ol>
        <div className="ingredients">Instruction</div>
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
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="/poha.jpg" alt="Traditional Indian poha made with flattened rice, potatoes, peanuts, and curry leaves" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="/poha.jpg" alt="Traditional Indian poha made with flattened rice, potatoes, peanuts, and curry leaves" thumbnail rounded fluid width="50%" height="50%"></Image>
        </MediaQuery>
        <div>
          <h2>Poha Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="2FO9-kIQs20" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="2FO9-kIQs20" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Breakfast Recipes</h2>

          <p>
            If you enjoyed this Poha recipe, you may also enjoy these delicious
            vegetarian breakfast and healthy meal ideas:
          </p>

          <ul className="custom-list">
            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/avocado" className="recipe-link">
                Avocado Toast
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
              <Link to="/masalasandwich" className="recipe-link">
                Bombay Masala Vegetable Sandwich
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
              <Link to="/potatosalad" className="recipe-link">
                Chukauni – Nepali Yogurt Potato Salad
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

export default Poha