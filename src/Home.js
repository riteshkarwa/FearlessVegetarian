import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    return (
      <>
        <Helmet>

          <html lang="en" />

          <meta charSet="utf-8" />

          <title>
            Easy Vegetarian Recipes | Indian Recipes | Healthy Cooking | Fearless Vegetarian
          </title>

          <meta
            name="description"
            content="Discover delicious vegetarian recipes, authentic Indian cooking, healthy meal prep ideas, nutrition tips, and plant-based inspiration at Fearless Vegetarian."
          />

          <meta
            name="keywords"
            content="vegetarian recipes, indian vegetarian recipes, healthy recipes, plant based recipes, vegetarian meals, easy indian food, vegetarian cooking, Fearless Vegetarian"
          />

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/"
          />

          <meta
            property="og:title"
            content="Fearless Vegetarian | Easy Vegetarian Recipes & Healthy Living"
          />

          <meta
            property="og:description"
            content="Simple vegetarian recipes, healthy cooking, Indian food, meal prep ideas and plant-based living."
          />

          <meta
            property="og:image"
            content="https://fearlessvegetarian.netlify.app/spices.jpg"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/"
          />

          <meta property="og:type" content="website" />

          <meta
            name="twitter:card"
            content="summary_large_image"
          />

          <meta
            name="twitter:title"
            content="Fearless Vegetarian"
          />

          <meta
            name="twitter:description"
            content="Easy vegetarian recipes, healthy living and Indian cooking inspiration."
          />

          <meta
            name="twitter:image"
            content="https://fearlessvegetarian.netlify.app/spices.jpg"
          />

        </Helmet>

        <Container className="py-5">

          {/* ================= HERO ================= */}

          <Row className="justify-content-center">

            <Col lg={11}>

              <Card className="hero-card shadow-lg border-success mb-5">

                <Card.Body className="text-center p-5">

                  <h1 className="display-4 fw-bold mb-3">

                    Fearless Vegetarian

                  </h1>

                  <h2 className="h4 text-success mb-4">

                    Easy Vegetarian Recipes • Indian Cooking • Healthy Living

                  </h2>

                  <p className="lead">

                    Welcome to Fearless Vegetarian!

                    Discover delicious vegetarian recipes,
                    authentic Indian cuisine,
                    healthy meal prep ideas,
                    and practical tips for living a healthier,
                    plant-based lifestyle.

                  </p>

                  <p>

                    Whether you're a lifelong vegetarian or simply trying to eat
                    more meat-free meals, you'll find easy recipes,
                    step-by-step cooking instructions,
                    nutrition advice,
                    and inspiration to help you enjoy cooking at home.

                  </p>

                  <div className="mt-4">

                    <Button
                      as={Link}
                      to="/recipe"
                      variant="success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Browse Recipes
                    </Button>

                    <Button
                      as={Link}
                      to="/wheretobegin"
                      variant="outline-success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Where to Begin
                    </Button>

                    <Button
                      href="https://www.facebook.com/fearlessvegetarian"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="lg"
                      className="mb-2"
                    >
                      Join us on Facebook
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          </Row>

          {/* ================= WELCOME ================= */}

          <Row className="justify-content-center">

            <Col lg={10}>

              <section className="mb-5">

                <h2 className="mb-4">

                  Welcome to Fearless Vegetarian

                </h2>

                <p>

                  Growing up in a Hindu family, vegetarian food has always been
                  a natural part of my life. Over the years, I have learned that
                  healthy eating doesn't have to be boring or complicated.
                  Every recipe shared here has been prepared in my own kitchen,
                  tested with my family, and created to be simple enough for
                  anyone to make.

                </p>

                <p>

                  Fearless Vegetarian was created to inspire people to cook
                  more meals at home using fresh, wholesome ingredients.
                  Whether you're looking for comforting Indian curries,
                  healthy breakfasts,
                  quick dinners,
                  meal-prep ideas,
                  or delicious desserts,
                  you'll find recipes that are practical,
                  affordable,
                  and full of flavor.

                </p>

                <p>

                  If you're new to vegetarian cooking,
                  don't worry.
                  Start with one recipe at a time,
                  build confidence in the kitchen,
                  and enjoy discovering how satisfying homemade vegetarian food
                  can be.

                </p>

                <div className="mt-4">

                  <Button
                    as={Link}
                    to="/articles"
                    variant="outline-secondary"
                    className="me-3 mb-2"
                  >
                    Read Articles
                  </Button>

                  <Button
                    href="https://www.youtube.com/@FearlessVegetarian"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="danger"
                    className="mb-2"
                  >
                    Watch on YouTube
                  </Button>

                </div>

              </section>

            </Col>

          </Row>

          {/* ================= WHY VEGETARIAN ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={12}>

              <section>

                <h2 className="text-center mb-5">
                  Why Choose a Vegetarian Lifestyle?
                </h2>

                <Row className="g-4">

                  <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h3 className="text-success">
                          <FontAwesomeIcon
                            icon={faHeartPulse}
                            className="me-2"
                          />
                          Better Health
                        </h3>

                        <p>
                          A well-balanced vegetarian diet is naturally rich
                          in vegetables, fruits, legumes, whole grains,
                          nuts, and seeds. These foods provide fiber,
                          antioxidants, vitamins, and minerals while often
                          being lower in saturated fat and cholesterol.
                        </p>

                        <p>
                          Research suggests that plant-rich diets may help
                          support heart health, healthy weight management,
                          and overall well-being.
                        </p>

                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/11434797/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read the research →
                        </a>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h3 className="text-success">
                          <FontAwesomeIcon
                            icon={faLeaf}
                            className="me-2"
                          />
                          Reduce Inflammation
                        </h3>

                        <p>
                          Plant-based meals naturally include foods rich in
                          antioxidants and phytonutrients that may help
                          reduce inflammation throughout the body.
                        </p>

                        <p>
                          Many people also choose to reduce processed and
                          red meat consumption as part of an overall healthy
                          lifestyle.
                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm border-success">

                      <Card.Body>

                        <h3 className="text-success">
                          <FontAwesomeIcon
                            icon={faCarrot}
                            className="me-2"
                          />
                          Eat More Whole Foods
                        </h3>

                        <p>
                          Vegetarian cooking encourages eating more fresh
                          vegetables, legumes, lentils, beans, fruits,
                          and whole grains.
                        </p>

                        <p>
                          These nutrient-dense ingredients provide lasting
                          energy while creating colorful, satisfying meals.
                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>

          {/* ================= ENVIRONMENT ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={10}>

              <section>

                <Card className="shadow border-0">

                  <Card.Body className="p-5">

                    <h2 className="text-success mb-4">
                      <FontAwesomeIcon
                        icon={faEarthAmericas}
                        className="me-2"
                      />
                      Helping the Environment
                    </h2>

                    <p>

                      Every meal we prepare has an environmental footprint.
                      Choosing more plant-based meals can help reduce land
                      use, water consumption, and greenhouse gas emissions.

                    </p>

                    <p>

                      By incorporating more vegetarian meals into your week,
                      you're making a positive impact—not only on your own
                      health but also on the planet.

                    </p>

                    <p>

                      Small changes add up over time. Even replacing a few
                      meat-based meals each week with vegetarian dishes can
                      contribute to a more sustainable future.

                    </p>

                  </Card.Body>

                </Card>

              </section>

            </Col>

          </Row>

          {/* ================= MEAL PREP ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={12}>

              <section>

                <h2 className="text-center mb-5">
                  <FontAwesomeIcon
                    icon={faKitchenSet}
                    className="me-2 text-success"
                  />
                  Great for Meal Prep
                </h2>

                <Row className="g-4">

                  <Col md={4}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4 className="text-success">

                          Save Time

                        </h4>

                        <p>

                          Many vegetarian meals taste even better the next
                          day after the flavors have had time to develop.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={4}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4 className="text-success">

                          Save Money

                        </h4>

                        <p>

                          Cooking at home is usually far more affordable
                          than eating out and allows you to prepare several
                          meals at once.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                  <Col md={4}>

                    <Card className="h-100 shadow-sm">

                      <Card.Body>

                        <h4 className="text-success">

                          Full Control

                        </h4>

                        <p>

                          Control the ingredients, oil, salt,
                          spices, and portion sizes while creating meals
                          that match your family's preferences.

                        </p>

                      </Card.Body>

                    </Card>

                  </Col>

                </Row>

              </section>

            </Col>

          </Row>

          {/* ================= FEATURED RECIPES ================= */}

          <Row className="justify-content-center mb-5">

            <Col lg={12}>

              <section>

                <h2 className="text-center mb-5">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="me-2 text-success"
                  />
                  Featured Vegetarian Recipes
                </h2>

                <p className="text-center mb-5">
                  Explore some of our favorite vegetarian recipes featuring
                  comforting Indian classics, healthy meals, and easy
                  everyday dishes.
                </p>


                <Row className="g-4">


                  {/* Recipe 1 */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="/aloogobi.jpg"
                        alt="Aloo Gobi Recipe"
                      />

                      <Card.Body>

                        <Card.Title>
                          Aloo Gobi
                        </Card.Title>

                        <Card.Text>
                          A classic Indian dish made with potatoes,
                          cauliflower, and aromatic spices.
                        </Card.Text>

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



                  {/* Recipe 2 */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="/rajmah.jpg"
                        alt="Rajma Curry Recipe"
                      />

                      <Card.Body>

                        <Card.Title>
                          Rajma Curry
                        </Card.Title>

                        <Card.Text>
                          A flavorful kidney bean curry packed with
                          protein and traditional Indian spices.
                        </Card.Text>

                        <Button
                          as={Link}
                          to="/rajma"
                          variant="outline-success"
                        >
                          View Recipe
                        </Button>

                      </Card.Body>

                    </Card>

                  </Col>



                  {/* Recipe 3 */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="/khichdi.jpg"
                        alt="Vegetable Khichdi Recipe"
                      />

                      <Card.Body>

                        <Card.Title>
                          Vegetable Khichdi
                        </Card.Title>

                        <Card.Text>
                          A comforting one-pot meal made with rice,
                          lentils, vegetables, and spices.
                        </Card.Text>

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



                  {/* Recipe 4 */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="/hakkanoodle.jpg"
                        alt="Vegetable Hakka Noodles"
                      />

                      <Card.Body>

                        <Card.Title>
                          Hakka Noodles
                        </Card.Title>

                        <Card.Text>
                          Restaurant-style Indo-Chinese noodles
                          loaded with colorful vegetables.
                        </Card.Text>

                        <Button
                          as={Link}
                          to="/hakkanoodle"
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



          {/* ================= NUTRITION MYTHS ================= */}


          <Row className="justify-content-center mb-5">
            <Col lg={12}>
              <section>
                <h2 className="text-center mb-5">
                  <FontAwesomeIcon
                    icon={faAppleWhole}
                    className="me-2 text-success"
                  />
                  Common Vegetarian Nutrition Myths
                </h2>

                <p className="text-center mb-5">

                  Many people worry that a vegetarian diet may not provide
                  enough nutrients. A well-planned vegetarian diet can provide
                  plenty of protein, minerals, fiber, and essential nutrients.

                </p>


                <Row className="g-4">


                  {/* Protein */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/564x/6e/6f/57/6e6f579d3481177c7dce8ca2509dcbd9.jpg"
                        alt="Vegetarian protein sources"
                      />

                      <Card.Body>

                        <Card.Title>
                          🫘 "I won't get enough Protein"
                        </Card.Title>

                        <Card.Text>

                          Beans, lentils, tofu, paneer,
                          dairy products, nuts, seeds,
                          and legumes are excellent sources
                          of vegetarian protein.

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Col>



                  {/* Iron */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/564x/b9/b3/6d/b9b36d8db2236f2f780c137c1bc0a22e.jpg"
                        alt="Vegetarian iron sources"
                      />

                      <Card.Body>

                        <Card.Title>
                          🥬 "I won't get enough Iron"
                        </Card.Title>

                        <Card.Text>

                          Leafy greens, lentils, beans,
                          seeds, nuts, and fortified foods
                          can provide healthy sources of iron.

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Col>



                  {/* Calcium */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/564x/5c/c0/c1/5cc0c1be8d110aa24d87a68420f8de88.jpg"
                        alt="Vegetarian calcium sources"
                      />

                      <Card.Body>

                        <Card.Title>
                          🥛 "I won't get enough Calcium"
                        </Card.Title>

                        <Card.Text>

                          Dairy products, fortified foods,
                          tofu, almonds, and leafy greens
                          can support strong bones.

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Col>



                  {/* Fiber */}

                  <Col md={6} lg={3}>

                    <Card className="h-100 shadow-sm">

                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/564x/a6/c4/69/a6c46996b5b84484889493827ffd608a.jpg"
                        alt="Vegetarian fiber sources"
                      />

                      <Card.Body>

                        <Card.Title>
                          🌾 "I won't get enough Fiber"
                        </Card.Title>

                        <Card.Text>

                          Vegetables, fruits, whole grains,
                          beans, and legumes provide abundant
                          dietary fiber.

                        </Card.Text>

                      </Card.Body>

                    </Card>

                  </Col>


                </Row>


              </section>

            </Col>

          </Row>

          {/* ================= FINAL CTA ================= */}

          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Card className="shadow border-success text-center">
                <Card.Body className="p-5">
                  <h2 className="mb-4">
                    <FontAwesomeIcon
                      icon={faSeedling}
                      className="me-2 text-success"
                    />
                    Ready to Start Your Vegetarian Journey?
                  </h2>

                  <p className="lead">

                    Whether you are completely new to vegetarian cooking
                    or looking for fresh recipe ideas, Fearless Vegetarian
                    is here to help you create delicious, healthy meals
                    at home.

                  </p>

                  <p>

                    Explore recipes, learn cooking techniques, watch
                    step-by-step videos, and become more confident in
                    your kitchen.

                  </p>


                  <div className="mt-4">


                    <Button
                      as={Link}
                      to="/recipes"
                      variant="success"
                      size="lg"
                      className="me-3 mb-2"
                    >
                      Explore Recipes
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
                      className="me-3 mb-2"
                    >
                      Watch Videos
                    </Button>


                    <Button
                      as={Link}
                      to="/donate"
                      variant="warning"
                      size="lg"
                      className="mb-2"
                    >
                      Support Us
                    </Button>


                  </div>


                </Card.Body>

              </Card>

            </Col>

          </Row>



          {/* ================= COMMUNITY MESSAGE ================= */}


          <Row className="justify-content-center">


            <Col lg={10}>


              <section className="text-center mb-5">


                <h2>
                  Join the Fearless Vegetarian Community ❤️
                </h2>


                <p>

                  Have a recipe suggestion, cooking question,
                  or vegetarian tip to share?

                  We would love to hear from you.

                </p>


                <Button
                  href="https://www.facebook.com/fearlessvegetarian"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Connect on Facebook
                </Button>


              </section>


            </Col>


          </Row>



        </Container>

      </>

    );

  }

}


export default Home;