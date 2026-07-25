import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLeaf,
  faCircleCheck,
  faStore,
  faPepperHot,
  faUtensils,
  faTriangleExclamation,
  faPersonWalking,
  faListCheck,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

class Wheretobegin extends Component {
  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />

          <title>
            Where to Begin Your Vegetarian Journey | Fearless Vegetarian
          </title>

          <meta
            name="description"
            content="Thinking about becoming vegetarian? Learn how to start your vegetarian journey with beginner-friendly tips, Indian cooking advice, grocery shopping guidance, and practical steps for long-term success."
          />

          <meta
            name="keywords"
            content="begin vegetarian, vegetarian beginner guide, vegetarian lifestyle, Indian vegetarian cooking, vegetarian tips, plant based beginner, Fearless Vegetarian"
          />

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/wheretobegin"
          />

          {/* Open Graph */}

          <meta
            property="og:title"
            content="Where to Begin Your Vegetarian Journey"
          />

          <meta
            property="og:description"
            content="A practical guide to becoming vegetarian with beginner tips, cooking advice, and easy steps to get started."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/veg.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/wheretobegin"
          />

          <meta property="og:type" content="article" />

          {/* Twitter */}

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Where to Begin Your Vegetarian Journey"
          />

          <meta
            name="twitter:description"
            content="Begin your vegetarian lifestyle with confidence using this practical guide from Fearless Vegetarian."
          />

          <meta
            name="twitter:image"
            content="https://fearlessvegetarian.netlify.app/veg.jpg"
          />
        </Helmet>

        <Container className="py-5">

          {/* ================= HERO ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <Card className="shadow border-success">

                <Card.Body className="p-5 text-center">

                  <FontAwesomeIcon
                    icon={faSeedling}
                    size="3x"
                    className="text-success mb-3"
                  />

                  <h1 className="display-5 mb-4">
                    Where to Begin Your Vegetarian Journey
                  </h1>

                  <p className="lead">

                    Becoming vegetarian doesn't have to be overwhelming.
                    Whether you're making the change for your health,
                    the environment, or personal values,
                    Fearless Vegetarian is here to help you every step
                    of the way.

                  </p>

                  <p>

                    This guide shares practical advice,
                    cooking tips,
                    shopping recommendations,
                    and beginner-friendly ideas to help you
                    confidently prepare delicious vegetarian meals
                    at home.

                  </p>

                  <div className="mt-4">

                    <Button
                      as={Link}
                      to="/recipes"
                      variant="success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Browse Recipes
                    </Button>

                    <Button
                      href="https://www.youtube.com/@FearlessVegetarian"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="danger"
                      size="lg"
                      className="mb-2"
                    >
                      Watch Videos
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          </Row>

          {/* ================= TYPES OF VEGETARIANS ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <section>

                <h2 className="mb-4">

                  <FontAwesomeIcon
                    icon={faLeaf}
                    className="me-2 text-success"
                  />

                  Types of Vegetarians

                </h2>

                <Image
                  src="/veg.jpg"
                  alt="Types of Vegetarian Diets"
                  fluid
                  rounded
                  thumbnail
                  className="mb-4"
                />

                <p>
                  There are several types of vegetarian diets, each with different food choices.
                  Fearless Vegetarian primarily focuses on the lacto-vegetarian lifestyle, which
                  includes dairy products while excluding meat, poultry, seafood, and eggs.
                  However, almost every vegetarian meal can be adapted into a vegan version by
                  replacing dairy and other animal-based ingredients with plant-based alternatives.
                </p>

                <p>
                  For example, dairy milk can be replaced with almond, oat, soy, or coconut milk.
                  Paneer can be substituted with tofu, yogurt can be replaced with coconut or
                  soy-based yogurt, and butter can be replaced with plant-based oils or vegan
                  butter alternatives. Traditional dishes such as curries, dals, desserts, and
                  snacks can all be recreated using vegan ingredients without sacrificing flavor.
                </p>

                <p>
                  Whether you choose to follow a lacto-vegetarian or vegan lifestyle, the goal
                  is to enjoy wholesome, flavorful meals while making choices that align with
                  your personal health, environmental, and ethical values.
                </p>

                <Row className="g-4 mt-3">

                  <Col md={6}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h4>Lacto Vegetarian</h4>

                        <p>

                          Eats vegetables,
                          fruits,
                          grains,
                          legumes,
                          nuts,
                          seeds,
                          and dairy products.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h4>Lacto-Ovo Vegetarian</h4>

                        <p>

                          Includes everything in a
                          lacto-vegetarian diet,
                          plus eggs.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h4>Vegan</h4>

                        <p>

                          Excludes all animal products,
                          including dairy,
                          eggs,
                          and honey.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h4>Flexitarian</h4>

                        <p>

                          Primarily vegetarian,
                          but occasionally consumes meat
                          or seafood.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>

          {/* ================= GETTING STARTED ================= */}

