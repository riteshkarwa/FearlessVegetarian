import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import RecipeSchema from "./RecipeSchema";

class Beetroot extends Component {
  render() {
    const optsDesktop = {
      height: '515',
      width: '600',
    };

    const optsMobile = {
      height: '550',
      width: '325',
    };
    return (
      <div>
        <RecipeSchema
          name="Beetroot Curry with Coconut Milk"
          description="A flavorful Indian beetroot curry made with coconut milk, urad dal, mustard seeds, and aromatic spices. A healthy vegan recipe that pairs perfectly with rice or naan."
          image="https://fearlessvegetarian.netlify.app/beetroot.jpg"
          url="https://fearlessvegetarian.netlify.app/beetroot"
          prepTime="PT15M"
          cookTime="PT45M"
          totalTime="PT60M"
          recipeYield="1 Serving"
          ingredients={[
            "1 beetroot, peeled and chopped",
            "1/2 jalapeno pepper",
            "1/4 teaspoon turmeric powder",
            "1 cinnamon stick",
            "1 teaspoon coriander powder",
            "1 teaspoon mustard seeds",
            "1 can coconut milk",
            "1 tablespoon urad dal",
            "1 dried curry leaf",
            "1 tablespoon oil",
            "Salt to taste"
          ]}
          instructions={[
            "Boil beetroot until tender.",
            "Chop beetroot into small cubes.",
            "Heat oil in a pan and add beetroot.",
            "Add jalapeno, turmeric, coriander powder, cinnamon stick, and salt.",
            "Pour coconut milk and cook for 10 to 15 minutes.",
            "Prepare tempering with mustard seeds and urad dal.",
            "Add tempering to curry.",
            "Adjust seasoning and serve with rice or naan."
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Beetroot Curry with Coconut Milk: Vibrant Fusion Delight</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/beetroot" />
          <meta
            name="description"
            content="Experience the vibrant fusion of beetroot, coconut milk, and Urad Dal in this flavorful curry. A delightful blend of colors and flavors awaits!"
          />
          <meta
            name="keywords"
            content="beetroot curry, coconut milk, lentil recipes, Urad Dal, vegan curry, colorful dishes, nutritious beetroot, creamy coconut curry, 
            plant-based cuisine, recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan, simple cooking,
            Indian-inspired recipes, flavorful vegan meals, wholesome lentil curry, exotic flavors, beetroot and lentil combination, vegetarian cooking"
          />
          <meta property="og:title" content="Beetroot Curry with Coconut Milk: Vibrant Fusion Delight" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/beetroot" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/beetroot.jpg" />
          <meta property="og:description" content="Experience the vibrant fusion of beetroot, coconut milk, and Urad Dal in this flavorful curry. A delightful blend of colors and flavors awaits!" />
        </Helmet>
        <h1>
          Beetroot Curry with Coconut Milk (Indian Beetroot Curry Recipe)
        </h1>
        <p>
          This Beetroot Curry with Coconut Milk combines tender beetroot, creamy coconut milk,
          and roasted urad dal for a delicious South Indian-inspired dish. Rich in fiber,
          antioxidants, vitamins, and minerals, beetroot is known for supporting heart health,
          immunity, and overall wellness. This vibrant curry pairs perfectly with rice,
          roti, or naan.
        </p>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>1 Beetroot, peeled and chopped</li>
          <li>1/2 big Jalapeno pepper</li>
          <li>1/4 teaspoon Turmeric powder</li>
          <li>1 Cinnamon Stick</li>
          <li>1 teaspoon Coriander Powder</li>
          <li>1 teaspoon Mustard seeds </li>
          <li>1 can of coconut milk</li>
          <li>1 tablespoon Urad Dal found in Indian store</li>
          <li>Salt as per taste</li>
          <li>1 dried Curry leave</li>
          <li>1 tablespoon cooking oil</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>To begin making beetroot curry, boil the beetroot in a pressure cooker or pot until it becomes tender.</li>
          <li>Once the beetroot is tender, slice it vertically, and use a food chopper to chop each slice into small square pieces.</li>
          <li>Take 1 tablespoon of olive oil in a non-stick pan and heat it up.</li>
          <li>Add the beetroot pieces to the non-stick pan.</li>
          <li>Add chopped jalapeño peppers, salt, turmeric powder, coriander powder, and a cinnamon stick.</li>
          <li>Pour a can of coconut milk.</li>
          <li>Stir the ingredients and cook it on medium flame for 10-15 min close the pan with a lid to speed up the cooking process.</li>
          <li>Heat a teaspoon of oil in a separate small pan.</li>
          <li>Add the mustard seeds and White Urad dal found in Indian Grocery Store. Allow it to crackle and roast for couple of minutes.</li>
          <li>Add salt as per taste.</li>
          <li>Your curry is ready. Taste it to adjust the spice level and salt. You can eat it with rice or Garlic Naan (Indian Bread), which can be found in an Indian Grocery Store.</li>
        </ol>
        <h2>Final Product</h2>
        <MediaQuery maxWidth={767}>
          <Image src="/beetroot.jpg" alt="Vibrant Beetroot Curry with Coconut Milk and Urad Dal" thumbnail rounded fluid></Image>
        </MediaQuery>
        <MediaQuery minWidth={767}>
          <Image src="/beetroot.jpg" alt="Vibrant Beetroot Curry with Coconut Milk and Urad Dal" thumbnail rounded width="50%" height="50%"></Image>
        </MediaQuery>
        <div>
          <h2>Beetroot Curry with Coconut Milk Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="veUNjVorUyk" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="veUNjVorUyk" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div className="related-recipes" style={{ marginTop: "40px" }}>
          <h2>Related Vegetarian Recipes</h2>

          <p>
            If you enjoyed this Beetroot Curry with Coconut Milk, you may also like:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf}  style={{ marginRight: "10px" }} />{" "}
              <Link to="/lentil" className="recipe-link">Masoor Dal (Lentil Curry)</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf}  style={{ marginRight: "10px" }} />{" "}
              <Link to="/dalmakhani" className="recipe-link">Dal Makhani</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf}  style={{ marginRight: "10px" }}/>{" "}
              <Link to="/saagpaneer" className="recipe-link">Saag Paneer</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />{" "}
              <Link to="/besan" className="recipe-link">Besan Curry</Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }}/>{" "}
              <Link to="/aloogobi" className="recipe-link">Aloo Gobi</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Beetroot;