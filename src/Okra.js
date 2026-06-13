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
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

class Okra extends Component {
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
          name="Bhindi Masala (Okra Curry)"
          description="A flavorful Indian okra curry made with onions, tomatoes, and aromatic spices. Perfect with rice or roti."
          image="https://fearlessvegetarian.netlify.app/okra.jpg"
          url="https://fearlessvegetarian.netlify.app/okra"
          prepTime="PT20M"
          cookTime="PT40M"
          totalTime="PT60M"
          recipeYield="2 Servings"
          ingredients={[
            "500g fresh okra",
            "2 onions",
            "2 tomatoes",
            "4 cloves garlic",
            "2 inch ginger",
            "Cumin seeds",
            "Coriander powder",
            "Turmeric powder",
            "Red chili powder",
            "Garam masala",
            "Amchur powder",
            "Kasoori methi",
            "Salt",
            "Olive oil"
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />

          <title>
            Bhindi Masala (Okra Curry) Recipe | Easy Indian Okra with Onions & Tomatoes
          </title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/okra"
          />

          <meta
            name="description"
            content="Learn how to make Bhindi Masala (Okra Curry) with onions, tomatoes, and aromatic Indian spices. This easy vegan and vegetarian Indian recipe pairs perfectly with roti or rice."
          />

          <meta
            name="keywords"
            content="bhindi masala recipe, okra curry, Indian okra recipe, ladyfinger curry, vegan Indian recipes, vegetarian curry, bhindi fry, easy okra recipe, healthy Indian vegetables, homemade bhindi masala, Fearless Vegetarian"
          />

          <meta
            property="og:title"
            content="Bhindi Masala (Okra Curry) Recipe | Easy Indian Okra with Onions & Tomatoes"
          />

          <meta
            property="og:description"
            content="Flavorful Bhindi Masala made with fresh okra, onions, tomatoes, and Indian spices. A healthy vegetarian recipe perfect with rice or roti."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/okra.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/okra"
          />

          <meta property="og:type" content="article" />

          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>
          Bhindi Masala (Okra Curry) with Onions, Tomatoes and Indian Spices
        </h1>
        <h2>Health Benefits of Okra</h2>

        <p>
          Okra is rich in fiber, vitamin C, vitamin K, and antioxidants.
          It may support digestion, heart health, and healthy blood sugar levels.
          Combined with onions and tomatoes, this Bhindi Masala becomes a nutritious
          and flavorful vegetarian meal.
        </p>
        <Row className="cooktimerow">
          <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
        </Row>
        <Row className="cooktimerow">
          <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
        </Row>
        <div className="ingredients">Ingredients</div>
        <ol>
          <li>2 teaspoon olive oil</li>
          <li>2 medium onion </li>
          <li>1/2 teaspoon cumin seeds</li>
          <li>1 tablespoon coriander powder </li>
          <li>1/8 teaspoon tumeric powder</li>
          <li>1/8 teaspoon red chili powder</li>
          <li>4 cloves of garlic</li>
          <li>5 pieces of cloves</li>
          <li>2 small piece of ginger peeled</li>
          <li>1 teaspoon cumin powder</li>
          <li>1 teaspoon Garam Masala powder</li>
          <li>Salt as per taste</li>
          <li>1 teaspoon Rani Fenugreek Leaves Dried (Kasoori Methi)</li>
          <li>1 teaspoon Amchur powder (dried mango powder) found in Indian store</li>
          <li>2 whole tomato</li>
        </ol>
        <div className="ingredients">Instruction</div>
        <ol>
          <li>Rinse Okra under running water well and drain them. Wipe them dry with a clean kitchen cloth. Chop them to 3/4 to 1 inch pieces.</li>
          <li>Pour 1 tablespoon of olive oil to a hot non-stick pan. Fry the okra on a medium high flame stirring often until they are half cooked.
          </li>
          <li>Keep stirring to fry them evenly. Reduce the flame if needed in between. Fry them until they are no more slimy and partially cooked. We don't need fully cooked okra. It took me exactly 6 minutes to cook down to this stage.
            Transfer to a plate. </li>
          <li>Pour 2 tablespoons oil to the same pan. Turn down the flame to low. Then add cumin.</li>
          <li>Add onions, ginger pieces, garlic cloves, tomato, pieces of cloves to a blender and turn it into a puree.</li>
          <li>Add the puree to the non stick pan and saute them </li>
          <li>Then add garam masala powder, salt, coriander powder, tumeric powder, chilli powder to the pan and mix it with the puree.</li>
          <li>Mix and saute this masala very well until a nice aroma comes out. This takes about 3 to 4 minutes.</li>
          <li>Cover and cook on an medium heat until the masala cooks well and turns thick.</li>
          <li>Add okra, amchur powder, and fenugreek leaves. Mix well. Crush the fenugreek leaves in ur hand before adding</li>
          <li>When you are done cooking the okra, make the tempering in a different pan. Pour 1 tablespoon oil to another small pan. Keep the flame to high and add the onion layers.</li>
          <li>Fry for 2 minutes until a nice aroma comes out. The onions must become transparent yet remain crunchy.</li>
          <li>Quickly pour this (onions along with oil) to the okra dish. Also add  coriander leaves. Give a gentle mix from the sides
            Cover and turn off the stove.</li>
          <li>Serve Okra dish  with rice or roti, mango pickle, veggie salad. </li>
        </ol>
        <p>
          Bhindi Masala pairs wonderfully with homemade{" "}
          <Link to="/dalmakhani">Dal Makhani</Link>,{" "}
          <Link to="/lentil">Masoor Dal</Link>, or{" "}
          <Link to="/saagpaneer">Saag Paneer</Link>.
        </p>

        <p>
          Looking for more vegetable curries? Try our{" "}
          <Link to="/aloogobi">Aloo Gobi</Link>,{" "}
          <Link to="/cabbage">Cabbage Curry</Link>, and{" "}
          <Link to="/beetroot">Beetroot Curry</Link>.
        </p>
        <h2>Final Product</h2>
        <Image src="okra.jpg"
          alt="Bhindi Masala Indian Okra Curry with onions tomatoes and spices"
          thumbnail rounded fluid>
        </Image>
        <div>
          <h2>Delicious and flavorful Okra Preparation Video</h2>
          <MediaQuery maxWidth={767}>
            <YouTube videoId="Ioqnqy8WqfI" opts={optsMobile} />
          </MediaQuery>
          <MediaQuery minWidth={767}>
            <YouTube videoId="Ioqnqy8WqfI" opts={optsDesktop} />
          </MediaQuery>
        </div>
        <div style={{ marginTop: "30px" }}>
          <h2>Related Vegetarian Recipes</h2>
          <p>
            If you enjoyed this flavorful Okra (Bhindi) recipe, you may also like these healthy vegetarian recipes:
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
              <Link
                to="/cabbage"
                className="recipe-link"
              >
                Cabbage Curry Bliss
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
              <Link
                to="/aloogobi"
                className="recipe-link"
              >
                Aloo Gobi (Potato Cauliflower)
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
              <Link
                to="/dalmakhani"
                className="recipe-link"
              >
                Authentic Dal Makhani
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
              <Link
                to="/paneer"
                className="recipe-link"
              >
                Shahi Paneer
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: "10px" }} />
              <Link
                to="/potatocapsicum"
                className="recipe-link"
              >
                Creamy Potato Curry in Roasted Red Pepper Cashew Gravy
              </Link>
            </li>
          </ul>

          <p>
            Looking for more Indian vegetarian recipes? Explore our collection of
            homemade curries, lentil dishes, and vegetable-based meals for healthy
            and delicious meal inspiration.
          </p>
        </div>
      </div>
    );
  }
}

export default Okra;