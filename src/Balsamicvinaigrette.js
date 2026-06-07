import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

class BalsamicVinaigretteDish extends Component {
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
                    <title>Middle Eastern Couscous Salad Recipe | Fresh Vegetables, Walnuts & Balsamic Vinaigrette | Fearless Vegetarian</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/couscousbalsamic" />
                    <meta
                        name="description"
                        content="Kickstart luck with our Black Eyed Peas Curry. A year-round delight, seasoned with Indian spices for prosperity."
                    />
                    <meta
                        name="keywords"
                        content="Middle Eastern couscous salad, couscous recipe, vegan couscous salad, vegetarian couscous, healthy couscous recipe, Mediterranean salad, balsamic vinaigrette salad, plant based meal, vegetable couscous salad, 
                        walnut couscous salad, parsley couscous, easy vegan lunch, healthy vegetarian dinner, meal prep salad, 
                        colorful vegetable salad, cucumber couscous, red bell pepper salad, cabbage salad recipe, vegan Mediterranean recipe, Fearless Vegetarian"
                    />
                    <meta property="og:title" content="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/couscousbalsamic" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/couscousbalsamic.jpg" />
                    <meta property="og:description" content="Enjoy a vibrant Middle Eastern-inspired couscous salad made with cucumber, red bell pepper, purple cabbage, red onion, fresh parsley, green onions, and toasted walnuts. Tossed in a tangy balsamic vinaigrette, this healthy vegetarian and vegan recipe is perfect for lunch, dinner, or meal prep" />
                </Helmet>
                <h1>Experience an explosion of rich, earthy flavors in every bite. This Middle Eastern-inspired couscous salad combines fluffy couscous, crunchy vegetables, fresh herbs, and toasted walnuts, all brought together with a tangy balsamic vinaigrette. 
                    Light yet satisfying, it's the perfect vegetarian and vegan dish for a refreshing lunch, healthy dinner, or make-ahead meal prep.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1.5 cups (225g) cucumber, diced</li>
                    <li>1 cup (150g) red bell pepper, diced</li>
                    <li>1 cup (100g) purple cabbage, shredded</li>
                    <li>3/4 cup (100g) red onion, finely chopped</li>
                    <li>1/2 cup (25g) green onion, chopped</li>
                    <li>1/2 cup (25g) fresh parsley, chopped</li>
                    <li>90g toasted walnuts, chopped</li>
                    <li>1 cup dry couscous, cooked and cooled</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>
                        Prepare the couscous according to the package instructions. Fluff with a fork and allow it to cool completely.
                    </li>
                    <li>
                        Toast the walnuts in a dry skillet over medium heat for 3–4 minutes until fragrant. Let them cool, then roughly chop.</li>
                    <li>
                        In a large mixing bowl, combine the cucumber, red bell pepper, purple cabbage, red onion, green onion, and parsley.</li>
                    <li>
                        Add the cooled couscous and toasted walnuts to the bowl.</li>
                    <li>
                        In a small bowl or jar, whisk together the balsamic vinegar, olive oil, Dijon mustard, maple syrup (if using), cumin, salt, and black pepper until well combined.
                    </li>
                    <li>
                        Pour the vinaigrette over the couscous mixture</li>
                    <li>
                        Toss gently until all ingredients are evenly coated with the dressing.</li>
                    <li>
                        Taste and adjust seasoning with additional salt, pepper, or balsamic vinegar if desired.</li>
                    <li>
                        Refrigerate for 15–30 minutes before serving to allow the flavors to meld together.</li>
                    <li>
                        Serve chilled or at room temperature and enjoy.
                    </li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="/couscousbalsamic.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/couscousbalsamic.jpg" alt="Lucky Black Eyed Peas Curry: Indian-Spiced Prosperity" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Black Eyed Peas Curry Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Nbi0LcFISjI" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Nbi0LcFISjI" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }

}
export default BalsamicVinaigretteDish;