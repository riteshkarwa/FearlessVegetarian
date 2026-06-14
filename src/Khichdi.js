import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema"
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Khichdi extends Component {
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
          name="Moong Dal Khichdi"
          description="Comforting Indian one-pot meal made with rice, yellow moong dal, vegetables, and spices."
          image="https://fearlessvegetarian.netlify.app/khichdi.jpg"
          url="https://fearlessvegetarian.netlify.app/khichdi"
          prepTime="PT20M"
          cookTime="PT30M"
          totalTime="PT50M"
          recipeYield="2 Servings"
          ingredients={[
            "1/2 cup moong dal",
            "1/2 cup rice",
            "1 onion",
            "1 tomato",
            "3 potatoes",
            "1/4 cup peas",
            "1 tsp cumin seeds",
            "1 tsp ginger",
            "4 cups water"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Moong Dal Khichdi Recipe | Easy One-Pot Indian Comfort Food | Fearless Vegetarian</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/khichdi" />
          <meta
            name="description"
            content="Learn how to make comforting Moong Dal Khichdi, a healthy one-pot Indian dish made with rice, yellow lentils, vegetables, and aromatic spices. Perfect for a light lunch or dinner."
          />
          <meta
            name="keywords"
            content="Recipes, cooking, cooking tutorial, Fearless Vegetarian, vegan, Khichdi, South Asian stew, Moong dal, Rice, 
            Long-grain rice, Yellow moong dal, Split mung beans, Tomatoes, Onion, Cumin, Comforting food, Lentils, Family recipe
            One-pot meal, Indian cuisine, Homemade khichdi, recipes, cooking, cooking tutorial, Fearless Vegetarian, vegan"
          />
          <meta property="og:title" content="Khichdi is a comforting and mild South Asian stew" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/khichdi" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/khichdi.jpg" />
          <meta property="og:description" content="Khichdi is a comforting and mild South Asian stew typically made with moong dal lentils and rice" />
        </Helmet>
        <h1>
          Moong Dal Khichdi: Easy One-Pot Indian Comfort Food
        </h1>
        <p>
          Khichdi is one of India's most beloved comfort foods. Made with rice,
          yellow moong dal, vegetables, and simple spices, this nourishing
          one-pot meal is easy to digest, protein-rich, and incredibly satisfying.
        </p>

        <p>
          Whether you're looking for a quick weeknight dinner, a healthy meal
          during recovery, or a cozy bowl of comfort food, this homemade khichdi
          recipe is a perfect choice.
        </p>
        <h2>Why You'll Love This Khichdi</h2>

        <ul>
          <li>Easy one-pot recipe</li>
          <li>High in plant-based protein</li>
          <li>Budget-friendly ingredients</li>
          <li>Perfect for meal prep</li>
          <li>Comforting and easy to digest</li>
          <li>Naturally vegetarian and gluten-free</li>
        </ul>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} /> Prep Time: 20 Minutes</Col>
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
          <Col><FontAwesomeIcon icon={faClock} /> Total Time: 50 Minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1/2 cup yellow moong dal (split yellow lentils)</li>
          <li>1/2 cup rice</li>
          <li>2 tablespoon olive oil</li>
          <li>1 whole tomato, finely chopped</li>
          <li>1 medium onion, finely chopped</li>
          <li>1 teaspoon cumin seeds</li>
          <li>3 small potatoes, diced</li>
          <li>1/4 cup green peas</li>
          <li>1/4 teaspoon turmeric powder</li>
          <li>1/4 teaspoon red chilli powder</li>
          <li>1 green chili, finely chopped (optional)</li>
          <li>Salt to taste</li>
          <li>4 cups water</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>
            Rinse the rice and moong dal thoroughly. Soak them together in water
            for 20 minutes, then drain.
          </li>

          <li>
            Heat oil or ghee in an Instant Pot, pressure cooker, or heavy-bottomed pot.
          </li>

          <li>
            Add cumin seeds and allow them to splutter.
          </li>

          <li>
            Add onions and sauté until translucent.
          </li>

          <li>
            Stir in ginger, green chili, and tomatoes. Cook until the tomatoes soften.
          </li>

          <li>
            Add turmeric, red chili powder, and salt. Mix well.
          </li>

          <li>
            Add potatoes and peas. Stir for 1–2 minutes.
          </li>

          <li>
            Add the drained rice and moong dal. Mix well.
          </li>

          <li>
            Pour in 4 cups water and stir.
          </li>

          <li>
            Pressure cook for 6 minutes in the Instant Pot and allow natural pressure release.
          </li>

          <li>
            Open the lid and gently mix. Add more hot water if you prefer a thinner consistency.
          </li>

          <li>
            Serve hot with yogurt, pickle, papad, or a side of vegetables.
          </li>
        </ol>
        <h2>Final Product</h2>
        <Image src="khichdi.jpg"
          alt="Homemade Moong Dal Khichdi served in a bowl with rice, lentils, vegetables, and Indian spices"
          thumbnail rounded fluid></Image>
        <div>
          <h2>Homemade Moong Dal Khichdi Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="8aVHBNQ8NBs" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="8aVHBNQ8NBs" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <h2>Related Vegetarian Recipes</h2>
        <ul style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px"
        }}>
          <li style={{ marginBottom: "12px" }}>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "#28a745", marginRight: "10px" }}
            />
            <Link to="/quinoamoongdal" className="recipe-link">Quinoa Moong Dal Khichdi</Link>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "#28a745", marginRight: "10px" }}
            />
            <Link to="/dalmakhani" className="recipe-link">Dal Makhani</Link>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "#28a745", marginRight: "10px" }}
            />
            <Link to="/rajmah" className="recipe-link">Rajma Masala</Link></li>
          <li style={{ marginBottom: "12px" }}>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "#28a745", marginRight: "10px" }}
            />
            <Link to="/blackeyedbeans" className="recipe-link">Black Eyed Peas Curry</Link></li>
          <li style={{ marginBottom: "12px" }}>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "#28a745", marginRight: "10px" }}
            />
            <Link to="/aloogobi" className="recipe-link">Aloo Gobi</Link></li>
        </ul>
      </div>
    );
  }
}

export default Khichdi