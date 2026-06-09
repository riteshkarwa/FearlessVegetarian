import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

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
                    <title>Rajgira Halwa Recipe – Delicious Amaranth Flour Dessert for Fasting</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/rajgirahalwa" />
                    <meta
                        name="description"
                        content="Learn how to make Rajgira Halwa, a rich and flavorful dessert made with amaranth flour, ghee, and jaggery. Perfect for Navratri, fasting (vrat) days, or as a wholesome sweet treat."
                    />
                    <meta
                        name="keywords"
                        content="rajgira halwa recipe, amaranth flour dessert, vrat recipes, fasting sweets, navratri sweet recipes, rajgira flour halwa, healthy Indian dessert, 
                        gluten free halwa, jaggery halwa, amaranth sweet recipe, Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Rajgira Halwa Recipe – Delicious Amaranth Flour Dessert for Fasting" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/rajgirahalwa" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/rajgirahalwa.jpg" />
                    <meta property="og:description" content="Learn how to make Rajgira Halwa, a rich and flavorful dessert made with amaranth flour, ghee, and jaggery. Perfect for Navratri, fasting (vrat) days, or as a wholesome sweet treat." />
                </Helmet>
                <h1>Rajgira Halwa is a traditional Indian sweet made from amaranth flour,
                    commonly enjoyed during Navratri fasting. Rich in nutrients and naturally
                    gluten-free, this comforting dessert is easy to prepare and makes a
                    delicious festive treat.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Servings</Col>
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
                <MediaQuery maxWidth={767}>
                    <Image src="/rajgirahalwa.jpg" alt="Savor unique flavors in our Rajgira Halwa" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="/rajgirahalwa.jpg" alt="Savor unique flavors in our Rajgira Halwa" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Rajgira Halwa Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="F6twlcz2W7g" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="F6twlcz2W7g" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div style={{ marginTop: "40px" }}>
                    <h2>You May Also Like</h2>

                    <p>
                        If you enjoyed this Rajgira Halwa recipe, you may also like these
                        wholesome vegetarian dishes and traditional Indian recipes.
                    </p>

                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            marginTop: "20px"
                        }}
                    >
                        <li style={{ marginBottom: "12px" }}>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                style={{ color: "#28a745", marginRight: "10px" }}
                            />
                            <Link
                                to="/quinoamoongdal"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "500"
                                }}
                            >
                                Quinoa Moong Dal Khichdi
                            </Link>
                        </li>

                        <li style={{ marginBottom: "12px" }}>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                style={{ color: "#28a745", marginRight: "10px" }}
                            />
                            <Link
                                to="/paneer"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "500"
                                }}
                            >
                                Shahi Paneer – Creamy Indian Cottage Cheese Curry
                            </Link>
                        </li>

                        <li style={{ marginBottom: "12px" }}>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                style={{ color: "#28a745", marginRight: "10px" }}
                            />
                            <Link
                                to="/potato"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "500"
                                }}
                            >
                                Any Time Potato with Indian Spices
                            </Link>
                        </li>

                        <li style={{ marginBottom: "12px" }}>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                style={{ color: "#28a745", marginRight: "10px" }}
                            />
                            <Link
                                to="/cabbage"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "500"
                                }}
                            >
                                Cabbage Curry (Patta Gobi)
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                style={{ color: "#28a745", marginRight: "10px" }}
                            />
                            <Link
                                to="/riceandbeans"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "500"
                                }}
                            >
                                Zesty Mexican Rice with Black Beans
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RajgiraHalwa