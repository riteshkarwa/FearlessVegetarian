import React from "react";
import Container from 'react-bootstrap/Container';
import { Food } from "./Food";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MediaQuery from 'react-responsive'
import { Helmet } from "react-helmet";


export default function Search() {

    const [query, setQuery] = useState("");
    return (
        <Container fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Delicious Vegetarian Recipes: Flavorful Dishes for Every Occasion</title>
                <link rel="canonical" href="https://fearlessvegetarian.netlify.app/besan" />
                <meta
                    name="description"
                    content="Discover a variety of delicious vegetarian recipes for every occasion. Indulge in flavorful dishes that cater to your taste buds."
                />
                <meta
                    name="keywords"
                    content="Delicious vegetarian recipes, flavorful dishes, vegetarian cuisine, plant-based cooking, healthy meals, easy vegetarian recipes, meatless options, culinary experience, indulgent veggie dishes"
                />
                <meta property="og:title" content="Delicious Vegetarian Recipes: Flavorful Dishes for Every Occasion" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fearlessvegetarian.netlify.app/recipe" />
                <meta property="og:image" content="https://fearlessvegetarian.netlify.app/spices.jpg" />
                <meta property="og:description" content="Discover a variety of delicious vegetarian recipes for every occasion. Indulge in flavorful dishes that cater to your taste buds." />
            </Helmet>
            <input type="text" placeholder="Search By Recipe Title" className="search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <div className="search_container">
                {Food.filter((f) => f.card_title.toLowerCase().includes(query)
                ).map((fd) => (
                    <div>
                        <MediaQuery maxWidth={767}>

                            <Card className="card_search" style={{ width: '19rem', margin: '10px' }}>
                                <Card.Img variant="top" src={fd.card_img} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '40px'}}>{fd.card_title}</Card.Title>
                                    <Card.Text style={{ fontSize: '25px'}}>
                                        {fd.card_text}
                                    </Card.Text>
                                    <Button variant="primary" href={fd.card_href}>{fd.button_title}</Button>
                                </Card.Body>
                            </Card>
                        </MediaQuery>
                        <MediaQuery minWidth={767}>

                            <Card className="card_search" style={{ width: '23.5rem', margin: '20px' }}>
                                <Card.Img variant="top" src={fd.card_img} />
                                <Card.Body>
                                    <Card.Title  style={{ fontSize: '40px'}}>{fd.card_title}</Card.Title>
                                    <Card.Text  style={{ fontSize: '25px'}}>
                                        {fd.card_text}
                                    </Card.Text>
                                    <Button variant="primary" href={fd.card_href}>{fd.button_title}</Button>
                                </Card.Body>
                            </Card>
                        </MediaQuery>
                    </div>
                ))
                }
            </div>
        </Container>
    );

}
