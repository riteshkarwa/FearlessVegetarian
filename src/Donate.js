import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

class Donate extends Component {
  render() {
    return (
      <Container className="py-5">

        <Helmet>
          <title>Support Fearless Vegetarian | Donate</title>

          <meta
            name="description"
            content="Support Fearless Vegetarian and help us continue creating vegetarian recipes, cooking videos, and healthy lifestyle content."
          />

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/donate"
          />
        </Helmet>

        {/* Hero */}

        <Card className="shadow border border-success text-center mb-5">

          <Card.Body className="p-5">

            <h1 className="display-4 mb-3">
              ❤️ Support Fearless Vegetarian
            </h1>

            <p className="lead">
              Help us continue creating delicious vegetarian recipes,
              cooking videos, and healthy lifestyle content for everyone.
            </p>

            <Button
              variant="success"
              size="lg"
              href="https://paypal.me/riteshkarwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via PayPal
            </Button>

          </Card.Body>

        </Card>

        {/* About */}

        <Row className="mb-5">

          <Col>

            <h2>Why Your Support Matters</h2>

            <p>
              Fearless Vegetarian is dedicated to inspiring healthy living
              through easy-to-follow vegetarian recipes, cooking tutorials,
              and nutrition tips.
            </p>

            <p>
              Every recipe is carefully tested, photographed, written,
              and shared to help our community enjoy flavorful,
              home-cooked meals.
            </p>

          </Col>

        </Row>

        {/* Cards */}

        <Row className="g-4 mb-5">

          <Col md={6} lg={3}>

            <Card className="h-100 shadow-sm text-center">

              <Card.Body>

                <h1>🥗</h1>

                <Card.Title>
                  New Recipes
                </Card.Title>

                <Card.Text>
                  Help us create more delicious vegetarian
                  and vegan recipes.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          <Col md={6} lg={3}>

            <Card className="h-100 shadow-sm text-center">

              <Card.Body>

                <h1>🎥</h1>

                <Card.Title>
                  Cooking Videos
                </Card.Title>

                <Card.Text>
                  Support the production of high-quality
                  cooking tutorials.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          <Col md={6} lg={3}>

            <Card className="h-100 shadow-sm text-center">

              <Card.Body>

                <h1>🌎</h1>

                <Card.Title>
                  Website
                </Card.Title>

                <Card.Text>
                  Help keep Fearless Vegetarian free,
                  fast, and accessible to everyone.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          <Col md={6} lg={3}>

            <Card className="h-100 shadow-sm text-center">

              <Card.Body>

                <h1>❤️</h1>

                <Card.Title>
                  Community
                </Card.Title>

                <Card.Text>
                  Your generosity helps us grow and
                  reach more home cooks.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

        </Row>

        {/* Donation Section */}

        <Card
          bg="success"
          text="white"
          className="shadow border-0 mb-5"
        >

          <Card.Body className="p-5 text-center">

            <h2>Every Contribution Makes a Difference</h2>

            <p className="mb-4">
              Whether it's $5 or $50, every donation helps us
              create more recipes, produce videos, improve our
              website, and continue providing free content for
              everyone.
            </p>

            <Button
              variant="light"
              size="lg"
              href="https://paypal.me/riteshkarwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              ❤️ Donate Today
            </Button>

          </Card.Body>

        </Card>

        {/* Facebook */}

        <Card className="shadow-sm mb-5">

          <Card.Body>

            <h2>Stay Connected</h2>

            <p>
              Have recipe ideas or questions? We'd love to hear
              from you.
            </p>

            <Button
              variant="primary"
              href="https://www.facebook.com/fearlessvegetarian"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Facebook Page
            </Button>

          </Card.Body>

        </Card>

        {/* Thank You */}

        <Card className="border-success">

          <Card.Body className="text-center p-5">

            <h2>🙏 Thank You!</h2>

            <p className="lead">
              Your support allows Fearless Vegetarian to continue
              sharing healthy, flavorful, and easy-to-follow
              vegetarian recipes with people around the world.
            </p>

            <p>
              We truly appreciate your generosity and being part
              of our growing community.
            </p>

          </Card.Body>

        </Card>

      </Container>
    );
  }
}

export default Donate;