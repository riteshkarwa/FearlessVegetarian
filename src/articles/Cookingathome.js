import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faUtensils,
    faLeaf,
    faKitchenSet,
    faWallet,
    faHeartPulse,
    faPeopleGroup
} from "@fortawesome/free-solid-svg-icons";


class CookingAtHome extends Component {

    render() {

        return (

            <>

                <Helmet>

                    <html lang="en" />

                    <meta charSet="utf-8" />

                    <title>
                        Benefits of Cooking at Home | Healthy Homemade Meals | Fearless Vegetarian
                    </title>


                    <meta
                        name="description"
                        content="Discover why cooking at home is healthier, cheaper, and more rewarding. Learn how homemade meals improve nutrition, save money, and create meaningful connections."
                    />


                    <meta
                        name="keywords"
                        content="benefits of cooking at home, homemade meals, healthy cooking, vegetarian cooking, meal preparation, cooking from scratch, save money cooking, Fearless Vegetarian"
                    />


                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/articles/cookingathome/"
                    />


                    {/* Open Graph */}

                    <meta
                        property="og:title"
                        content="Why Cooking at Home Is Healthier, Cheaper, and More Rewarding"
                    />


                    <meta
                        property="og:description"
                        content="Learn how cooking at home can improve your health, save money, reduce food waste, and bring people together."
                    />


                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/cookingathome.jpg"
                    />


                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/articles/cookingathome"
                    />


                    <meta
                        property="og:type"
                        content="article"
                    />


                    {/* Twitter */}

                    <meta
                        name="twitter:card"
                        content="summary_large_image"
                    />

                    <meta
                        name="twitter:title"
                        content="Benefits of Cooking at Home | Fearless Vegetarian"
                    />

                    <meta
                        name="twitter:description"
                        content="Explore why homemade meals are healthier, affordable, and better for your lifestyle."
                    />

                    <meta
                        name="twitter:image"
                        content="https://fearlessvegetarian.netlify.app/cookingathome.jpg"
                    />


                </Helmet>



                <Container className="py-5">


                    {/* HERO SECTION */}

                    <Row className="justify-content-center mb-5">

                        <Col lg={10}>


                            <Card className="shadow border-success">


                                <Card.Body className="p-5 text-center">


                                    <FontAwesomeIcon
                                        icon={faUtensils}
                                        size="3x"
                                        className="text-success mb-3"
                                    />


                                    <h1 className="display-5 mb-4">

                                        Why Cooking at Home Matters

                                    </h1>


                                    <p className="lead">

                                        Cooking at home is more than preparing a meal.
                                        It is an investment in your health, finances,
                                        creativity, and relationships.

                                    </p>


                                    <p>

                                        Homemade meals give you control over ingredients,
                                        portion sizes, and flavors while helping you build
                                        healthier habits one meal at a time.

                                    </p>


                                    <Button
                                        as={Link}
                                        to="/recipes"
                                        variant="success"
                                        size="lg"
                                    >

                                        Explore Vegetarian Recipes

                                    </Button>


                                </Card.Body>


                            </Card>


                        </Col>


                    </Row>





                    {/* INTRODUCTION */}


                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Image

                                src="/cookingathome.jpg"

                                alt="Cooking healthy vegetarian meals at home"

                                fluid

                                rounded

                                thumbnail

                                className="mb-4 d-block mx-auto"

                                style={{
                                    width: "100%",
                                    maxWidth: "650px",
                                    height: "auto"
                                }}

                            />


                            <p>

                                In today's fast-paced world, it is easy to rely on
                                restaurant meals, takeout, or packaged foods. While these
                                options may be convenient, they often contain excess sodium,
                                unhealthy fats, added sugars, and preservatives.

                            </p>


                            <p>

                                Cooking at home allows you to choose fresh ingredients,
                                customize recipes to your preferences, and create meals
                                that support your health and lifestyle goals.

                            </p>


                        </Col>


                    </Row>





                    {/* BENEFITS SECTION */}


                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <h2 className="text-center mb-5">

                                <FontAwesomeIcon
                                    icon={faHeartPulse}
                                    className="text-success me-2"
                                />

                                Benefits of Cooking at Home

                            </h2>



                            <Row className="g-4">



                                {/* HEALTH */}

                                <Col md={6}>


                                    <Card className="h-100 shadow-sm border-success">


                                        <Card.Body>


                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faLeaf}
                                                    className="text-success me-2"
                                                />

                                                Healthier Ingredients

                                            </h3>


                                            <p>

                                                When you cook at home, you decide exactly what
                                                goes into your food. You can include fresh
                                                vegetables, whole grains, legumes, and healthy
                                                ingredients while avoiding unnecessary additives.

                                            </p>


                                        </Card.Body>


                                    </Card>


                                </Col>





                                {/* MONEY */}

                                <Col md={6}>


                                    <Card className="h-100 shadow-sm border-success">


                                        <Card.Body>


                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faWallet}
                                                    className="text-success me-2"
                                                />

