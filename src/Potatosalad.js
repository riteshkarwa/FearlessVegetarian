import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

class Potatosalad extends Component {
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
                    <title>Chukauni—a traditional Nepali yogurt and potato salad</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potatosalad" />
                    <meta
                    name="description"
                    content="Discover how to make Chukauni, a classic Nepali yogurt and potato salad. Creamy, tangy, and perfectly spiced, this easy-to-follow recipe is a must-try for authentic Nepali flavors."
                    />
                    <meta
                    name="keywords"
                    content="Chukauni, Nepali potato salad, Nepali yogurt salad, Nepali recipes, traditional Chukauni recipe, potato salad recipe, yogurt potato salad, 
                    easy Nepali recipes, authentic Nepali salad, Chukauni salad, 
                    recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Chukauni—a traditional Nepali yogurt and potato salad" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/potatosalad" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/potatosalad.png" />
                    <meta property="og:description" content="Discover how to make Chukauni, a classic Nepali yogurt and potato salad. Creamy, tangy, and perfectly spiced, this easy-to-follow recipe is a must-try for authentic Nepali flavors." />
                </Helmet>
                <h1>Chukauni—a traditional Nepali yogurt and potato salad</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>  
                    <li>3 medium potatoes, boiled and diced</li> 
                    <li>1 cup plain yogurt </li> 
                    <li>1 small onion, finely chopped</li> 
                    <li>1–2 green chilies, finely chopped (optional)</li> 
                    <li>1 tsp mustard seeds</li>
                    <li>1 tsp cumin seeds</li>
                    <li>1 tsp turmeric powder</li>
                    <li>1–2 tbsp oil</li>
                    <li>Salt as per taste</li> 
                    <li>1 tsp red chili powder</li> 
                    <li>1–2 tbsp oil</li>
                    <li>Fresh cilantro, chopped (for garnish)</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Prepare potatoes: Boil potatoes until tender, peel, and dice them. Set aside.</li> 
                    <li>
                        Temper spices: Heat oil in a pan. Add mustard seeds and cumin seeds. Once they start to crackle, 
                        add turmeric and chili powder. Stir quickly.
                    </li>
                    <li>Mix with vegetables: Add chopped onions and green chilies. Sauté for 2–3 minutes.</li>
                    <li>Combine: In a bowl, mix the boiled potatoes with the yogurt. Add the sautéed spice mixture and salt. 
                        Mix gently until everything is well combined.</li>
                    <li>Garnish & Serve: Top with chopped cilantro. Serve chilled or at room temperature as a side dish.</li>    
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="potatosalad.png" alt="Chukauni Recipe – Traditional Nepali Yogurt & Potato Salad" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="potatosalad.png" alt="Chukauni Recipe – Traditional Nepali Yogurt & Potato Salad" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Chukauni—a traditional Nepali yogurt and potato salad Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="-sEJzKGy5vE" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="-sEJzKGy5vE" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Potatosalad;