          <Row className="justify-content-center">

            <Col lg={10}>

              <Card className="shadow-sm border-success">

                <Card.Body className="p-5">

                  <h2 className="mb-4">

                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="me-2 text-success"
                    />

                    Getting Started

                  </h2>

                  <p>

                    If you're new to vegetarian cooking,
                    Indian cuisine is one of the best places to begin.
                    It offers hundreds of naturally vegetarian dishes
                    packed with flavor, protein,
                    and wholesome ingredients.

                  </p>

                  <p>

                    At first,
                    unfamiliar spices and ingredients may seem
                    intimidating.
                    Don't let that discourage you.
                    Every experienced cook started exactly where
                    you are today.

                  </p>

                  <p>

                    Throughout Fearless Vegetarian,
                    I'll show you how to build confidence in the kitchen,
                    understand Indian ingredients,
                    and prepare delicious meals your whole family
                    will enjoy.

                  </p>

                </Card.Body>

              </Card>

            </Col>

          </Row>

          {/* ================= INDIAN GROCERY STORE ================= */}

          <Row className="justify-content-center mt-5 mb-5">

            <Col lg={10}>

              <Card className="shadow border-success">

                <Card.Body className="p-5">

                  <h2 className="mb-4">
                    <FontAwesomeIcon
                      icon={faStore}
                      className="me-2 text-success"
                    />
                    Visit an Indian Grocery Store
                  </h2>

                  <p>

                    One of the biggest challenges for beginners is finding the
                    right ingredients. While many supermarkets carry basic
                    Indian ingredients, you'll discover a much wider variety
                    and better prices at your local Indian grocery store.

                  </p>

                  <p>

                    These stores stock nearly everything you'll need,
                    including spices, lentils, rice, flours, frozen vegetables,
                    paneer, snacks, pickles, and ready-to-cook products that
                    make learning Indian cooking much easier.

                  </p>

                  <p>

                    Don't be intimidated if you've never visited one before.
                    Store employees are usually very helpful, and you'll quickly
                    become familiar with the ingredients after making a few
                    recipes.

                  </p>

                </Card.Body>

              </Card>

            </Col>

          </Row>