                                                Save Money

                                            </h3>


                                            <p>

                                                Restaurant meals and delivery costs add up quickly.
                                                Cooking at home can provide multiple servings for
                                                the cost of a single restaurant meal.

                                            </p>


                                        </Card.Body>


                                    </Card>


                                </Col>



                            </Row>


                        </Col>


                    </Row>

                    {/* PORTION CONTROL */}

                    <Row className="justify-content-center mb-5">

                        <Col lg={10}>

                            <Row className="g-4">


                                <Col md={6}>

                                    <Card className="h-100 shadow-sm border-success">

                                        <Card.Body>

                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faUtensils}
                                                    className="text-success me-2"
                                                />

                                                Better Portion Control

                                            </h3>


                                            <p>

                                                Restaurant portions are often much larger than what
                                                our bodies need. Cooking at home allows you to prepare
                                                balanced portions and become more aware of your eating
                                                habits.

                                            </p>


                                        </Card.Body>

                                    </Card>

                                </Col>




                                <Col md={6}>

                                    <Card className="h-100 shadow-sm border-success">

                                        <Card.Body>

                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faLeaf}
                                                    className="text-success me-2"
                                                />

                                                More Fruits and Vegetables

                                            </h3>


                                            <p>

                                                Home cooking makes it easier to include more
                                                vegetables, legumes, whole grains, and plant-based
                                                ingredients that provide essential fiber, vitamins,
                                                minerals, and antioxidants.

                                            </p>


                                        </Card.Body>

                                    </Card>

                                </Col>



                            </Row>


                        </Col>

                    </Row>





                    {/* FAMILY AND SKILLS */}


                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Row className="g-4">



                                <Col md={6}>


                                    <Card className="h-100 shadow-sm">


                                        <Card.Body>


                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faPeopleGroup}
                                                    className="text-success me-2"
                                                />

                                                Stronger Family Connections

                                            </h3>


                                            <p>

                                                Cooking and sharing meals together creates meaningful
                                                memories and encourages conversations. Family meals
                                                can help build stronger relationships and healthier
                                                eating habits.

                                            </p>


                                        </Card.Body>


                                    </Card>


                                </Col>





                                <Col md={6}>


                                    <Card className="h-100 shadow-sm">


                                        <Card.Body>


                                            <h3>

                                                <FontAwesomeIcon
                                                    icon={faKitchenSet}
                                                    className="text-success me-2"
                                                />

                                                Learn Valuable Life Skills

                                            </h3>


                                            <p>

                                                Cooking is a lifelong skill that builds confidence
                                                and creativity. The more you cook, the easier it
                                                becomes to create delicious meals from simple
                                                ingredients.

                                            </p>


                                        </Card.Body>


                                    </Card>


                                </Col>


                            </Row>


                        </Col>


                    </Row>






                    {/* FOOD WASTE */}



                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Card className="shadow border-success">


                                <Card.Body className="p-5">


                                    <h2 className="mb-4">


                                        <FontAwesomeIcon
                                            icon={faLeaf}
                                            className="text-success me-2"
                                        />


                                        Reduce Food Waste


                                    </h2>



                                    <p>

                                        Cooking at home helps you make better use of ingredients
                                        already available in your kitchen. Planning meals,
                                        storing leftovers properly, and cooking in batches can
                                        reduce food waste while saving money.

                                    </p>



                                </Card.Body>


                            </Card>


                        </Col>


                    </Row>






                    {/* GET STARTED */}



                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Card className="shadow border-success">


                                <Card.Body className="p-5">


                                    <h2 className="mb-4">

                                        Simple Ways to Start Cooking More at Home

                                    </h2>



                                    <ul className="list-unstyled">


                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className="text-success me-2"
                                            />

                                            Plan meals for the week.

                                        </li>



                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className="text-success me-2"
                                            />

                                            Keep basic pantry ingredients available.

                                        </li>



                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className="text-success me-2"
                                            />

                                            Cook larger batches and enjoy leftovers.

                                        </li>



                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className="text-success me-2"
                                            />

                                            Try one new recipe every week.

                                        </li>



                                        <li>

                                            <FontAwesomeIcon
                                                icon={faUtensils}
                                                className="text-success me-2"
                                            />

                                            Focus on simple meals made with fresh ingredients.

                                        </li>


                                    </ul>



                                </Card.Body>


                            </Card>


                        </Col>


                    </Row>







                    {/* FEATURED RECIPES */}



                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Card className="shadow-sm">


                                <Card.Body className="p-5">


                                    <h2 className="mb-4">


                                        <FontAwesomeIcon
                                            icon={faLeaf}
                                            className="text-success me-2"
                                        />


                                        Explore Our Homemade Vegetarian Recipes


                                    </h2>




                                    <ul className="list-unstyled">



                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faLeaf}
                                                className="text-success me-2"
                                            />

                                            <Link
                                                to="/aloogobi"
                                                className="recipe-link"
                                            >

                                                Aloo Gobi (Potato Cauliflower Curry)

                                            </Link>


                                        </li>





                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faLeaf}
                                                className="text-success me-2"
                                            />


                                            <Link
                                                to="/dalmakhani"
                                                className="recipe-link"
                                            >

                                                Authentic Dal Makhani

                                            </Link>


                                        </li>





                                        <li className="mb-3">

                                            <FontAwesomeIcon
                                                icon={faLeaf}
                                                className="text-success me-2"
                                            />


                                            <Link
                                                to="/blackeyedbeans"
                                                className="recipe-link"
                                            >

                                                Black Eyed Peas Curry

                                            </Link>


                                        </li>





                                        <li className="mb-3">


                                            <FontAwesomeIcon
                                                icon={faLeaf}
                                                className="text-success me-2"
                                            />



                                            <Link
                                                to="/quinoamoongdal"
                                                className="recipe-link"
                                            >

                                                Quinoa Moong Dal Khichdi

                                            </Link>


                                        </li>





                                        <li>


                                            <FontAwesomeIcon
                                                icon={faLeaf}
                                                className="text-success me-2"
                                            />



                                            <Link
                                                to="/spinachbesan"
                                                className="recipe-link"
                                            >

                                                Spinach Gram Flour Curry

                                            </Link>


                                        </li>



                                    </ul>



                                </Card.Body>


                            </Card>


                        </Col>


                    </Row>






                    {/* FINAL CTA */}



                    <Row className="justify-content-center mb-5">


                        <Col lg={10}>


                            <Card className="shadow border-success text-center">


                                <Card.Body className="p-5">


                                    <h2 className="mb-4">

                                        Start Your Home Cooking Journey Today

                                    </h2>



                                    <p className="lead">


                                        Every great cook started with one simple meal.
                                        Begin with easy recipes, enjoy the process,
                                        and discover the joy of creating food at home.


                                    </p>




                                    <Button

                                        as={Link}

                                        to="/recipes"

                                        variant="success"

                                        size="lg"

                                    >

                                        Browse Recipes


                                    </Button>



                                </Card.Body>


                            </Card>


                        </Col>


                    </Row>



                </Container>


            </>

        );

    }

}


export default CookingAtHome;
