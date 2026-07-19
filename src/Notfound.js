import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Notfound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404 - Page Not Found | Fearless Vegetarian</title>
          <meta
            name="description"
            content="Sorry, the page you're looking for could not be found."
          />
        </Helmet>

        <Container className="py-5">

          <Row className="justify-content-center">

            <Col lg={8} className="text-center">

              <Image
                src="/nature.jpg"
                fluid
                rounded
                className="shadow mb-4"
                alt="Nature scenery"
              />

              <h1 className="display-4 mb-3">
                404 - Page Not Found
              </h1>

              <p className="lead">
                Oops! It looks like you've taken a wrong turn on the digital
                trail.
              </p>

              <p>
                Even the best explorers get lost sometimes. While you're here,
                take a moment to enjoy the beautiful scenery. The page you're
                looking for may have been moved, renamed, or the web address
                may contain a typo.
              </p>

              <p>
                Please check the URL or continue exploring Fearless Vegetarian
                for delicious recipes, cooking videos, and healthy lifestyle
                inspiration.
              </p>

              <div className="mt-4">

                <Button
                  as={Link}
                  to="/"
                  variant="success"
                  size="lg"
                  className="me-3"
                >
                  Go to Home
                </Button>

                <Button
                  as={Link}
                  to="/recipes"
                  variant="outline-success"
                  size="lg"
                >
                  Browse Recipes
                </Button>

              </div>

            </Col>

          </Row>

        </Container>
      </>
    );
  }
}

export default Notfound;