          {/* ================= SPICES ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <Card className="shadow border-success">

                <Card.Body className="p-5">

                  <h2 className="mb-4">

                    <FontAwesomeIcon
                      icon={faPepperHot}
                      className="me-2 text-danger"
                    />

                    Learn Your Spices

                  </h2>

                  <p>

                    Indian food is famous for its incredible flavors,
                    but those flavors come from using spices correctly,
                    not from making food extremely spicy.

                  </p>

                  <p>

                    As a beginner,
                    focus on learning a handful of commonly used spices before
                    buying everything at once.

                  </p>

                  <Row className="g-4 mt-3">

                    <Col md={6}>

                      <Card className="h-100 border-success">

                        <Card.Body>

                          <h4>Turmeric</h4>

                          <p>

                            Adds beautiful color and earthy flavor.
                            A little goes a long way, so use it sparingly.

                          </p>

                        </Card.Body>

                      </Card>

                    </Col>

                    <Col md={6}>

                      <Card className="h-100 border-success">

                        <Card.Body>

                          <h4>Red Chili Powder</h4>

                          <p>

                            Controls heat.
                            Start with small amounts until you discover your
                            preferred spice level.

                          </p>

                        </Card.Body>

                      </Card>

                    </Col>

                    <Col md={6}>

                      <Card className="h-100 border-success">

                        <Card.Body>

                          <h4>Cumin</h4>

                          <p>

                            Adds warmth and depth to curries,
                            lentils, rice dishes, and vegetables.

                          </p>

                        </Card.Body>

                      </Card>

                    </Col>

                    <Col md={6}>

                      <Card className="h-100 border-success">

                        <Card.Body>

                          <h4>Coriander Powder</h4>

                          <p>

                            Provides mild citrus notes and balances many
                            traditional Indian dishes.

                          </p>

                        </Card.Body>

                      </Card>

                    </Col>

                  </Row>

                </Card.Body>

              </Card>

            </Col>

          </Row>



          {/* ================= BEGINNER COOKING TIPS ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <section>

                <h2 className="mb-4">

                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="me-2 text-success"
                  />

                  Beginner Cooking Tips

                </h2>

                <Row className="g-4">

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4>Start Simple</h4>

                        <p>

                          Begin with recipes that use fewer ingredients before
                          attempting more advanced dishes.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4>Measure Your Spices</h4>

                        <p>

                          Avoid guessing.
                          Measuring spices helps create consistent,
                          delicious results every time.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4>Cook Often</h4>

                        <p>

                          The more you cook,
                          the faster you'll become comfortable with Indian
                          flavors and techniques.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4>Watch Recipe Videos</h4>

                        <p>

                          Watching someone prepare a recipe often makes it
                          easier to understand than simply reading the steps.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>



          {/* ================= COMMON MISTAKES ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <Card className="shadow border-warning">

                <Card.Body className="p-5">

                  <h2 className="mb-4">

                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="me-2 text-warning"
                    />

                    Common Beginner Mistakes

                  </h2>

                  <ul className="list-unstyled">

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-warning me-2"
                      />
                      Adding too much turmeric or chili powder.
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-warning me-2"
                      />
                      Cooking on very high heat all the time.
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-warning me-2"
                      />
                      Giving up after one unsuccessful recipe.
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-warning me-2"
                      />
                      Buying too many spices before learning how to use them.
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-warning me-2"
                      />
                      Comparing homemade food to restaurant food on your first attempt.
                    </li>

                  </ul>

                  <p className="mt-3">

                    Every cook makes mistakes.
                    Learning from them is part of becoming confident in the
                    kitchen. Each recipe you prepare builds experience and
                    improves your skills.

                  </p>

                </Card.Body>

              </Card>

            </Col>

          </Row>

          {/* ================= BABY STEPS ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <Card className="shadow border-success">

                <Card.Body className="p-5">

                  <h2 className="mb-4">

                    <FontAwesomeIcon
                      icon={faPersonWalking}
                      className="me-2 text-success"
                    />

                    Take Baby Steps

                  </h2>

                  <p>

                    One of the biggest reasons people struggle with becoming
                    vegetarian is trying to change everything overnight.
                    A gradual transition is often easier and more sustainable.

                  </p>

                  <p>

                    If meat has always been the centerpiece of your meals,
                    start by replacing just one or two meals each week with
                    delicious vegetarian recipes.

                  </p>

                  <p>

                    Many people enjoy starting with
                    <strong> "Meatless Mondays"</strong>,
                    then gradually increasing the number of vegetarian meals
                    until it becomes second nature.

                  </p>

                  <p>

                    If you're ready to fully commit,
                    consider trying a vegetarian lifestyle for three months.
                    That gives you enough time to explore new recipes,
                    build confidence,
                    and establish healthier cooking habits.

                  </p>

                </Card.Body>

              </Card>

            </Col>

          </Row>



          {/* ================= BEGINNER CHECKLIST ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <section>

                <h2 className="mb-4">

                  <FontAwesomeIcon
                    icon={faListCheck}
                    className="me-2 text-success"
                  />

                  Beginner Checklist

                </h2>

                <Row className="g-4">

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <p>✅ Find a nearby Indian grocery store.</p>

                        <p>✅ Buy a few essential spices.</p>

                        <p>✅ Learn one recipe at a time.</p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <p>✅ Cook at home regularly.</p>

                        <p>✅ Watch cooking videos when needed.</p>

                        <p>✅ Don't be afraid to make mistakes.</p>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>



          {/* ================= RECOMMENDED RECIPES ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <section>

                <h2 className="mb-4">

                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="me-2 text-success"
                  />

                  Recommended Beginner Recipes

                </h2>

                <p>

                  Start with simple recipes that don't require many ingredients.
                  These beginner-friendly dishes will help you become more
                  comfortable with vegetarian cooking.

                </p>

                <Row className="g-4 mt-2">

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h5>Poha</h5>

                        <p>
                          A quick and healthy Indian breakfast that's perfect
                          for beginners.
                        </p>

                        <Button
                          as={Link}
                          to="/poha"
                          variant="outline-success"
                        >
                          View Recipe
                        </Button>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h5>Aloo Gobi</h5>

                        <p>

                          A classic potato and cauliflower curry with
                          simple ingredients.

                        </p>

                        <Button
                          as={Link}
                          to="/aloogobi"
                          variant="outline-success"
                        >
                          View Recipe
                        </Button>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h5>Khichdi</h5>

                        <p>

                          A comforting one-pot meal made with rice,
                          lentils, and vegetables.

                        </p>

                        <Button
                          as={Link}
                          to="/khichdi"
                          variant="outline-success"
                        >
                          View Recipe
                        </Button>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h5>Curd Rice</h5>

                        <p>

                          A refreshing and easy South Indian dish that
                          requires very little cooking.

                        </p>

                        <Button
                          as={Link}
                          to="/curdrice"
                          variant="outline-success"
                        >
                          View Recipe
                        </Button>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>



          {/* ================= FINAL ENCOURAGEMENT ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <Card className="shadow border-success">

                <Card.Body className="text-center p-5">

                  <h2 className="mb-4">

                    Keep Going — You've Got This!

                  </h2>

                  <p className="lead">

                    Nobody becomes a great cook overnight.
                    Every recipe you make teaches you something new.

                  </p>

                  <p>

                    Don't worry if your first few meals aren't perfect.
                    Every experienced cook has burned food,
                    added too much spice,
                    or forgotten an ingredient.

                  </p>

                  <p>

                    The important thing is to keep cooking,
                    keep learning,
                    and most importantly,
                    enjoy the journey.

                  </p>

                  <div className="mt-4">

                    <Button
                      as={Link}
                      to="/recipes"
                      variant="success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Browse Recipes
                    </Button>

                    <Button
                      as={Link}
                      to="/articles"
                      variant="outline-success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Read Articles
                    </Button>

                    <Button
                      href="https://www.youtube.com/@FearlessVegetarian"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="danger"
                      size="lg"
                    >
                      Watch on YouTube
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          </Row>



          {/* ================= RELATED ARTICLES ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <h2 className="mb-4">

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-success"
                />

                Continue Reading

              </h2>

              <Card className="shadow-sm">

                <Card.Body>

                  <ul className=" list-unstyled mb-0">

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="text-success me-2"
                      />
                      <Link to="/articles/cookingathome" className="text-decoration-none text-dark">
                        The Benefits of Cooking at Home
                      </Link>
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="text-success me-2"
                      />
                      <Link to="/articles/ayurvedicfasting" className="text-decoration-none text-dark">
                        Understanding Ayurvedic Fasting
                      </Link>
                    </li>

                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="text-success me-2"
                      />
                      <Link to="/articles/erayba" className="text-decoration-none text-dark">
                        About Erayba Professional Hair Care
                      </Link>
                    </li>

                  </ul>

                </Card.Body>

              </Card>

            </Col>

          </Row>

        </Container>

      </>
    );
  }
}

export default Wheretobegin;