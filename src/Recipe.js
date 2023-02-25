import React from "react";
import Container from 'react-bootstrap/Container';
import { Food } from "./Food";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';


export default function Search(){

      const [query, setQuery] = useState("");    
      return (
        <Container className="p-3">
            <input type="text" placeholder="Search By Recipe Title" className="search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            <div className="search_container">
                {Food.filter((f) =>f.card_title.toLowerCase().includes(query)
                ).map((fd) => (
                    <div>
                        
                        <Card className= "card_search"style={{ width: '23.5rem' , margin:'20px'}}>
                            <Card.Img variant="top" src={fd.card_img} />
                            <Card.Body>
                                <Card.Title>{fd.card_title}</Card.Title>
                                <Card.Text>
                                {fd.card_text}
                                </Card.Text>
                                <Button variant="primary" href={fd.card_href}>Anytime Potato Recipe</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                }
            </div>
        </Container>
      );

}
