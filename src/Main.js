import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route, Routes} from "react-router-dom";
import Recipe from "./Recipe";
import Home from "./Home";
import Potato from "./Potato";


class Main extends Component {
  render(){
    return(
      <Container className="p-3">
        <div>
          <h1>Fearless Vegetarian</h1>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recipe" className="recipelink">Recipe</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/recipe" element={< Recipe />}></Route>
            <Route exact path="/potato" element={< Potato />}></Route>
          </Routes>
        </div>
      </Container>
    );
  }
}

export default Main;
