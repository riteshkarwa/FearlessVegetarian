import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class RajgiraHalwa extends Component {
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
                    <title>Authentic Dal Makhani: A Slow Cooked Delight</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/dalmakhani" />
                    <meta
                        name="description"
                        content="Indulge in the rich flavors of authentic Dal Makhani—slow-cooked perfection with whole black gram and red kidney beans. A North Indian culinary delight."
                    />
                    <meta
                        name="keywords"
                        content="Dal Makhani, Authentic flavors, Indian-inspired recipes, vegetarian dishes, Slow-cooked perfection, homemade curry, plant-based cuisine, flavorful herbs, easy-to-make curry, nutritious meals, vegetarian comfort food, Red kidney beans, black gram, simple and delicious, North Indian cuisine"
                    />
                    <meta property="og:title" content="Authentic Dal Makhani: A Slow Cooked Delight" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/dalmakhani" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/dalmakhani.jpg" />
                    <meta property="og:description" content="Indulge in the rich flavors of authentic Dal Makhani—slow-cooked perfection with whole black gram and red kidney beans. A North Indian culinary delight." />
                </Helmet>
                <h1>Dal Makhani is a classic North Indian dish made with whole black gram (Urad dal) found in Indian Store, red kidney beans, butter and other Indian Spices.
                    It is one of dishes that takes a longer time to cook more than 2 hours. Also the more you cook the better the curry is going to taste.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1/2 cup rajgira flour (amaranth flour)</li>
                    <li>3–4 tbsp ghee (clarified butter)</li>
                    <li>1/2 cup milk (or water for a lighter version)</li>
                    <li>1/3 cup jaggery or sugar (adjust to taste)</li>
                    <li>2–3 cardamom pods (crushed) or 1/2 tsp cardamom powder</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Heat ghee in a heavy-bottomed pan.Add rajgira flour and roast on low to medium heat 
                        for 5–7 minutes, stirring constantly, until it turns aromatic and slightly golden.</li>
                    <li>In a separate saucepan, warm the milk (or water) and dissolve jaggery/sugar in it. 
                        Keep it hot but not boiling.</li>
                    <li>Slowly pour the hot milk-jaggery mixture into the roasted flour while stirring continuously to avoid lumps.
                        Cook on low heat until the mixture thickens and starts leaving the sides of the pan.
                    </li>
                    <li>Add cardamom powder, chopped nuts, and raisins.Mix well and cook for another 1–2 minutes.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="dalmakhani.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>DalMakhani Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="g4WcrkJKDKo" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="g4WcrkJKDKo" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default RajgiraHalwa