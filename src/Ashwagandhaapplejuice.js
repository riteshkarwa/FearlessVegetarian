import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet";

class AshwagandhaAppleJuice extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ashwagandha Apple Chaat Masala Juice | Healthy Immunity Booster</title>

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/ashwagandhaapplejuice"
          />

          <meta
            name="description"
            content="Refreshing Ashwagandha Apple Chaat Masala Juice made with fresh apples, ashwagandha powder, and chaat masala. A delicious wellness drink packed with antioxidants and flavor."
          />

          <meta
            name="keywords"
            content="ashwagandha juice, apple juice recipe, chaat masala juice, healthy apple drink, immunity booster drink, ashwagandha benefits, apple wellness drink, homemade juice recipe, Fearless Vegetarian, vegan drink"
          />

          <meta
            property="og:title"
            content="Ashwagandha Apple Chaat Masala Juice"
          />

          <meta
            property="og:description"
            content="A refreshing blend of apples, ashwagandha, and chaat masala. Perfect for a healthy start to your day."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/ashwagandhaapplejuice.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/ashwagandhaapplejuice"
          />

          <meta property="og:type" content="article" />
        </Helmet>

        <h1>
          Ashwagandha Apple Chaat Masala Juice – A Refreshing Wellness Drink
        </h1>

        <p>
          This Ashwagandha Apple Chaat Masala Juice combines the natural
          sweetness of apples with the earthy goodness of ashwagandha and the
          tangy kick of chaat masala. It's a refreshing drink that can be
          enjoyed as a morning wellness beverage or an afternoon pick-me-up.
        </p>
        <h2>Health Benefits</h2>
        <p>
          This refreshing Apple Ashwagandha Juice combines the natural sweetness of apples,
          warming cinnamon, tangy chaat masala, and the traditional Ayurvedic herb ashwagandha.
          Apples provide fiber and antioxidants, cinnamon may support healthy blood sugar levels,
          and ashwagandha is commonly used to help manage stress and support overall wellness.
        </p>

        <Row className="cooktimerow">
          <Col>
            <span className="material-symbols-outlined">
              restaurant_menu
            </span>{" "}
            Yields: 2 Servings
          </Col>
        </Row>

        <Row className="cooktimerow">
          <Col>
            <FontAwesomeIcon icon={faClock} /> Preparation Time: 10 Minutes
          </Col>
        </Row>

        <div className="ingredients">Ingredients</div>

        <ol>
          <li>2 fresh apples, chopped</li>
          <li>1 teaspoon Ashwagandha powder</li>
          <li>1/2 teaspoon Chaat Masala</li>
          <li>1 tablespoon lemon juice</li>
          <li>1 cup cold water</li>
          <li>1/2 teaspoon Cinnamon powder</li>
          <li>4-5 ice cubes (optional)</li>
          <li>1 teaspoon honey or maple syrup (optional)</li>
          <li>Fresh mint leaves for garnish</li>
        </ol>

        <div className="ingredients">Instructions</div>

        <ol>
          <li>
            Wash and chop the apples. Remove the seeds but keep the peel for
            extra nutrients.
          </li>

          <li>
            Add apples, water, cinnamon powder, lemon juice, and Ashwagandha powder to a blender.
          </li>

          <li>
            Blend until smooth and creamy. Add additional water if a thinner
            consistency is desired.
          </li>

          <li>
            Strain the juice if you prefer a smoother texture. Otherwise, enjoy
            it with the fiber intact.
          </li>

          <li>
            Stir in the chaat masala and mix well.
          </li>

          <li>
            Add ice cubes and sweetener if desired.
          </li>

          <li>
            Garnish with fresh mint leaves and serve immediately.
          </li>
        </ol>

        <h2>Health Benefits</h2>

        <ul>
          <li>Apples are rich in antioxidants and dietary fiber.</li>
          <li>
            Ashwagandha is traditionally used in Ayurveda to help manage stress
            and support overall wellness.
          </li>
          <li>
            Chaat masala adds a tangy flavor and contains digestive spices.
          </li>
          <li>Refreshing, naturally vegetarian, and easy to prepare.</li>
        </ul>

        <h2>Final Product</h2>

        <Image
          src="/ashwagandhaapplejuice.png"
          alt="Ashwagandha Apple Chaat Masala Juice"
          thumbnail
          rounded
          fluid
        />

        <h2>Serving Suggestions</h2>

        <p>
          Serve chilled as a refreshing breakfast drink or enjoy it alongside
          healthy snacks and light vegetarian meals.
        </p>
      </div>
    );
  }
}

export default AshwagandhaAppleJuice;