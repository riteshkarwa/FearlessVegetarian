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

class Lentil extends Component {
  render() {
    const optsDesktop = {
      height: '600',
      width: '700',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };
    return (
      <div>
        <RecipeSchema
          name="Masoor Dal Delight: Lentil Soup Curry"
          description="A comforting Indian lentil soup made with Masoor Dal, Toor Dal, and Chana Dal, seasoned with aromatic spices and served with rice or roti."
          image="https://fearlessvegetarian.netlify.app/lentil.jpg"
          url="https://fearlessvegetarian.netlify.app/lentil"
          prepTime="PT15M"
          cookTime="PT45M"
          totalTime="PT60M"
          recipeYield="2 Servings"
          ingredients={[
            "1 cup Masoor Dal",
            "1 cup Toor Dal",
            "1 cup Chana Dal",
            "1 onion",
            "1 tomato",
            "1 teaspoon cumin powder",
            "1 tablespoon coriander powder",
            "1 teaspoon garam masala",
            "Turmeric powder",
            "Red chili powder",
            "Kasoori Methi",
            "Salt"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Masoor Dal Delight: Lentil Soup Curry</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/lentil" />
          <meta
            name="description"
            content="Masoor Dal Delight: A Comforting Lentil Soup Curry Bursting with Flavor. Perfect for a Wholesome Meal."
          />
          <meta
            name="keywords"
            content="masoor dal, lentil soup curry, flavorful dal recipe, comfort food, nutritious lentil curry, masoor dal delight, 
            vegetarian dishes, Indian cuisine, hearty lentil soup, easy-to-make curry, wholesome comfort meal, aromatic spices, 
            homemade dal, flavorful and comforting, lentil curry ideas, recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
          />
          <meta property="og:title" content="Masoor Dal Delight: Lentil Soup Curry" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/lentil" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/lentil.jpg" />
          <meta property="og:description" content="Masoor Dal Delight: A Comforting Lentil Soup Curry Bursting with Flavor. Perfect for a Wholesome Meal." />
        </Helmet>
        <h1>Lentil Soup served with White Rice. Lentils are easy on your tummy and good source of Protein</h1>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1 teaspoon ginger powder</li>
          <li>1 teaspoon onion powder </li>
          <li>1 tablespoon coriander powder </li>
          <li>1/8 teaspoon tumeric powder</li>
          <li>1/8 teaspoon red chili powder</li>
          <li>1 tablespoon curry powder</li>
          <li>1 teaspoon cumin powder</li>
          <li>1 teaspoon Garam Masala powder</li>
          <li>1 cup of Masoor Dal (Red Lentil) found in Indian Store</li>
          <li>1 cup of Toor Dal (Red Lentil) found in Indian Store</li>
          <li>1 cup of Chana Dal (Red Lentil) found in Indian Store</li>
          <li>Salt as per taste</li>
          <li>Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
          <li>1 whole onion</li>
          <li>1 whole tomato</li>
        </ol>
        <div className="ingredients">Instruction</div>

        <ol>
          <li>Take 1 cup each of Masoor dal, Toor dal, and Chana dal, and mix them together. Add the mixed dals to a pot or pressure cooker.
            Rinse it well a few times. Drain the water completely.</li>
          <li>Add 5 cups of water and pressure cook it for 10 min. Make sure the lentils turns soft. Press down few lentils between your thumb and fore fingers.
            They should get mashed easily. Heat the lentils a little more if the lentils are not soft.
          </li>
          <li>Heat 2 tbsp olive oil on a medium heat in a non stick pot. </li>
          <li>Add one after the other - 1/2 teaspoon cumin seeds, 2 chopped garlic cloves and 1 to 2 broken dried red chilies. You can also add a bay leaf
            or a sprig of curry leaves (pat dry).</li>
          <li>Add chopped onions and tomato and let it cook for 5 minutes.</li>
          <li>When the garlic turns slightly golden, turn the heat to low (or turn off if the pan is too hot). </li>
          <li>Add 1 pinch hing (Asafoetida) found in the Indian Grocery store, 1/4 teaspoon turmeric and 1/4 to 1/2 teaspoon red chili powder
            (adjust to taste). </li>
          <li>Add a pinch of Garam Masala found in the Indian Grocery store. Chili powder tends to burn quickly so pour this immediately to the
            pressure cooked lentil. </li>
          <li>Add the pressure cooked lentil to the pot and 1 cup of water.</li>
          <li>Constantly stir the potatoes so they do not stick to the bottom of the pan</li>
          <li>Add salt as per taste and Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
          <li>You can garnish the lentil soup by sprinkling some finely chopped coriander leaves & lemon juice.</li>
          <li>Serve Masoor Dal with rice or roti, mango pickle, veggie salad. </li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="/lentil.jpg" alt="A bowl of hearty Masoor Dal Lentil Soup, showcasing the rich blend of red lentils, aromatic spices, and vibrant vegetables" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="/lentil.jpg" alt="A bowl of hearty Masoor Dal Lentil Soup, showcasing the rich blend of red lentils, aromatic spices, and vibrant vegetables" thumbnail rounded width="60%" height="60%"></Image>
        </MediaQuery>
        <div>
          <br />
          <h2>Lentil Soup / Tadka Daal Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="LLafY-6nd3M" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="LLafY-6nd3M" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this Masoor Dal (Lentil Soup Curry), you may also like:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: "0" }}>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon
                icon={faLeaf}
                className="recipe-link"
              />
              <Link to="/dalmakhani" className="recipe-link">
                Dal Makhani – Slow-Cooked Punjabi Lentils
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon
                icon={faLeaf}
                className="recipe-link"
              />
              <Link to="/rajmah" className="recipe-link">
                Rajmah (Kidney Bean Curry)
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon
                icon={faLeaf}
                className="recipe-link"
              />
              <Link to="/blackeyedbeans" className="recipe-link">
                Black Eyed Peas Curry (Lobia Masala)
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon
                icon={faLeaf}
                className="recipe-link"
              />
              <Link to="/quinoamoongdal" className="recipe-link">
                Quinoa Moong Dal Khichdi
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon
                icon={faLeaf}
                className="recipe-link"
              />
              <Link to="/besan" className="recipe-link">
                Besan Curry (Chickpea Flour Curry)
              </Link>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Lentil;