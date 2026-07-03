import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import RecipeSchema from "./RecipeSchema";
import { Helmet } from "react-helmet";
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

class Brownlentils extends Component {
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
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Whole Masoor Dal Recipe | Brown Lentil Curry (Instant Pot) | Fearless Vegetarian
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/brownlentils"
          />

          <meta
            name="description"
            content="Learn how to make Whole Masoor Dal (Brown Lentil Curry) in the Instant Pot. This healthy vegan Indian lentil recipe is packed with protein, fiber, and authentic Indian spices. Perfect with basmati rice or roti."
          />

          <meta
            name="keywords"
            content="Whole Masoor Dal, Brown Lentil Curry, Sabut Masoor Dal, Instant Pot Brown Lentils, Indian Lentil Curry, Vegan Indian Recipes, Healthy Dal Recipe, Protein Rich Vegetarian Recipes, Indian Curry, Fearless Vegetarian"
          />

          <meta
            property="og:title"
            content="Whole Masoor Dal Recipe | Healthy Brown Lentil Curry"
          />

          <meta
            property="og:description"
            content="A wholesome Instant Pot Whole Masoor Dal recipe made with brown lentils, onions, tomatoes, garlic, ginger, and aromatic Indian spices. Healthy, vegan, and delicious."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/brownlentils.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/brownlentils"
          />

          <meta property="og:type" content="article" />

          <meta property="og:site_name" content="Fearless Vegetarian" />

          <meta name="robots" content="index, follow, max-image-preview:large" />

          <meta name="author" content="Fearless Vegetarian" />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Whole Masoor Dal Recipe | Brown Lentil Curry"
          />

          <meta
            name="twitter:description"
            content="Healthy Instant Pot Whole Masoor Dal made with brown lentils, onions, tomatoes, garlic, ginger, and Indian spices."
          />

          <meta
            name="twitter:image"
            content="https://fearlessvegetarian.netlify.app/brownlentils.jpg"
          />
        </Helmet>
        <RecipeSchema
          name="Whole Masoor Dal (Brown Lentil Curry)"
          description="Healthy Instant Pot Whole Masoor Dal made with brown lentils, onions, tomatoes, garlic, ginger, and aromatic Indian spices. A protein-rich vegan Indian curry."
          image="https://fearlessvegetarian.netlify.app/brownlentils.jpg"
          url="https://fearlessvegetarian.netlify.app/brownlentils"
          prepTime="PT10M"
          cookTime="PT20M"
          totalTime="PT30M"
          recipeYield="2 Servings"
          recipeCategory="Main Course"
          recipeCuisine="Indian"
          keywords="Whole Masoor Dal, Brown Lentils Curry, Instant Pot Dal, Vegan Indian Curry"

          video="https://www.youtube.com/watch?v=eL9iqpULMRk"

          ingredients={[
            "1 cup whole brown lentils",
            "1 onion",
            "3 garlic cloves",
            "1 inch ginger",
            "1 tomato",
            "2.5 cups water",
            "olive oil",
            "cumin seeds",
            "green chili",
            "turmeric",
            "coriander powder",
            "garam masala",
            "salt",
            "lime juice"
          ]}

          instructions={[
            "Saute cumin seeds.",
            "Cook onion, garlic, ginger and green chili.",
            "Add tomatoes and spices.",
            "Add lentils and water.",
            "Pressure cook for 12 minutes.",
            "Natural pressure release.",
            "Add lime juice.",
            "Serve hot."
          ]}
        />
        <h1>Whole Masoor Dal (Brown Lentil Curry)</h1>
        <p>
          Whole Masoor Dal, also known as Brown Lentil Curry or Sabut Masoor Dal,
          is a hearty North Indian dish made with whole brown lentils simmered in
          an aromatic onion, tomato, ginger, and garlic gravy. This protein-rich
          vegan recipe is perfect for serving with steamed basmati rice or fresh roti.
        </p>
        <h2>Health Benefits of Whole Masoor Dal</h2>

        <p>
          Whole brown lentils are rich in plant-based protein, dietary fiber,
          iron, folate, and essential minerals. They help support heart health,
          improve digestion, and keep you feeling full longer.
        </p>

        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>2 tablespoon olive oil</li>
          <li>1 teaspoon Cumin seeds</li>
          <li>1 Green chili pepper</li>
          <li>1 medium onion diced</li>
          <li>3 garlic cloves, minced</li>
          <li>1-inch piece fresh ginger, grated</li>
          <li>1 cup Brown lentils (Whole Masoor Dal) rinsed</li>
          <li>2.5 cups of water</li>
          <li>1 tablespoon Lime juice</li>
          <li>1/4 teaspoon Ground Turmeric (Haldi powder)</li>
          <li>1 tablespoon Coriander powder (Dhaniya powder)</li>
          <li>1/2 teaspoon Red Chili powder (Mirchi powder) adjust to taste</li>
          <li>1/2 teaspoon Garam Masala</li>
          <li>1 teaspoon Salt adjust to taste</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>Start the pressure cooker in sauté mode and let it heat. Add oil and cumin seeds. Saute for 30 seconds.</li>
          <li>When the cumin seeds starts to splutter or change color, add green chili, onions, ginger and garlic. Sauté for 3 minutes
            until the onions become golden brown while stirring frequently.</li>
          <li>Add the chopped tomatoes to the pan and cook it till the tomatoes becomes soft.</li>
          <li>Add turmeric, coriander powder, red chili powder, garam masala, and salt. Cook for 1 minute until fragrant.</li>
          <li>Add the lentils, water and stir well. Close the instant pot lid with vent in sealing position.</li>
          <li>Change the instant pot setting to manual or pressure cook mode at high pressure for 12 mins. After the instant pot beeps, let the pressure release naturally.</li>
          <li>Open the pot. Add the lime juice and stir the dal.</li>
          <li>Enjoy your lentil curry with Basmati Rice.</li>
        </ol>
        <h2>Final Product</h2>
        <Image src="/brownlentils.jpg" thumbnail rounded fluid></Image>
        <h2>Serving Suggestions</h2>

        <p>
          Enjoy this hearty Whole Masoor Dal with any of the following:
        </p>

        <ul className="custom-list">
          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Steamed basmati rice
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Jeera (cumin) rice
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Fresh roti or chapati
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Butter naan or garlic naan
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Plain yogurt or cucumber raita
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Papad and Indian pickle
          </li>

          <li>
            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
            Fresh cucumber, tomato, and onion salad
          </li>
        </ul>
        <div>
          <h2>Brown Lentils Whole Masoor Dal Preparation video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="eL9iqpULMRk" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="eL9iqpULMRk" opts={optsDesktop} />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Brownlentils;
