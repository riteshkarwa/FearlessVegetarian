import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

class Aloogobi extends Component {
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
                    <title>Flavorful Poha Delight: A Quick and Wholesome Breakfast Recipe!</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/aloogobi" />
                    <meta
                        name="description"
                        content="Savor the flavors of North India with our Potato Cauliflower (Aloo Gobi), a vegetarian delight featuring sautéed cauliflower and potatoes. This meta description invites you to experience the rich blend of tomatoes, cashews, onions, and a medley of Indian spices that elevate this dish to a culinary masterpiece. Explore the balance of textures and flavors in this easy-to-make recipe. Elevate your vegetarian cuisine with the warmth and richness of Aloo Gobi, a classic and comforting dish for all occasions."
                    />
                    <meta
                        name="keywords"
                        content="Potato Cauliflower, Aloo Gobi, vegetarian dish, sautéed cauliflower, potatoes, tomatoes, cashews, onions, Indian spices, North Indian cuisine, flavorful vegetarian delight, easy-to-make recipe, Indian culinary masterpiece, classic vegetarian dish, comforting meal, vegetarian Indian recipes"
                    />
                </Helmet>
                <h1>Potato Cauliflower (Aloo Gobi) is a vegetarian north Indian dish. It's sautéed cauliflower and potato, with tomatoes, cashews,
                    onion, and Indian spices. A simple recipe that pairs well with flatbread such as roti and naan, or rice.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 teaspoon onion powder </li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon tumeric powder</li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 teaspoon cumin seeds found in Indian Grocery store</li>
                    <li>1 tablespoon Garam Masala spice found in Indian Grocery store</li>
                    <li>1 whole potato big size or 2 potatoes small size </li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Grocery Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 whole cardamom pods </li>
                    <li>2 small piece of ginger peeled</li>
                    <li>2 dried curry leaves </li>
                    <li>3 garlic cloves, peeled </li>
                    <li>2 Whole Tomatoes </li>
                    <li>1 lb (450 g) Cauliflower florets (1 medium chopped into 1-inch florets )</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Preheat the oven to 425˚F and line a rimmed baking sheet with parchment paper for easier cleanup.</li>
                    <li>Slice the cauliflower into traditional florets.</li>
                    <li>Peel the potato and slice it into big square pieces. I use a food chopper saves some time.</li>
                    <li>Seasoning- Add the cauliflower florets and potatoes in a big bowl. Add some olive oil and butter, and toss to coat. Sprinkle 1 teaspoon of salt, garlic powder
                        and paprika.Mix it well so the cauliflower florets and potatoes gets coated with the oil and seasoning.</li>
                    <li>Bake cauliflower for 30  minutes, or until desired tenderness and golden at the edges. The baking time may vary depending on the size of your pieces.</li>
                    <li>Take some olive oil in a non stick pot and heat it up.</li>
                    <li>Add pieces of ginger, whole garlic, 2 tomatoes ,1 onion,  5 pieces of clove in a mixer or food processor and turn it
                        into a fine puree.</li>
                    <li>Add the puree to the non stick pan with oil heated up.</li>
                    <li>Simply squeeze the cardamom pods and remove the seeds. Place them in the mortar (bowl) and begin to grind the seeds with the pestle.
                        Continue grinding until the seeds are ground down to a fine powder and then add the powder to the non stick pot.</li>
                    <li>Add all the  spices to the onion tomato: ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder.</li>
                    <li>Cover the pan with a lid and let it cook.</li>
                    <li>Let the spices cook for around 10 min.</li>
                    <li>Add the baked potatoes and  cauliflower florets to the pot.</li>
                    <li>Cook the potatoes and cauliflower florets for about 10 minutes till they become soft. Constantly stir the potatoes and cauliflower florets to mix it well with onion tomato red pepper puree which
                        will act as a gravy for the curry.</li>
                    <li>Add salt as per taste.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan).</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="aloogobi.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Aloo Gobi Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="4qOw_UAHp98" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="4qOw_UAHp98" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Aloogobi