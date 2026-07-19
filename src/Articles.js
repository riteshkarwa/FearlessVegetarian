import React from "react";
import { Link } from "react-router-dom";
import { articles } from "./ArticleData";
import { Card, Container, Row, Col } from "react-bootstrap";

const Articles = () => {
    return (
        <Container className="mt-4">
            <h1 className="mb-4">Articles</h1>
            <Row>
                {articles.map((article) => (
                    <Col md={6} lg={4} key={article.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <Link
                                    to={article.url}
                                    className="btn btn-primary"
                                >
                                    Read More
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Articles;